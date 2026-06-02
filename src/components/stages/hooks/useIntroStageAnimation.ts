"use client";

import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";

import {
  createScrollTrigger,
  refreshScrollTrigger,
  type ScrollTriggerInstance,
} from "@/lib/gsap";

import { INTRO_STAGE_SCROLL_CONFIG } from "../constants";
import {
  createIntroStageControllers,
  destroyIntroStageControllers,
  getIntroStageElements,
  resetIntroStageControllers,
} from "./helpers";

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

function getLifeToAboutProgress(progress: number) {
  const { enterRatio, sceneRatio } = INTRO_STAGE_SCROLL_CONFIG.lifeToAbout;

  const enterProgress = clampProgress(progress / enterRatio);
  const sceneProgress = clampProgress((progress - enterRatio) / sceneRatio);

  return {
    enterProgress,
    sceneProgress,
  };
}

export function useIntroStageAnimation(
  stageRef: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const ctx = gsap.context(() => {
      const elements = getIntroStageElements(stage);
      const controllers = createIntroStageControllers(elements);

      resetIntroStageControllers(controllers);

      const triggers: ScrollTriggerInstance[] = [];

      const registerTrigger = (trigger: ScrollTriggerInstance) => {
        triggers.push(trigger);
      };

      registerTrigger(
        createScrollTrigger({
          trigger: elements.root,
          start: INTRO_STAGE_SCROLL_CONFIG.heroToLife.start,
          end: () =>
            `+=${
              window.innerHeight *
              INTRO_STAGE_SCROLL_CONFIG.heroToLife.scrollLengthMultiplier
            }`,
          scrub: INTRO_STAGE_SCROLL_CONFIG.heroToLife.scrub,
          onUpdate: (self) => {
            controllers.heroToLife.setProgress(self.progress);
          },
        })
      );

      registerTrigger(
        createScrollTrigger({
          trigger: elements.root,
          start: () =>
            `top+=${
              window.innerHeight *
              INTRO_STAGE_SCROLL_CONFIG.lifeToAbout.startOffsetMultiplier
            } top`,
          end: () =>
            `+=${
              window.innerHeight *
              INTRO_STAGE_SCROLL_CONFIG.lifeToAbout.scrollLengthMultiplier
            }`,
          scrub: INTRO_STAGE_SCROLL_CONFIG.lifeToAbout.scrub,
          onUpdate: (self) => {
            const { enterProgress, sceneProgress } = getLifeToAboutProgress(
              self.progress
            );

            controllers.lifeToAbout.setProgress(enterProgress);
            controllers.aboutScene.setProgress(sceneProgress);
          },
        })
      );

      refreshScrollTrigger();

      return () => {
        triggers.forEach((trigger) => {
          trigger.kill();
        });

        destroyIntroStageControllers(controllers);
      };
    }, stage);

    return () => ctx.revert();
  }, [stageRef]);
}
