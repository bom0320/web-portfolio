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

        /* Hero */
        const heroPin = createScrollTrigger({
          id: "project-detail-hero-pin",

          trigger: elements.hero,

          start: () => `top top+=${getHeaderHeight()}`,

          end: () => `+=${window.innerHeight * heroHold.holdLengthMultiplier}`,

          pin: true,
          pinSpacing: true,

          anticipatePin: 1,
        });

        /* First content */
        const contentIntroAnimation = elements.firstSection
          ? gsap.fromTo(
              elements.firstSection,
              {
                y: 56,
                opacity: 0.45,
              },
              {
                y: 0,
                opacity: 1,
                ease: "none",

                scrollTrigger: {
                  trigger: elements.firstSection,

                  start: "top 85%",
                  end: "top 45%",

                  scrub: 0.7,
                },
              }
            )
          : null;

        refreshScrollTrigger();

        return () => {
          contentIntroAnimation?.scrollTrigger?.kill();
          contentIntroAnimation?.kill();

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
