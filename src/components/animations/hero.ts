import gsap from "gsap";

const ROLE_TEXTS = ["Frontend Developer", "Interface Developer", "UX Engineer"];

function addTypingAnimation(
  tl: gsap.core.Timeline,
  target: HTMLElement,
  text: string
) {
  const chars = text.split("");

  chars.forEach((_, index) => {
    tl.call(
      () => {
        target.textContent = text.slice(0, index + 1);
      },
      undefined,
      index === 0 ? "+=0.4" : "+=0.08"
    );
  });
}

function addDeleteAnimation(
  tl: gsap.core.Timeline,
  target: HTMLElement,
  text: string
) {
  for (let index = text.length; index >= 0; index -= 1) {
    let delay = 0.06;

    if (index > text.length - 3) {
      delay = 0.12;
    } else if (index <= 3) {
      delay = 0.1;
    }

    tl.call(
      () => {
        target.textContent = text.slice(0, index);
      },
      undefined,
      `+=${delay}`
    );
  }
}

function createLoopTypingAnimation(target: HTMLElement) {
  const tl = gsap.timeline({ repeat: -1 });

  target.textContent = "";

  ROLE_TEXTS.forEach((text) => {
    addTypingAnimation(tl, target, text);
    tl.to({}, { duration: 1.5 });

    addDeleteAnimation(tl, target, text);
    tl.to({}, { duration: 0.35 });
  });

  return tl;
}

const HeroAnimation = {
  intro(section: HTMLElement) {
    const roleText = section.querySelector<HTMLElement>(".js-hero-role-text");
    const caret = section.querySelector<HTMLElement>(".js-hero-caret");
    const tl = gsap.timeline();

    if (roleText) {
      tl.add(createLoopTypingAnimation(roleText), 0);
    }

    if (caret) {
      tl.to(
        caret,
        {
          autoAlpha: 0,
          duration: 0.7,
          repeat: -1,
          yoyo: true,
          ease: "none",
        },
        0
      );
    }

    return tl;
  },

  bomWave(target: HTMLElement | SVGElement) {
    return gsap.to(target, {
      y: -6,
      duration: 1.3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  },
};

export default HeroAnimation;
