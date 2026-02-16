# cribl-cloud-management-sdk-typescript

The Cribl TypeScript SDK for the management plane provides operational control of administrative tasks like configuring and managing Workspaces and helps streamline the process of integrating with Cribl.

Complementary API reference documentation is available at [https://docs.cribl.io/cribl-as-code/api/](https://docs.cribl.io/cribl-as-code/api-reference/management-plane/workspaces/). Product documentation is available at https://docs.cribl.io.

> [!IMPORTANT]
> The Cribl TypeScript SDK for the management plane is supported only on Cribl.Cloud.
> 
> **Preview Feature**
> The Cribl SDKs are Preview features that are still being developed. We do not recommend using them in a production environment, because the features might not be fully tested or optimized for performance, and related documentation could be incomplete.
>
> Please continue to submit feedback through normal Cribl support channels, but assistance might be limited while the features remain in Preview.

<!-- No Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [cribl-cloud-management-sdk-typescript](#cribl-cloud-management-sdk-typescript)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add cribl-mgmt-plane
```

### PNPM

```bash
pnpm add cribl-mgmt-plane
```

### Bun

```bash
bun add cribl-mgmt-plane
```

### Yarn

```bash
yarn add cribl-mgmt-plane
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane({
  security: {
    clientOauth: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
      audience: "https://api.cribl.cloud",
    },
  },
});

async function run() {
  const result = await criblMgmtPlane.health.get();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

## Authentication

All Cribl management plane SDK requests require you to authenticate with a Bearer token. The Bearer token verifies your identity and ensures secure access to the requested resources. The SDK uses the OAuth2 credentials you provide when initializing your SDK client to obtain the Bearer token. The SDK automatically manages the `Authorization` header for subsequent requests once properly authenticated.

For information about Bearer token expiration, see [Token Management](https://docs.cribl.io/cribl-as-code/sdks-auth/#sdks-token-mgmt) in the Cribl as Code documentation.

**Authentication happens once during SDK initialization**. After you initialize the SDK client with authentication as shown in the [authentication example](#authentication-example), the SDK automatically handles authentication for all subsequent API calls. You do not need to include authentication parameters in individual API requests. The [SDK Example Usage](#sdk-example-usage) section shows how to initialize the SDK and make API calls, but if you've properly initialized your client as shown in the authentication example, you only need to make the API method calls themselves without re-initializing.

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name          | Type   | Scheme       | Environment Variable          |
| ------------- | ------ | ------------ | ----------------------------- |
| `clientOauth` | oauth2 | OAuth2 token | `CRIBLMGMTPLANE_CLIENT_OAUTH` |

Set the security scheme through the `security` parameter when initializing the SDK client instance. The SDK uses the OAuth2 credentials that you provide for the `clientOauth` scheme to obtain a Bearer token, refresh the token within its expiration window using the standard OAuth2 flow, and authenticate with the API.

### Authentication Example

The [Cribl.Cloud Authentication Example](https://github.com/criblio/cribl-cloud-management-sdk-typescript/blob/main/examples/auth.example.ts) demonstrates how to configure authentication on Cribl.Cloud and in hybrid deployments. To obtain the Client ID and Client Secret you'll need to initialize using the `clientOauth` security schema, follow the [instructions for creating an API Credential](https://docs.cribl.io/cribl-as-code/sdks-auth/#sdks-auth-cloud) in the Cribl as Code documentation.

<!-- No Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Health](docs/sdks/health/README.md)

* [get](docs/sdks/health/README.md#get) - Get the health status of the application

### [Workspaces](docs/sdks/workspaces/README.md)

* [create](docs/sdks/workspaces/README.md#create) - Create a Workspace in the specified Organization
* [list](docs/sdks/workspaces/README.md#list) - List all Workspaces for the specified Organization
* [update](docs/sdks/workspaces/README.md#update) - Update a Workspace
* [delete](docs/sdks/workspaces/README.md#delete) - Delete a Workspace
* [get](docs/sdks/workspaces/README.md#get) - Get a Workspace

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`healthGet`](docs/sdks/health/README.md#get) - Get the health status of the application
- [`workspacesCreate`](docs/sdks/workspaces/README.md#create) - Create a Workspace in the specified Organization
- [`workspacesDelete`](docs/sdks/workspaces/README.md#delete) - Delete a Workspace
- [`workspacesGet`](docs/sdks/workspaces/README.md#get) - Get a Workspace
- [`workspacesList`](docs/sdks/workspaces/README.md#list) - List all Workspaces for the specified Organization
- [`workspacesUpdate`](docs/sdks/workspaces/README.md#update) - Update a Workspace

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane({
  security: {
    clientOauth: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
      audience: "https://api.cribl.cloud",
    },
  },
});

async function run() {
  const result = await criblMgmtPlane.health.get({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    clientOauth: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
      audience: "https://api.cribl.cloud",
    },
  },
});

async function run() {
  const result = await criblMgmtPlane.health.get();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`CriblMgmtPlaneError`](./src/models/errors/criblmgmtplaneerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                            |
| ------------------- | ---------- | ------------------------------------------------------ |
| `error.message`     | `string`   | Error message                                          |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                     |
| `error.headers`     | `Headers`  | HTTP response headers                                  |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned. |
| `error.rawResponse` | `Response` | Raw HTTP response                                      |

### Example
```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";
import * as errors from "cribl-mgmt-plane/models/errors";

const criblMgmtPlane = new CriblMgmtPlane({
  security: {
    clientOauth: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
      audience: "https://api.cribl.cloud",
    },
  },
});

async function run() {
  try {
    const result = await criblMgmtPlane.health.get();

    console.log(result);
  } catch (error) {
    if (error instanceof errors.CriblMgmtPlaneError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`CriblMgmtPlaneError`](./src/models/errors/criblmgmtplaneerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`CriblMgmtPlaneError`](./src/models/errors/criblmgmtplaneerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane({
  serverURL: "https://gateway.cribl.cloud",
  security: {
    clientOauth: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
      audience: "https://api.cribl.cloud",
    },
  },
});

async function run() {
  const result = await criblMgmtPlane.health.get();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";
import { ProxyAgent } from "undici";
import { HTTPClient } from "cribl-mgmt-plane/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new CriblMgmtPlane({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const sdk = new CriblMgmtPlane({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `CRIBLMGMTPLANE_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
