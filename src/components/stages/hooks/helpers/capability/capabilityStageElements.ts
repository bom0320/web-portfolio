import { CAPABILITY_STAGE_SELECTORS } from "../../../constants";

export function getCapabilityStageElements(stage: HTMLElement) {
  return {
    intro: stage.querySelector<HTMLElement>(CAPABILITY_STAGE_SELECTORS.intro),

    introProof: stage.querySelector<HTMLElement>(
      CAPABILITY_STAGE_SELECTORS.introProof
    ),

    structure: stage.querySelector<HTMLElement>(
      CAPABILITY_STAGE_SELECTORS.structure
    ),

    ai: stage.querySelector<HTMLElement>(CAPABILITY_STAGE_SELECTORS.ai),

    visual: stage.querySelector<HTMLElement>(CAPABILITY_STAGE_SELECTORS.visual),

    navigatorIntro: stage.querySelector<HTMLElement>(
      CAPABILITY_STAGE_SELECTORS.navigatorIntro
    ),

    navigatorPin: stage.querySelector<HTMLElement>(
      CAPABILITY_STAGE_SELECTORS.navigatorPin
    ),

    closing: stage.querySelector<HTMLElement>(
      CAPABILITY_STAGE_SELECTORS.closing
    ),
  };
}

export type CapabilityStageElements = ReturnType<
  typeof getCapabilityStageElements
>;
