# WorkspaceRole

Role assigned to the API Credential on the Workspace.

## Example Usage

```typescript
import { WorkspaceRole } from "cribl-mgmt-plane/models";

let value: WorkspaceRole = "admin";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"owner" | "admin" | "user" | "noaccess" | Unrecognized<string>
```