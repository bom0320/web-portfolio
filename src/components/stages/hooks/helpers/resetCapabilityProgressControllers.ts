import type { CapabilityStageControllers } from "./createCapabilityStageControllers";

export function resetCapabilityProgressControllers(
  controllers: CapabilityStageControllers
) {
  controllers.intro.setProgress(0);
  controllers.structure.setProgress(0);
  controllers.ai.setProgress(0);
  controllers.visual.setProgress(0);
  controllers.navigatorIntro.setProgress(0);
  controllers.closing.setProgress(0);
}
