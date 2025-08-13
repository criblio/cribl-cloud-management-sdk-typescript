# Health
(*health*)

## Overview

### Available Operations

* [getHealthStatus](#gethealthstatus) - Get the health status of the application

## getHealthStatus

Get the health status of the application

### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { healthGetHealthStatus } from "cribl-mgmt-plane/funcs/healthGetHealthStatus.js";

// Use `CriblMgmtPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblMgmtPlane = new CriblMgmtPlaneCore({
  security: {
    clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
    clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await healthGetHealthStatus(criblMgmtPlane);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("healthGetHealthStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |