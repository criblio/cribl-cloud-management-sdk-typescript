# ApiCredentialSchema

## Example Usage

```typescript
import { ApiCredentialSchema } from "cribl-mgmt-plane/models";

let value: ApiCredentialSchema = {
  name: "Default API credential",
  description: "Used by automation to manage workspaces",
  enabled: true,
  workspaceId: "main",
  organizationId: "org-123",
  clientId: "client_ABC123",
  clientSecret: "super-secret-value",
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
  createdBy: "user@example.com",
  createdDate: "2024-08-15T12:34:56Z",
  lastUpdatedBy: "user@example.com",
  lastUpdatedDate: "2024-08-15T12:34:56Z",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Human friendly name of the credential                                    | Default API credential                                                   |
| `description`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | Description of how or where the credential is used                       | Used by automation to manage workspaces                                  |
| `enabled`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | Whether the credential is enabled                                        | true                                                                     |
| `workspaceId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | Workspace identifier                                                     | main                                                                     |
| `organizationId`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | Organization identifier                                                  | org-123                                                                  |
| `clientId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | Client identifier                                                        | client_ABC123                                                            |
| `clientSecret`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | Client secret                                                            | super-secret-value                                                       |
| `roles`                                                                  | [models.ApiCredentialRolesSchema](../models/apicredentialrolesschema.md) | :heavy_check_mark:                                                       | Role assignments for this credential                                     |                                                                          |
| `createdBy`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | User who created the credential                                          | user@example.com                                                         |
| `createdDate`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | ISO-8601 timestamp when the credential was created                       | 2024-08-15 12:34:56 +0000 UTC                                            |
| `lastUpdatedBy`                                                          | *string*                                                                 | :heavy_check_mark:                                                       | User who last updated the credential                                     | user@example.com                                                         |
| `lastUpdatedDate`                                                        | *string*                                                                 | :heavy_check_mark:                                                       | ISO-8601 timestamp when the credential was last updated                  | 2024-08-15 12:34:56 +0000 UTC                                            |