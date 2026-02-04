# V1ApiCredentialsUpdateApiCredentialRequest

## Example Usage

```typescript
import { V1ApiCredentialsUpdateApiCredentialRequest } from "cribl-mgmt-plane/models/operations";

let value: V1ApiCredentialsUpdateApiCredentialRequest = {
  organizationId: "<id>",
  apiCredentialId: "<id>",
  apiCredentialUpdateRequestDTO: {
    name: "Auto-Manage-Workspaces",
    description: "Used for automated Workspace management",
    enabled: true,
    roles: {
      organizationRole: "admin",
      workspaces: [
        {
          workspaceId: "main",
          workspaceRole: "admin",
          products: [
            {
              product: "stream",
              role: "admin",
            },
          ],
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `organizationId`                                                                      | *string*                                                                              | :heavy_check_mark:                                                                    | The <code>id</code> of the Organization whose API Credential you want to update.      |
| `apiCredentialId`                                                                     | *string*                                                                              | :heavy_check_mark:                                                                    | The <code>clientId</code> of the API Credential to update.                            |
| `apiCredentialUpdateRequestDTO`                                                       | [models.ApiCredentialUpdateRequestDTO](../../models/apicredentialupdaterequestdto.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |