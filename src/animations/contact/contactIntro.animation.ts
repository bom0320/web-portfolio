import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";
import type { ContactIntroAnimationElements } from "@/components/scenes/contact/dom";

export function createContactIntroAnimation(
  elements: ContactIntroAnimationElements
): AnimationController {
  const { root, eyebrow, title, description } = elements;

  if (!root) {
    return createNoopController();
  }

  const revealElements = [eyebrow, title, description].filter(
    (element): element is HTMLElement => Boolean(element)
  );

  gsap.set(revealElements, {
    autoAlpha: 0,
    y: 36,
    filter: "blur(10px)",
  });

  const timeline = gsap.timeline({
    paused: true,
  });

  if (eyebrow) {
    timeline.to(eyebrow, {
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.14,
      ease: "none",
    });
  }

  if (title) {
    timeline.to(
      title,
      {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.2,
        ease: "none",
      },
      0.08
    );
  }

  if (description) {
    timeline.to(
      description,
      {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.18,
        ease: "none",
      },
      0.22
    );
  }

  const setProgress = (progress: number) => {
    timeline.progress(clampProgress(progress));
  };

  const destroy = () => {
    timeline.kill();

    gsap.set(revealElements, {
      clearProps: "all",
    });
  };

  return {
    setProgress,
    destroy,
  };
}
