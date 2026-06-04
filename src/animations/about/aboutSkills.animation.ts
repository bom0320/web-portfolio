import gsap from "gsap";

import type { AboutSkillsAnimationElements } from "@/components/scenes/about/dom";

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
