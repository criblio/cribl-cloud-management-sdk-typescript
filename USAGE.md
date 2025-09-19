<!-- Start SDK Example Usage [usage] -->
```typescript
import { CriblMgmtPlane } from "cribl-mgmt-plane";

const criblMgmtPlane = new CriblMgmtPlane({
  security: {
    clientOauth: {
      clientID: process.env["CRIBLMGMTPLANE_CLIENT_ID"] ?? "",
      clientSecret: process.env["CRIBLMGMTPLANE_CLIENT_SECRET"] ?? "",
      tokenURL: process.env["CRIBLMGMTPLANE_TOKEN_URL"] ?? "",
      audience: "https://api.cribl.cloud",
    },
  },
});

async function run() {
  const result = await criblMgmtPlane.health.get();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->