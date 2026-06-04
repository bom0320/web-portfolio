export const ABOUT_SCENE_SELECTORS = {
  hero: {
    root: ".js-about-hero",
    inner: ".js-about-hero-inner",
    eyebrow: ".js-about-hero-eyebrow",
    heading: ".js-about-hero-title",
    desc: ".js-about-hero-desc",
    visual: ".js-about-hero-visual",
    cta: ".js-about-hero-cta",
  },

  skills: {
    root: ".js-about-skills",
    inner: ".js-about-skills-inner",
    titleFill: ".js-about-skills-title-fill",

    carousel: ".js-skill-carousel",
    carouselViewport: ".js-skill-carousel-viewport",
    carouselTrack: ".js-skill-carousel-track",
    pagination: ".js-skill-pagination",
    paginationCursor: ".js-skill-pagination-cursor",

    gauges: ".skill-card__gauge",
    pacmans: ".skill-card__circle",
  },
} as const;
