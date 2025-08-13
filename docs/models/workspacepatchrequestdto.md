# WorkspacePatchRequestDTO

## Example Usage

```typescript
import { WorkspacePatchRequestDTO } from "cribl-mgmt-plane/models";

let value: WorkspacePatchRequestDTO = {
  alias: "Production Environment",
  description: "Main production workspace for customer data processing",
  tags: [
    "production",
    "customer-data",
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `alias`                                                | *string*                                               | :heavy_minus_sign:                                     | User-friendly alias for the workspace                  | Production Environment                                 |
| `description`                                          | *string*                                               | :heavy_minus_sign:                                     | Detailed description of the workspace                  | Main production workspace for customer data processing |
| `tags`                                                 | *string*[]                                             | :heavy_minus_sign:                                     | Tags associated with the workspace                     | [<br/>"production",<br/>"customer-data"<br/>]          |