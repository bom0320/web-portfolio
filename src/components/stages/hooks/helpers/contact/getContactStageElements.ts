import { CONTACT_STAGE_SELECTORS } from "../../../constants";

export type ContactStageElements = {
  root: HTMLElement;
  intro: HTMLElement | null;
  footer: HTMLElement | null;
};

export function getContactStageElements(
  stage: HTMLElement
): ContactStageElements {
  return {
    root: stage,

    intro: stage.querySelector<HTMLElement>(CONTACT_STAGE_SELECTORS.intro),

    footer: stage.querySelector<HTMLElement>(CONTACT_STAGE_SELECTORS.footer),
  };
}
