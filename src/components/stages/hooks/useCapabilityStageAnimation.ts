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
        ".js-structure-capability-block"
      );

      const aiElement = stage.querySelector<HTMLElement>(
        ".js-ai-capability-block"
      );

      const visualElement = stage.querySelector<HTMLElement>(
        ".js-visual-capability-block"
      );

      const navigatorIntroElement = stage.querySelector<HTMLElement>(
        ".js-capability-navigator-intro"
      );

      const navigatorPinElement = stage.querySelector<HTMLElement>(
        ".js-capability-navigator-pin"
      );

      const closingElement = stage.querySelector<HTMLElement>(
        ".js-capability-closing"
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
        trigger: ".js-capability-intro-pinned",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        onUpdate: (self) => {
          introController.setProgress(self.progress);
        },
      });

      triggers.push(introTrigger);

      let structureMaxProgress = 0;

      const structureTrigger = createScrollTrigger({
        trigger: structureElement,
        start: "top 78%",
        end: "bottom 62%",
        scrub: 1.1,

        onUpdate: (self) => {
          structureMaxProgress = Math.max(structureMaxProgress, self.progress);
          structureController.setProgress(structureMaxProgress);
        },

        onLeaveBack: () => {
          structureMaxProgress = 0;
          structureController.setProgress(0);
        },
      });

      triggers.push(structureTrigger);

      let aiMaxProgress = 0;

      const aiTrigger = createScrollTrigger({
        trigger: aiElement,
        start: "top 78%",
        end: "bottom 64%",
        scrub: 1,

        onUpdate: (self) => {
          aiMaxProgress = Math.max(aiMaxProgress, self.progress);
          aiController.setProgress(aiMaxProgress);
        },

        onLeaveBack: () => {
          aiMaxProgress = 0;
          aiController.setProgress(0);
        },
      });

      triggers.push(aiTrigger);

      let visualMaxProgress = 0;

      const visualTrigger = createScrollTrigger({
        trigger: visualElement,
        start: "top 78%",
        end: "top 42%",
        scrub: 1,

        onUpdate: (self) => {
          visualMaxProgress = Math.max(visualMaxProgress, self.progress);
          visualController.setProgress(visualMaxProgress);
        },

        onLeaveBack: () => {
          visualMaxProgress = 0;
          visualController.setProgress(0);
        },
      });

      triggers.push(visualTrigger);

      if (navigatorIntroElement) {
        let navigatorIntroMaxProgress = 0;

        const navigatorIntroTrigger = createScrollTrigger({
          trigger: navigatorIntroElement,
          start: "top 78%",
          end: "top 36%",
          scrub: 1,

          onUpdate: (self) => {
            navigatorIntroMaxProgress = Math.max(
              navigatorIntroMaxProgress,
              self.progress
            );

            navigatorIntroController.setProgress(navigatorIntroMaxProgress);
          },

          onLeaveBack: () => {
            navigatorIntroMaxProgress = 0;
            navigatorIntroController.setProgress(0);
          },
        });

        triggers.push(navigatorIntroTrigger);
      }

      if (navigatorPinElement) {
        const navigatorTrigger = createScrollTrigger({
          trigger: navigatorPinElement,
          start: "top top",
          end: () =>
            `+=${
              window.innerHeight *
              (CAPABILITY_NAVIGATOR_ITEMS.length - 1) *
              1.45
            }`,
          pin: true,
          pinSpacing: true,
          pinType: "transform",
          scrub: 1,
          anticipatePin: 1,

          onUpdate: (self) => {
            const nextIndex = getCapabilityNavigatorIndex(
              self.progress,
              CAPABILITY_NAVIGATOR_ITEMS.length
            );

            if (nextIndex === previousNavigatorIndexRef.current) return;

            previousNavigatorIndexRef.current = nextIndex;
            setActiveNavigatorIndex(nextIndex);

            const nextLayer = stage.querySelector<HTMLElement>(
              `.js-capability-navigator-layer[data-index="${nextIndex}"]`
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
        let closingMaxProgress = 0;

        const closingTrigger = createScrollTrigger({
          trigger: closingElement,
          start: "top 82%",
          end: "top 18%",
          scrub: 1.6,

          onUpdate: (self) => {
            closingMaxProgress = Math.max(closingMaxProgress, self.progress);
            closingController.setProgress(closingMaxProgress);
          },

          onLeaveBack: () => {
            closingMaxProgress = 0;
            closingController.setProgress(0);
          },
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
