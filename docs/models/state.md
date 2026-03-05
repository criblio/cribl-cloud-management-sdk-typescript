# State

Current state of the Workspace.

## Example Usage

```typescript
import { State } from "cribl-mgmt-plane/models";

let value: State = "Active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Provisioning" | "Active" | "Inactive" | "Failed" | "Deprovisioning" | Unrecognized<string>
```