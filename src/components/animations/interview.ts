import gsap from "gsap";

const InterviewAnimation = {
  createTitleFill(fillGroup: SVGGElement) {
    return gsap.fromTo(
      fillGroup,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "none",
      }
    );
  },

  row(q: HTMLElement | null, content: HTMLElement | null) {
    const tl = gsap.timeline({ paused: true });

    if (q) {
      tl.fromTo(
        q,
        {
          autoAlpha: 0,
          x: -20,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }

    if (content) {
      tl.fromTo(
        content,
        {
          autoAlpha: 0,
          y: 20,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        q ? "-=0.35" : 0
      );
    }

    return tl;
  },
};

export default InterviewAnimation;
