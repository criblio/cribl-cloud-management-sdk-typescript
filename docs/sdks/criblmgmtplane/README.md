# CriblMgmtPlane SDK

## Overview

Cribl Cloud Management API: Lorem Ipsum

### Available Operations

* [dummyServiceStatus](#dummyservicestatus) - Service status

## dummyServiceStatus

Service status

### Example Usage

<!-- UsageSnippet language="typescript" operationID="dummyServiceStatus" method="get" path="/status" -->
```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["CRIBLMGMTPLANE_BEARER_AUTH"] ?? "",
});

async function run() {
  await criblMgmtPlane.dummyServiceStatus();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { dummyServiceStatus } from "cribl-mgmt-plane/funcs/dummyServiceStatus.js";

// Use `CriblMgmtPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblMgmtPlane = new CriblMgmtPlaneCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["CRIBLMGMTPLANE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await dummyServiceStatus(criblMgmtPlane);
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("dummyServiceStatus failed:", res.error);
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