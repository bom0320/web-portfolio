"use client";

import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";

import {
  createContactFooterAnimation,
  createContactIntroAnimation,
} from "@/animations/contact";
import {
  createScrollTrigger,
  refreshScrollTrigger,
  type ScrollTriggerInstance,
} from "@/lib/gsap";

import {
  CONTACT_STAGE_SCROLL_CONFIG,
  CONTACT_STAGE_SELECTORS,
} from "../constants";

export function useContactStageAnimation(
  stageRef: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const ctx = gsap.context(() => {
      const intro = stage.querySelector<HTMLElement>(
        CONTACT_STAGE_SELECTORS.intro
      );

      const footer = stage.querySelector<HTMLElement>(
        CONTACT_STAGE_SELECTORS.footer
      );

      const triggers: ScrollTriggerInstance[] = [];

      let introController:
        | ReturnType<typeof createContactIntroAnimation>
        | undefined;

      let footerTimeline: gsap.core.Timeline | undefined;

      if (intro) {
        introController = createContactIntroAnimation({ intro });
        introController.setProgress(0);

        const introTrigger = createScrollTrigger({
          trigger: intro,
          start: CONTACT_STAGE_SCROLL_CONFIG.intro.start,
          end: CONTACT_STAGE_SCROLL_CONFIG.intro.end,
          scrub: CONTACT_STAGE_SCROLL_CONFIG.intro.scrub,
          onUpdate: (self) => {
            introController?.setProgress(self.progress);
          },
        });

        triggers.push(introTrigger);
      }

      if (footer) {
        footerTimeline = createContactFooterAnimation({ footer });

        const footerTrigger = createScrollTrigger({
          trigger: footer,
          start: CONTACT_STAGE_SCROLL_CONFIG.footer.start,
          end: CONTACT_STAGE_SCROLL_CONFIG.footer.end,
          scrub: CONTACT_STAGE_SCROLL_CONFIG.footer.scrub,
          animation: footerTimeline,
        });

        triggers.push(footerTrigger);
      }

      refreshScrollTrigger();

      return () => {
        triggers.forEach((trigger) => trigger.kill());

        introController?.destroy();
        footerTimeline?.kill();
      };
    }, stage);

    return () => ctx.revert();
  }, [stageRef]);
}
