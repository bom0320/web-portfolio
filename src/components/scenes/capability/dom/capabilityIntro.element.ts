import {
  CAPABILITY_INTRO_ANIMATION_SELECTORS,
  CAPABILITY_INTRO_PROOF_ANIMATION_SELECTORS,
} from "./capabilityIntro.selectors";

export function getCapabilityIntroAnimationElements(scope: HTMLElement | null) {
  return {
    visualField: scope?.querySelector<HTMLElement>(
      CAPABILITY_INTRO_ANIMATION_SELECTORS.visualField
    ),

    titleLayer: scope?.querySelector<HTMLElement>(
      CAPABILITY_INTRO_ANIMATION_SELECTORS.titleLayer
    ),
    eyebrow: scope?.querySelector<HTMLElement>(
      CAPABILITY_INTRO_ANIMATION_SELECTORS.eyebrow
    ),
    title: scope?.querySelector<HTMLElement>(
      CAPABILITY_INTRO_ANIMATION_SELECTORS.title
    ),
    subtitle: scope?.querySelector<HTMLElement>(
      CAPABILITY_INTRO_ANIMATION_SELECTORS.subtitle
    ),

    phase01: scope?.querySelector<HTMLElement>(
      CAPABILITY_INTRO_ANIMATION_SELECTORS.phase01
    ),
    phase02: scope?.querySelector<HTMLElement>(
      CAPABILITY_INTRO_ANIMATION_SELECTORS.phase02
    ),
  };
}

export function getCapabilityIntroProofAnimationElements(
  scope: HTMLElement | null
) {
  return {
    character: scope?.querySelector<HTMLElement>(
      CAPABILITY_INTRO_PROOF_ANIMATION_SELECTORS.character
    ),

    leftPoints:
      scope?.querySelectorAll<HTMLElement>(
        CAPABILITY_INTRO_PROOF_ANIMATION_SELECTORS.leftPoints
      ) ?? [],

    rightPoints:
      scope?.querySelectorAll<HTMLElement>(
        CAPABILITY_INTRO_PROOF_ANIMATION_SELECTORS.rightPoints
      ) ?? [],

    quote: scope?.querySelector<HTMLElement>(
      CAPABILITY_INTRO_PROOF_ANIMATION_SELECTORS.quote
    ),
  };
}

export type CapabilityIntroAnimationElements = ReturnType<
  typeof getCapabilityIntroAnimationElements
>;

export type CapabilityIntroProofAnimationElements = ReturnType<
  typeof getCapabilityIntroProofAnimationElements
>;
