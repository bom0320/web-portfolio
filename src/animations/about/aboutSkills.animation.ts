import gsap from "gsap";

import type { AboutSkillsAnimationElements } from "@/components/scenes/about/dom";

type SkillPaginationCursorController = {
  updateTarget: () => void;
  tick: () => void;
  destroy: () => void;
};

const lerp = (start: number, end: number, amount: number) =>
  start + (end - start) * amount;

const parsePixelValue = (value: string) => Number(value.replace("px", ""));

const AboutSkillsAnimation = {
  createSkillTitleFill(fillGroup: SVGGElement | null) {
    if (!fillGroup) return null;

    return gsap.fromTo(
      fillGroup,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.9,
        ease: "none",
        paused: true,
      }
    );
  },

  createPaginationCursor(
    elements: AboutSkillsAnimationElements
  ): SkillPaginationCursorController {
    const { carouselViewport, pagination, paginationCursor, pacmans } =
      elements;

    if (!carouselViewport || !paginationCursor || !pagination) {
      return {
        updateTarget: () => {},
        tick: () => {},
        destroy: () => {},
      };
    }

    let targetX = 0;
    let currentX = 0;

    carouselViewport.scrollLeft = 0;

    gsap.set(paginationCursor, {
      x: 0,
    });

    const getCursorStep = () => {
      const styles = getComputedStyle(pagination);

      const dotSize = parsePixelValue(
        styles.getPropertyValue("--skill-pagination-dot-size")
      );

      const gap = parsePixelValue(
        styles.getPropertyValue("--skill-pagination-gap")
      );

      return dotSize + gap;
    };

    const updateTarget = () => {
      const maxScrollLeft =
        carouselViewport.scrollWidth - carouselViewport.clientWidth;

      const maxIndex = Math.max(pacmans.length - 1, 0);

      if (maxScrollLeft <= 0 || maxIndex <= 0) {
        targetX = 0;
        return;
      }

      const scrollRatio = carouselViewport.scrollLeft / maxScrollLeft;

      targetX = scrollRatio * maxIndex * getCursorStep();
    };

    const tick = () => {
      currentX = lerp(currentX, targetX, 0.16);

      gsap.set(paginationCursor, {
        x: currentX,
      });
    };

    const destroy = () => {
      gsap.set(paginationCursor, {
        clearProps: "transform",
      });
    };

    return {
      updateTarget,
      tick,
      destroy,
    };
  },

  intro(elements: AboutSkillsAnimationElements) {
    const { root, gauges, pacmans } = elements;

    if (!root) {
      return gsap.timeline({ paused: true });
    }

    const reset = () => {
      gsap.set(pacmans, {
        scale: 0.85,
        opacity: 0,
        filter: "blur(6px)",
      });

      gauges.forEach((gauge) => {
        gsap.set(gauge, { "--deg": "0deg" });
      });
    };

    reset();

    const timeline = gsap.timeline({
      paused: true,
      onStart: reset,
    });

    timeline.to(pacmans, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.12,
    });

    timeline.add(() => {
      gauges.forEach((gauge, index) => {
        const target = Number(gauge.dataset.deg ?? 0);

        gsap.to(gauge, {
          "--deg": `${target}deg`,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.08,
        });
      });
    }, "<0.05");

    return timeline;
  },
};

export default AboutSkillsAnimation;
