export const CAPABILITY_STAGE_KEYS = [
  "intro",
  "introProof",
  "structure",
  "ai",
  "visual",
  "navigatorIntro",
  "navigatorPin",
  "closing",
] as const;

export type CapabilityStageKey = (typeof CAPABILITY_STAGE_KEYS)[number]; // 요소의 타입만 추출

export const CAPABILITY_STAGE_PROGRESS_KEYS = [
  "introProof",
  "structure",
  "ai",
  "visual",
  "navigatorIntro",
] as const;

export type CapabilityStageProgressKey =
  (typeof CAPABILITY_STAGE_PROGRESS_KEYS)[number];
