import gsap from "gsap";

type HeroAnimationController = {
  destroy: () => void;
};

const ROLE_TEXTS = ["Frontend Developer", "Interface Developer", "UX Engineer"];

function getDeleteDelay(index: number, length: number) {
  if (index > length - 3) return 0.12;
  if (index <= 3) return 0.1;

  return 0.06;
}

function addTyping(tl: gsap.core.Timeline, target: HTMLElement, text: string) {
  text.split("").forEach((_, index) => {
    tl.call(
      () => {
        target.textContent = text.slice(0, index + 1);
      },
      undefined,
      index === 0 ? "+=0.4" : "+=0.08"
    );
  });
}

function addDeleting(
  tl: gsap.core.Timeline,
  target: HTMLElement,
  text: string
) {
  for (let index = text.length; index >= 0; index -= 1) {
    tl.call(
      () => {
        target.textContent = text.slice(0, index);
      },
      undefined,
      `+=${getDeleteDelay(index, text.length)}`
    );
  }
}

function createTypingTimeline(target: HTMLElement) {
  const tl = gsap.timeline({ repeat: -1 });

  target.textContent = "";

  ROLE_TEXTS.forEach((text) => {
    addTyping(tl, target, text);
    tl.to({}, { duration: 1.5 });

    addDeleting(tl, target, text);
    tl.to({}, { duration: 0.35 });
  });

  return tl;
}

export function createHeroIntro(section: HTMLElement): HeroAnimationController {
  const roleText = section.querySelector<HTMLElement>(".js-hero-role-text");
  const caret = section.querySelector<HTMLElement>(".js-hero-caret");

  const timeline = gsap.timeline();

  if (roleText) {
    timeline.add(createTypingTimeline(roleText), 0);
  }

  if (caret) {
    timeline.to(
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

  return {
    destroy() {
      timeline.kill();

      if (roleText) {
        roleText.textContent = "";
      }

      if (caret) {
        gsap.set(caret, {
          clearProps: "opacity,visibility",
        });
      }
    },
  };
}
