import { PROJECT_DETAIL_STAGE_SELECTORS } from "../../../constants";

export type ProjectDetailStageElements = {
  hero: HTMLElement | null;
};

export function getProjectDetailStageElements(
  stage: HTMLElement
): ProjectDetailStageElements {
  return {
    hero: stage.querySelector<HTMLElement>(PROJECT_DETAIL_STAGE_SELECTORS.hero),
  };
}
