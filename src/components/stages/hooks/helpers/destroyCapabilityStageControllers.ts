import type { CapabilityStageControllers } from "./createCapabilityStageControllers";

export function destroyCapabilityStageControllers(
  controllers: CapabilityStageControllers
) {
  controllers.intro.destroy();
  controllers.introProof.destroy();
  controllers.structure.destroy();
  controllers.ai.destroy();
  controllers.visual.destroy();
  controllers.navigatorIntro.destroy();
  controllers.closing.destroy();
}
