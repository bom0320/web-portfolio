import gsap from "gsap";

interface CreateContactTitleAnimationParams {
  fillGroup: SVGGElement;
}

export function createContactTitleAnimation({
  fillGroup,
}: CreateContactTitleAnimationParams) {
  const tl = gsap.timeline();

  tl.fromTo(
    fillGroup,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.2,
    }
  );

  return tl;
}
