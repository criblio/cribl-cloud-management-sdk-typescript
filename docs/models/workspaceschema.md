# WorkspaceSchema

## Example Usage

```typescript
import { WorkspaceSchema } from "cribl-mgmt-plane/models";

let value: WorkspaceSchema = {
  workspaceId: "main",
  region: "us-west-2",
  leaderFQDN: "workspace-leader.example.com",
  state: "Active",
  alias: "Production Environment",
  description: "Main production Workspace for customer data processing",
  tags: [
    "production",
    "customer-data",
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `workspaceId`                                               | *string*                                                    | :heavy_check_mark:                                          | Unique identifier for the Workspace.                        | main                                                        |
| `region`                                                    | [models.Region](../models/region.md)                        | :heavy_check_mark:                                          | AWS region where the Workspace is deployed.                 | us-west-2                                                   |
| `leaderFQDN`                                                | *string*                                                    | :heavy_check_mark:                                          | Fully Qualified Domain Name (FQDN) of the Workspace Leader. | workspace-leader.example.com                                |
| `state`                                                     | [models.State](../models/state.md)                          | :heavy_check_mark:                                          | Current state of the Workspace.                             | Active                                                      |
| `alias`                                                     | *string*                                                    | :heavy_minus_sign:                                          | User-friendly alias for the Workspace.                      | Production Environment                                      |
| `description`                                               | *string*                                                    | :heavy_minus_sign:                                          | Brief description of the Workspace.                         | Main production Workspace for customer data processing      |
| `tags`                                                      | *string*[]                                                  | :heavy_minus_sign:                                          | Tags associated with the Workspace.                         | [<br/>"production",<br/>"customer-data"<br/>]               |