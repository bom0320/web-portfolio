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

export type ProjectsStageScrollConfig = {
  navigatorIntro: ScrollTriggerConfig;
  navigatorPin: NavigatorPinScrollConfig;
  closing: ScrollTriggerConfig;
};

export const PROJECTS_STAGE_DESKTOP_SCROLL_CONFIG = {
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
} satisfies ProjectsStageScrollConfig;

export const PROJECTS_STAGE_MOBILE_SCROLL_CONFIG = {
  ...PROJECTS_STAGE_DESKTOP_SCROLL_CONFIG,

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
} satisfies ProjectsStageScrollConfig;
