import {
  createScrollTrigger,
  type ScrollTriggerInstance,
  type ScrollTriggerVars,
} from "@/lib/gsap";

import { createMaxProgressScrollTrigger } from "./createMaxProgressScrollTrigger";

type ProgressController = {
  setProgress: (progress: number) => void;
};

type ProgressTriggerConfig = {
  start: ScrollTriggerVars["start"];
  end: ScrollTriggerVars["end"];
  scrub: ScrollTriggerVars["scrub"];
};

type RegisterProgressTriggerOptions = {
  triggerElement: HTMLElement | string | null;
  config: ProgressTriggerConfig;
  controller: ProgressController;
  registerTrigger: (trigger: ScrollTriggerInstance) => void;
};

type RegisterMaxProgressTriggerOptions = {
  triggerElement: HTMLElement | null;
  config: ProgressTriggerConfig;
  controller: ProgressController;
  registerTrigger: (trigger: ScrollTriggerInstance) => void;
};

export function registerProgressTrigger({
  triggerElement,
  config,
  controller,
  registerTrigger,
}: RegisterProgressTriggerOptions) {
  if (!triggerElement) return;

  registerTrigger(
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

export function registerMaxProgressTrigger({
  triggerElement,
  config,
  controller,
  registerTrigger,
}: RegisterMaxProgressTriggerOptions) {
  if (!triggerElement) return;

  registerTrigger(
    createMaxProgressScrollTrigger({
      trigger: triggerElement,
      start: config.start,
      end: config.end,
      scrub: config.scrub,
      controller,
    })
  );
}
