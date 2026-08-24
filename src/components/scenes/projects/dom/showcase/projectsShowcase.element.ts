import { PROJECTS_SHOWCASE_SELECTORS } from "./projectsShowcase.selectors";

export type ProjectsShowcaseIntroAnimationElements = {
  root: HTMLElement | null;
  eyebrow: HTMLElement | null;
  title: HTMLElement | null;
  desc: HTMLElement | null;
};

const queryElement = <T extends HTMLElement>(
  root: HTMLElement | null,
  selector: string
): T | null => {
  if (!root) return null;

  return root.querySelector<T>(selector);
};

export const getProjectsShowcaseIntroAnimationElements = (
  root: HTMLElement | null
): ProjectsShowcaseIntroAnimationElements => {
  const selectors = PROJECTS_SHOWCASE_SELECTORS.intro;

  return {
    root,
    eyebrow: queryElement(root, selectors.eyebrow),
    title: queryElement(root, selectors.title),
    desc: queryElement(root, selectors.desc),
  };
};
