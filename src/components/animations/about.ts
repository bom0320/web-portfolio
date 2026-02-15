import gsap from "gsap";

const AboutAnimation = {
  createTitleFill(fillGroup: SVGGElement) {
    return gsap.fromTo(
      fillGroup,
      { opacity: 0 },
      { opacity: 1, ease: "none" } // scrub 붙일거라 duration 필요없음
    );
  },

  createDecorEnter(section: HTMLElement) {
    // ✅ section 기준으로만 찾기 (다른 섹션에 동일 class 있어도 안전)
    const decor = gsap.utils.toArray<HTMLElement>(".decor", section);

    // 시작 상태(원하면 opacity는 살짝만)
    gsap.set(decor, { opacity: 0.75 }); // "보이면서 모이게"면 0.6~0.9 추천
    gsap.set(".decor--sun", { x: -80, y: -30, rotate: -6, scale: 0.98 });
    gsap.set(".decor--stars", { x: 90, y: -35, rotate: 5, scale: 0.98 });
    gsap.set(".decor--heart", { x: 80, y: 45, rotate: 4, scale: 0.98 });
    gsap.set(".decor--stars2", { x: -70, y: 60, rotate: -5, scale: 0.98 });

    const tl = gsap.timeline();
    tl.to(
      decor,
      {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        // opacity는 이미 보이게 할거면 굳이 안 건드려도 됨
        ease: "none", // scrub용
        stagger: 0.08,
      },
      0
    );

    return tl;
  },
};

export default AboutAnimation;
