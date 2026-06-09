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
  CAPABILITY_STAGE_DESKTOP_SCROLL_CONFIG,
  CAPABILITY_STAGE_MOBILE_SCROLL_CONFIG,
  CAPABILITY_STAGE_PROGRESS_KEYS,
  CAPABILITY_STAGE_SELECTORS,
  type CapabilityStageScrollConfig,
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
      const setupCapabilityTriggers = (
        scrollConfig: CapabilityStageScrollConfig,
        options?: {
          enableNavigatorPin?: boolean;
        }
      ) => {
        const enableNavigatorPin = options?.enableNavigatorPin ?? true;

        const elements = getCapabilityStageElements(stage);
        const controllers = createCapabilityStageControllers(elements);

        resetCapabilityProgressControllers(controllers);

        previousNavigatorIndexRef.current = 0;
        setActiveNavigatorIndex(0);

        const triggers: ScrollTriggerInstance[] = [];

        const registerTrigger = (trigger: ScrollTriggerInstance) => {
          triggers.push(trigger);
        };

        registerProgressTrigger({
          triggerElement: CAPABILITY_STAGE_SELECTORS.introPinned,
          config: scrollConfig.intro,
          controller: controllers.intro,
          registerTrigger,
        });

        CAPABILITY_STAGE_PROGRESS_KEYS.forEach((key) => {
          registerMaxProgressTrigger({
            triggerElement: elements[key],
            config: scrollConfig[key],
            controller: controllers[key],
            registerTrigger,
          });
        });

        registerProgressTrigger({
          triggerElement: elements.closing,
          config: scrollConfig.closing,
          controller: controllers.closing,
          registerTrigger,
        });

        if (enableNavigatorPin && elements.navigatorPin) {
          registerTrigger(
            createScrollTrigger({
              id: "capability-navigator-pin",
              trigger: elements.navigatorPin,
              start: scrollConfig.navigatorPin.start,
              end: () =>
                `+=${
                  window.innerHeight *
                  (CAPABILITY_NAVIGATOR_ITEMS.length - 1) *
                  scrollConfig.navigatorPin.itemScrollLengthMultiplier
                }`,
              pin: true,
              pinSpacing: true,
              pinType: "transform",
              scrub: scrollConfig.navigatorPin.scrub,
              anticipatePin: scrollConfig.navigatorPin.anticipatePin,
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
      };

      const media = gsap.matchMedia();

      media.add("(min-width: 901px)", () => {
        return setupCapabilityTriggers(CAPABILITY_STAGE_DESKTOP_SCROLL_CONFIG, {
          enableNavigatorPin: true,
        });
      });

      media.add("(max-width: 900px)", () => {
        return setupCapabilityTriggers(CAPABILITY_STAGE_MOBILE_SCROLL_CONFIG, {
          enableNavigatorPin: false,
        });
      });

      return () => {
        media.revert();
      };
    }, stage);

    return () => ctx.revert();
  }, [stageRef]);

  return {
    activeNavigatorIndex,
    setActiveNavigatorIndex,
  };
}
