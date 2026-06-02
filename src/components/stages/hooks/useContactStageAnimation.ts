"use client";

import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";

import { refreshScrollTrigger, type ScrollTriggerInstance } from "@/lib/gsap";

import { CONTACT_STAGE_SCROLL_CONFIG } from "../constants";
import {
  createContactStageControllers,
  destroyContactStageControllers,
  getContactStageElements,
  registerMaxProgressTrigger,
  registerProgressTrigger,
  resetContactStageControllers,
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

      registerProgressTrigger({
        triggerElement: elements.intro,
        config: CONTACT_STAGE_SCROLL_CONFIG.intro,
        controller: controllers.intro,
        registerTrigger,
      });

      registerMaxProgressTrigger({
        triggerElement: elements.footer,
        config: CONTACT_STAGE_SCROLL_CONFIG.footer,
        controller: controllers.footer,
        registerTrigger,
      });

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
