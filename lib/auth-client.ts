import { createAuthClient } from "better-auth/react";

// Same origin as the page — do not hardcode localhost when testing from LAN IP.
export const authClient = createAuthClient();