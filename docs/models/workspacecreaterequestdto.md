# WorkspaceCreateRequestDTO

## Example Usage

```typescript
import { WorkspaceCreateRequestDTO } from "cribl-mgmt-plane/models";

let value: WorkspaceCreateRequestDTO = {
  workspaceId: "main",
  region: "us-west-2",
  alias: "Production Environment",
  description: "Main production workspace for customer data processing",
  tags: [
    "production",
    "customer-data",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `workspaceId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier for the workspace                                                    | main                                                                                   |
| `region`                                                                               | [models.WorkspaceCreateRequestDTORegion](../models/workspacecreaterequestdtoregion.md) | :heavy_check_mark:                                                                     | AWS region where the workspace is deployed                                             | us-west-2                                                                              |
| `alias`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | User-friendly alias for the workspace                                                  | Production Environment                                                                 |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | Detailed description of the workspace                                                  | Main production workspace for customer data processing                                 |
| `tags`                                                                                 | *string*[]                                                                             | :heavy_minus_sign:                                                                     | Tags associated with the workspace                                                     | [<br/>"production",<br/>"customer-data"<br/>]                                          |