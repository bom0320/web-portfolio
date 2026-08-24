"use client";

import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";

import { createScrollTrigger, refreshScrollTrigger } from "@/lib/gsap";

import { PROJECT_DETAIL_STAGE_DESKTOP_SCROLL_CONFIG } from "../constants";
import { getProjectDetailStageElements } from "./helpers";

const getHeaderHeight = () => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-height")
    .trim();

  const parsed = Number.parseFloat(value);

  return Number.isNaN(parsed) ? 0 : parsed;
};

const getHeroNavTop = (nav: HTMLElement) => {
  const value = getComputedStyle(nav)
    .getPropertyValue("--project-detail-nav-hero-top")
    .trim();

  const parsed = Number.parseFloat(value);

  if (Number.isNaN(parsed)) {
    return window.innerHeight * 0.72;
  }

  if (value.endsWith("vh")) {
    return window.innerHeight * (parsed / 100);
  }

  return parsed;
};

export function useProjectDetailStageAnimation(
  stageRef: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    const stage = stageRef.current;

    if (!stage) return;

    const context = gsap.context(() => {
      const elements = getProjectDetailStageElements(stage);

      if (!elements.hero) return;

      const media = gsap.matchMedia();

      media.add("(min-width: 901px)", () => {
        const { heroHold } = PROJECT_DETAIL_STAGE_DESKTOP_SCROLL_CONFIG;

        /*
         * Hero pin
         * 기존 동작 그대로.
         */
        const heroPin = createScrollTrigger({
          id: "project-detail-hero-pin",

          trigger: elements.hero,

          start: () => `top top+=${getHeaderHeight()}`,

          end: () => `+=${window.innerHeight * heroHold.holdLengthMultiplier}`,

          pin: true,
          pinSpacing: true,

          anticipatePin: 1,
        });

        /*
         * Nav hand-off
         *
         * Content의 맨 위가 현재 Hero Nav 위치(72vh)에
         * 도착하는 바로 그 순간 fixed → sticky 전환.
         */
        const navHandoff =
          elements.nav && elements.content
            ? createScrollTrigger({
                id: "project-detail-nav-handoff",

                trigger: elements.content,

                start: () => `top top+=${getHeroNavTop(elements.nav!)}`,

                onEnter: () => {
                  elements.nav?.classList.add("is-content");
                },

                onLeaveBack: () => {
                  elements.nav?.classList.remove("is-content");
                },

                onRefresh: (self) => {
                  elements.nav?.classList.toggle(
                    "is-content",
                    self.scroll() >= self.start
                  );
                },
              })
            : null;

        refreshScrollTrigger();

        return () => {
          elements.nav?.classList.remove("is-content");

          navHandoff?.kill();
          heroPin.kill();
        };
      });

      return () => {
        media.revert();
      };
    }, stage);

    return () => {
      context.revert();
    };
  }, [stageRef]);
}
