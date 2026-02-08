# Security

## Example Usage

```typescript
import { Security } from "cribl-mgmt-plane/models";

let value: Security = {
  clientOauth: {
    clientID: "<id>",
    clientSecret: "<value>",
    audience: "https://api.cribl.cloud",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `clientOauth`                                              | [models.SchemeClientOauth](../models/schemeclientoauth.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `bearerAuth`                                               | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |