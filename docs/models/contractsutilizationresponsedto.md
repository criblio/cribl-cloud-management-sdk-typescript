# ContractsUtilizationResponseDTO

## Example Usage

```typescript
import { ContractsUtilizationResponseDTO } from "cribl-mgmt-plane/models";

let value: ContractsUtilizationResponseDTO = {
  contracts: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `contracts`                                                                  | [models.ContractUtilizationSchema](../models/contractutilizationschema.md)[] | :heavy_check_mark:                                                           | Contract utilization data, grouped by contract period.                       |