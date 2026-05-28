import gsap from "gsap";

type VisualCapabilityAnimationController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const VisualCapabilityAnimation = {
  create(root: HTMLElement | null): VisualCapabilityAnimationController {
    if (!root) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    const header = root.querySelector<HTMLElement>(
      ".js-visual-capability-header"
    );

    gsap.set(header, {
      autoAlpha: 0,
      y: 36,
      filter: "blur(10px)",
    });

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline.to(header, {
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.22,
      ease: "none",
    });

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set([header].filter(Boolean), {
        clearProps: "all",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default VisualCapabilityAnimation;
