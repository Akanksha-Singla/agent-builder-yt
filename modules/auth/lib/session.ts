import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

/** Read the current session from cookies (server-side). */
export async function getSession() {
  return auth.api.getSession({
    headers: await headers(),
  });
}

/** Use on pages that must be logged in. Guests are sent to /login. */
export async function requireAuth(loginPath = "/login") {
  const session = await getSession();
  if (!session) redirect(loginPath);
  return session;
}

/** Use on login/sign-up pages. Signed-in users are sent home. */
export async function requireUnauth(homePath = "/") {
  const session = await getSession();
  if (session) redirect(homePath);
}