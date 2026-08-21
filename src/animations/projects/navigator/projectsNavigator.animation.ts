import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";

import type { ProjectsNavigatorIntroAnimationElements } from "@/components/scenes/projects/dom";

const ProjectsNavigatorAnimation = {
  createIntro(
    elements: ProjectsNavigatorIntroAnimationElements
  ): AnimationController {
    const { root, eyebrow, title, desc } = elements;

    if (!root) {
      return createNoopController();
    }

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
};

export default ProjectsNavigatorAnimation;
