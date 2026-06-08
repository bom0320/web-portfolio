import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";
import type { ContactFooterAnimationElements } from "@/components/scenes/contact/dom";

export function createContactFooterAnimation({
  footer,
}: ContactFooterAnimationElements): AnimationController {
  if (!footer) {
    return createNoopController();
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

  const setProgress = (progress: number) => {
    timeline.progress(clampProgress(progress));
  };

  const destroy = () => {
    timeline.kill();

    gsap.set(footer, {
      clearProps: "transform,willChange",
    });
  };

  return {
    setProgress,
    destroy,
  };
}
