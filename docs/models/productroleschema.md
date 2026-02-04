# ProductRoleSchema

## Example Usage

```typescript
import { ProductRoleSchema } from "cribl-mgmt-plane/models";

let value: ProductRoleSchema = {
  product: "stream",
  role: "admin",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `product`                                           | [models.Product](../models/product.md)              | :heavy_check_mark:                                  | Product name.                                       | stream                                              |
| `role`                                              | [models.Role](../models/role.md)                    | :heavy_check_mark:                                  | Role assigned to the API Credential on the product. | admin                                               |