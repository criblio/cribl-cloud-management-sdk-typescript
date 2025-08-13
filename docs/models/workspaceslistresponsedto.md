# WorkspacesListResponseDTO

## Example Usage

```typescript
import { WorkspacesListResponseDTO } from "cribl-mgmt-plane/models";

let value: WorkspacesListResponseDTO = {
  items: [],
  count: 5,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `items`                                                  | [models.WorkspaceSchema](../models/workspaceschema.md)[] | :heavy_check_mark:                                       | List of workspaces                                       |                                                          |
| `count`                                                  | *number*                                                 | :heavy_check_mark:                                       | Total number of workspaces                               | 5                                                        |