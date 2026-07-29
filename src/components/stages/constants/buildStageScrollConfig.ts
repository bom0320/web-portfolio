import type { BuildStageKey } from "./buildStageKeys";

type ScrollTriggerConfig = {
  start: string;
  end: string;
  scrub: number;
};

export type BuildStageScrollConfig = Record<BuildStageKey, ScrollTriggerConfig>;

export const BUILD_STAGE_DESKTOP_SCROLL_CONFIG = {
  intro: {
    start: "top top",
    end: "bottom bottom",
    scrub: 1.2,
  },

  introProof: {
    start: "top 66%",
    end: "bottom top",
    scrub: 1.2,
  },

  structure: {
    start: "top 78%",
    end: "bottom 62%",
    scrub: 1.1,
  },

  ai: {
    start: "top 78%",
    end: "bottom 64%",
    scrub: 1,
  },

  visual: {
    start: "top 78%",
    end: "top 42%",
    scrub: 1,
  },
} satisfies BuildStageScrollConfig;

export const BUILD_STAGE_MOBILE_SCROLL_CONFIG = {
  ...BUILD_STAGE_DESKTOP_SCROLL_CONFIG,

  introProof: {
    start: "top 72%",
    end: "bottom top",
    scrub: 0.9,
  },

  structure: {
    start: "top 82%",
    end: "center 36%",
    scrub: 0.85,
  },

  ai: {
    start: "top 86%",
    end: "top 34%",
    scrub: 0.65,
  },

  visual: {
    start: "top 86%",
    end: "top 34%",
    scrub: 0.65,
  },
} satisfies BuildStageScrollConfig;
