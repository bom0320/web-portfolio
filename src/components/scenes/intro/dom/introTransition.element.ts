import { INTRO_TRANSITION_SELECTORS } from "./introTransition.selectors";

type IntroTransitionRootElements = {
  hero: HTMLElement | null;
  lifeMotion: HTMLElement | null;
  about: HTMLElement | null;
};

export type HeroToLifeAnimationElements = {
  heroItems: HTMLElement[];
  lifeStage: HTMLElement | null;
  lifeTrack: HTMLElement | null;
  topRow: HTMLElement | null;
  bottomRow: HTMLElement | null;
};

export type LifeToAboutAnimationElements = {
  aboutScenes: HTMLElement | null;
};

const queryElement = <T extends HTMLElement>(
  root: HTMLElement | null,
  selector: string
): T | null => {
  if (!root) return null;

  return root.querySelector<T>(selector);
};

const queryElements = <T extends HTMLElement>(
  root: HTMLElement | null,
  selector: string
): T[] => {
  if (!root) return [];

  return Array.from(root.querySelectorAll<T>(selector));
};

export const getHeroToLifeAnimationElements = ({
  hero,
  lifeMotion,
}: IntroTransitionRootElements): HeroToLifeAnimationElements => {
  const selectors = INTRO_TRANSITION_SELECTORS.heroToLife;

  return {
    heroItems: queryElements(hero, selectors.heroItems),
    lifeStage: queryElement(lifeMotion, selectors.lifeStage),
    lifeTrack: queryElement(lifeMotion, selectors.lifeTrack),
    topRow: queryElement(lifeMotion, selectors.topRow),
    bottomRow: queryElement(lifeMotion, selectors.bottomRow),
  };
};

export const getLifeToAboutAnimationElements = ({
  about,
}: IntroTransitionRootElements): LifeToAboutAnimationElements => {
  return {
    aboutScenes: about,
  };
};
