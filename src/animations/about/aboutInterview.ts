import gsap from "gsap";

const AboutInterviewAnimation = {
  createTitleFill(outlineGroup: SVGGElement, fillGroup: SVGGElement) {
    const tl = gsap.timeline({ paused: true });

    gsap.set(outlineGroup, {
      opacity: 0.28,
      filter: "blur(0.6px)",
    });

    gsap.set(fillGroup, {
      opacity: 0,
    });

    tl.to(
      fillGroup,
      {
        opacity: 1,
        duration: 1,
        ease: "none",
      },
      0
    ).to(
      outlineGroup,
      {
        opacity: 0.12,
        filter: "blur(0px)",
        duration: 1,
        ease: "none",
      },
      0
    );

    return tl;
  },

  row(reveal: HTMLElement | null, overlay: HTMLElement | null) {
    const tl = gsap.timeline({ paused: true });

    if (!reveal || !overlay) return tl;

    gsap.set(reveal, {
      autoAlpha: 1,
      clipPath: "inset(50% 0 0 0)",
    });

    gsap.set(overlay, {
      yPercent: 0,
    });

    tl.to(
      reveal,
      {
        clipPath: "inset(0% 0 0 0)",
        duration: 1,
        ease: "none",
      },
      0
    ).to(
      overlay,
      {
        yPercent: -100,
        duration: 1,
        ease: "none",
      },
      0
    );

    return tl;
  },
};

export default AboutInterviewAnimation;
