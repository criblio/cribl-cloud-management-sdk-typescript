# ApiCredentials

## Overview

Operations related to API credentials

### Available Operations

* [list](#list) - List API Credentials for an Organization
* [create](#create) - Create an API Credential
* [update](#update) - Update an API Credential
* [delete](#delete) - Delete an API Credential
* [get](#get) - Get an API Credential

## list

Get a list of all API Credentials for the specified Organization.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v1.apiCredentials.listApiCredentials" method="get" path="/v1/organizations/{organizationId}/api-credentials" -->
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
  const result = await criblMgmtPlane.apiCredentials.list({
    organizationId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { apiCredentialsList } from "cribl-mgmt-plane/funcs/apiCredentialsList.js";

// Use `CriblMgmtPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblMgmtPlane = new CriblMgmtPlaneCore({
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
  const res = await apiCredentialsList(criblMgmtPlane, {
    organizationId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCredentialsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V1ApiCredentialsListApiCredentialsRequest](../../models/operations/v1apicredentialslistapicredentialsrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V1ApiCredentialsListApiCredentialsResponse](../../models/operations/v1apicredentialslistapicredentialsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |

## create

Create a new API Credential for the specified Organization.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v1.apiCredentials.createApiCredential" method="post" path="/v1/organizations/{organizationId}/api-credentials" -->
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
  const result = await criblMgmtPlane.apiCredentials.create({
    organizationId: "<id>",
    apiCredentialCreateRequestDTO: {
      name: "Auto-Manage-Workspaces",
      description: "Used for automated Workspace management",
      enabled: true,
      workspaceId: "main",
      roles: {
        organizationRole: "admin",
        workspaces: [
          {
            workspaceId: "main",
            workspaceRole: "admin",
            products: [
              {
                product: "stream",
                role: "admin",
              },
            ],
          },
        ],
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { apiCredentialsCreate } from "cribl-mgmt-plane/funcs/apiCredentialsCreate.js";

// Use `CriblMgmtPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblMgmtPlane = new CriblMgmtPlaneCore({
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
  const res = await apiCredentialsCreate(criblMgmtPlane, {
    organizationId: "<id>",
    apiCredentialCreateRequestDTO: {
      name: "Auto-Manage-Workspaces",
      description: "Used for automated Workspace management",
      enabled: true,
      workspaceId: "main",
      roles: {
        organizationRole: "admin",
        workspaces: [
          {
            workspaceId: "main",
            workspaceRole: "admin",
            products: [
              {
                product: "stream",
                role: "admin",
              },
            ],
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCredentialsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V1ApiCredentialsCreateApiCredentialRequest](../../models/operations/v1apicredentialscreateapicredentialrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V1ApiCredentialsCreateApiCredentialResponse](../../models/operations/v1apicredentialscreateapicredentialresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |

## update

Update the specified API Credential.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v1.apiCredentials.updateApiCredential" method="patch" path="/v1/organizations/{organizationId}/api-credentials/{apiCredentialId}" -->
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
  const result = await criblMgmtPlane.apiCredentials.update({
    organizationId: "<id>",
    apiCredentialId: "<id>",
    apiCredentialUpdateRequestDTO: {
      name: "Auto-Manage-Workspaces",
      description: "Used for automated Workspace management",
      enabled: true,
      roles: {
        organizationRole: "admin",
        workspaces: [
          {
            workspaceId: "main",
            workspaceRole: "admin",
            products: [
              {
                product: "stream",
                role: "admin",
              },
            ],
          },
        ],
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { apiCredentialsUpdate } from "cribl-mgmt-plane/funcs/apiCredentialsUpdate.js";

// Use `CriblMgmtPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblMgmtPlane = new CriblMgmtPlaneCore({
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
  const res = await apiCredentialsUpdate(criblMgmtPlane, {
    organizationId: "<id>",
    apiCredentialId: "<id>",
    apiCredentialUpdateRequestDTO: {
      name: "Auto-Manage-Workspaces",
      description: "Used for automated Workspace management",
      enabled: true,
      roles: {
        organizationRole: "admin",
        workspaces: [
          {
            workspaceId: "main",
            workspaceRole: "admin",
            products: [
              {
                product: "stream",
                role: "admin",
              },
            ],
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCredentialsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V1ApiCredentialsUpdateApiCredentialRequest](../../models/operations/v1apicredentialsupdateapicredentialrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DefaultErrorDTO](../../models/defaulterrordto.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |

## delete

Delete the specified API Credential.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v1.apiCredentials.deleteApiCredential" method="delete" path="/v1/organizations/{organizationId}/api-credentials/{apiCredentialId}" -->
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
  const result = await criblMgmtPlane.apiCredentials.delete({
    organizationId: "<id>",
    apiCredentialId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { apiCredentialsDelete } from "cribl-mgmt-plane/funcs/apiCredentialsDelete.js";

// Use `CriblMgmtPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblMgmtPlane = new CriblMgmtPlaneCore({
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
  const res = await apiCredentialsDelete(criblMgmtPlane, {
    organizationId: "<id>",
    apiCredentialId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCredentialsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V1ApiCredentialsDeleteApiCredentialRequest](../../models/operations/v1apicredentialsdeleteapicredentialrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DefaultErrorDTO](../../models/defaulterrordto.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |

## get

Get the specified API Credential.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v1.apiCredentials.getApiCredential" method="get" path="/v1/organizations/{organizationId}/api-credentials/{apiCredentialId}" -->
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
  const result = await criblMgmtPlane.apiCredentials.get({
    organizationId: "<id>",
    apiCredentialId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { apiCredentialsGet } from "cribl-mgmt-plane/funcs/apiCredentialsGet.js";

// Use `CriblMgmtPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblMgmtPlane = new CriblMgmtPlaneCore({
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
  const res = await apiCredentialsGet(criblMgmtPlane, {
    organizationId: "<id>",
    apiCredentialId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiCredentialsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V1ApiCredentialsGetApiCredentialRequest](../../models/operations/v1apicredentialsgetapicredentialrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V1ApiCredentialsGetApiCredentialResponse](../../models/operations/v1apicredentialsgetapicredentialresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |