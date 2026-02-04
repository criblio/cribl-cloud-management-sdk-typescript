# ApiCredentialRolesSchema

## Example Usage

```typescript
import { ApiCredentialRolesSchema } from "cribl-mgmt-plane/models";

let value: ApiCredentialRolesSchema = {
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
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `organizationRole`                                               | [models.OrganizationRole](../models/organizationrole.md)         | :heavy_check_mark:                                               | Organization-level Role assigned to the API Credential.          | admin                                                            |
| `workspaces`                                                     | [models.WorkspaceRoleSchema](../models/workspaceroleschema.md)[] | :heavy_minus_sign:                                               | Workspace-level Roles assigned to the API Credential.            |                                                                  |