export const BUILD_STAGE_KEYS = [
  "intro",
  "introProof",
  "structure",
  "ai",
  "visual",
] as const;

export type BuildStageKey = (typeof BUILD_STAGE_KEYS)[number];

export const BUILD_STAGE_PROGRESS_KEYS = [
  "introProof",
  "structure",
  "ai",
  "visual",
] as const;

export type BuildStageProgressKey = (typeof BUILD_STAGE_PROGRESS_KEYS)[number];
