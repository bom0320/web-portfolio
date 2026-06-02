import { type ScrollTriggerInstance, type ScrollTriggerVars } from "@/lib/gsap";

import { createPersistentProgressScrollTrigger } from "./createPersistentProgressScrollTrigger";

type ProgressController = {
  setProgress: (progress: number) => void;
};

type ProgressTriggerConfig = {
  start: ScrollTriggerVars["start"];
  end: ScrollTriggerVars["end"];
  scrub: ScrollTriggerVars["scrub"];
};

type AddPersistentProgressTriggerOptions = {
  triggerElement: HTMLElement | null;
  config: ProgressTriggerConfig;
  controller: ProgressController;
  addTrigger: (trigger: ScrollTriggerInstance) => void;
};

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
