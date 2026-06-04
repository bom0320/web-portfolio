export const INTRO_TRANSITION_SELECTORS = {
  heroToLife: {
    heroItems: ".js-hero-exit-item",
    lifeCanvas: ".js-life-motion-canvas",
    lifeTrack: ".js-life-motion-track",
    topRow: ".js-life-motion-top .life-motion__row",
    bottomRow: ".js-life-motion-bottom .life-motion__row",
  },

  lifeToAbout: {
    aboutScenes: ".js-intro-about",
  },
} as const;
