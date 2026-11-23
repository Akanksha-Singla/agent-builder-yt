export type BuilderDefinition = Record<string, unknown>;

export type SaveAgentInput = {
  name: string;
  description: string;
  draftDefinition: BuilderDefinition;
  canvas: unknown;
};

/** Accept any JSON object for now; tighten validation later. */
export const builderDefinitionSchema = {
  parse(value: unknown): BuilderDefinition {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
      throw new Error("draftDefinition must be an object");
    }
    return value as BuilderDefinition;
  },
};

/** Empty agent workflow stored in `draftDefinition`. */
export function defaultDefinition(): BuilderDefinition {
  return { version: 2, nodes: [], edges: [] };
}