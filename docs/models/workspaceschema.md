# WorkspaceSchema

## Example Usage

```typescript
import { WorkspaceSchema } from "cribl-mgmt-plane/models";

let value: WorkspaceSchema = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the workspace                                                           | main                                                                                          |
| `region`                                                                                      | [models.Region](../models/region.md)                                                          | :heavy_check_mark:                                                                            | AWS region where the workspace is deployed                                                    | us-west-2                                                                                     |
| `lastUpdated`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the workspace was last updated                                                 | 2023-01-01 12:00:00 +0000 UTC                                                                 |
| `leaderFQDN`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Fully Qualified Domain Name of the workspace leader                                           | workspace-leader.example.com                                                                  |
| `state`                                                                                       | [models.State](../models/state.md)                                                            | :heavy_check_mark:                                                                            | Current state of the workspace                                                                | Workspace-Active                                                                              |
| `alias`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | User-friendly alias for the workspace                                                         | Production Environment                                                                        |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Detailed description of the workspace                                                         | Main production workspace for customer data processing                                        |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Tags associated with the workspace                                                            | [<br/>"production",<br/>"customer-data"<br/>]                                                 |