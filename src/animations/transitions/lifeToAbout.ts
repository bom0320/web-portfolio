import gsap from "gsap";

type LifeToAboutController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const LifeToAboutAnimation = {
  create(): LifeToAboutController {
    const aboutScenes = document.querySelector<HTMLElement>(".js-about-scenes");

    if (!aboutScenes) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    gsap.set(aboutScenes, {
      yPercent: 100,
      scale: 0.98,
      borderRadius: "36px 36px 0 0",
      transformOrigin: "center bottom",
      autoAlpha: 1,
    });

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline.to(
      aboutScenes,
      {
        yPercent: 0,
        scale: 1,
        borderRadius: "0px",
        ease: "power4.inOut",
      },
      0
    );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set(aboutScenes, {
        clearProps: "all",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default LifeToAboutAnimation;
