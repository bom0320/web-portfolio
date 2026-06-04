import { INTRO_STAGE_SELECTORS } from "../../../constants";

export type IntroStageElements = {
  root: HTMLElement;
  hero: HTMLElement | null;
  lifeMotion: HTMLElement | null;
  about: HTMLElement | null;
};

export function getIntroStageElements(stage: HTMLElement): IntroStageElements {
  return {
    root: stage,

    hero: stage.querySelector<HTMLElement>(INTRO_STAGE_SELECTORS.hero),

    lifeMotion: stage.querySelector<HTMLElement>(
      INTRO_STAGE_SELECTORS.lifeMotion
    ),

    about: stage.querySelector<HTMLElement>(INTRO_STAGE_SELECTORS.about),
  };
}
