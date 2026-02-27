import gsap from "gsap";

const HeroAnimation = {
  intro(root: Element) {
    const q = gsap.utils.selector(root);

    const title1 = q(".js-hero-title1"); // BOM's (BomWaveTitle wrapper)
    const title2 = q(".js-hero-title2"); // PORTFOLIO
    const roleText = q(".js-hero-role-text"); // "Frontend Developer"
    const caret = q(".js-hero-caret"); // |
    const descLines = q(".js-hero-desc-line"); // spans for each line
    const character = q(".js-hero-character");
    const shadow = q(".js-hero-shadow");

    // ---- Safety: if markup not updated yet, don't crash ----
    if (!title1.length && !title2.length) return gsap.timeline();

    // 커서 깜빡임은 "무한 반복"이라 tl 밖에서 따로 관리
    // (intro 끝난 다음 시작되게 paused로 두고 마지막에 play)
    const caretTween = gsap.to(caret, {
      autoAlpha: 0,
      duration: 0.55,
      ease: "none",
      repeat: -1,
      yoyo: true,
      paused: true,
    });

    // role typing illusion: clip reveal or scaleX reveal
    // clip-path는 브라우저 지원 괜찮고, 더 "타이핑" 느낌 남
    // (CSS에서 overflow hidden 처리해도 됨)
    gsap.set(roleText, { clipPath: "inset(0 100% 0 0)" });

    // Initial states
    gsap.set([title1, title2], { autoAlpha: 0, y: 40 });
    gsap.set(descLines, { autoAlpha: 0, y: 14 });
    gsap.set(character, { autoAlpha: 0, y: 30, x: 18, rotate: 2 });
    gsap.set(shadow, { autoAlpha: 0, scale: 0.92, transformOrigin: "50% 50%" });
    gsap.set(caret, { autoAlpha: 0 }); // role 시작 전 숨김

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1) BOM's 등장
    tl.to(title1, { autoAlpha: 1, y: 0, duration: 0.9 })

      // 2) PORTFOLIO 거의 즉시 같은 방식
      .to(title2, { autoAlpha: 1, y: 0, duration: 0.85 }, "-=0.55")

      // 3) 역할 텍스트 "타이핑처럼" reveal + 커서 등장
      .to(caret, { autoAlpha: 1, duration: 0.01 }, "-=0.2")
      .to(
        roleText,
        { clipPath: "inset(0 0% 0 0)", duration: 0.95, ease: "power2.out" },
        "-=0.15"
      )
      .add(() => {
        caretTween.play();
      }, "-=0.25")

      // 4) 설명 문장(한 줄씩)
      .to(
        descLines,
        { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.12 },
        "-=0.35"
      )

      // 5) 그림자 먼저 깔리고 → 캐릭터 등장
      .to(shadow, { autoAlpha: 1, scale: 1, duration: 0.7 }, "-=0.55")
      .to(
        character,
        { autoAlpha: 1, y: 0, x: 0, rotate: 0, duration: 0.95 },
        "-=0.65"
      );

    return tl;
  },

  // (너 기존 유지) 웨이브 효과가 별도라면 그대로
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
