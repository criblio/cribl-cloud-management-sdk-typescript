# CreditGrantsResponseDTO

## Example Usage

```typescript
import { CreditGrantsResponseDTO } from "cribl-mgmt-plane/models";

let value: CreditGrantsResponseDTO = {
  items: [],
  count: 3,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `items`                                                      | [models.CreditGrantSchema](../models/creditgrantschema.md)[] | :heavy_check_mark:                                           | Credit grants for the queried period.                        |                                                              |
| `count`                                                      | *number*                                                     | :heavy_check_mark:                                           | Total number of items in the response.                       | 3                                                            |