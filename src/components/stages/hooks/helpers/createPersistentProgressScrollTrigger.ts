import {
  createScrollTrigger,
  type ScrollTriggerInstance,
  type ScrollTriggerVars,
} from "@/lib/gsap";

type ProgressController = {
  setProgress: (progress: number) => void;
};

type CreatePersistentProgressScrollTriggerOptions = {
  trigger: ScrollTriggerVars["trigger"];
  start: ScrollTriggerVars["start"];
  end: ScrollTriggerVars["end"];
  scrub: ScrollTriggerVars["scrub"];
  controller: ProgressController;
};

export function createPersistentProgressScrollTrigger({
  trigger,
  start,
  end,
  scrub,
  controller,
}: CreatePersistentProgressScrollTriggerOptions): ScrollTriggerInstance {
  let maxProgress = 0;

  return createScrollTrigger({
    trigger,
    start,
    end,
    scrub,
    onUpdate: (self) => {
      maxProgress = Math.max(maxProgress, self.progress);
      controller.setProgress(maxProgress);
    },
  });
}
