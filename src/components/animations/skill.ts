import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillAnimation = {
  createSkillTitleFill(fillGroup: SVGGElement) {
    return gsap.fromTo(
      fillGroup,
      { opacity: 0 },
      { opacity: 1, duration: 0.9, ease: "none" }
    );
  },

  intro(section: HTMLElement) {
    const cards = gsap.utils.toArray<HTMLElement>(".skill-card", section);
    const gauges = gsap.utils.toArray<HTMLElement>(
      ".skill-card__gauge",
      section
    );
    const pacmans = gsap.utils.toArray<HTMLElement>(
      ".skill-card__circle",
      section
    );

    gsap.set(cards, { opacity: 1 });
    gsap.set(pacmans, { scale: 0.85, opacity: 0, filter: "blur(6px)" });

    gauges.forEach((g) => gsap.set(g, { ["--deg"]: "0deg" }));

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none reset",
      },
    });

    tl.to(pacmans, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.12,
      from: "center",
    });

    tl.add(() => {
      gauges.forEach((g, i) => {
        const target = Number(g.dataset.deg ?? 0);
        gsap.to(g, {
          ["--deg"]: `${target}deg`,
          duration: 1.0,
          ease: "power2.out",
          delay: i * 0.08,
        });
      });
    }, "<0.05");

    return tl;
  },
};

export default SkillAnimation;
