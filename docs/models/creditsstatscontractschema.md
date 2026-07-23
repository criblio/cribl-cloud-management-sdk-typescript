# CreditsStatsContractSchema

## Example Usage

```typescript
import { CreditsStatsContractSchema } from "cribl-mgmt-plane/models";

let value: CreditsStatsContractSchema = {
  startDate: new Date("2025-09-17T00:00:00Z"),
  endDate: new Date("2026-08-02T00:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Contract start date in ISO 8601 format.                                                       | 2025-09-17 00:00:00 +0000 UTC                                                                 |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Contract end date in ISO 8601 format. Present only when the contract is closed.               | 2026-08-02 00:00:00 +0000 UTC                                                                 |