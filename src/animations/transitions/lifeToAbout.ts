import gsap from "gsap";

type LifeToAboutController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const LifeToAboutAnimation = {
  create(): LifeToAboutController {
    const lifeMotion = document.querySelector<HTMLElement>(".life-motion");
    const aboutScenes = document.querySelector<HTMLElement>(".js-about-scenes");

    if (!lifeMotion || !aboutScenes) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    gsap.set(aboutScenes, {
      y: "100vh",
      scale: 0.96,
      borderRadius: "40px 40px 0 0",
      transformOrigin: "center bottom",
    });

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline
      .to(
        lifeMotion,
        {
          y: "-22vh",
          scale: 0.96,
          autoAlpha: 0.35,
          ease: "power3.out",
        },
        0
      )
      .to(
        aboutScenes,
        {
          y: "0vh",
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

      gsap.set([lifeMotion, aboutScenes], {
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
