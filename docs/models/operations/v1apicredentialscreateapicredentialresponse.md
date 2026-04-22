# V1ApiCredentialsCreateApiCredentialResponse


## Supported Types

### `models.ApiCredentialCreateResponseSchema`

```typescript
const value: models.ApiCredentialCreateResponseSchema = {
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
  ipAllowlist: [
    "10.0.0.1/32",
  ],
  createdBy: "user@example.com",
  createdDate: new Date("2024-08-15T12:34:56Z"),
  lastUpdatedBy: "user@example.com",
  lastUpdatedDate: new Date("2024-08-15T12:34:56Z"),
  clientSecret: "clientSecretabcd1234EXAMPLE",
};
```

### `models.DefaultErrorDTO`

```typescript
const value: models.DefaultErrorDTO = {
  statusCode: 400,
  message: "Bad Request",
};
```

