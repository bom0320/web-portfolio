import { BUILD_STAGE_SELECTORS, type BuildStageKey } from "../../../constants";

export type BuildStageElements = Record<BuildStageKey, HTMLElement | null>;

export function getBuildStageElements(stage: HTMLElement): BuildStageElements {
  return {
    intro: stage.querySelector<HTMLElement>(BUILD_STAGE_SELECTORS.intro),

    introProof: stage.querySelector<HTMLElement>(
      BUILD_STAGE_SELECTORS.introProof
    ),

    structure: stage.querySelector<HTMLElement>(
      BUILD_STAGE_SELECTORS.structure
    ),

    ai: stage.querySelector<HTMLElement>(BUILD_STAGE_SELECTORS.ai),

    visual: stage.querySelector<HTMLElement>(BUILD_STAGE_SELECTORS.visual),
  };
}
