# ApiCredentialsListResponseDTO

## Example Usage

```typescript
import { ApiCredentialsListResponseDTO } from "cribl-mgmt-plane/models";

let value: ApiCredentialsListResponseDTO = {
  items: [],
  count: 1,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [models.ApiCredentialSchema](../models/apicredentialschema.md)[] | :heavy_check_mark:                                               | List of API credentials                                          |                                                                  |
| `count`                                                          | *number*                                                         | :heavy_check_mark:                                               | Total number of API credentials                                  | 1                                                                |