# V1WorkspacesCreateWorkspaceRequest

## Example Usage

```typescript
import { V1WorkspacesCreateWorkspaceRequest } from "cribl-mgmt-plane/models/operations";

let value: V1WorkspacesCreateWorkspaceRequest = {
  organizationId: "<id>",
  workspaceCreateRequestDTO: {
    workspaceId: "main",
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

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `organizationId`                                                              | *string*                                                                      | :heavy_check_mark:                                                            | Organization identifier                                                       |
| `workspaceCreateRequestDTO`                                                   | [models.WorkspaceCreateRequestDTO](../../models/workspacecreaterequestdto.md) | :heavy_check_mark:                                                            | N/A                                                                           |