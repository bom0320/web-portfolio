import gsap from "gsap";

const HeroAnimation = {
  intro(root: Element) {
    const q = gsap.utils.selector(root);

    const title1 = q(".js-hero-title1"); // BOM's
    const title2 = q(".js-hero-title2"); // PORTFOLIO
    const roleText = q(".js-hero-role-text");
    const caret = q(".js-hero-caret");
    const descLines = q(".js-hero-desc-line");
    const character = q(".js-hero-character");
    const shadow = q(".js-hero-shadow");

    if (!title1.length && !title2.length) return gsap.timeline();

    // 커서 깜빡임(무한)
    const caretTween = gsap.to(caret, {
      autoAlpha: 0,
      duration: 0.55,
      ease: "none",
      repeat: -1,
      yoyo: true,
      paused: true,
    });

    // ✅ 1) 타이틀 reveal: 아래에 숨겨놓기 (wrapper 밖으로)
    // autoAlpha를 0으로 숨기는 게 아니라, "가려져서 안 보이게" 해야 함
    gsap.set([title1, title2], { yPercent: 120, autoAlpha: 1 });

    // ✅ 2) role typing illusion
    gsap.set(roleText, { clipPath: "inset(0 100% 0 0)" });
    gsap.set(caret, { autoAlpha: 0 });

    // desc/visual 초기값
    gsap.set(descLines, { autoAlpha: 0, y: 14 });
    gsap.set(character, { autoAlpha: 0, y: 30, x: 18, rotate: 2 });
    gsap.set(shadow, { autoAlpha: 0, scale: 0.92, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(title1, { yPercent: 0, duration: 0.9 }) // ✅ reveal open
      .to(title2, { yPercent: 0, duration: 0.85 }, "-=0.55") // ✅ reveal open

      // role + caret
      .to(caret, { autoAlpha: 1, duration: 0.01 }, "-=0.2")
      .to(
        roleText,
        { clipPath: "inset(0 0% 0 0)", duration: 0.95, ease: "power2.out" },
        "-=0.15"
      )
      .add(() => {
        caretTween.play();
      }, "-=0.25")

      // desc lines
      .to(
        descLines,
        { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.12 },
        "-=0.35"
      )

      // shadow -> character
      .to(shadow, { autoAlpha: 1, scale: 1, duration: 0.7 }, "-=0.55")
      .to(
        character,
        { autoAlpha: 1, y: 0, x: 0, rotate: 0, duration: 0.95 },
        "-=0.65"
      );

    return tl;
  },

  bomWave(target: SVGGElement) {
    return gsap.to(target, {
      x: "-=260",
      repeat: -1,
      duration: 8,
      ease: "none",
    });
  },
};

export default HeroAnimation;
