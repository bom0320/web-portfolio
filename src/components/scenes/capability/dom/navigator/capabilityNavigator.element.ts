import { CAPABILITY_NAVIGATOR_SELECTORS } from "./capabilityNavigator.selectors";

export type CapabilityNavigatorIntroAnimationElements = {
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

export const getCapabilityNavigatorIntroAnimationElements = (
  root: HTMLElement | null
): CapabilityNavigatorIntroAnimationElements => {
  const selectors = CAPABILITY_NAVIGATOR_SELECTORS.intro;

  return {
    root,
    eyebrow: queryElement(root, selectors.eyebrow),
    title: queryElement(root, selectors.title),
    desc: queryElement(root, selectors.desc),
  };
};
