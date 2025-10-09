# V1WorkspacesListWorkspacesResponse


## Supported Types

### `models.WorkspacesListResponseDTO`

```typescript
const value: models.WorkspacesListResponseDTO = {
  items: [
    {
      workspaceId: "main",
      region: "us-west-2",
      lastUpdated: new Date("2023-01-01T12:00:00Z"),
      leaderFQDN: "workspace-leader.example.com",
      state: "Active",
      alias: "Production Environment",
      description: "Main production workspace for customer data processing",
      tags: [
        "production",
        "customer-data",
      ],
    },
  ],
  count: 5,
};
```

### `models.DefaultErrorDTO`

```typescript
const value: models.DefaultErrorDTO = {
  statusCode: 4882.16,
  message: "<value>",
};
```

