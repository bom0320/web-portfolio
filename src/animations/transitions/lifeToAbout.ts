import gsap from "gsap";

type LifeToAboutController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

type LifeToAboutParams = {
  aboutStage: HTMLElement;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const LifeToAboutAnimation = {
  create({ aboutStage }: LifeToAboutParams): LifeToAboutController {
    gsap.set(aboutStage, {
      y: "100vh",
    });

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline.to(
      aboutStage,
      {
        y: "0vh",
        ease: "power4.inOut",
      },
      0
    );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set(aboutStage, {
        clearProps: "transform",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default LifeToAboutAnimation;
