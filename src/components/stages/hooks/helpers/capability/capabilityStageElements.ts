import { CAPABILITY_STAGE_SELECTORS } from "../../../constants";

export type CapabilityStageElements = {
  intro: HTMLElement | null;
  introProof: HTMLElement | null;
  structure: HTMLElement | null;
  ai: HTMLElement | null;
  visual: HTMLElement | null;
  navigatorIntro: HTMLElement | null;
  navigatorPin: HTMLElement | null;
  closing: HTMLElement | null;
};

export function getCapabilityStageElements(
  stage: HTMLElement
): CapabilityStageElements {
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
