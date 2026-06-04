import { CONTACT_SCENE_SELECTORS } from "./contactScene.selectors";

export type ContactIntroAnimationElements = {
  root: HTMLElement | null;
  eyebrow: HTMLElement | null;
  title: HTMLElement | null;
  description: HTMLElement | null;
};

export type ContactFooterAnimationElements = {
  footer: HTMLElement | null;
};

const queryElement = <T extends HTMLElement>(
  root: HTMLElement | null,
  selector: string
): T | null => {
  if (!root) return null;

  return root.querySelector<T>(selector);
};

export const getContactIntroAnimationElements = (
  root: HTMLElement | null
): ContactIntroAnimationElements => {
  const selectors = CONTACT_SCENE_SELECTORS.intro;

  return {
    root,
    eyebrow: queryElement(root, selectors.eyebrow),
    title: queryElement(root, selectors.title),
    description: queryElement(root, selectors.description),
  };
};

export const getContactFooterAnimationElements = (
  footer: HTMLElement | null
): ContactFooterAnimationElements => {
  return {
    footer,
  };
};
