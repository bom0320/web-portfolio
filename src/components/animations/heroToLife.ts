import gsap from "gsap";

type HeroToLifeController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const HeroToLifeAnimation = {
  create(): HeroToLifeController {
    const enterElement = document.querySelector<HTMLElement>(
      ".js-life-motion-enter"
    );

    if (!enterElement) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    gsap.set(enterElement, {
      y: "100vh",
    });

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline.to(
      enterElement,
      {
        y: "0vh",
        ease: "none",
      },
      0
    );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set(enterElement, {
        clearProps: "transform",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default HeroToLifeAnimation;
