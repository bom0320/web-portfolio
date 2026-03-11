import gsap from "gsap";

const InterviewAnimation = {
  createTitleFill(fillGroup: SVGGElement) {
    return gsap.fromTo(
      fillGroup,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        ease: "none",
        paused: true,
      }
    );
  },

  row(reveal: HTMLElement | null, overlay: HTMLElement | null) {
    const tl = gsap.timeline({ paused: true });

    if (!reveal || !overlay) return tl;

    gsap.set(reveal, {
      autoAlpha: 1,
      y: 0,
      clipPath: "inset(66% 0 0 0)",
    });

    gsap.set(overlay, {
      yPercent: 0,
    });

    tl.to(reveal, {
      clipPath: "inset(0% 0 0 0)",
      duration: 0.8,
      ease: "power3.out",
    }).to(
      overlay,
      {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut",
      },
      0
    );

    return tl;
  },
};

export default InterviewAnimation;
