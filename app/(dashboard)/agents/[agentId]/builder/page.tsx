import { Suspense } from "react";
import { BuilderPageContent } from "@/modules/agents/components/builder-page-content";
import { Spinner } from "@/components/ui/spinner";

async function BuilderPageInner({
  params,
}: {
  params: Promise<{ agentId: string }>;
}) {
  const { agentId } = await params;
  return <BuilderPageContent agentId={agentId} />;
}

export default function BuilderPage({
  params,
}: {
  params: Promise<{ agentId: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex flex-1 items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <BuilderPageInner params={params} />
    </Suspense>
  );
}