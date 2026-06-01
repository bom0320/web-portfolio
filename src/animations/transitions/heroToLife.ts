import gsap from "gsap";

type HeroToLifeController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const HeroToLifeAnimation = {
  create(): HeroToLifeController {
    const heroItems = document.querySelectorAll<HTMLElement>(
      ".hero .js-hero-exit-item"
    );

    const lifeEnter = document.querySelector<HTMLElement>(
      ".js-life-motion-enter"
    );

    const lifeTrack = document.querySelector<HTMLElement>(
      ".js-life-motion-track"
    );

    const topRow = document.querySelector<HTMLElement>(".js-life-motion-top");
    const bottomRow = document.querySelector<HTMLElement>(
      ".js-life-motion-bottom"
    );

    if (!lifeEnter || !lifeTrack) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    gsap.set(lifeEnter, {
      autoAlpha: 1,
    });

    gsap.set(lifeTrack, {
      xPercent: -50,
      y: 0,
      scale: 0.78,
      opacity: 0.42,
      filter: "brightness(0.5)",
      transformOrigin: "center bottom",
    });

    gsap.set(topRow, {
      xPercent: 0,
    });

    gsap.set(bottomRow, {
      xPercent: -12,
    });

    const timeline = gsap.timeline({
      paused: true,
      defaults: {
        ease: "none",
      },
    });

    timeline.to(
      heroItems,
      {
        y: -90,
        autoAlpha: 0,
        stagger: {
          each: 0.035,
          from: "end",
        },
      },
      0
    );

    timeline.to(
      lifeTrack,
      {
        y: "-56vh",
        scale: 1,
        opacity: 1,
        filter: "brightness(1)",
      },
      0
    );

    timeline.to(
      topRow,
      {
        xPercent: -8,
      },
      0
    );

    timeline.to(
      bottomRow,
      {
        xPercent: -20,
      },
      0
    );

    return {
      setProgress(progress: number) {
        timeline.progress(clampProgress(progress));
      },

      destroy() {
        timeline.kill();

        gsap.set([heroItems, lifeEnter, lifeTrack, topRow, bottomRow], {
          clearProps: "transform,opacity,visibility,filter",
        });
      },
    };
  },
};

export default HeroToLifeAnimation;
