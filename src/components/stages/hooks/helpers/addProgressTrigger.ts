import {
  createScrollTrigger,
  type ScrollTriggerInstance,
  type ScrollTriggerVars,
} from "@/lib/gsap";

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
