import { PROJECT_DETAIL_STAGE_SELECTORS } from "../../../constants";

export type ProjectDetailStageElements = {
  hero: HTMLElement | null;
  nav: HTMLElement | null;
  content: HTMLElement | null;
};

export function getProjectDetailStageElements(
  stage: HTMLElement
): ProjectDetailStageElements {
  return {
    hero: stage.querySelector<HTMLElement>(PROJECT_DETAIL_STAGE_SELECTORS.hero),

    nav: stage.querySelector<HTMLElement>(PROJECT_DETAIL_STAGE_SELECTORS.nav),

    content: stage.querySelector<HTMLElement>(
      PROJECT_DETAIL_STAGE_SELECTORS.content
    ),
  };
}
