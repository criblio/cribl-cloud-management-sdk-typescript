# V1ApiCredentialsDeleteApiCredentialRequest

## Example Usage

```typescript
import { V1ApiCredentialsDeleteApiCredentialRequest } from "cribl-mgmt-plane/models/operations";

let value: V1ApiCredentialsDeleteApiCredentialRequest = {
  organizationId: "<id>",
  apiCredentialId: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `organizationId`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | The <code>id</code> of the Organization whose API Credential you want to delete. |
| `apiCredentialId`                                                                | *string*                                                                         | :heavy_check_mark:                                                               | The <code>clientId</code> of the API Credential to delete.                       |