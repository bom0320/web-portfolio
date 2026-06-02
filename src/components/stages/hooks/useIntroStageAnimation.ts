"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

import { AboutSceneAnimation } from "@/animations/about";
import HeroToLifeAnimation from "@/animations/transitions/heroToLife";
import LifeToAboutAnimation from "@/animations/transitions/lifeToAbout";
import {
  createScrollTrigger,
  refreshScrollTrigger,
  type ScrollTriggerInstance,
} from "@/lib/gsap";

import { INTRO_STAGE_SCROLL_CONFIG, INTRO_STAGE_SELECTORS } from "../constants";

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

export function useIntroStageAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const controllers = {
        heroToLife: HeroToLifeAnimation.create(),
        lifeToAbout: LifeToAboutAnimation.create(),
        aboutScene: AboutSceneAnimation.create(),
      };

      controllers.heroToLife.setProgress(0);
      controllers.lifeToAbout.setProgress(0);
      controllers.aboutScene.setProgress(0);

      const triggers: ScrollTriggerInstance[] = [];

      triggers.push(
        createScrollTrigger({
          trigger: INTRO_STAGE_SELECTORS.root,
          start: INTRO_STAGE_SCROLL_CONFIG.heroToLife.start,
          end: () =>
            `+=${
              window.innerHeight *
              INTRO_STAGE_SCROLL_CONFIG.heroToLife.endMultiplier
            }`,
          scrub: INTRO_STAGE_SCROLL_CONFIG.heroToLife.scrub,
          onUpdate: (self) => {
            controllers.heroToLife.setProgress(self.progress);
          },
        })
      );

      triggers.push(
        createScrollTrigger({
          trigger: INTRO_STAGE_SELECTORS.root,
          start: () =>
            `top+=${
              window.innerHeight *
              INTRO_STAGE_SCROLL_CONFIG.lifeToAbout.startOffsetMultiplier
            } top`,
          end: () =>
            `+=${
              window.innerHeight *
              INTRO_STAGE_SCROLL_CONFIG.lifeToAbout.endMultiplier
            }`,
          scrub: INTRO_STAGE_SCROLL_CONFIG.lifeToAbout.scrub,
          onUpdate: (self) => {
            const progress = self.progress;

            const enterProgress = clampProgress(
              progress / INTRO_STAGE_SCROLL_CONFIG.lifeToAbout.enterRatio
            );

            const sceneProgress = clampProgress(
              (progress - INTRO_STAGE_SCROLL_CONFIG.lifeToAbout.enterRatio) /
                INTRO_STAGE_SCROLL_CONFIG.lifeToAbout.sceneRatio
            );

            controllers.lifeToAbout.setProgress(enterProgress);
            controllers.aboutScene.setProgress(sceneProgress);
          },
        })
      );

      refreshScrollTrigger();

      return () => {
        triggers.forEach((trigger) => {
          trigger.kill();
        });

        Object.values(controllers).forEach((controller) => {
          controller.destroy();
        });
      };
    });

    return () => ctx.revert();
  }, []);
}
