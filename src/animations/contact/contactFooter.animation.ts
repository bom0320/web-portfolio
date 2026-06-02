import gsap from "gsap";

interface CreateContactFooterAnimationParams {
  footer: HTMLElement | null;
}

type ContactFooterAnimationController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

export function createContactFooterAnimation({
  footer,
}: CreateContactFooterAnimationParams): ContactFooterAnimationController {
  if (!footer) {
    return {
      setProgress: () => {},
      destroy: () => {},
    };
  }

  gsap.set(footer, {
    y: 110,
    willChange: "transform",
  });

  const timeline = gsap.timeline({
    paused: true,
  });

  timeline.to(footer, {
    y: 0,
    duration: 1,
    ease: "power2.out",
  });

  return {
    setProgress(progress: number) {
      timeline.progress(clampProgress(progress));
    },

    destroy() {
      timeline.kill();

      gsap.set(footer, {
        clearProps: "transform,willChange",
      });
    },
  };
}
