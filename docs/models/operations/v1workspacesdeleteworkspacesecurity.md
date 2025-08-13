# V1WorkspacesDeleteWorkspaceSecurity

## Example Usage

```typescript
import { V1WorkspacesDeleteWorkspaceSecurity } from "cribl-mgmt-plane/models/operations";

let value: V1WorkspacesDeleteWorkspaceSecurity = {
  oauth2: {
    clientID: "<id>",
    clientSecret: "<value>",
  },
  bearer: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `oauth2`                                            | [models.SchemeOauth2](../../models/schemeoauth2.md) | :heavy_minus_sign:                                  | N/A                                                 |
| `bearer`                                            | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |