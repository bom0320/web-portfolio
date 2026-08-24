type ScrollTriggerConfig = {
  start: string;
  end: string;
  scrub: number;
};

type ShowcaseHoldConfig = {
  start: string;
  holdLengthMultiplier: number;
};

export type ProjectsStageScrollConfig = {
  showcaseIntro: ScrollTriggerConfig;
  showcaseHold: ShowcaseHoldConfig;
  closing: ScrollTriggerConfig;
};

export const PROJECTS_STAGE_DESKTOP_SCROLL_CONFIG = {
  showcaseIntro: {
    start: "top 78%",
    end: "top 36%",
    scrub: 1,
  },

  showcaseHold: {
    start: "top top",
    holdLengthMultiplier: 0.85,
  },

  closing: {
    start: "top 82%",
    end: "top 18%",
    scrub: 1.6,
  },
} satisfies ProjectsStageScrollConfig;

export const PROJECTS_STAGE_MOBILE_SCROLL_CONFIG = {
  ...PROJECTS_STAGE_DESKTOP_SCROLL_CONFIG,

  showcaseIntro: {
    start: "top 86%",
    end: "top 34%",
    scrub: 0.65,
  },

  closing: {
    start: "top 86%",
    end: "top 22%",
    scrub: 1,
  },
} satisfies ProjectsStageScrollConfig;
