export const ABOUT_SCENE_SELECTORS = {
  hero: {
    root: ".js-about-hero",
    inner: ".js-about-hero-inner",
    eyebrow: ".js-about-hero-eyebrow",
    heading: ".js-about-hero-title",
    meta: ".js-about-hero-meta",
    desc: ".js-about-hero-desc",
    visual: ".js-about-hero-visual",
    cta: ".js-about-hero-cta",

    character: ".js-about-character",
    characterPupils: ".js-about-character-pupil",
    characterLids: ".js-about-character-lid",
    characterMouth: ".js-about-character-mouth",
  },

  skills: {
    root: ".js-about-skills",
    inner: ".js-about-skills-inner",
  },
} as const;
