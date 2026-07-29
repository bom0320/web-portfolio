import { PROJECTS_CLOSING_SELECTORS } from "./projectsClosing.selectors";

export type ProjectsClosingAnimationElements = {
  root: HTMLElement | null;
  content: HTMLElement | null;
  eyebrow: HTMLElement | null;
  title: HTMLElement | null;
  description: HTMLElement | null;
  cta: HTMLElement | null;
};

const queryElement = <T extends HTMLElement>(
  root: HTMLElement | null,
  selector: string
): T | null => {
  if (!root) return null;

  return root.querySelector<T>(selector);
};

export const getProjectsClosingAnimationElements = (
  root: HTMLElement | null
): ProjectsClosingAnimationElements => {
  return {
    root,
    content: queryElement(root, PROJECTS_CLOSING_SELECTORS.content),
    eyebrow: queryElement(root, PROJECTS_CLOSING_SELECTORS.eyebrow),
    title: queryElement(root, PROJECTS_CLOSING_SELECTORS.title),
    description: queryElement(root, PROJECTS_CLOSING_SELECTORS.description),
    cta: queryElement(root, PROJECTS_CLOSING_SELECTORS.cta),
  };
};
