# V1ApiCredentialsGetApiCredentialResponse


## Supported Types

### `models.ApiCredentialResponseSchema`

```typescript
const value: models.ApiCredentialResponseSchema = {
  name: "Auto-Manage-Workspaces",
  description: "Used for automated Workspace management",
  enabled: true,
  workspaceId: "main",
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
  createdDate: "2024-08-15T12:34:56Z",
  lastUpdatedBy: "user@example.com",
  lastUpdatedDate: "2024-08-15T12:34:56Z",
  clientSecret: "clientSecretabcd1234EXAMPLE",
};
```

### `models.DefaultErrorDTO`

```typescript
const value: models.DefaultErrorDTO = {
  statusCode: 4882.16,
  message: "<value>",
};
```

