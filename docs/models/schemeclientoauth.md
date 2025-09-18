# SchemeClientOauth

## Example Usage

```typescript
import { SchemeClientOauth } from "cribl-mgmt-plane/models";

let value: SchemeClientOauth = {
  clientID: "<id>",
  clientSecret: "<value>",
  audience: "https://api.cribl.cloud",
};
```

## Fields

| Field                   | Type                    | Required                | Description             | Example                 |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `clientID`              | *string*                | :heavy_check_mark:      | N/A                     |                         |
| `clientSecret`          | *string*                | :heavy_check_mark:      | N/A                     |                         |
| `tokenURL`              | *string*                | :heavy_check_mark:      | N/A                     |                         |
| `audience`              | *string*                | :heavy_check_mark:      | N/A                     | https://api.cribl.cloud |