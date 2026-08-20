import {
  BUILD_INTRO_ANIMATION_SELECTORS,
  BUILD_INTRO_PROOF_ANIMATION_SELECTORS,
} from "./buildIntro.selectors";

export function getBuildIntroAnimationElements(scope: HTMLElement | null) {
  return {
    visualField: scope?.querySelector<HTMLElement>(
      BUILD_INTRO_ANIMATION_SELECTORS.visualField
    ),

    titleLayer: scope?.querySelector<HTMLElement>(
      BUILD_INTRO_ANIMATION_SELECTORS.titleLayer
    ),

    eyebrow: scope?.querySelector<HTMLElement>(
      BUILD_INTRO_ANIMATION_SELECTORS.eyebrow
    ),

    title: scope?.querySelector<HTMLElement>(
      BUILD_INTRO_ANIMATION_SELECTORS.title
    ),

    subtitle: scope?.querySelector<HTMLElement>(
      BUILD_INTRO_ANIMATION_SELECTORS.subtitle
    ),

    phase01: scope?.querySelector<HTMLElement>(
      BUILD_INTRO_ANIMATION_SELECTORS.phase01
    ),

    phase02: scope?.querySelector<HTMLElement>(
      BUILD_INTRO_ANIMATION_SELECTORS.phase02
    ),
  };
}

export function getBuildIntroProofAnimationElements(scope: HTMLElement | null) {
  return {
    character: scope?.querySelector<HTMLElement>(
      BUILD_INTRO_PROOF_ANIMATION_SELECTORS.character
    ),

    pupils:
      scope?.querySelectorAll<HTMLElement>(
        BUILD_INTRO_PROOF_ANIMATION_SELECTORS.pupils
      ) ?? [],

    mouth: scope?.querySelector<HTMLElement>(
      BUILD_INTRO_PROOF_ANIMATION_SELECTORS.mouth
    ),

    leftPoints:
      scope?.querySelectorAll<HTMLElement>(
        BUILD_INTRO_PROOF_ANIMATION_SELECTORS.leftPoints
      ) ?? [],

    rightPoints:
      scope?.querySelectorAll<HTMLElement>(
        BUILD_INTRO_PROOF_ANIMATION_SELECTORS.rightPoints
      ) ?? [],

    quote: scope?.querySelector<HTMLElement>(
      BUILD_INTRO_PROOF_ANIMATION_SELECTORS.quote
    ),
  };
}

export type BuildIntroAnimationElements = ReturnType<
  typeof getBuildIntroAnimationElements
>;

export type BuildIntroProofAnimationElements = ReturnType<
  typeof getBuildIntroProofAnimationElements
>;
