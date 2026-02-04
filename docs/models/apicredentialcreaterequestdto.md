# ApiCredentialCreateRequestDTO

## Example Usage

```typescript
import { ApiCredentialCreateRequestDTO } from "cribl-mgmt-plane/models";

let value: ApiCredentialCreateRequestDTO = {
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
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `name`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | Human-readable name of the API Credential.                                          | Auto-Manage-Workspaces                                                              |
| `description`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | Brief description of the purpose and usage for the API Credential.                  | Used for automated Workspace management                                             |
| `enabled`                                                                           | *boolean*                                                                           | :heavy_check_mark:                                                                  | If <code>true</code>, the API Credential is enabled. Otherwise, <code>false</code>. | true                                                                                |
| `workspaceId`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | Unique ID of the Workspace.                                                         | main                                                                                |
| `roles`                                                                             | [models.ApiCredentialRolesSchema](../models/apicredentialrolesschema.md)            | :heavy_check_mark:                                                                  | Role assignments for the API Credential.                                            |                                                                                     |