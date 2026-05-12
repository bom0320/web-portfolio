import gsap from "gsap";

const SkillAnimation = {
  createSkillTitleFill(fillGroup: SVGGElement) {
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

  intro(section: HTMLElement) {
    const gauges = gsap.utils.toArray<HTMLElement>(
      ".skill-card__gauge",
      section
    );

    const pacmans = gsap.utils.toArray<HTMLElement>(
      ".skill-card__circle",
      section
    );

    const reset = () => {
      gsap.set(pacmans, {
        scale: 0.85,
        opacity: 0,
        filter: "blur(6px)",
      });

      gauges.forEach((g) => {
        gsap.set(g, { "--deg": "0deg" });
      });
    };

    reset();

    const tl = gsap.timeline({
      paused: true,
      onStart: reset,
    });

    tl.to(pacmans, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.12,
    });

    tl.add(() => {
      gauges.forEach((g, i) => {
        const target = Number(g.dataset.deg ?? 0);

        gsap.to(g, {
          "--deg": `${target}deg`,
          duration: 1,
          ease: "power2.out",
          delay: i * 0.08,
        });
      });
    }, "<0.05");

    return tl;
  },
};

export default SkillAnimation;
