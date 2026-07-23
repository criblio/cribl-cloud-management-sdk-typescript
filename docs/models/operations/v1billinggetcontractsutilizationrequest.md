# V1BillingGetContractsUtilizationRequest

## Example Usage

```typescript
import { V1BillingGetContractsUtilizationRequest } from "cribl-mgmt-plane/models/operations";

let value: V1BillingGetContractsUtilizationRequest = {
  organizationId: "<id>",
  startingOn: new Date("2025-05-01T00:00:00Z"),
  endingBefore: new Date("2025-06-01T00:00:00Z"),
  window: "monthly",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The <code>id</code> of the Organization.                                                      |                                                                                               |
| `startingOn`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Inclusive start of the query date range in ISO 8601 format.                                   | 2025-05-01 00:00:00 +0000 UTC                                                                 |
| `endingBefore`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Exclusive end of the query date range in ISO 8601 format.                                     | 2025-06-01 00:00:00 +0000 UTC                                                                 |
| `window`                                                                                      | [models.BillingWindow](../../models/billingwindow.md)                                         | :heavy_check_mark:                                                                            | Aggregation granularity for credit utilization data.                                          |                                                                                               |