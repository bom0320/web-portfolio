import { AboutSceneAnimation } from "@/animations/about";
import { HeroToLifeAnimation, LifeToAboutAnimation } from "@/animations/intro";

import {
  getHeroToLifeAnimationElements,
  getLifeToAboutAnimationElements,
} from "@/components/scenes/intro/dom";

import type { IntroStageElements } from "./getIntroStageElements";

export function createIntroStageControllers(elements: IntroStageElements) {
  return {
    heroToLife: HeroToLifeAnimation.create(
      getHeroToLifeAnimationElements(elements)
    ),

    lifeToAbout: LifeToAboutAnimation.create(
      getLifeToAboutAnimationElements(elements)
    ),

    aboutScene: AboutSceneAnimation.create(),
  };
}

export type IntroStageControllers = ReturnType<
  typeof createIntroStageControllers
>;

export function resetIntroStageControllers(controllers: IntroStageControllers) {
  controllers.heroToLife.setProgress(0);
  controllers.lifeToAbout.setProgress(0);
  controllers.aboutScene.setProgress(0);
}

export function destroyIntroStageControllers(
  controllers: IntroStageControllers
) {
  Object.values(controllers).forEach((controller) => {
    controller.destroy();
  });
}
