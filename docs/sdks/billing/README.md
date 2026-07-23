# Billing

## Overview

Operations related to Billing and FinOps data

### Available Operations

* [getContractsUtilization](#getcontractsutilization) - [In development] Get contract credit utilization
* [getCreditsTimeseries](#getcreditstimeseries) - [In development] Get credits timeseries
* [getCreditsStats](#getcreditsstats) - [In development] Get credit balance and consumption
* [getCreditsGrants](#getcreditsgrants) - [In development] Get credit grants

## getContractsUtilization

**This endpoint is in development with restricted availability**. We do not recommend using this endpoint in production. Functionality might change without notice. Contact [Cribl Support](https://cribl.io/support/) to request access.

Get cumulative credit utilization data grouped by contract period for the specified Organization.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v1.billing.getContractsUtilization" method="get" path="/v1/organizations/{organizationId}/billing/credits/contracts-utilization" -->
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
  const result = await criblMgmtPlane.billing.getContractsUtilization({
    organizationId: "<id>",
    startingOn: new Date("2025-05-01T00:00:00Z"),
    endingBefore: new Date("2025-06-01T00:00:00Z"),
    window: "monthly",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { billingGetContractsUtilization } from "cribl-mgmt-plane/funcs/billingGetContractsUtilization.js";

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
  const res = await billingGetContractsUtilization(criblMgmtPlane, {
    organizationId: "<id>",
    startingOn: new Date("2025-05-01T00:00:00Z"),
    endingBefore: new Date("2025-06-01T00:00:00Z"),
    window: "monthly",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingGetContractsUtilization failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V1BillingGetContractsUtilizationRequest](../../models/operations/v1billinggetcontractsutilizationrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V1BillingGetContractsUtilizationResponse](../../models/operations/v1billinggetcontractsutilizationresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |

## getCreditsTimeseries

**This endpoint is in development with restricted availability**. We do not recommend using this endpoint in production. Functionality might change without notice. Contact [Cribl Support](https://cribl.io/support/) to request access.

Get credit consumption timeseries data for the specified Organization, broken down by dimensions such as product and usage type.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v1.billing.getCreditsTimeseries" method="get" path="/v1/organizations/{organizationId}/billing/credits/timeseries" -->
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
  const result = await criblMgmtPlane.billing.getCreditsTimeseries({
    organizationId: "<id>",
    startingOn: new Date("2025-05-01T00:00:00Z"),
    endingBefore: new Date("2025-06-01T00:00:00Z"),
    window: "monthly",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { billingGetCreditsTimeseries } from "cribl-mgmt-plane/funcs/billingGetCreditsTimeseries.js";

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
  const res = await billingGetCreditsTimeseries(criblMgmtPlane, {
    organizationId: "<id>",
    startingOn: new Date("2025-05-01T00:00:00Z"),
    endingBefore: new Date("2025-06-01T00:00:00Z"),
    window: "monthly",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingGetCreditsTimeseries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V1BillingGetCreditsTimeseriesRequest](../../models/operations/v1billinggetcreditstimeseriesrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V1BillingGetCreditsTimeseriesResponse](../../models/operations/v1billinggetcreditstimeseriesresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |

## getCreditsStats

**This endpoint is in development with restricted availability**. We do not recommend using this endpoint in production. Functionality might change without notice. Contact [Cribl Support](https://cribl.io/support/) to request access.

Get credit balance totals, consumption totals, and contract date ranges for the specified Organization.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v1.billing.getCreditsStats" method="get" path="/v1/organizations/{organizationId}/billing/credits/stats" -->
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
  const result = await criblMgmtPlane.billing.getCreditsStats({
    organizationId: "<id>",
    startingOn: new Date("2025-05-01T00:00:00Z"),
    endingBefore: new Date("2025-06-01T00:00:00Z"),
    window: "monthly",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { billingGetCreditsStats } from "cribl-mgmt-plane/funcs/billingGetCreditsStats.js";

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
  const res = await billingGetCreditsStats(criblMgmtPlane, {
    organizationId: "<id>",
    startingOn: new Date("2025-05-01T00:00:00Z"),
    endingBefore: new Date("2025-06-01T00:00:00Z"),
    window: "monthly",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingGetCreditsStats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V1BillingGetCreditsStatsRequest](../../models/operations/v1billinggetcreditsstatsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V1BillingGetCreditsStatsResponse](../../models/operations/v1billinggetcreditsstatsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |

## getCreditsGrants

**This endpoint is in development with restricted availability**. We do not recommend using this endpoint in production. Functionality might change without notice. Contact [Cribl Support](https://cribl.io/support/) to request access.

Get credit grants (purchases, rollovers, and refunds) for the specified Organization.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="v1.billing.getCreditsGrants" method="get" path="/v1/organizations/{organizationId}/billing/credits/grants" -->
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
  const result = await criblMgmtPlane.billing.getCreditsGrants({
    organizationId: "<id>",
    startingOn: new Date("2025-05-01T00:00:00Z"),
    endingBefore: new Date("2025-06-01T00:00:00Z"),
    window: "daily",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblMgmtPlaneCore } from "cribl-mgmt-plane/core.js";
import { billingGetCreditsGrants } from "cribl-mgmt-plane/funcs/billingGetCreditsGrants.js";

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
  const res = await billingGetCreditsGrants(criblMgmtPlane, {
    organizationId: "<id>",
    startingOn: new Date("2025-05-01T00:00:00Z"),
    endingBefore: new Date("2025-06-01T00:00:00Z"),
    window: "daily",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingGetCreditsGrants failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.V1BillingGetCreditsGrantsRequest](../../models/operations/v1billinggetcreditsgrantsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V1BillingGetCreditsGrantsResponse](../../models/operations/v1billinggetcreditsgrantsresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CriblMgmtPlaneDefaultError | 4XX, 5XX                          | \*/\*                             |