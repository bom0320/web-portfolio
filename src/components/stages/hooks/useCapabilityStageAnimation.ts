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

import { CapabilityNavigatorAnimation } from "@/animations/capability";
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
import {
  createCapabilityStageControllers,
  destroyCapabilityStageControllers,
  getCapabilityStageElements,
  resetCapabilityProgressControllers,
} from "./helpers/capability";
import { registerMaxProgressTrigger, registerProgressTrigger } from "./helpers";

type UseCapabilityStageAnimationReturn = {
  activeNavigatorIndex: number;
  setActiveNavigatorIndex: Dispatch<SetStateAction<number>>;
};

const MAX_PROGRESS_TARGET_KEYS = [
  "introProof",
  "structure",
  "ai",
  "visual",
  "navigatorIntro",
] as const;

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
      const elements = getCapabilityStageElements(stage);
      const controllers = createCapabilityStageControllers(elements);

      resetCapabilityProgressControllers(controllers);

      const triggers: ScrollTriggerInstance[] = [];

      const registerTrigger = (trigger: ScrollTriggerInstance) => {
        triggers.push(trigger);
      };

      registerProgressTrigger({
        triggerElement: CAPABILITY_STAGE_SELECTORS.introPinned,
        config: CAPABILITY_STAGE_SCROLL_CONFIG.intro,
        controller: controllers.intro,
        registerTrigger,
      });

      MAX_PROGRESS_TARGET_KEYS.forEach((key) => {
        registerMaxProgressTrigger({
          triggerElement: elements[key],
          config: CAPABILITY_STAGE_SCROLL_CONFIG[key],
          controller: controllers[key],
          registerTrigger,
        });
      });

      registerProgressTrigger({
        triggerElement: elements.closing,
        config: CAPABILITY_STAGE_SCROLL_CONFIG.closing,
        controller: controllers.closing,
        registerTrigger,
      });

      if (elements.navigatorPin) {
        registerTrigger(
          createScrollTrigger({
            trigger: elements.navigatorPin,
            start: CAPABILITY_STAGE_SCROLL_CONFIG.navigatorPin.start,
            end: () =>
              `+=${
                window.innerHeight *
                (CAPABILITY_NAVIGATOR_ITEMS.length - 1) *
                CAPABILITY_STAGE_SCROLL_CONFIG.navigatorPin
                  .itemScrollLengthMultiplier
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
        triggers.forEach((trigger) => {
          trigger.kill();
        });

        destroyCapabilityStageControllers(controllers);
      };
    }, stage);

    return () => ctx.revert();
  }, [stageRef]);

  return {
    activeNavigatorIndex,
    setActiveNavigatorIndex,
  };
}
