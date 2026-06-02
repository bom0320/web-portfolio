"use client";

import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";

import {
  createScrollTrigger,
  refreshScrollTrigger,
  type ScrollTriggerInstance,
} from "@/lib/gsap";

import { CONTACT_STAGE_SCROLL_CONFIG } from "../constants";
import {
  createContactStageControllers,
  destroyContactStageControllers,
  getContactStageElements,
  resetContactStageControllers,
  registerProgressTrigger,
} from "./helpers";

export function useContactStageAnimation(
  stageRef: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const ctx = gsap.context(() => {
      const elements = getContactStageElements(stage);
      const controllers = createContactStageControllers(elements);

      resetContactStageControllers(controllers);

      const triggers: ScrollTriggerInstance[] = [];

      const registerTrigger = (trigger: ScrollTriggerInstance) => {
        triggers.push(trigger);
      };

      if (controllers.intro) {
        registerProgressTrigger({
          triggerElement: elements.intro,
          config: CONTACT_STAGE_SCROLL_CONFIG.intro,
          controller: controllers.intro,
          registerTrigger,
        });
      }

      if (elements.footer && controllers.footer) {
        registerTrigger(
          createScrollTrigger({
            trigger: elements.footer,
            start: CONTACT_STAGE_SCROLL_CONFIG.footer.start,
            end: CONTACT_STAGE_SCROLL_CONFIG.footer.end,
            scrub: CONTACT_STAGE_SCROLL_CONFIG.footer.scrub,
            animation: controllers.footer,
          })
        );
      }

      refreshScrollTrigger();

      return () => {
        triggers.forEach((trigger) => {
          trigger.kill();
        });

        destroyContactStageControllers(controllers);
      };
    }, stage);

    return () => ctx.revert();
  }, [stageRef]);
}
