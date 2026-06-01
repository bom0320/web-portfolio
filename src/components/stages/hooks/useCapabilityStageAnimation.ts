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
  type ScrollTriggerVars,
} from "@/lib/gsap";

import {
  CAPABILITY_STAGE_SCROLL_CONFIG,
  CAPABILITY_STAGE_SELECTORS,
} from "../constants";
import { createPersistentProgressScrollTrigger } from "./helpers/createPersistentProgressScrollTrigger";

type UseCapabilityStageAnimationReturn = {
  activeNavigatorIndex: number;
  setActiveNavigatorIndex: Dispatch<SetStateAction<number>>;
};

type ProgressController = {
  setProgress: (progress: number) => void;
};

type OnceTriggerConfig = {
  start: ScrollTriggerVars["start"];
  end: ScrollTriggerVars["end"];
  scrub: ScrollTriggerVars["scrub"];
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

      const addTrigger = (trigger: ScrollTriggerInstance) => {
        triggers.push(trigger);
      };

      const addOnceProgressTrigger = (
        triggerElement: HTMLElement | null,
        config: OnceTriggerConfig,
        controller: ProgressController
      ) => {
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
      };

      addTrigger(
        createScrollTrigger({
          trigger: CAPABILITY_STAGE_SELECTORS.introPinned,
          start: CAPABILITY_STAGE_SCROLL_CONFIG.intro.start,
          end: CAPABILITY_STAGE_SCROLL_CONFIG.intro.end,
          scrub: CAPABILITY_STAGE_SCROLL_CONFIG.intro.scrub,
          onUpdate: (self) => {
            introController.setProgress(self.progress);
          },
        })
      );

      addOnceProgressTrigger(
        structureElement,
        CAPABILITY_STAGE_SCROLL_CONFIG.structure,
        structureController
      );

      addOnceProgressTrigger(
        aiElement,
        CAPABILITY_STAGE_SCROLL_CONFIG.ai,
        aiController
      );

      addOnceProgressTrigger(
        visualElement,
        CAPABILITY_STAGE_SCROLL_CONFIG.visual,
        visualController
      );

      addOnceProgressTrigger(
        navigatorIntroElement,
        CAPABILITY_STAGE_SCROLL_CONFIG.navigatorIntro,
        navigatorIntroController
      );

      if (navigatorPinElement) {
        addTrigger(
          createScrollTrigger({
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
          })
        );
      }

      addOnceProgressTrigger(
        closingElement,
        CAPABILITY_STAGE_SCROLL_CONFIG.closing,
        closingController
      );

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
