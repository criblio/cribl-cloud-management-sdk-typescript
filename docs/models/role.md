# Role

Role assigned to the API Credential on the product.

## Example Usage

```typescript
import { Role } from "cribl-mgmt-plane/models";

let value: Role = "admin";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"admin" | "editor" | "reader" | "user" | "noaccess" | Unrecognized<string>
```