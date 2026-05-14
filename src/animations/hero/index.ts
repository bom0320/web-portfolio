import gsap from "gsap";
import { createHeroExit } from "./heroExit";
import { createHeroIntro } from "./heroTyping";

type HeroAnimationController = {
  destroy: () => void;
};

const HeroAnimation = {
  intro: createHeroIntro,
  exit: createHeroExit,

  bomWave(target: HTMLElement | SVGElement): HeroAnimationController {
    const tween = gsap.to(target, {
      y: -6,
      duration: 1.3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return {
      destroy() {
        tween.kill();

        gsap.set(target, {
          clearProps: "transform",
        });
      },
    };
  },
};

export default HeroAnimation;
