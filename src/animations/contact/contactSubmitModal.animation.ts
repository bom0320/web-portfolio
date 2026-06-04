import gsap from "gsap";

export type ContactSubmitModalAnimationElements = {
  root: HTMLElement;
  backdrop: HTMLElement;
  card: HTMLElement;
};

export type ContactSubmitModalAnimationController = {
  open: () => gsap.core.Timeline;
  close: (onComplete?: () => void) => gsap.core.Timeline;
  destroy: () => void;
};

export function createContactSubmitModalAnimation({
  root,
  backdrop,
  card,
}: ContactSubmitModalAnimationElements): ContactSubmitModalAnimationController {
  const open = () => {
    gsap.set(root, {
      autoAlpha: 1,
    });

    gsap.set(backdrop, {
      autoAlpha: 0,
    });

    gsap.set(card, {
      autoAlpha: 0,
      y: 34,
      scale: 0.96,
      filter: "blur(10px)",
    });

    return gsap
      .timeline({
        defaults: {
          ease: "power3.out",
        },
      })
      .to(backdrop, {
        autoAlpha: 1,
        duration: 0.28,
      })
      .to(
        card,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.42,
        },
        0.04
      );
  };

  const close = (onComplete?: () => void) => {
    return gsap
      .timeline({
        defaults: {
          ease: "power2.inOut",
        },
        onComplete,
      })
      .to(card, {
        autoAlpha: 0,
        y: 22,
        scale: 0.97,
        filter: "blur(8px)",
        duration: 0.22,
      })
      .to(
        backdrop,
        {
          autoAlpha: 0,
          duration: 0.2,
        },
        0.04
      )
      .to(
        root,
        {
          autoAlpha: 0,
          duration: 0.2,
        },
        0.04
      );
  };

  const destroy = () => {
    gsap.killTweensOf([root, backdrop, card]);

    gsap.set([root, backdrop, card], {
      clearProps: "all",
    });
  };

  return {
    open,
    close,
    destroy,
  };
}
