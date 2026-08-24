import { PROJECT_DETAIL_SELECTORS } from "./projectDetail.selectors";

export type ProjectDetailAnimationElements = {
  hero: HTMLElement | null;
};

const queryElement = <T extends HTMLElement>(
  root: HTMLElement | null,
  selector: string
): T | null => {
  if (!root) return null;

  return root.querySelector<T>(selector);
};

export const getProjectDetailAnimationElements = (
  root: HTMLElement | null
): ProjectDetailAnimationElements => {
  return {
    hero: queryElement(root, PROJECT_DETAIL_SELECTORS.hero),
  };
};
