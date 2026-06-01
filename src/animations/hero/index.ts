import gsap from "gsap";

type HeroIntroController = {
  destroy: () => void;
};

type HeroExitController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const getHeroElements = (section: HTMLElement) => {
  const introItems =
    section.querySelectorAll<HTMLElement>(".js-hero-exit-item");

  const description = section.querySelector<HTMLElement>(".hero__description");
  const meta = section.querySelector<HTMLElement>(".hero__meta");
  const visual = section.querySelector<HTMLElement>(".hero__visual");

  return {
    introItems,
    description,
    meta,
    visual,
  };
};

const createHeroIntro = (section: HTMLElement): HeroIntroController => {
  const { introItems } = getHeroElements(section);

  gsap.set(introItems, {
    y: 28,
    autoAlpha: 0,
  });

  const timeline = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  timeline.to(introItems, {
    y: 0,
    autoAlpha: 1,
    duration: 0.9,
    stagger: 0.1,
  });

  return {
    destroy() {
      timeline.kill();

      gsap.set(introItems, {
        clearProps: "transform,opacity,visibility",
      });
    },
  };
};

const createHeroExit = (section: HTMLElement): HeroExitController => {
  const { description, meta, visual } = getHeroElements(section);

  const timeline = gsap.timeline({
    paused: true,
    defaults: {
      ease: "none",
    },
  });

  timeline.to(
    visual,
    {
      y: -90,
      autoAlpha: 0,
    },
    0
  );

  timeline.to(
    description,
    {
      y: -52,
      autoAlpha: 0,
    },
    0.08
  );

  timeline.to(
    meta,
    {
      y: -40,
      autoAlpha: 0,
    },
    0.14
  );

  return {
    setProgress(progress: number) {
      timeline.progress(clampProgress(progress));
    },

    destroy() {
      timeline.kill();

      gsap.set([description, meta, visual], {
        clearProps: "transform,opacity,visibility",
      });
    },
  };
};

const HeroAnimation = {
  intro: createHeroIntro,
  exit: createHeroExit,
};

export default HeroAnimation;
