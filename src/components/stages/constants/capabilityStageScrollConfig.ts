import type { CapabilityStageKey } from "./capabilityStageKeys";

type ScrollTriggerConfig = {
  start: string;
  end: string;
  scrub: number;
};

type NavigatorPinScrollConfig = {
  start: string;
  scrub: number;
  itemScrollLengthMultiplier: number;
  anticipatePin: number;
};

type CapabilityStageNormalScrollKey = Exclude<
  CapabilityStageKey,
  "navigatorPin"
>;

export type CapabilityStageScrollConfig = Record<
  CapabilityStageNormalScrollKey,
  ScrollTriggerConfig
> & {
  navigatorPin: NavigatorPinScrollConfig;
};

export const CAPABILITY_STAGE_DESKTOP_SCROLL_CONFIG = {
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
    start: "top 82%",
    end: "top 28%",
    scrub: 0.8,
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

  navigatorIntro: {
    start: "top 78%",
    end: "top 36%",
    scrub: 1,
  },

  navigatorPin: {
    start: "top top",
    scrub: 1,
    itemScrollLengthMultiplier: 1.45,
    anticipatePin: 1,
  },

  closing: {
    start: "top 82%",
    end: "top 18%",
    scrub: 1.6,
  },
} satisfies CapabilityStageScrollConfig;

export const CAPABILITY_STAGE_MOBILE_SCROLL_CONFIG = {
  ...CAPABILITY_STAGE_DESKTOP_SCROLL_CONFIG,

  introProof: {
    start: "top 72%",
    end: "bottom top",
    scrub: 0.9,
  },

  structure: {
    start: "top 82%",
    end: "center 36%",
    scrub: 1,
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

  navigatorIntro: {
    start: "top 86%",
    end: "top 34%",
    scrub: 0.65,
  },

  closing: {
    start: "top 86%",
    end: "top 22%",
    scrub: 1,
  },
} satisfies CapabilityStageScrollConfig;
