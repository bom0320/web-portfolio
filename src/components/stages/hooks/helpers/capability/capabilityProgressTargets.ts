import { CAPABILITY_STAGE_SCROLL_CONFIG } from "../../../constants";

import type { CapabilityStageControllers } from "./capabilityStageControllers";
import type { CapabilityStageElements } from "./capabilityStageElements";

export function getCapabilityMaxProgressTargets(
  elements: CapabilityStageElements,
  controllers: CapabilityStageControllers
) {
  return [
    {
      element: elements.introProof,
      config: CAPABILITY_STAGE_SCROLL_CONFIG.introProof,
      controller: controllers.introProof,
    },
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
