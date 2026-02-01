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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `workspaceId`                                                | *string*                                                     | :heavy_check_mark:                                           | Workspace identifier                                         | main                                                         |
| `workspaceRole`                                              | [models.WorkspaceRole](../models/workspacerole.md)           | :heavy_check_mark:                                           | Role in the workspace                                        | admin                                                        |
| `products`                                                   | [models.ProductRoleSchema](../models/productroleschema.md)[] | :heavy_minus_sign:                                           | Product roles in the workspace                               |                                                              |