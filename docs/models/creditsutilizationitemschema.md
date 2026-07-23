# CreditsUtilizationItemSchema

## Example Usage

```typescript
import { CreditsUtilizationItemSchema } from "cribl-mgmt-plane/models";

let value: CreditsUtilizationItemSchema = {
  date: new Date("2025-05-01T00:00:00Z"),
  credits: 147722.91698535177,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Date of the aggregation window in ISO 8601 format.                                            | 2025-05-01 00:00:00 +0000 UTC                                                                 |
| `credits`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of credits consumed in the aggregation window.                                         | 147722.91698535177                                                                            |