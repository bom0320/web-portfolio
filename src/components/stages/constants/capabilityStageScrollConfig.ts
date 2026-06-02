export const CAPABILITY_STAGE_SCROLL_CONFIG = {
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
} as const;
