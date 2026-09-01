type HeroHoldConfig = {
  holdLengthMultiplier: number;
};

export type ProjectDetailStageScrollConfig = {
  heroHold: HeroHoldConfig;
};

export const PROJECT_DETAIL_STAGE_DESKTOP_SCROLL_CONFIG = {
  heroHold: {
    holdLengthMultiplier: 0.75,
  },
} satisfies ProjectDetailStageScrollConfig;
