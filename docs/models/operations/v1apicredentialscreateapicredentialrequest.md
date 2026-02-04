# V1ApiCredentialsCreateApiCredentialRequest

## Example Usage

```typescript
import { V1ApiCredentialsCreateApiCredentialRequest } from "cribl-mgmt-plane/models/operations";

let value: V1ApiCredentialsCreateApiCredentialRequest = {
  organizationId: "<id>",
  apiCredentialCreateRequestDTO: {
    name: "Auto-Manage-Workspaces",
    description: "Used for automated Workspace management",
    enabled: true,
    workspaceId: "main",
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
| `organizationId`                                                                      | *string*                                                                              | :heavy_check_mark:                                                                    | The <code>id</code> of the Organization where you want to create the API Credential.  |
| `apiCredentialCreateRequestDTO`                                                       | [models.ApiCredentialCreateRequestDTO](../../models/apicredentialcreaterequestdto.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |