<!-- Start SDK Example Usage [usage] -->
```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["CRIBLMGMTPLANE_BEARER_AUTH"] ?? "",
});

async function run() {
  await criblMgmtPlane.dummyServiceStatus();
}

run();

```
<!-- End SDK Example Usage [usage] -->