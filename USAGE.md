<!-- Start SDK Example Usage [usage] -->
```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane({
  security: {
    clientOauth: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
      audience: "https://publicapi.cribl.cloud",
    },
  },
});

async function run() {
  await criblMgmtPlane.health.get();
}

run();

```
<!-- End SDK Example Usage [usage] -->