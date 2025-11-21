/*
 * Cribl.Cloud Authentication Example
 *
 * This example demonstrates how to configure authentication on Cribl.Cloud
 * using OAuth2 credentials.
 *
 * 1. Create an SDK client with OAuth2 client credentials using the
 * client_oauth security scheme.
 * 2. Automatically handle token exchange and refresh.
 * 3. Validate the connection by checking health status and listing Workspaces.
 *
 * Prerequisites: Replace the placeholder values for ORG_ID, CLIENT_ID, and
 * CLIENT_SECRET with your Organization ID and Client ID and Secret.
 * To get your Client ID and Secret, follow the steps at
 * https://docs.cribl.io/cribl-as-code/sdks-auth/#sdks-auth-cloud.
 * Your Client ID and Secret are sensitive information and should be kept private.
 *
 * NOTE: This example is for Cribl.Cloud only.
 * It does not require .env file configuration.
 */

import { CriblMgmtPlane } from "cribl-mgmt-plane";

// Cribl.Cloud configuration: Replace the placeholder values
const CLIENT_ID = "your-client-id"; // Replace with your OAuth2 Client ID
const CLIENT_SECRET = "your-client-secret"; // Replace with your OAuth2 Client Secret
const ORG_ID = "your-org-id"; // Replace with your Organization ID

// Token URL and audience for Cribl Cloud OAuth2
const TOKEN_URL = "https://login.cribl.cloud/oauth/token";
const AUDIENCE = "https://api.cribl.cloud";

async function main() {
  // Create authenticated SDK client with OAuth2
  const criblMgmtPlane = new CriblMgmtPlane({
    security: {
      clientOauth: {
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        tokenURL: TOKEN_URL,
        audience: AUDIENCE,
      },
    },
  });

  console.log("✅ Cribl.Cloud Management Plane SDK client created");

  // Validate connection with health check
  const healthResponse = await criblMgmtPlane.health.get();

  // Health response is a union type - check if it has the status property (success type)
  if ("status" in healthResponse) {
    const status = healthResponse.status || "unknown";
    console.log(`✅ Health check passed! Status: ${status}`);
  } else {
    console.log(`❌ Health check failed: ${healthResponse.message}`);
  }

  // List all Workspaces for the Organization
  const workspacesResponse = await criblMgmtPlane.workspaces.list({
    organizationId: ORG_ID,
  });

  // Check if response is successful (has items property)
  if ("items" in workspacesResponse) {
    const { items, count } = workspacesResponse;

    const message =
      count > 0
        ? `✅ Client works! Found ${count} Workspace(s):`
        : `✅ Client works! No Workspaces found for Organization ${ORG_ID}`;
    console.log(message);

    for (const ws of items) {
      const aliasDisplay = ws.alias ? ` (${ws.alias})` : "";
      console.log(
        `  • ${ws.workspaceId}${aliasDisplay} - ${ws.state} in ${ws.region}`,
      );
    }
  } else {
    console.log(`❌ Error listing Workspaces: ${workspacesResponse.message}`);
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    const statusCode = error.statusCode;
    if (statusCode === 401) {
      console.log(
        "⚠️ Authentication failed! Check your CLIENT_ID and CLIENT_SECRET.",
      );
    } else if (statusCode === 429) {
      console.log(
        "⚠️ Uh oh, you've reached the rate limit! Try again in a few seconds.",
      );
    } else {
      console.log(`❌ Something went wrong: ${error}`);
    }
    process.exit(1);
  });
