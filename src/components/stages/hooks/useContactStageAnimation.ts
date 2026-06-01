"use client";

import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  createContactFooterAnimation,
  createContactIntroAnimation,
} from "@/animations/contact";

gsap.registerPlugin(ScrollTrigger);

function refreshScrollTrigger() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  });
}

export function useContactStageAnimation(
  stageRef: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const ctx = gsap.context(() => {
      const intro = stage.querySelector<HTMLElement>(".js-contact-intro");
      const footer = stage.querySelector<HTMLElement>(".js-contact-footer");

      const triggers: ScrollTrigger[] = [];

      let introController:
        | ReturnType<typeof createContactIntroAnimation>
        | undefined;

      let footerTimeline: gsap.core.Timeline | undefined;

      if (intro) {
        introController = createContactIntroAnimation({ intro });
        introController.setProgress(0);

        const introTrigger = ScrollTrigger.create({
          trigger: intro,
          start: "top 78%",
          end: "top 36%",
          scrub: 1,
          invalidateOnRefresh: true,
          markers: true,
          onUpdate: (self) => {
            introController?.setProgress(self.progress);
          },
        });

        triggers.push(introTrigger);
      }

      if (footer) {
        footerTimeline = createContactFooterAnimation({ footer });

        const footerTrigger = ScrollTrigger.create({
          trigger: footer,
          start: "top 105%",
          end: "top 72%",
          scrub: 1,
          animation: footerTimeline,
          invalidateOnRefresh: true,
          markers: true,
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
