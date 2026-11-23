export type AgentTemplate = {
  id: string;
  name: string;
  description: string;
  icon: string;
  welcomeMessage: string;
  starterPrompts: string[];
  definition: unknown;
};

export function getTemplate(templateId: string): AgentTemplate | undefined {
  // Add starter templates here when you need them.
  void templateId;
  return undefined;
}