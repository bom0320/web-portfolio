import { PROJECTS_STAGE_SELECTORS } from "../../../constants";

export type ProjectsStageElements = {
  navigatorIntro: HTMLElement | null;
  closing: HTMLElement | null;
};

export function getProjectsStageElements(
  stage: HTMLElement
): ProjectsStageElements {
  return {
    navigatorIntro: stage.querySelector<HTMLElement>(
      PROJECTS_STAGE_SELECTORS.navigatorIntro
    ),
    closing: stage.querySelector<HTMLElement>(PROJECTS_STAGE_SELECTORS.closing),
  };
}
