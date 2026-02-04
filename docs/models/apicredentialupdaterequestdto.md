# ApiCredentialUpdateRequestDTO

## Example Usage

```typescript
import { ApiCredentialUpdateRequestDTO } from "cribl-mgmt-plane/models";

let value: ApiCredentialUpdateRequestDTO = {
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
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `name`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | Human-readable name of the API Credential.                                          | Auto-Manage-Workspaces                                                              |
| `description`                                                                       | *string*                                                                            | :heavy_minus_sign:                                                                  | Brief description of the purpose and usage for the API Credential.                  | Used for automated Workspace management                                             |
| `enabled`                                                                           | *boolean*                                                                           | :heavy_minus_sign:                                                                  | If <code>true</code>, the API Credential is enabled. Otherwise, <code>false</code>. | true                                                                                |
| `roles`                                                                             | [models.ApiCredentialRolesSchema](../models/apicredentialrolesschema.md)            | :heavy_minus_sign:                                                                  | Role assignments for the API Credential.                                            |                                                                                     |