import { ABOUT_SCENE_SELECTORS } from "./aboutScene.selectors";

export type AboutHeroAnimationElements = {
  root: HTMLElement | null;
  inner: HTMLElement | null;
  eyebrow: HTMLElement | null;
  heading: HTMLElement | null;
  desc: HTMLElement | null;
  visual: HTMLElement | null;
  cta: HTMLElement | null;
};

export type AboutSkillsAnimationElements = {
  root: HTMLElement | null;
  inner: HTMLElement | null;
  titleFill: SVGGElement | null;
  gauges: HTMLElement[];
  pacmans: HTMLElement[];
};

export type AboutSceneAnimationElements = {
  root: HTMLElement | null;
  hero: AboutHeroAnimationElements;
  skills: AboutSkillsAnimationElements;
};

const queryElement = <T extends HTMLElement>(
  root: HTMLElement | null,
  selector: string
): T | null => {
  if (!root) return null;

  return root.querySelector<T>(selector);
};

const querySvgElement = <T extends SVGElement>(
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

export const getAboutSceneAnimationElements = (
  root: HTMLElement | null
): AboutSceneAnimationElements => {
  const heroSelectors = ABOUT_SCENE_SELECTORS.hero;
  const skillsSelectors = ABOUT_SCENE_SELECTORS.skills;

  const heroRoot = queryElement(root, heroSelectors.root);
  const skillsRoot = queryElement(root, skillsSelectors.root);

  return {
    root,

    hero: {
      root: heroRoot,
      inner: queryElement(heroRoot, heroSelectors.inner),
      eyebrow: queryElement(heroRoot, heroSelectors.eyebrow),
      heading: queryElement(heroRoot, heroSelectors.heading),
      desc: queryElement(heroRoot, heroSelectors.desc),
      visual: queryElement(heroRoot, heroSelectors.visual),
      cta: queryElement(heroRoot, heroSelectors.cta),
    },

    skills: {
      root: skillsRoot,
      inner: queryElement(skillsRoot, skillsSelectors.inner),
      titleFill: querySvgElement(skillsRoot, skillsSelectors.titleFill),
      gauges: queryElements(skillsRoot, skillsSelectors.gauges),
      pacmans: queryElements(skillsRoot, skillsSelectors.pacmans),
    },
  };
};
