# WorkspaceRole

Role assigned to the API Credential on the Workspace.

## Example Usage

```typescript
import { WorkspaceRole } from "cribl-mgmt-plane/models";

let value: WorkspaceRole = "admin";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"owner" | "admin" | "user" | "noaccess" | Unrecognized<string>
```