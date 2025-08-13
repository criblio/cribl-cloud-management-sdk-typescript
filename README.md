# cribl-cloud-management-sdk-typescript
<!-- Start Summary [summary] -->
## Summary

Cribl.Cloud Public API: Serves as a public API for the Cribl.Cloud platform and powers the Speakeasy SDK
<!-- End Summary [summary] -->

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
yarn add cribl-mgmt-plane zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
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
    clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
    clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  await criblMgmtPlane.health.getHealthStatus();
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                          | Type   | Scheme                         | Environment Variable                                                                         |
| ----------------------------- | ------ | ------------------------------ | -------------------------------------------------------------------------------------------- |
| `clientID`<br/>`clientSecret` | oauth2 | OAuth2 Client Credentials Flow | `CRIBLMGMTPLANE_CLIENT_ID`<br/>`CRIBLMGMTPLANE_CLIENT_SECRET`<br/>`CRIBLMGMTPLANE_TOKEN_URL` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane({
  security: {
    clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
    clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  await criblMgmtPlane.health.getHealthStatus();
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane();

async function run() {
  const result = await criblMgmtPlane.workspaces.v1WorkspacesCreateWorkspace(
    {},
    {
      organizationId: "<id>",
      workspaceCreateRequestDTO: {
        workspaceId: "main",
        region: "us-west-2",
        alias: "Production Environment",
        description: "Main production workspace for customer data processing",
        tags: [
          "production",
          "customer-data",
        ],
      },
    },
  );

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [health](docs/sdks/health/README.md)

* [getHealthStatus](docs/sdks/health/README.md#gethealthstatus) - Get the health status of the application

### [workspaces](docs/sdks/workspaces/README.md)

* [v1WorkspacesCreateWorkspace](docs/sdks/workspaces/README.md#v1workspacescreateworkspace) - Create a new workspace
* [v1WorkspacesListWorkspaces](docs/sdks/workspaces/README.md#v1workspaceslistworkspaces) - List all workspaces for an organization
* [v1WorkspacesUpdateWorkspace](docs/sdks/workspaces/README.md#v1workspacesupdateworkspace) - Update an existing workspace
* [v1WorkspacesDeleteWorkspace](docs/sdks/workspaces/README.md#v1workspacesdeleteworkspace) - Delete a workspace
* [v1WorkspacesGetWorkspace](docs/sdks/workspaces/README.md#v1workspacesgetworkspace) - Get a specific workspace by ID

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

- [`healthGetHealthStatus`](docs/sdks/health/README.md#gethealthstatus) - Get the health status of the application
- [`workspacesV1WorkspacesCreateWorkspace`](docs/sdks/workspaces/README.md#v1workspacescreateworkspace) - Create a new workspace
- [`workspacesV1WorkspacesDeleteWorkspace`](docs/sdks/workspaces/README.md#v1workspacesdeleteworkspace) - Delete a workspace
- [`workspacesV1WorkspacesGetWorkspace`](docs/sdks/workspaces/README.md#v1workspacesgetworkspace) - Get a specific workspace by ID
- [`workspacesV1WorkspacesListWorkspaces`](docs/sdks/workspaces/README.md#v1workspaceslistworkspaces) - List all workspaces for an organization
- [`workspacesV1WorkspacesUpdateWorkspace`](docs/sdks/workspaces/README.md#v1workspacesupdateworkspace) - Update an existing workspace

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
    clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
    clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  await criblMgmtPlane.health.getHealthStatus({
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
    clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
    clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  await criblMgmtPlane.health.getHealthStatus();
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
    clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
    clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  try {
    await criblMgmtPlane.health.getHealthStatus();
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
  serverURL: "https://publicapi.cribl.cloud",
  security: {
    clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
    clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  await criblMgmtPlane.health.getHealthStatus();
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

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";
import { HTTPClient } from "cribl-mgmt-plane/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
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

const sdk = new CriblMgmtPlane({ httpClient });
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
