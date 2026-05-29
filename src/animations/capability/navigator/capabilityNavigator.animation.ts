import gsap from "gsap";

interface CapabilityNavigatorLayerTransitionParams {
  nextLayer: HTMLElement;
  onComplete?: () => void;
}

type CapabilityNavigatorIntroController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const CapabilityNavigatorAnimation = {
  createIntro(root: HTMLElement | null): CapabilityNavigatorIntroController {
    if (!root) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    const eyebrow = root.querySelector<HTMLElement>(
      ".js-capability-navigator-intro-eyebrow"
    );

    const title = root.querySelector<HTMLElement>(
      ".js-capability-navigator-intro-title"
    );

    const desc = root.querySelector<HTMLElement>(
      ".js-capability-navigator-intro-desc"
    );

    gsap.set([eyebrow, title, desc].filter(Boolean), {
      autoAlpha: 0,
      y: 36,
      filter: "blur(10px)",
    });

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline
      .to(eyebrow, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.12,
        ease: "none",
      })
      .to(
        title,
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.18,
          ease: "none",
        },
        0.06
      )
      .to(
        desc,
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.16,
          ease: "none",
        },
        0.18
      );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set([eyebrow, title, desc].filter(Boolean), {
        clearProps: "all",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },

  createLayerTransition({
    nextLayer,
    onComplete,
  }: CapabilityNavigatorLayerTransitionParams) {
    gsap.set(nextLayer, {
      opacity: 0,
      scale: 1.025,
    });

    return gsap
      .timeline({
        defaults: {
          duration: 0.5,
          ease: "power2.out",
        },
        onComplete,
      })
      .to(
        nextLayer,
        {
          opacity: 1,
          scale: 1,
        },
        0
      );
  },
};

export default CapabilityNavigatorAnimation;
