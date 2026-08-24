import { PROJECTS_STAGE_SELECTORS } from "../../../constants";

export type ProjectsStageElements = {
  showcase: HTMLElement | null;
  showcaseIntro: HTMLElement | null;
  closing: HTMLElement | null;
};

export function getProjectsStageElements(
  stage: HTMLElement
): ProjectsStageElements {
  return {
    showcase: stage.querySelector<HTMLElement>(
      PROJECTS_STAGE_SELECTORS.showcase
    ),

    showcaseIntro: stage.querySelector<HTMLElement>(
      PROJECTS_STAGE_SELECTORS.showcaseIntro
    ),

    closing: stage.querySelector<HTMLElement>(PROJECTS_STAGE_SELECTORS.closing),
  };
}
