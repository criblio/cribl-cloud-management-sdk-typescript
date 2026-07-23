# CreditsStatsResponseDTO

## Example Usage

```typescript
import { CreditsStatsResponseDTO } from "cribl-mgmt-plane/models";

let value: CreditsStatsResponseDTO = {
  totalCreditsRemaining: 5127123.69,
  totalCreditsUsed: 2555625.49,
  totalCreditsAcquired: 11061354.6,
  contracts: [
    {
      startDate: new Date("2025-09-17T00:00:00Z"),
      endDate: new Date("2026-08-02T00:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `totalCreditsRemaining`                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | Total credits remaining across all contracts.                                                  | 5.12712369e+06                                                                                 |
| `totalCreditsUsed`                                                                             | *number*                                                                                       | :heavy_check_mark:                                                                             | Total credits consumed across all contracts.                                                   | 2.55562549e+06                                                                                 |
| `totalCreditsAcquired`                                                                         | *number*                                                                                       | :heavy_check_mark:                                                                             | Total credits acquired across all contracts.                                                   | 1.10613546e+07                                                                                 |
| `contracts`                                                                                    | [models.CreditsStatsContractSchema](../models/creditsstatscontractschema.md)[]                 | :heavy_minus_sign:                                                                             | Contract periods ordered by contract start date in reverse chronological order (newest first). |                                                                                                |