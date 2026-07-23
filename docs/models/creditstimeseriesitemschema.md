# CreditsTimeseriesItemSchema

## Example Usage

```typescript
import { CreditsTimeseriesItemSchema } from "cribl-mgmt-plane/models";

let value: CreditsTimeseriesItemSchema = {
  date: new Date("2025-05-01T00:00:00Z"),
  credits: 147722.92,
  dimensions: [
    {
      dimension: "stream",
      credits: 42150.5,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Date of the aggregation window in ISO 8601 format.                                            | 2025-05-01 00:00:00 +0000 UTC                                                                 |
| `credits`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Total credits consumed in the aggregation window.                                             | 147722.92                                                                                     |
| `dimensions`                                                                                  | [models.CreditsTimeseriesDimensionSchema](../models/creditstimeseriesdimensionschema.md)[]    | :heavy_check_mark:                                                                            | Credit breakdown by dimension.                                                                |                                                                                               |