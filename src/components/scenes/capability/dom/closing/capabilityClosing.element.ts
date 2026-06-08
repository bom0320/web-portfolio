import { CAPABILITY_CLOSING_SELECTORS } from "./capabilityClosing.selectors";

export type CapabilityClosingAnimationElements = {
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

export const getCapabilityClosingAnimationElements = (
  root: HTMLElement | null
): CapabilityClosingAnimationElements => {
  return {
    root,
    content: queryElement(root, CAPABILITY_CLOSING_SELECTORS.content),
    eyebrow: queryElement(root, CAPABILITY_CLOSING_SELECTORS.eyebrow),
    title: queryElement(root, CAPABILITY_CLOSING_SELECTORS.title),
    description: queryElement(root, CAPABILITY_CLOSING_SELECTORS.description),
    cta: queryElement(root, CAPABILITY_CLOSING_SELECTORS.cta),
  };
};
