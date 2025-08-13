# V1WorkspacesUpdateWorkspaceRequest

## Example Usage

```typescript
import { V1WorkspacesUpdateWorkspaceRequest } from "cribl-mgmt-plane/models/operations";

let value: V1WorkspacesUpdateWorkspaceRequest = {
  organizationId: "<id>",
  workspaceId: "<id>",
  workspacePatchRequestDTO: {
    alias: "Production Environment",
    description: "Main production workspace for customer data processing",
    tags: [
      "production",
      "customer-data",
    ],
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `organizationId`                                                            | *string*                                                                    | :heavy_check_mark:                                                          | Organization identifier                                                     |
| `workspaceId`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | Workspace identifier                                                        |
| `workspacePatchRequestDTO`                                                  | [models.WorkspacePatchRequestDTO](../../models/workspacepatchrequestdto.md) | :heavy_check_mark:                                                          | N/A                                                                         |