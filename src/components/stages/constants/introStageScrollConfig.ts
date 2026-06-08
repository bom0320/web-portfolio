export const INTRO_STAGE_SCROLL_CONFIG = {
  heroToLife: {
    start: "top top",
    scrollLengthMultiplier: 1.2,
    scrub: 1.2,
  },

  lifeToAbout: {
    startOffsetMultiplier: 1.1,
    scrollLengthMultiplier: 3.2,
    scrub: 1.2,
    enterRatio: 0.32,
    sceneRatio: 0.68,
  },
} as const;
