import { CAPABILITY_EXPERIENCE_SELECTORS } from "./capabilityExperience.selectors";

type CapabilityCardAnimationElements = {
  cards: HTMLElement[];
  cardIcons: HTMLElement[];
  cardTitles: HTMLElement[];
  cardMessages: HTMLElement[];
  cardDescs: HTMLElement[];
};

type CapabilityCardWithSubtitleAnimationElements =
  CapabilityCardAnimationElements & {
    cardSubtitles: HTMLElement[];
  };

export type StructureCapabilityAnimationElements =
  CapabilityCardAnimationElements & {
    root: HTMLElement | null;
    header: HTMLElement | null;
    core: HTMLElement | null;
    stem: HTMLElement | null;
    branch: HTMLElement | null;
    nodes: HTMLElement[];
  };

export type AICapabilityAnimationElements =
  CapabilityCardWithSubtitleAnimationElements & {
    root: HTMLElement | null;
    header: HTMLElement | null;
    grid: HTMLElement | null;
  };

export type VisualCapabilityAnimationElements = {
  root: HTMLElement | null;
  header: HTMLElement | null;
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

export const getStructureCapabilityAnimationElements = (
  root: HTMLElement | null
): StructureCapabilityAnimationElements => {
  const selectors = CAPABILITY_EXPERIENCE_SELECTORS.structure;

  return {
    root,
    header: queryElement(root, selectors.header),
    core: queryElement(root, selectors.core),
    stem: queryElement(root, selectors.stem),
    branch: queryElement(root, selectors.branch),
    nodes: queryElements(root, selectors.nodes),
    cards: queryElements(root, selectors.cards),
    cardIcons: queryElements(root, selectors.cardIcons),
    cardTitles: queryElements(root, selectors.cardTitles),
    cardMessages: queryElements(root, selectors.cardMessages),
    cardDescs: queryElements(root, selectors.cardDescs),
  };
};

export const getAICapabilityAnimationElements = (
  root: HTMLElement | null
): AICapabilityAnimationElements => {
  const selectors = CAPABILITY_EXPERIENCE_SELECTORS.ai;

  return {
    root,
    header: queryElement(root, selectors.header),
    grid: queryElement(root, selectors.grid),
    cards: queryElements(root, selectors.cards),
    cardIcons: queryElements(root, selectors.cardIcons),
    cardSubtitles: queryElements(root, selectors.cardSubtitles),
    cardTitles: queryElements(root, selectors.cardTitles),
    cardMessages: queryElements(root, selectors.cardMessages),
    cardDescs: queryElements(root, selectors.cardDescs),
  };
};

export const getVisualCapabilityAnimationElements = (
  root: HTMLElement | null
): VisualCapabilityAnimationElements => {
  const selectors = CAPABILITY_EXPERIENCE_SELECTORS.visual;

  return {
    root,
    header: queryElement(root, selectors.header),
  };
};
