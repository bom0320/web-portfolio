import { INTRO_STAGE_SELECTORS } from "../../../constants";

export function getIntroStageElements(stage: HTMLElement) {
  return {
    root: stage,

    hero: stage.querySelector<HTMLElement>(INTRO_STAGE_SELECTORS.hero),

    lifeMotion: stage.querySelector<HTMLElement>(
      INTRO_STAGE_SELECTORS.lifeMotion
    ),

    about: stage.querySelector<HTMLElement>(INTRO_STAGE_SELECTORS.about),
  };
}

export type IntroStageElements = ReturnType<typeof getIntroStageElements>;
