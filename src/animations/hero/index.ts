import gsap from "gsap";

type HeroIntroController = {
  destroy: () => void;
};

const createHeroIntro = (section: HTMLElement): HeroIntroController => {
  const items = section.querySelectorAll<HTMLElement>(".js-hero-exit-item");

  gsap.set(items, {
    y: 28,
    autoAlpha: 0,
  });

  const timeline = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  timeline.to(items, {
    y: 0,
    autoAlpha: 1,
    duration: 0.9,
    stagger: 0.1,
  });

  return {
    destroy() {
      timeline.kill();

      gsap.set(items, {
        clearProps: "transform,opacity,visibility",
      });
    },
  };
};

const HeroAnimation = {
  intro: createHeroIntro,
};

export default HeroAnimation;
