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

export function useContactStageAnimation(
  stageRef: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const ctx = gsap.context(() => {
      const intro = stage.querySelector<HTMLElement>(".js-contact-intro");
      const footer = stage.querySelector<HTMLElement>(".js-contact-footer");

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
          start: "top 78%",
          end: "top 36%",
          scrub: 1,

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
          start: "top 105%",
          end: "top 72%",
          scrub: 1,
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
