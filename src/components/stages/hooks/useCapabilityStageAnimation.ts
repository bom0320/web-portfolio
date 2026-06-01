"use client";

import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";

import {
  AICapabilityAnimation,
  CapabilityClosingAnimation,
  CapabilityIntroAnimation,
  CapabilityIntroProofAnimation,
  CapabilityNavigatorAnimation,
  StructureCapabilityAnimation,
  VisualCapabilityAnimation,
} from "@/animations/capability";
import { CAPABILITY_NAVIGATOR_ITEMS } from "@/data/capability";
import {
  createScrollTrigger,
  refreshScrollTrigger,
  type ScrollTriggerInstance,
} from "@/lib/gsap";

import {
  CAPABILITY_STAGE_SCROLL_CONFIG,
  CAPABILITY_STAGE_SELECTORS,
} from "../constants";
import { createMaxProgressScrollTrigger } from "./helpers/createMaxProgressScrollTrigger";

type UseCapabilityStageAnimationReturn = {
  activeNavigatorIndex: number;
  setActiveNavigatorIndex: Dispatch<SetStateAction<number>>;
};

function getCapabilityNavigatorIndex(progress: number, total: number) {
  return Math.round(progress * (total - 1));
}

export function useCapabilityStageAnimation(
  stageRef: RefObject<HTMLElement | null>
): UseCapabilityStageAnimationReturn {
  const previousNavigatorIndexRef = useRef(0);
  const [activeNavigatorIndex, setActiveNavigatorIndex] = useState(0);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const ctx = gsap.context(() => {
      const introController = CapabilityIntroAnimation.create(stage);
      const introProofController = CapabilityIntroProofAnimation.create(stage);

      const structureElement = stage.querySelector<HTMLElement>(
        CAPABILITY_STAGE_SELECTORS.structureBlock
      );

      const aiElement = stage.querySelector<HTMLElement>(
        CAPABILITY_STAGE_SELECTORS.aiBlock
      );

      const visualElement = stage.querySelector<HTMLElement>(
        CAPABILITY_STAGE_SELECTORS.visualBlock
      );

      const navigatorIntroElement = stage.querySelector<HTMLElement>(
        CAPABILITY_STAGE_SELECTORS.navigatorIntro
      );

      const navigatorPinElement = stage.querySelector<HTMLElement>(
        CAPABILITY_STAGE_SELECTORS.navigatorPin
      );

      const closingElement = stage.querySelector<HTMLElement>(
        CAPABILITY_STAGE_SELECTORS.closing
      );

      const structureController =
        StructureCapabilityAnimation.create(structureElement);

      const aiController = AICapabilityAnimation.create(aiElement);

      const visualController = VisualCapabilityAnimation.create(visualElement);

      const navigatorIntroController = CapabilityNavigatorAnimation.createIntro(
        navigatorIntroElement
      );

      const closingController =
        CapabilityClosingAnimation.create(closingElement);

      introController.setProgress(0);
      structureController.setProgress(0);
      aiController.setProgress(0);
      visualController.setProgress(0);
      navigatorIntroController.setProgress(0);
      closingController.setProgress(0);

      const triggers: ScrollTriggerInstance[] = [];

      const introTrigger = createScrollTrigger({
        trigger: CAPABILITY_STAGE_SELECTORS.introPinned,
        start: CAPABILITY_STAGE_SCROLL_CONFIG.intro.start,
        end: CAPABILITY_STAGE_SCROLL_CONFIG.intro.end,
        scrub: CAPABILITY_STAGE_SCROLL_CONFIG.intro.scrub,
        onUpdate: (self) => {
          introController.setProgress(self.progress);
        },
      });

      triggers.push(introTrigger);

      const structureTrigger = createMaxProgressScrollTrigger({
        trigger: structureElement,
        start: CAPABILITY_STAGE_SCROLL_CONFIG.structure.start,
        end: CAPABILITY_STAGE_SCROLL_CONFIG.structure.end,
        scrub: CAPABILITY_STAGE_SCROLL_CONFIG.structure.scrub,
        controller: structureController,
      });

      triggers.push(structureTrigger);

      const aiTrigger = createMaxProgressScrollTrigger({
        trigger: aiElement,
        start: CAPABILITY_STAGE_SCROLL_CONFIG.ai.start,
        end: CAPABILITY_STAGE_SCROLL_CONFIG.ai.end,
        scrub: CAPABILITY_STAGE_SCROLL_CONFIG.ai.scrub,
        controller: aiController,
      });

      triggers.push(aiTrigger);

      const visualTrigger = createMaxProgressScrollTrigger({
        trigger: visualElement,
        start: CAPABILITY_STAGE_SCROLL_CONFIG.visual.start,
        end: CAPABILITY_STAGE_SCROLL_CONFIG.visual.end,
        scrub: CAPABILITY_STAGE_SCROLL_CONFIG.visual.scrub,
        controller: visualController,
      });

      triggers.push(visualTrigger);

      if (navigatorIntroElement) {
        const navigatorIntroTrigger = createMaxProgressScrollTrigger({
          trigger: navigatorIntroElement,
          start: CAPABILITY_STAGE_SCROLL_CONFIG.navigatorIntro.start,
          end: CAPABILITY_STAGE_SCROLL_CONFIG.navigatorIntro.end,
          scrub: CAPABILITY_STAGE_SCROLL_CONFIG.navigatorIntro.scrub,
          controller: navigatorIntroController,
        });

        triggers.push(navigatorIntroTrigger);
      }

      if (navigatorPinElement) {
        const navigatorTrigger = createScrollTrigger({
          trigger: navigatorPinElement,
          start: CAPABILITY_STAGE_SCROLL_CONFIG.navigatorPin.start,
          end: () =>
            `+=${
              window.innerHeight *
              (CAPABILITY_NAVIGATOR_ITEMS.length - 1) *
              CAPABILITY_STAGE_SCROLL_CONFIG.navigatorPin.distanceMultiplier
            }`,
          pin: true,
          pinSpacing: true,
          pinType: "transform",
          scrub: CAPABILITY_STAGE_SCROLL_CONFIG.navigatorPin.scrub,
          anticipatePin:
            CAPABILITY_STAGE_SCROLL_CONFIG.navigatorPin.anticipatePin,
          onUpdate: (self) => {
            const nextIndex = getCapabilityNavigatorIndex(
              self.progress,
              CAPABILITY_NAVIGATOR_ITEMS.length
            );

            if (nextIndex === previousNavigatorIndexRef.current) return;

            previousNavigatorIndexRef.current = nextIndex;
            setActiveNavigatorIndex(nextIndex);

            const nextLayer = stage.querySelector<HTMLElement>(
              `${CAPABILITY_STAGE_SELECTORS.navigatorLayer}[data-index="${nextIndex}"]`
            );

            if (!nextLayer) return;

            CapabilityNavigatorAnimation.createLayerTransition({
              nextLayer,
            });
          },
        });

        triggers.push(navigatorTrigger);
      }

      if (closingElement) {
        const closingTrigger = createMaxProgressScrollTrigger({
          trigger: closingElement,
          start: CAPABILITY_STAGE_SCROLL_CONFIG.closing.start,
          end: CAPABILITY_STAGE_SCROLL_CONFIG.closing.end,
          scrub: CAPABILITY_STAGE_SCROLL_CONFIG.closing.scrub,
          controller: closingController,
        });

        triggers.push(closingTrigger);
      }

      refreshScrollTrigger();

      return () => {
        triggers.forEach((trigger) => trigger.kill());

        introController.destroy();
        introProofController.destroy();
        structureController.destroy();
        aiController.destroy();
        visualController.destroy();
        navigatorIntroController.destroy();
        closingController.destroy();
      };
    }, stage);

    return () => ctx.revert();
  }, [stageRef]);

  return {
    activeNavigatorIndex,
    setActiveNavigatorIndex,
  };
}
