# Region

AWS region where the workspace is deployed

## Example Usage

```typescript
import { Region } from "cribl-mgmt-plane/models";

let value: Region = "us-west-2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"us-west-2" | "us-east-1" | "us-east-2" | "eu-central-1" | "eu-central-2" | "eu-west-2" | "ap-southeast-1" | "ap-southeast-2" | "ca-central-1" | Unrecognized<string>
```