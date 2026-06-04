export const INTRO_TRANSITION_SELECTORS = {
  heroToLife: {
    heroItems: ".js-hero-exit-item",
    lifeStage: ".js-life-motion-stage",
    lifeTrack: ".js-life-motion-track",
    topRow: ".js-life-motion-top .life-motion__row",
    bottomRow: ".js-life-motion-bottom .life-motion__row",
  },

  lifeToAbout: {
    aboutScenes: ".js-intro-about",
  },
} as const;
