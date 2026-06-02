import {
  AICapabilityAnimation,
  CapabilityClosingAnimation,
  CapabilityIntroAnimation,
  CapabilityIntroProofAnimation,
  CapabilityNavigatorAnimation,
  StructureCapabilityAnimation,
  VisualCapabilityAnimation,
} from "@/animations/capability";

import type { CapabilityStageElements } from "./getCapabilityStageElements";

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
