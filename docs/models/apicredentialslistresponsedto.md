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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [models.ApiCredentialListItemSchema](../models/apicredentiallistitemschema.md)[] | :heavy_check_mark:                                                               | List of API Credentials.                                                         |                                                                                  |
| `count`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | Total number of API Credentials listed in the response.                          | 1                                                                                |