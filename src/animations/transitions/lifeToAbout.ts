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
      y: "100vh",
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
        y: "0vh",
        scale: 1,
        borderRadius: "0px",
        ease: "power3.inOut",
      },
      0
    );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      // 테스트 중에는 clearProps 제거
      // gsap.set(aboutScenes, { clearProps: "all" });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default LifeToAboutAnimation;
