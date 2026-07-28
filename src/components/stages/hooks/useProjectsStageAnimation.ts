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

import { ProjectsNavigatorAnimation } from "@/animations/projects";

import { PROJECT_ITEMS } from "@/data/projects";
import {
  createScrollTrigger,
  refreshScrollTrigger,
  type ScrollTriggerInstance,
} from "@/lib/gsap";

import {
  PROJECTS_STAGE_DESKTOP_SCROLL_CONFIG,
  PROJECTS_STAGE_MOBILE_SCROLL_CONFIG,
  PROJECTS_STAGE_SELECTORS,
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

function getProjectIndex(progress: number, total: number) {
  return Math.round(progress * (total - 1));
}

export function useProjectsStageAnimation(
  stageRef: RefObject<HTMLElement | null>
): UseProjectsStageAnimationReturn {
  const previousProjectIndexRef = useRef(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useLayoutEffect(() => {
    const stage = stageRef.current;

    if (!stage) return;

    const context = gsap.context(() => {
      const setupProjectsTriggers = (
        scrollConfig: ProjectsStageScrollConfig,
        options?: {
          enableNavigatorPin?: boolean;
        }
      ) => {
        const enableNavigatorPin = options?.enableNavigatorPin ?? true;

        const elements = getProjectsStageElements(stage);
        const controllers = createProjectsStageControllers(elements);

        resetProjectsStageControllers(controllers);

        previousProjectIndexRef.current = 0;
        setActiveProjectIndex(0);

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

        if (enableNavigatorPin && elements.navigatorPin) {
          registerTrigger(
            createScrollTrigger({
              id: "projects-navigator-pin",
              trigger: elements.navigatorPin,
              start: scrollConfig.navigatorPin.start,
              end: () =>
                `+=${
                  window.innerHeight *
                  (PROJECT_ITEMS.length - 1) *
                  scrollConfig.navigatorPin.itemScrollLengthMultiplier
                }`,
              pin: true,
              pinSpacing: true,
              pinType: "transform",
              scrub: scrollConfig.navigatorPin.scrub,
              anticipatePin: scrollConfig.navigatorPin.anticipatePin,

              onUpdate: (self) => {
                const nextIndex = getProjectIndex(
                  self.progress,
                  PROJECT_ITEMS.length
                );

                if (nextIndex === previousProjectIndexRef.current) {
                  return;
                }

                previousProjectIndexRef.current = nextIndex;
                setActiveProjectIndex(nextIndex);

                const nextLayer = stage.querySelector<HTMLElement>(
                  `${PROJECTS_STAGE_SELECTORS.navigatorLayer}[data-index="${nextIndex}"]`
                );

                if (!nextLayer) return;

                ProjectsNavigatorAnimation.createLayerTransition({
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

          destroyProjectsStageControllers(controllers);
        };
      };

      const media = gsap.matchMedia();

      media.add("(min-width: 901px)", () =>
        setupProjectsTriggers(PROJECTS_STAGE_DESKTOP_SCROLL_CONFIG, {
          enableNavigatorPin: true,
        })
      );

      media.add("(max-width: 900px)", () =>
        setupProjectsTriggers(PROJECTS_STAGE_MOBILE_SCROLL_CONFIG, {
          enableNavigatorPin: false,
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

  return {
    activeProjectIndex,
    setActiveProjectIndex,
  };
}
