import gsap from "gsap";

type LifeToAboutController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const LifeToAboutAnimation = {
  create(aboutScenes: HTMLElement | null): LifeToAboutController {
    if (!aboutScenes) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    gsap.set(aboutScenes, {
      y: "100vh",
      scale: 1,
      borderRadius: "0px",
      autoAlpha: 1,
    });

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline.to(
      aboutScenes,
      {
        y: "0vh",
        scale: 1,
        borderRadius: "0px",
        autoAlpha: 1,
        ease: "none",
      },
      0
    );

    return {
      setProgress(progress: number) {
        timeline.progress(clampProgress(progress));
      },

      destroy() {
        timeline.kill();

        gsap.set(aboutScenes, {
          clearProps: "transform,borderRadius,opacity,visibility",
        });
      },
    };
  },
};

export default LifeToAboutAnimation;
