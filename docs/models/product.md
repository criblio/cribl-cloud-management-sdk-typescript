# Product

Product name.

## Example Usage

```typescript
import { Product } from "cribl-mgmt-plane/models";

let value: Product = "stream";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"edge" | "search" | "stream" | "lake" | Unrecognized<string>
```