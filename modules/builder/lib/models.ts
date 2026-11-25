// Gemini chat models that support tool calling (Google AI Studio).
export const popularGeminiModels = [
  "gemini-2.0-flash",
  "gemini-2.5-flash",
  "gemini-2.5-pro",
  "gemini-1.5-flash",
  "gemini-1.5-pro",
];

// OpenAI chat models that support tool calling.
// export const popularGptModels = [
//   "gpt-4o-mini",
//   "gpt-4o",
//   "gpt-4.1-mini",
//   "gpt-4.1",
//   "o3-mini",
// ];

/** Default model for new agents and UI fallbacks */
export const defaultModelId = "gemini-2.0-flash";