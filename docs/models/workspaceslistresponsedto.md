# WorkspacesListResponseDTO

## Example Usage

```typescript
import { WorkspacesListResponseDTO } from "cribl-mgmt-plane/models";

let value: WorkspacesListResponseDTO = {
  items: [
    {
      workspaceId: "main",
      region: "us-west-2",
      lastUpdated: new Date("2023-01-01T12:00:00Z"),
      leaderFQDN: "workspace-leader.example.com",
      state: "Workspace-Active",
      alias: "Production Environment",
      description: "Main production workspace for customer data processing",
      tags: [
        "production",
        "customer-data",
      ],
    },
  ],
  count: 5,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `items`                                                  | [models.WorkspaceSchema](../models/workspaceschema.md)[] | :heavy_check_mark:                                       | List of workspaces                                       |                                                          |
| `count`                                                  | *number*                                                 | :heavy_check_mark:                                       | Total number of workspaces                               | 5                                                        |