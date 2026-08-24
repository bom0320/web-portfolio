type HeroHoldConfig = {
  start: string;
  holdLengthMultiplier: number;
};

export type ProjectDetailStageScrollConfig = {
  heroHold: HeroHoldConfig;
};

export const PROJECT_DETAIL_STAGE_DESKTOP_SCROLL_CONFIG = {
  heroHold: {
    start: "top top",
    holdLengthMultiplier: 0.65,
  },
} satisfies ProjectDetailStageScrollConfig;
