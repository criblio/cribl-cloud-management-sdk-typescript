# V1WorkspacesGetWorkspaceRequest

## Example Usage

```typescript
import { V1WorkspacesGetWorkspaceRequest } from "cribl-mgmt-plane/models/operations";

let value: V1WorkspacesGetWorkspaceRequest = {
  organizationId: "<id>",
  workspaceId: "<id>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `organizationId`        | *string*                | :heavy_check_mark:      | Organization identifier |
| `workspaceId`           | *string*                | :heavy_check_mark:      | Workspace identifier    |