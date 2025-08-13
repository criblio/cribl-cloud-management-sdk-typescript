# Workspaces
(*workspaces*)

## Overview

### Available Operations

* [v1WorkspacesCreateWorkspace](#v1workspacescreateworkspace) - Create a new workspace
* [v1WorkspacesListWorkspaces](#v1workspaceslistworkspaces) - List all workspaces for an organization
* [v1WorkspacesUpdateWorkspace](#v1workspacesupdateworkspace) - Update an existing workspace
* [v1WorkspacesDeleteWorkspace](#v1workspacesdeleteworkspace) - Delete a workspace
* [v1WorkspacesGetWorkspace](#v1workspacesgetworkspace) - Get a specific workspace by ID

## v1WorkspacesCreateWorkspace

Create a new workspace

### Example Usage

```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane();

async function run() {
  const result = await criblMgmtPlane.workspaces.v1WorkspacesCreateWorkspace({
    oauth2: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
    },
  }, {
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { workspacesV1WorkspacesCreateWorkspace } from "cribl-mgmt-plane/funcs/workspacesV1WorkspacesCreateWorkspace.js";

// Use `CriblMgmtPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblMgmtPlane = new CriblMgmtPlaneCore();

async function run() {
  const res = await workspacesV1WorkspacesCreateWorkspace(criblMgmtPlane, {
    oauth2: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
    },
  }, {
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesV1WorkspacesCreateWorkspace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V1WorkspacesCreateWorkspaceRequest](../../models/operations/v1workspacescreateworkspacerequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.V1WorkspacesCreateWorkspaceSecurity](../../models/operations/v1workspacescreateworkspacesecurity.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.WorkspaceSchema](../../models/workspaceschema.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |

## v1WorkspacesListWorkspaces

List all workspaces for an organization

### Example Usage

```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane();

async function run() {
  const result = await criblMgmtPlane.workspaces.v1WorkspacesListWorkspaces({
    oauth2: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
    },
  }, {
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
import { workspacesV1WorkspacesListWorkspaces } from "cribl-mgmt-plane/funcs/workspacesV1WorkspacesListWorkspaces.js";

// Use `CriblMgmtPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblMgmtPlane = new CriblMgmtPlaneCore();

async function run() {
  const res = await workspacesV1WorkspacesListWorkspaces(criblMgmtPlane, {
    oauth2: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
    },
  }, {
    organizationId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesV1WorkspacesListWorkspaces failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V1WorkspacesListWorkspacesRequest](../../models/operations/v1workspaceslistworkspacesrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.V1WorkspacesListWorkspacesSecurity](../../models/operations/v1workspaceslistworkspacessecurity.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.WorkspacesListResponseDTO](../../models/workspaceslistresponsedto.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |

## v1WorkspacesUpdateWorkspace

Update an existing workspace

### Example Usage

```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane();

async function run() {
  const result = await criblMgmtPlane.workspaces.v1WorkspacesUpdateWorkspace({
    oauth2: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
    },
  }, {
    organizationId: "<id>",
    workspaceId: "<id>",
    workspacePatchRequestDTO: {
      alias: "Production Environment",
      description: "Main production workspace for customer data processing",
      tags: [
        "production",
        "customer-data",
      ],
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
import { workspacesV1WorkspacesUpdateWorkspace } from "cribl-mgmt-plane/funcs/workspacesV1WorkspacesUpdateWorkspace.js";

// Use `CriblMgmtPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblMgmtPlane = new CriblMgmtPlaneCore();

async function run() {
  const res = await workspacesV1WorkspacesUpdateWorkspace(criblMgmtPlane, {
    oauth2: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
    },
  }, {
    organizationId: "<id>",
    workspaceId: "<id>",
    workspacePatchRequestDTO: {
      alias: "Production Environment",
      description: "Main production workspace for customer data processing",
      tags: [
        "production",
        "customer-data",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesV1WorkspacesUpdateWorkspace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V1WorkspacesUpdateWorkspaceRequest](../../models/operations/v1workspacesupdateworkspacerequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.V1WorkspacesUpdateWorkspaceSecurity](../../models/operations/v1workspacesupdateworkspacesecurity.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.WorkspaceSchema](../../models/workspaceschema.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |

## v1WorkspacesDeleteWorkspace

Delete a workspace

### Example Usage

```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane();

async function run() {
  await criblMgmtPlane.workspaces.v1WorkspacesDeleteWorkspace({
    oauth2: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
    },
  }, {
    organizationId: "<id>",
    workspaceId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { workspacesV1WorkspacesDeleteWorkspace } from "cribl-mgmt-plane/funcs/workspacesV1WorkspacesDeleteWorkspace.js";

// Use `CriblMgmtPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblMgmtPlane = new CriblMgmtPlaneCore();

async function run() {
  const res = await workspacesV1WorkspacesDeleteWorkspace(criblMgmtPlane, {
    oauth2: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
    },
  }, {
    organizationId: "<id>",
    workspaceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("workspacesV1WorkspacesDeleteWorkspace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V1WorkspacesDeleteWorkspaceRequest](../../models/operations/v1workspacesdeleteworkspacerequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.V1WorkspacesDeleteWorkspaceSecurity](../../models/operations/v1workspacesdeleteworkspacesecurity.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |

## v1WorkspacesGetWorkspace

Get a specific workspace by ID

### Example Usage

```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane();

async function run() {
  const result = await criblMgmtPlane.workspaces.v1WorkspacesGetWorkspace({
    oauth2: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
    },
  }, {
    organizationId: "<id>",
    workspaceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { workspacesV1WorkspacesGetWorkspace } from "cribl-mgmt-plane/funcs/workspacesV1WorkspacesGetWorkspace.js";

// Use `CriblMgmtPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblMgmtPlane = new CriblMgmtPlaneCore();

async function run() {
  const res = await workspacesV1WorkspacesGetWorkspace(criblMgmtPlane, {
    oauth2: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
    },
  }, {
    organizationId: "<id>",
    workspaceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesV1WorkspacesGetWorkspace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V1WorkspacesGetWorkspaceRequest](../../models/operations/v1workspacesgetworkspacerequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.V1WorkspacesGetWorkspaceSecurity](../../models/operations/v1workspacesgetworkspacesecurity.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.WorkspaceSchema](../../models/workspaceschema.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |