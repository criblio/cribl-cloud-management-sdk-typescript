# CreditsTimeseriesResponseDTO

## Example Usage

```typescript
import { CreditsTimeseriesResponseDTO } from "cribl-mgmt-plane/models";

let value: CreditsTimeseriesResponseDTO = {
  items: [],
  count: 12,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [models.CreditsTimeseriesItemSchema](../models/creditstimeseriesitemschema.md)[] | :heavy_check_mark:                                                               | Credit timeseries data points.                                                   |                                                                                  |
| `count`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | Total number of items in the response.                                           | 12                                                                               |