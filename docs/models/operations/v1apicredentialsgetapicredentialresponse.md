# V1ApiCredentialsGetApiCredentialResponse


## Supported Types

### `models.ApiCredentialResponseSchema`

```typescript
const value: models.ApiCredentialResponseSchema = {
  name: "Auto-Manage-Workspaces",
  description: "Used for automated Workspace management",
  enabled: true,
  organizationId: "org-123",
  clientId: "clientIdabcd1234EXAMPLE",
  roles: {
    organizationRole: "admin",
    workspaces: [
      {
        workspaceId: "main",
        workspaceRole: "admin",
        products: [
          {
            product: "stream",
            role: "admin",
          },
        ],
      },
    ],
  },
  createdBy: "user@example.com",
  createdDate: new Date("2024-08-15T12:34:56Z"),
  lastUpdatedBy: "user@example.com",
  lastUpdatedDate: new Date("2024-08-15T12:34:56Z"),
};
```

### `models.DefaultErrorDTO`

```typescript
const value: models.DefaultErrorDTO = {
  statusCode: 400,
  message: "Bad Request",
};
```

