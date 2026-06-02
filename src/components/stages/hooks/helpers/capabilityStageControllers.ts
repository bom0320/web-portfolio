import {
  AICapabilityAnimation,
  CapabilityClosingAnimation,
  CapabilityIntroAnimation,
  CapabilityIntroProofAnimation,
  CapabilityNavigatorAnimation,
  StructureCapabilityAnimation,
  VisualCapabilityAnimation,
} from "@/animations/capability";

import type { CapabilityStageElements } from "./capabilityStageElements";

export function createCapabilityStageControllers(
  elements: CapabilityStageElements
) {
  return {
    intro: CapabilityIntroAnimation.create(elements.intro),
    introProof: CapabilityIntroProofAnimation.create(elements.introProof),
    structure: StructureCapabilityAnimation.create(elements.structure),
    ai: AICapabilityAnimation.create(elements.ai),
    visual: VisualCapabilityAnimation.create(elements.visual),
    navigatorIntro: CapabilityNavigatorAnimation.createIntro(
      elements.navigatorIntro
    ),
    closing: CapabilityClosingAnimation.create(elements.closing),
  };
}

export type CapabilityStageControllers = ReturnType<
  typeof createCapabilityStageControllers
>;

export function resetCapabilityProgressControllers(
  controllers: CapabilityStageControllers
) {
  controllers.intro.setProgress(0);
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
