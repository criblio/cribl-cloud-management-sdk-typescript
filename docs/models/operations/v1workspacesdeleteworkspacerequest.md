# V1WorkspacesDeleteWorkspaceRequest

## Example Usage

```typescript
import { V1WorkspacesDeleteWorkspaceRequest } from "cribl-mgmt-plane/models/operations";

let value: V1WorkspacesDeleteWorkspaceRequest = {
  organizationId: "<id>",
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `organizationId`                                                     | *string*                                                             | :heavy_check_mark:                                                   | The <code>id</code> of the Organization that contains the Workspace. |
| `workspaceId`                                                        | *string*                                                             | :heavy_check_mark:                                                   | The <code>id</code> of the Workspace to delete.                      |