import { Suspense } from "react";
import { Logo } from "@/components/logo";
import { requireAuth } from "@/modules/auth/lib/session";
import { UserButton } from "@/modules/auth/components/user-button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";

function DashboardFrame({
  children,
  footer,
}: {
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-1 bg-background">
      <aside className="flex w-56 shrink-0 flex-col border-r border-border">
        <div className="border-b border-border px-4 py-4">
          <Logo href="/agents" />
        </div>
        <nav className="flex flex-col gap-1 p-3">
          <Link
            href="/agents"
            className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            My Agents
          </Link>
          <Link
            href="/agents/new"
            className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
          >
            New Agent
          </Link>
        </nav>
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-border p-3">
          {footer}
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">{children}</div>
    </div>
  );
}

async function DashboardWithSession({ children }: { children: React.ReactNode }) {
  const session = await requireAuth();

  return (
    <DashboardFrame
      footer={
        <>
          <UserButton user={session.user} />
          <ModeToggle />
        </>
      }
    >
      {children}
    </DashboardFrame>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <DashboardFrame footer={<ModeToggle />}>{children}</DashboardFrame>
      }
    >
      <DashboardWithSession>{children}</DashboardWithSession>
    </Suspense>
  );
}