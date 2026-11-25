"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export function SignInForm() {
  return (
    <Button
      type="button"
      className="w-full"
      size="lg"
      onClick={() => {
        void authClient.signIn.social({
          provider: "github",
          callbackURL: "/agents",
        });
      }}
    >
      Continue with GitHub
    </Button>
  );
}