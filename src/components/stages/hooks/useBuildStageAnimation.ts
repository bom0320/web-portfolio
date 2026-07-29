"use client";

import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";

import { refreshScrollTrigger, type ScrollTriggerInstance } from "@/lib/gsap";

import {
  BUILD_STAGE_DESKTOP_SCROLL_CONFIG,
  BUILD_STAGE_MOBILE_SCROLL_CONFIG,
  BUILD_STAGE_PROGRESS_KEYS,
  BUILD_STAGE_SELECTORS,
  type BuildStageScrollConfig,
} from "../constants";

import {
  createBuildStageControllers,
  destroyBuildStageControllers,
  getBuildStageElements,
  registerMaxProgressTrigger,
  registerProgressTrigger,
  resetBuildStageControllers,
} from "./helpers";

export function useBuildStageAnimation(
  stageRef: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    const stage = stageRef.current;

    if (!stage) return;

    const context = gsap.context(() => {
      const setupBuildTriggers = (scrollConfig: BuildStageScrollConfig) => {
        const elements = getBuildStageElements(stage);
        const controllers = createBuildStageControllers(elements);

        resetBuildStageControllers(controllers);

        const triggers: ScrollTriggerInstance[] = [];

        const registerTrigger = (trigger: ScrollTriggerInstance) => {
          triggers.push(trigger);
        };

        registerProgressTrigger({
          triggerElement: BUILD_STAGE_SELECTORS.introPinned,
          config: scrollConfig.intro,
          controller: controllers.intro,
          registerTrigger,
        });

        BUILD_STAGE_PROGRESS_KEYS.forEach((key) => {
          registerMaxProgressTrigger({
            triggerElement: elements[key],
            config: scrollConfig[key],
            controller: controllers[key],
            registerTrigger,
          });
        });

        refreshScrollTrigger();

        return () => {
          triggers.forEach((trigger) => {
            trigger.kill();
          });

          destroyBuildStageControllers(controllers);
        };
      };

      const media = gsap.matchMedia();

      media.add("(min-width: 901px)", () =>
        setupBuildTriggers(BUILD_STAGE_DESKTOP_SCROLL_CONFIG)
      );

      media.add("(max-width: 900px)", () =>
        setupBuildTriggers(BUILD_STAGE_MOBILE_SCROLL_CONFIG)
      );

      return () => {
        media.revert();
      };
    }, stage);

    return () => {
      context.revert();
    };
  }, [stageRef]);
}
