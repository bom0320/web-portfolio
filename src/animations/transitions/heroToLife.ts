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

    const lifeTrack = document.querySelector<HTMLElement>(
      ".js-life-motion-track"
    );

    const topRow = document.querySelector<HTMLElement>(
      ".js-life-motion-top .life-motion__row"
    );

    const bottomRow = document.querySelector<HTMLElement>(
      ".js-life-motion-bottom .life-motion__row"
    );

    if (!lifeStage || !lifeTrack) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    gsap.set(lifeStage, {
      y: "54vh",
      scale: 0.74,
      opacity: 0.58,
      filter: "brightness(0.62)",
      transformOrigin: "center center",
    });

    gsap.set(lifeTrack, {
      "--life-edge-start": 0,
      "--life-edge-soft": 0.45,
      "--life-edge-strong": 0.9,
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

    timeline.to(
      lifeTrack,
      {
        "--life-edge-start": 1,
        "--life-edge-soft": 1,
        "--life-edge-strong": 1,
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

        gsap.set([heroItems, lifeStage, lifeTrack, topRow, bottomRow], {
          clearProps:
            "transform,opacity,visibility,filter,--life-edge-start,--life-edge-soft,--life-edge-strong",
        });
      },
    };
  },
};

export default HeroToLifeAnimation;
