<!-- Start SDK Example Usage [usage] -->
```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane({
  security: {
    clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
    clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  await criblMgmtPlane.health.getHealthStatus();
}

run();

```
<!-- End SDK Example Usage [usage] -->