# OrganizationRole

Organization-level role

## Example Usage

```typescript
import { OrganizationRole } from "cribl-mgmt-plane/models";

let value: OrganizationRole = "admin";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"owner" | "admin" | "user" | Unrecognized<string>
```