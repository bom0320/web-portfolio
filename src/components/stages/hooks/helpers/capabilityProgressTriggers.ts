import {
  createScrollTrigger,
  type ScrollTriggerInstance,
  type ScrollTriggerVars,
} from "@/lib/gsap";

import { CAPABILITY_STAGE_SCROLL_CONFIG } from "../../constants";
import type { CapabilityStageControllers } from "./capabilityStageControllers";
import type { CapabilityStageElements } from "./capabilityStageElements";
import { createPersistentProgressScrollTrigger } from "./createPersistentProgressScrollTrigger";

type ProgressController = {
  setProgress: (progress: number) => void;
};

type ProgressTriggerConfig = {
  start: ScrollTriggerVars["start"];
  end: ScrollTriggerVars["end"];
  scrub: ScrollTriggerVars["scrub"];
};

type AddProgressTriggerOptions = {
  triggerElement: HTMLElement | string | null;
  config: ProgressTriggerConfig;
  controller: ProgressController;
  addTrigger: (trigger: ScrollTriggerInstance) => void;
};

type AddPersistentProgressTriggerOptions = {
  triggerElement: HTMLElement | null;
  config: ProgressTriggerConfig;
  controller: ProgressController;
  addTrigger: (trigger: ScrollTriggerInstance) => void;
};

export function addProgressTrigger({
  triggerElement,
  config,
  controller,
  addTrigger,
}: AddProgressTriggerOptions) {
  if (!triggerElement) return;

  addTrigger(
    createScrollTrigger({
      trigger: triggerElement,
      start: config.start,
      end: config.end,
      scrub: config.scrub,
      onUpdate: (self) => {
        controller.setProgress(self.progress);
      },
    })
  );
}

export function addPersistentProgressTrigger({
  triggerElement,
  config,
  controller,
  addTrigger,
}: AddPersistentProgressTriggerOptions) {
  if (!triggerElement) return;

  addTrigger(
    createPersistentProgressScrollTrigger({
      trigger: triggerElement,
      start: config.start,
      end: config.end,
      scrub: config.scrub,
      controller,
    })
  );
}

export function getPersistentProgressTriggerTargets(
  elements: CapabilityStageElements,
  controllers: CapabilityStageControllers
) {
  return [
    {
      element: elements.structure,
      config: CAPABILITY_STAGE_SCROLL_CONFIG.structure,
      controller: controllers.structure,
    },
    {
      element: elements.ai,
      config: CAPABILITY_STAGE_SCROLL_CONFIG.ai,
      controller: controllers.ai,
    },
    {
      element: elements.visual,
      config: CAPABILITY_STAGE_SCROLL_CONFIG.visual,
      controller: controllers.visual,
    },
    {
      element: elements.navigatorIntro,
      config: CAPABILITY_STAGE_SCROLL_CONFIG.navigatorIntro,
      controller: controllers.navigatorIntro,
    },
    {
      element: elements.closing,
      config: CAPABILITY_STAGE_SCROLL_CONFIG.closing,
      controller: controllers.closing,
    },
  ] as const;
}
