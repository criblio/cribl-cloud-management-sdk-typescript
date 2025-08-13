import { stringToBase64 } from "../lib/base64.js";
import { SDKOptions } from "../lib/config.js";
import { env } from "../lib/env.js";
import { HTTPClient } from "../lib/http.js";
import { parse } from "../lib/schemas.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import {
  AfterErrorContext,
  AfterErrorHook,
  BeforeRequestContext,
  BeforeRequestHook,
  HookContext,
  SDKInitHook,
} from "./types.js";

declare const process: {
  env: Record<string, string | undefined>;
} | undefined;


declare const Deno: {
  env: {
    get(key: string): string | undefined;
  };
} | undefined;

type Credentials = {
  clientID: string;
  clientSecret: string;
  tokenURL: string | undefined;
  audience: string | undefined;
};

type Session = {
  credentials: Credentials;
  token: string;
  expiresAt?: number;
  scopes: string[];
};

function getAudience(fallback: string): string {
    if(typeof Deno !== "undefined" && typeof Deno.env !== "undefined") {
    return Deno.env.get("CRIBLMGMTPLANE_AUDIENCE") ?? fallback;
  }

  if(typeof process !== "undefined" && process.env) {
    return process.env["CRIBLMGMTPLANE_AUDIENCE"] ?? fallback;
  }
  return fallback;
}

