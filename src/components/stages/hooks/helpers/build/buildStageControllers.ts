import {
  AICapabilityAnimation,
  CapabilityIntroAnimation,
  CapabilityIntroProofAnimation,
  StructureCapabilityAnimation,
  VisualCapabilityAnimation,
} from "@/animations/build";

import {
  getAICapabilityAnimationElements,
  getCapabilityIntroAnimationElements,
  getCapabilityIntroProofAnimationElements,
  getStructureCapabilityAnimationElements,
  getVisualCapabilityAnimationElements,
} from "@/components/scenes/build/dom";

import type { BuildStageElements } from "./buildStageElements";

export function createBuildStageControllers(elements: BuildStageElements) {
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
  };
}

export type BuildStageControllers = ReturnType<
  typeof createBuildStageControllers
>;

export function resetBuildStageControllers(controllers: BuildStageControllers) {
  controllers.intro.setProgress(0);
  controllers.introProof.setProgress(0);
  controllers.structure.setProgress(0);
  controllers.ai.setProgress(0);
  controllers.visual.setProgress(0);
}

export function destroyBuildStageControllers(
  controllers: BuildStageControllers
) {
  controllers.intro.destroy();
  controllers.introProof.destroy();
  controllers.structure.destroy();
  controllers.ai.destroy();
  controllers.visual.destroy();
}
