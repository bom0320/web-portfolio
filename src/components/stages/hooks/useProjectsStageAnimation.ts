"use client";

import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useLayoutEffect,
  useState,
} from "react";
import gsap from "gsap";

import { refreshScrollTrigger, type ScrollTriggerInstance } from "@/lib/gsap";

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

type UseProjectsStageAnimationReturn = {
  activeProjectIndex: number;
  setActiveProjectIndex: Dispatch<SetStateAction<number>>;
};

export function useProjectsStageAnimation(
  stageRef: RefObject<HTMLElement | null>
): UseProjectsStageAnimationReturn {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useLayoutEffect(() => {
    const stage = stageRef.current;

    if (!stage) return;

    const context = gsap.context(() => {
      const setupProjectsTriggers = (
        scrollConfig: ProjectsStageScrollConfig
      ) => {
        const elements = getProjectsStageElements(stage);
        const controllers = createProjectsStageControllers(elements);

        resetProjectsStageControllers(controllers);

        const triggers: ScrollTriggerInstance[] = [];

        const registerTrigger = (trigger: ScrollTriggerInstance) => {
          triggers.push(trigger);
        };

        registerProgressTrigger({
          triggerElement: elements.navigatorIntro,
          config: scrollConfig.navigatorIntro,
          controller: controllers.navigatorIntro,
          registerTrigger,
        });

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
        setupProjectsTriggers(PROJECTS_STAGE_DESKTOP_SCROLL_CONFIG)
      );

      media.add("(max-width: 900px)", () =>
        setupProjectsTriggers(PROJECTS_STAGE_MOBILE_SCROLL_CONFIG)
      );

      return () => {
        media.revert();
      };
    }, stage);

    return () => {
      context.revert();
    };
  }, [stageRef]);

  return {
    activeProjectIndex,
    setActiveProjectIndex,
  };
}
