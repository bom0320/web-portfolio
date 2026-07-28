import {
  BuildAIAnimation,
  BuildIntroAnimation,
  BuildIntroProofAnimation,
  BuildStructureAnimation,
  BuildVisualAnimation,
} from "@/animations/build";

import {
  getBuildAIAnimationElements,
  getBuildIntroAnimationElements,
  getBuildIntroProofAnimationElements,
  getBuildStructureAnimationElements,
  getBuildVisualAnimationElements,
} from "@/components/scenes/build/dom";

import type { BuildStageElements } from "./buildStageElements";

export function createBuildStageControllers(elements: BuildStageElements) {
  return {
    intro: BuildIntroAnimation.create(
      getBuildIntroAnimationElements(elements.intro)
    ),

    introProof: BuildIntroProofAnimation.create(
      getBuildIntroProofAnimationElements(elements.introProof)
    ),

    structure: BuildStructureAnimation.create(
      getBuildStructureAnimationElements(elements.structure)
    ),

    ai: BuildAIAnimation.create(getBuildAIAnimationElements(elements.ai)),

    visual: BuildVisualAnimation.create(
      getBuildVisualAnimationElements(elements.visual)
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
