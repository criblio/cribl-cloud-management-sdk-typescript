# CreditGrantSchema

## Example Usage

```typescript
import { CreditGrantSchema } from "cribl-mgmt-plane/models";

let value: CreditGrantSchema = {
  date: new Date("2025-10-29T00:00:00Z"),
  creditsAcquired: 6000000,
  type: "Purchased",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Date the grant was issued, in ISO 8601 format.                                                | 2025-10-29 00:00:00 +0000 UTC                                                                 |
| `creditsAcquired`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of credits acquired by the grant.                                                      | 6000000                                                                                       |
| `type`                                                                                        | [models.Type](../models/type.md)                                                              | :heavy_check_mark:                                                                            | Type of the credit grant.                                                                     | Purchased                                                                                     |