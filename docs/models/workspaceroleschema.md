# WorkspaceRoleSchema

## Example Usage

```typescript
import { WorkspaceRoleSchema } from "cribl-mgmt-plane/models";

let value: WorkspaceRoleSchema = {
  workspaceId: "main",
  workspaceRole: "admin",
  products: [
    {
      product: "stream",
      role: "admin",
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `workspaceId`                                                         | *string*                                                              | :heavy_check_mark:                                                    | Unique ID of the Workspace.                                           | main                                                                  |
| `workspaceRole`                                                       | [models.WorkspaceRole](../models/workspacerole.md)                    | :heavy_check_mark:                                                    | Role assigned to the API Credential on the Workspace.                 | admin                                                                 |
| `products`                                                            | [models.ProductRoleSchema](../models/productroleschema.md)[]          | :heavy_minus_sign:                                                    | Product-level Roles assigned to the API Credential for the Workspace. |                                                                       |