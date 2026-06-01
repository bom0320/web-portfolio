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

    const lifeStage = document.querySelector<HTMLElement>(
      ".js-life-motion-stage"
    );

    const topRow = document.querySelector<HTMLElement>(
      ".js-life-motion-top .life-motion__row"
    );

    const bottomRow = document.querySelector<HTMLElement>(
      ".js-life-motion-bottom .life-motion__row"
    );

    if (!lifeStage) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    gsap.set(lifeStage, {
      y: "52vh",
      scale: 0.78,
      opacity: 0.42,
      filter: "brightness(0.5)",
      transformOrigin: "center center",
    });

    if (topRow) {
      gsap.set(topRow, {
        xPercent: 0,
      });
    }

    if (bottomRow) {
      gsap.set(bottomRow, {
        xPercent: -12,
      });
    }

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
      lifeStage,
      {
        y: "0vh",
        scale: 1,
        opacity: 1,
        filter: "brightness(1)",
      },
      0
    );

    if (topRow) {
      timeline.to(
        topRow,
        {
          xPercent: -6,
        },
        0
      );
    }

    if (bottomRow) {
      timeline.to(
        bottomRow,
        {
          xPercent: -18,
        },
        0
      );
    }

    return {
      setProgress(progress: number) {
        timeline.progress(clampProgress(progress));
      },

      destroy() {
        timeline.kill();

        gsap.set([heroItems, lifeStage, topRow, bottomRow], {
          clearProps: "transform,opacity,visibility,filter",
        });
      },
    };
  },
};

export default HeroToLifeAnimation;
