import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";
import type { AboutHeroAnimationElements } from "@/components/scenes/about/dom";

const AboutHeroAnimation = {
  create(elements: AboutHeroAnimationElements): AnimationController {
    const { root, eyebrow, heading, meta, desc, visual, cta } = elements;

    if (!root || !heading || !desc) {
      return createNoopController();
    }

    const targets = [eyebrow, heading, meta, desc, visual, cta].filter(
      (target): target is HTMLElement => Boolean(target)
    );

    /*
     * Text elements
     */
    gsap.set(
      [eyebrow, heading, meta, desc, cta].filter(
        (target): target is HTMLElement => Boolean(target)
      ),
      {
        y: 28,
        autoAlpha: 0,
      }
    );

    /*
     * Profile visual
     *
     * 세로형 사진이 아래에서 위로 열리는
     * editorial reveal 방식.
     */
    if (visual) {
      gsap.set(visual, {
        y: 24,
        autoAlpha: 0,
        clipPath: "inset(100% 0% 0% 0%)",
      });
    }

    const timeline = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power3.out",
      },
    });

    /*
     * Image reveal
     */
    if (visual) {
      timeline.to(
        visual,
        {
          y: 0,
          autoAlpha: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.15,
        },
        0
      );
    }

    /*
     * ABOUT ME
     */
    if (eyebrow) {
      timeline.to(
        eyebrow,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
        },
        0.08
      );
    }

    /*
     * Main heading
     */
    timeline.to(
      heading,
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.82,
      },
      0.15
    );

    /*
     * Role / Focus
     */
    if (meta) {
      timeline.to(
        meta,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
        },
        0.28
      );
    }

    /*
     * Description
     */
    timeline.to(
      desc,
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
      },
      0.36
    );

    /*
     * CTA
     */
    if (cta) {
      timeline.to(
        cta,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
        },
        0.46
      );
    }

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set(targets, {
        clearProps: "all",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default AboutHeroAnimation;
