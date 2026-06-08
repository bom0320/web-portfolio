import gsap from "gsap";

import type { AboutSkillsAnimationElements } from "@/components/scenes/about/dom";

type SkillPaginationIndicatorController = {
  updateTarget: () => void;
  tick: () => void;
  destroy: () => void;
};

const lerp = (start: number, end: number, amount: number) =>
  start + (end - start) * amount;

const parsePixelValue = (value: string, fallback: number) => {
  const trimmed = value.replace("px", "").trim();

  if (!trimmed) {
    return fallback;
  }

  const parsed = Number(trimmed);

  return Number.isNaN(parsed) ? fallback : parsed;
};

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

  createPaginationIndicator(
    elements: AboutSkillsAnimationElements
  ): SkillPaginationIndicatorController {
    const { carouselViewport, pagination, paginationItems } = elements;

    if (!carouselViewport || !pagination || paginationItems.length === 0) {
      return {
        updateTarget: () => {},
        tick: () => {},
        destroy: () => {},
      };
    }

    let targetProgress = 0;
    let currentProgress = 0;

    const getSizes = () => {
      const styles = getComputedStyle(pagination);

      const dotSize = parsePixelValue(
        styles.getPropertyValue("--skill-pagination-dot-size"),
        8
      );

      const barWidth = parsePixelValue(
        styles.getPropertyValue("--skill-pagination-bar-width"),
        48
      );

      return {
        dotSize,
        barWidth,
      };
    };

    const applyProgress = (progress: number) => {
      const { dotSize, barWidth } = getSizes();

      paginationItems.forEach((item, index) => {
        const distance = Math.abs(progress - index);
        const activeAmount = Math.max(0, 1 - distance);
        const width = dotSize + (barWidth - dotSize) * activeAmount;

        gsap.set(item, {
          width,
          backgroundColor:
            activeAmount > 0.5
              ? "rgba(255, 255, 255, 0.94)"
              : "rgba(255, 255, 255, 0.72)",
        });
      });
    };

    const reset = () => {
      carouselViewport.scrollLeft = 0;
      targetProgress = 0;
      currentProgress = 0;
      applyProgress(0);
    };

    reset();

    const updateTarget = () => {
      const maxScrollLeft =
        carouselViewport.scrollWidth - carouselViewport.clientWidth;

      const maxIndex = Math.max(paginationItems.length - 1, 0);

      if (maxScrollLeft <= 0 || maxIndex <= 0) {
        targetProgress = 0;
        return;
      }

      const scrollRatio = carouselViewport.scrollLeft / maxScrollLeft;

      targetProgress = scrollRatio * maxIndex;
    };

    const tick = () => {
      currentProgress = lerp(currentProgress, targetProgress, 0.16);
      applyProgress(currentProgress);
    };

    const destroy = () => {
      gsap.set(paginationItems, {
        clearProps: "width,backgroundColor",
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
