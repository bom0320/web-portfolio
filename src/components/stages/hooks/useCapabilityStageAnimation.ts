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

type ProgressTriggerConfig = {
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
      const elements = {
        intro: stage.querySelector<HTMLElement>(
          CAPABILITY_STAGE_SELECTORS.intro
        ),
        introProof: stage.querySelector<HTMLElement>(
          CAPABILITY_STAGE_SELECTORS.introProof
        ),
        structure: stage.querySelector<HTMLElement>(
          CAPABILITY_STAGE_SELECTORS.structure
        ),
        ai: stage.querySelector<HTMLElement>(CAPABILITY_STAGE_SELECTORS.ai),
        visual: stage.querySelector<HTMLElement>(
          CAPABILITY_STAGE_SELECTORS.visual
        ),
        navigatorIntro: stage.querySelector<HTMLElement>(
          CAPABILITY_STAGE_SELECTORS.navigatorIntro
        ),
        navigatorPin: stage.querySelector<HTMLElement>(
          CAPABILITY_STAGE_SELECTORS.navigatorPin
        ),
        closing: stage.querySelector<HTMLElement>(
          CAPABILITY_STAGE_SELECTORS.closing
        ),
      };

      const controllers = {
        intro: CapabilityIntroAnimation.create(elements.intro),
        introProof: CapabilityIntroProofAnimation.create(elements.introProof),
        structure: StructureCapabilityAnimation.create(elements.structure),
        ai: AICapabilityAnimation.create(elements.ai),
        visual: VisualCapabilityAnimation.create(elements.visual),
        navigatorIntro: CapabilityNavigatorAnimation.createIntro(
          elements.navigatorIntro
        ),
        closing: CapabilityClosingAnimation.create(elements.closing),
      };

      controllers.intro.setProgress(0);
      controllers.structure.setProgress(0);
      controllers.ai.setProgress(0);
      controllers.visual.setProgress(0);
      controllers.navigatorIntro.setProgress(0);
      controllers.closing.setProgress(0);

      const triggers: ScrollTriggerInstance[] = [];

      const addTrigger = (trigger: ScrollTriggerInstance) => {
        triggers.push(trigger);
      };

      const addProgressTrigger = (
        triggerElement: HTMLElement | string | null,
        config: ProgressTriggerConfig,
        controller: ProgressController
      ) => {
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
      };

      const addPersistentProgressTrigger = (
        triggerElement: HTMLElement | null,
        config: ProgressTriggerConfig,
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

      addProgressTrigger(
        CAPABILITY_STAGE_SELECTORS.introPinned,
        CAPABILITY_STAGE_SCROLL_CONFIG.intro,
        controllers.intro
      );

      const persistentProgressTargets = [
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

      persistentProgressTargets.forEach(({ element, config, controller }) => {
        addPersistentProgressTrigger(element, config, controller);
      });

      if (elements.navigatorPin) {
        addTrigger(
          createScrollTrigger({
            trigger: elements.navigatorPin,
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

      refreshScrollTrigger();

      return () => {
        triggers.forEach((trigger) => trigger.kill());

        controllers.intro.destroy();
        controllers.introProof.destroy();
        controllers.structure.destroy();
        controllers.ai.destroy();
        controllers.visual.destroy();
        controllers.navigatorIntro.destroy();
        controllers.closing.destroy();
      };
    }, stage);

    return () => ctx.revert();
  }, [stageRef]);

  return {
    activeNavigatorIndex,
    setActiveNavigatorIndex,
  };
}
