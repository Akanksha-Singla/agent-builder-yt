import { defaultModelId } from "@/modules/builder/lib/models";

export type GithubConfig = {
    owner: string;
    repo: string;
    defaultPrNumber: string;
  };
  
  export type AgentDefinition = {
    schemaVersion: 1;
    instructions: string;
    model: { provider: "openai" | "google"; modelId: string };
    tools: { toolId: string; config: Record<string, unknown> }[];
    memory: { enabled: boolean };
    limits: { maxToolCalls: number; timeoutMs: number };
    github?: GithubConfig;
  };
  
  export function defaultDefinition(): AgentDefinition {
    return {
      schemaVersion: 1,
      instructions: "You are a helpful assistant.",
      // model: { provider: "openai", modelId: "gpt-4o-mini" },
      model: { provider: "google", modelId: defaultModelId },
      tools: [],
      memory: { enabled: false },
      limits: { maxToolCalls: 5, timeoutMs: 60000 },
    };
  }