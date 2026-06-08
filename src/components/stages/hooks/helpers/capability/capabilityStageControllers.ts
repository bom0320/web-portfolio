import {
  AICapabilityAnimation,
  CapabilityClosingAnimation,
  CapabilityIntroAnimation,
  CapabilityIntroProofAnimation,
  CapabilityNavigatorAnimation,
  StructureCapabilityAnimation,
  VisualCapabilityAnimation,
} from "@/animations/capability";

import {
  getCapabilityIntroAnimationElements,
  getCapabilityIntroProofAnimationElements,
} from "@/components/scenes/capability/dom/intro";

import {
  getAICapabilityAnimationElements,
  getStructureCapabilityAnimationElements,
  getVisualCapabilityAnimationElements,
} from "@/components/scenes/capability/dom/experience";

import { getCapabilityNavigatorIntroAnimationElements } from "@/components/scenes/capability/dom/navigator";
import { getCapabilityClosingAnimationElements } from "@/components/scenes/capability/dom/closing";

import type { CapabilityStageElements } from "./capabilityStageElements";

export function createCapabilityStageControllers(
  elements: CapabilityStageElements
) {
  return {
    intro: CapabilityIntroAnimation.create(
      getCapabilityIntroAnimationElements(elements.intro)
    ),

    introProof: CapabilityIntroProofAnimation.create(
      getCapabilityIntroProofAnimationElements(elements.introProof)
    ),

    structure: StructureCapabilityAnimation.create(
      getStructureCapabilityAnimationElements(elements.structure)
    ),

    ai: AICapabilityAnimation.create(
      getAICapabilityAnimationElements(elements.ai)
    ),

    visual: VisualCapabilityAnimation.create(
      getVisualCapabilityAnimationElements(elements.visual)
    ),

    navigatorIntro: CapabilityNavigatorAnimation.createIntro(
      getCapabilityNavigatorIntroAnimationElements(elements.navigatorIntro)
    ),

    closing: CapabilityClosingAnimation.create(
      getCapabilityClosingAnimationElements(elements.closing)
    ),
  };
}

export type CapabilityStageControllers = ReturnType<
  typeof createCapabilityStageControllers
>;

export function resetCapabilityProgressControllers(
  controllers: CapabilityStageControllers
) {
  controllers.intro.setProgress(0);
  controllers.introProof.setProgress(0);
  controllers.structure.setProgress(0);
  controllers.ai.setProgress(0);
  controllers.visual.setProgress(0);
  controllers.navigatorIntro.setProgress(0);
  controllers.closing.setProgress(0);
}

export function destroyCapabilityStageControllers(
  controllers: CapabilityStageControllers
) {
  controllers.intro.destroy();
  controllers.introProof.destroy();
  controllers.structure.destroy();
  controllers.ai.destroy();
  controllers.visual.destroy();
  controllers.navigatorIntro.destroy();
  controllers.closing.destroy();
}
