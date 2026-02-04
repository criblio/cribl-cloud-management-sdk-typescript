# V1ApiCredentialsGetApiCredentialRequest

## Example Usage

```typescript
import { V1ApiCredentialsGetApiCredentialRequest } from "cribl-mgmt-plane/models/operations";

let value: V1ApiCredentialsGetApiCredentialRequest = {
  organizationId: "<id>",
  apiCredentialId: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `organizationId`                                                                   | *string*                                                                           | :heavy_check_mark:                                                                 | The <code>id</code> of the Organization whose API Credential you want to retrieve. |
| `apiCredentialId`                                                                  | *string*                                                                           | :heavy_check_mark:                                                                 | The <code>clientId</code> of the API Credential to retrieve.                       |