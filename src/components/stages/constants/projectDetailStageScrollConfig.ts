type HeroHoldConfig = {
  start: string;
  holdLengthMultiplier: number;
};

export type ProjectDetailStageScrollConfig = {
  heroHold: HeroHoldConfig;
};

export const PROJECT_DETAIL_STAGE_DESKTOP_SCROLL_CONFIG = {
  heroHold: {
    start: "top top+=96",
    holdLengthMultiplier: 0.75,
  },
} satisfies ProjectDetailStageScrollConfig;
