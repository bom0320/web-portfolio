"use client";

import { type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";

import { createScrollTrigger, refreshScrollTrigger } from "@/lib/gsap";

import { PROJECT_DETAIL_STAGE_DESKTOP_SCROLL_CONFIG } from "../constants";
import { getProjectDetailStageElements } from "./helpers";

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

        const heroPin = createScrollTrigger({
          id: "project-detail-hero-pin",

          trigger: elements.hero,

          start: heroHold.start,

          end: () => `+=${window.innerHeight * heroHold.holdLengthMultiplier}`,

          pin: true,
          pinSpacing: true,

          anticipatePin: 1,
        });

        refreshScrollTrigger();

        return () => {
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
