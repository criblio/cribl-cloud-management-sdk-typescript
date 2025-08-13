# State

Current state of the workspace

## Example Usage

```typescript
import { State } from "cribl-mgmt-plane/models";

let value: State = "Workspace-Active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Workspace-Requested" | "Workspace-Provisioning" | "Workspace-Provisioning-Failed" | "Workspace-Provisioned" | "Workspace-Active" | "Workspace-Updated" | "Workspace-Failed-Update" | "Workspace-Cleanup-Requested" | "Workspace-Cleanup-Started" | "Workspace-Cleanup-Terraform-Completed" | "Workspace-Cleanup-Terraform-Failed" | "Workspace-Cleanup-Completed" | "Workspace-Cleanup-Failed" | Unrecognized<string>
```