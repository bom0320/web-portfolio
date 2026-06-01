import {
  createScrollTrigger,
  type ScrollTriggerInstance,
  type ScrollTriggerVars,
} from "@/lib/gsap";

type ProgressController = {
  setProgress: (progress: number) => void;
};

type CreateMaxProgressScrollTriggerOptions = {
  trigger: ScrollTriggerVars["trigger"];
  start: ScrollTriggerVars["start"];
  end: ScrollTriggerVars["end"];
  scrub: ScrollTriggerVars["scrub"];
  controller: ProgressController;
};

export function createMaxProgressScrollTrigger({
  trigger,
  start,
  end,
  scrub,
  controller,
}: CreateMaxProgressScrollTriggerOptions): ScrollTriggerInstance {
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
    onLeaveBack: () => {
      maxProgress = 0;
    },
  });
}
