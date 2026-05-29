import gsap from "gsap";

type CapabilityClosingAnimationController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const CapabilityClosingAnimation = {
  create(root: HTMLElement | null): CapabilityClosingAnimationController {
    if (!root) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    const content = root.querySelector<HTMLElement>(
      ".js-capability-closing-content"
    );

    const eyebrow = root.querySelector<HTMLElement>(
      ".js-capability-closing-eyebrow"
    );

    const title = root.querySelector<HTMLElement>(
      ".js-capability-closing-title"
    );

    const description = root.querySelector<HTMLElement>(
      ".js-capability-closing-description"
    );

    const cta = root.querySelector<HTMLElement>(".js-capability-closing-cta");

    const elements = [eyebrow, title, description, cta].filter(Boolean);

    gsap.set(content, {
      autoAlpha: 1,
    });

    gsap.set(elements, {
      autoAlpha: 0,
      y: 36,
      filter: "blur(10px)",
    });

    gsap.set(cta, {
      scale: 0.96,
      transformOrigin: "center center",
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
        description,
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.18,
          ease: "none",
        },
        0.18
      )
      .to(
        cta,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.14,
          ease: "none",
        },
        0.34
      );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set([content, ...elements].filter(Boolean), {
        clearProps: "all",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default CapabilityClosingAnimation;
