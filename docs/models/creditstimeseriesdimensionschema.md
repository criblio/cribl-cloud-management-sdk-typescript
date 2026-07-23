# CreditsTimeseriesDimensionSchema

## Example Usage

```typescript
import { CreditsTimeseriesDimensionSchema } from "cribl-mgmt-plane/models";

let value: CreditsTimeseriesDimensionSchema = {
  dimension: "stream",
  credits: 42150.5,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `dimension`                                    | *string*                                       | :heavy_check_mark:                             | Dimension label for the credit breakdown.      | stream                                         |
| `credits`                                      | *number*                                       | :heavy_check_mark:                             | Number of credits attributed to the dimension. | 42150.5                                        |