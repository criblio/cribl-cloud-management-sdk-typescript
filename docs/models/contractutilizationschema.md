# ContractUtilizationSchema

## Example Usage

```typescript
import { ContractUtilizationSchema } from "cribl-mgmt-plane/models";

let value: ContractUtilizationSchema = {
  contractStartDate: new Date("2025-04-29T00:00:00Z"),
  contractEndDate: new Date("2025-05-30T00:00:00Z"),
  items: [
    {
      date: new Date("2025-05-01T00:00:00Z"),
      credits: 147722.91698535177,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contractStartDate`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Contract start date in ISO 8601 format.                                                       | 2025-04-29 00:00:00 +0000 UTC                                                                 |
| `contractEndDate`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Contract end date in ISO 8601 format. Present only when the contract is closed.               | 2025-05-30 00:00:00 +0000 UTC                                                                 |
| `items`                                                                                       | [models.CreditsUtilizationItemSchema](../models/creditsutilizationitemschema.md)[]            | :heavy_check_mark:                                                                            | Cumulative credit utilization entries for the contract.                                       |                                                                                               |