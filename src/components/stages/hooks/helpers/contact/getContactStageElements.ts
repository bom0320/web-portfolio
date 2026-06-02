import { CONTACT_STAGE_SELECTORS } from "../../../constants";

export function getContactStageElements(stage: HTMLElement) {
  return {
    root: stage,

    intro: stage.querySelector<HTMLElement>(CONTACT_STAGE_SELECTORS.intro),

    footer: stage.querySelector<HTMLElement>(CONTACT_STAGE_SELECTORS.footer),
  };
}

export type ContactStageElements = ReturnType<typeof getContactStageElements>;
