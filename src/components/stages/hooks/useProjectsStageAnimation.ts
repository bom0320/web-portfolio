"use client";

import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";

import {
  createScrollTrigger,
  refreshScrollTrigger,
  type ScrollTriggerInstance,
} from "@/lib/gsap";

import {
  PROJECTS_STAGE_DESKTOP_SCROLL_CONFIG,
  PROJECTS_STAGE_MOBILE_SCROLL_CONFIG,
  type ProjectsStageScrollConfig,
} from "../constants";

import {
  createProjectsStageControllers,
  destroyProjectsStageControllers,
  getProjectsStageElements,
  registerProgressTrigger,
  resetProjectsStageControllers,
} from "./helpers";

type SetupProjectsTriggerOptions = {
  enableShowcasePin?: boolean;
};

export function useProjectsStageAnimation(
  stageRef: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    const stage = stageRef.current;

    if (!stage) return;

    const context = gsap.context(() => {
      const setupProjectsTriggers = (
        scrollConfig: ProjectsStageScrollConfig,
        options: SetupProjectsTriggerOptions = {}
      ) => {
        const { enableShowcasePin = false } = options;

        const elements = getProjectsStageElements(stage);
        const controllers = createProjectsStageControllers(elements);

        resetProjectsStageControllers(controllers);

        const triggers: ScrollTriggerInstance[] = [];

        const registerTrigger = (trigger: ScrollTriggerInstance) => {
          triggers.push(trigger);
        };

        /* Intro */

        registerProgressTrigger({
          triggerElement: elements.showcaseIntro,
          config: scrollConfig.showcaseIntro,
          controller: controllers.showcaseIntro,
          registerTrigger,
        });

        /* Showcase hold */

        if (enableShowcasePin && elements.showcase) {
          registerTrigger(
            createScrollTrigger({
              id: "projects-showcase-pin",

              trigger: elements.showcase,

              start: scrollConfig.showcaseHold.start,

              end: () =>
                `+=${
                  window.innerHeight *
                  scrollConfig.showcaseHold.holdLengthMultiplier
                }`,

              pin: true,
              pinSpacing: true,
            })
          );
        }

        /* Closing */

        registerProgressTrigger({
          triggerElement: elements.closing,
          config: scrollConfig.closing,
          controller: controllers.closing,
          registerTrigger,
        });

        refreshScrollTrigger();

        return () => {
          triggers.forEach((trigger) => {
            trigger.kill();
          });

          destroyProjectsStageControllers(controllers);
        };
      };

      const media = gsap.matchMedia();

      media.add("(min-width: 901px)", () =>
        setupProjectsTriggers(PROJECTS_STAGE_DESKTOP_SCROLL_CONFIG, {
          enableShowcasePin: true,
        })
      );

      media.add("(max-width: 900px)", () =>
        setupProjectsTriggers(PROJECTS_STAGE_MOBILE_SCROLL_CONFIG, {
          enableShowcasePin: false,
        })
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
