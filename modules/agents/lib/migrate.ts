import type { BuilderDefinition } from "./schema";

/** Template definitions may be V1; we store V2 on the agent. */
export function migrateV1ToV2(definition: unknown): BuilderDefinition {
  if (
    definition &&
    typeof definition === "object" &&
    "version" in definition &&
    (definition as { version: number }).version === 2
  ) {
    return definition as BuilderDefinition;
  }

  return {
    version: 2,
    nodes: [],
    edges: [],
    ...(typeof definition === "object" && definition !== null ? definition : {}),
  };
}