export class ClientCredentialsHook
  implements SDKInitHook, BeforeRequestHook, AfterErrorHook
{
  private client?: HTTPClient;
  private sessions: Record<string, Session> = {};

  sdkInit(opts: SDKOptions): SDKOptions {
    this.client = opts.httpClient || new HTTPClient();

    return opts;
  }

  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request,
  ): Promise<Request> {
    if (!hookCtx.oAuth2Scopes) {
      // OAuth2 not in use
      return request;
    }

    const credentials = await this.getCredentials(hookCtx);
    if (!credentials || Object.values(credentials).some(v => v === "")) {
      return request;
    }

    const sessionKey = this.getSessionKey(credentials);

    let session = this.sessions[sessionKey];
    if (
      !session
      || !this.hasRequiredScopes(session.scopes, hookCtx.oAuth2Scopes)
      || this.hasTokenExpired(session.expiresAt)
    ) {
      session = await this.doTokenRequest(
        hookCtx,
        credentials,
        this.getScopes(hookCtx.oAuth2Scopes, session),
      );

      this.sessions[sessionKey] = session;
    }

    request.headers.set("Authorization", `Bearer ${session.token}`);

    return request;
  }

  async afterError(
    hookCtx: AfterErrorContext,
    response: Response | null,
    error: unknown,
  ): Promise<{ response: Response | null; error: unknown }> {
    if (!hookCtx.oAuth2Scopes) {
      // OAuth2 not in use
      return { response, error };
    }

    if (error) {
      return { response, error };
    }

    const credentials = await this.getCredentials(hookCtx);
    if (!credentials || Object.values(credentials).some(v => v === "")) {
      return { response, error };
    }

    if (response && response?.status === 401) {
      const sessionKey = this.getSessionKey(credentials);
      delete this.sessions[sessionKey];
    }

    return { response, error };
  }

  private async doTokenRequest(
    hookCtx: HookContext,
    credentials: Credentials,
    scopes: string[],
  ): Promise<Session> {
    const formData = new URLSearchParams();
    formData.append("grant_type", "client_credentials");

    const headers: Record<string, string> = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    formData.append("client_id", credentials.clientID);
    formData.append("client_secret", credentials.clientSecret);

    if (credentials.audience) {
      formData.append("audience", credentials.audience);
    }

    if (scopes.length > 0) {
      formData.append("scope", scopes.join(" "));
    }

    if (!hookCtx.baseURL?.toString()) {
      throw new Error("Assertion error: Base URL cannot be empty");
    }
    const tokenURL = new URL(credentials.tokenURL ?? "", hookCtx.baseURL);

    const request = new Request(tokenURL, {
      method: "POST",
      headers,
      body: formData,
    });

    const res = await this.client?.request(request);
    if (!res) {
      throw new Error("Failed to fetch token");
    }

    if (res.status < 200 || res.status >= 300) {
      throw new Error("Unexpected status code");
    }

    const data = await res.json();
    if (!data || typeof data !== "object") {
      throw new Error("Unexpected response format");
    }

    if (data.token_type !== "Bearer") {
      throw new Error("Unexpected token type");
    }

    let expiresAt: number | undefined;
    if (data.expires_in) {
      expiresAt = Date.now() + data.expires_in * 1000;
    }

    const sess: Session = {
      credentials,
      token: data.access_token,
      scopes,
    };

    if (expiresAt !== undefined) {
      sess.expiresAt = expiresAt;
    }

    return sess;
  }
  private async getCredentials(
    hookCtx: HookContext,
  ): Promise<Credentials | null> {
    const source = hookCtx.securitySource;

    if (!source) {
      return null;
    }

    let security = source;
    if (typeof source === "function") {
      security = await source();
    }

    switch (hookCtx.operationID) {
      case "v1.workspaces.createWorkspace":
        return this.getCredentialsV1WorkspacesCreateWorkspace(security);
      case "v1.workspaces.listWorkspaces":
        return this.getCredentialsV1WorkspacesListWorkspaces(security);
      case "v1.workspaces.updateWorkspace":
        return this.getCredentialsV1WorkspacesUpdateWorkspace(security);
      case "v1.workspaces.deleteWorkspace":
        return this.getCredentialsV1WorkspacesDeleteWorkspace(security);
      case "v1.workspaces.getWorkspace":
        return this.getCredentialsV1WorkspacesGetWorkspace(security);
      default:
        return this.getCredentialsGlobal(security);
    }
  }

  private async getCredentialsGlobal(
    security: unknown,
  ): Promise<Credentials | null> {
    const out = parse(
      security,
      (val) => models.Security$outboundSchema.parse(val),
      "unexpected security type",
    );

    return {
      clientID: out?.clientID ?? env().CRIBLMGMTPLANE_CLIENT_ID ?? "",
      clientSecret: out?.clientSecret ?? env().CRIBLMGMTPLANE_CLIENT_SECRET
        ?? "",
      tokenURL: out?.tokenURL ?? env().CRIBLMGMTPLANE_TOKEN_URL ?? "",
      audience: getAudience("https://publicapi.cribl.cloud"),
    };
  }

  private async getCredentialsV1WorkspacesCreateWorkspace(
    security: unknown,
  ): Promise<Credentials | null> {
    const out = parse(
      security,
      (val) =>
        operations.V1WorkspacesCreateWorkspaceSecurity$outboundSchema.parse(
          val,
        ),
      "unexpected security type",
    );

    return {
      clientID: out?.oauth2?.clientID ?? env().CRIBLMGMTPLANE_CLIENT_ID ?? "",
      clientSecret: out?.oauth2?.clientSecret
        ?? env().CRIBLMGMTPLANE_CLIENT_SECRET ?? "",
      tokenURL: out?.oauth2?.tokenURL ?? env().CRIBLMGMTPLANE_TOKEN_URL ?? "",
    };
  }

  private async getCredentialsV1WorkspacesListWorkspaces(
    security: unknown,
  ): Promise<Credentials | null> {
    const out = parse(
      security,
      (val) =>
        operations.V1WorkspacesListWorkspacesSecurity$outboundSchema.parse(val),
      "unexpected security type",
    );

    return {
      clientID: out?.oauth2?.clientID ?? env().CRIBLMGMTPLANE_CLIENT_ID ?? "",
      clientSecret: out?.oauth2?.clientSecret
        ?? env().CRIBLMGMTPLANE_CLIENT_SECRET ?? "",
      tokenURL: out?.oauth2?.tokenURL ?? env().CRIBLMGMTPLANE_TOKEN_URL ?? "",
    };
  }

  private async getCredentialsV1WorkspacesUpdateWorkspace(
    security: unknown,
  ): Promise<Credentials | null> {
    const out = parse(
      security,
      (val) =>
        operations.V1WorkspacesUpdateWorkspaceSecurity$outboundSchema.parse(
          val,
        ),
      "unexpected security type",
    );

    return {
      clientID: out?.oauth2?.clientID ?? env().CRIBLMGMTPLANE_CLIENT_ID ?? "",
      clientSecret: out?.oauth2?.clientSecret
        ?? env().CRIBLMGMTPLANE_CLIENT_SECRET ?? "",
      tokenURL: out?.oauth2?.tokenURL ?? env().CRIBLMGMTPLANE_TOKEN_URL ?? "",
    };
  }

  private async getCredentialsV1WorkspacesDeleteWorkspace(
    security: unknown,
  ): Promise<Credentials | null> {
    const out = parse(
      security,
      (val) =>
        operations.V1WorkspacesDeleteWorkspaceSecurity$outboundSchema.parse(
          val,
        ),
      "unexpected security type",
    );

    return {
      clientID: out?.oauth2?.clientID ?? env().CRIBLMGMTPLANE_CLIENT_ID ?? "",
      clientSecret: out?.oauth2?.clientSecret
        ?? env().CRIBLMGMTPLANE_CLIENT_SECRET ?? "",
      tokenURL: out?.oauth2?.tokenURL ?? env().CRIBLMGMTPLANE_TOKEN_URL ?? "",
    };
  }

  private async getCredentialsV1WorkspacesGetWorkspace(
    security: unknown,
  ): Promise<Credentials | null> {
    const out = parse(
      security,
      (val) =>
        operations.V1WorkspacesGetWorkspaceSecurity$outboundSchema.parse(val),
      "unexpected security type",
    );

    return {
      clientID: out?.oauth2?.clientID ?? env().CRIBLMGMTPLANE_CLIENT_ID ?? "",
      clientSecret: out?.oauth2?.clientSecret
        ?? env().CRIBLMGMTPLANE_CLIENT_SECRET ?? "",
      tokenURL: out?.oauth2?.tokenURL ?? env().CRIBLMGMTPLANE_TOKEN_URL ?? "",
    };
  }

  private getSessionKey(credentials: Credentials): string {
    const key = `${credentials.clientID}:${credentials.clientSecret}`;
    return stringToBase64(key);
  }

  private hasRequiredScopes(
    scopes: string[],
    requiredScopes: string[],
  ): boolean {
    return requiredScopes.every((scope) => scopes.includes(scope));
  }

  private getScopes(requiredScopes: string[], sess?: Session): string[] {
    return [...new Set((sess?.scopes ?? []).concat(requiredScopes))];
  }

  private hasTokenExpired(expiresAt?: number): boolean {
    return !expiresAt || Date.now() + 60000 > expiresAt;
  }
}
