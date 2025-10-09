# State

Current state of the workspace

## Example Usage

```typescript
import { State } from "cribl-mgmt-plane/models";

let value: State = "Active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Provisioning" | "Active" | "Inactive" | "Failed" | "Deprovisioning" | Unrecognized<string>
```