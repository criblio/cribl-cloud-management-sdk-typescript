# Health
(*health*)

## Overview

### Available Operations

* [get](#get) - Get the health status of the application

## get

Get the health status of the application

### Example Usage

```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane({
  security: {
    clientOauth: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  await criblMgmtPlane.health.get();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { healthGet } from "cribl-mgmt-plane/funcs/healthGet.js";

// Use `CriblMgmtPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblMgmtPlane = new CriblMgmtPlaneCore({
  security: {
    clientOauth: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
    },
  },
});

async function run() {
  const res = await healthGet(criblMgmtPlane);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("healthGet failed:", res.error);
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