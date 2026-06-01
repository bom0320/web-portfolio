"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

import { AboutSceneAnimation } from "@/animations/about";
import HeroToLifeAnimation from "@/animations/transitions/heroToLife";
import LifeToAboutAnimation from "@/animations/transitions/lifeToAbout";
import { createScrollTrigger, refreshScrollTrigger } from "@/lib/gsap";

import { INTRO_STAGE_SCROLL_CONFIG, INTRO_STAGE_SELECTORS } from "../constants";

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

export function useIntroStageAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroToLifeController = HeroToLifeAnimation.create();
      const lifeToAboutController = LifeToAboutAnimation.create();
      const aboutSceneController = AboutSceneAnimation.create();

      heroToLifeController.setProgress(0);
      lifeToAboutController.setProgress(0);
      aboutSceneController.setProgress(0);

      const heroToLifeTrigger = createScrollTrigger({
        trigger: INTRO_STAGE_SELECTORS.root,
        start: INTRO_STAGE_SCROLL_CONFIG.heroToLife.start,
        end: () =>
          `+=${
            window.innerHeight *
            INTRO_STAGE_SCROLL_CONFIG.heroToLife.endMultiplier
          }`,
        scrub: INTRO_STAGE_SCROLL_CONFIG.heroToLife.scrub,
        onUpdate: (self) => {
          heroToLifeController.setProgress(self.progress);
        },
      });

      const lifeToAboutTrigger = createScrollTrigger({
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

          lifeToAboutController.setProgress(enterProgress);
          aboutSceneController.setProgress(sceneProgress);
        },
      });

      refreshScrollTrigger();

      return () => {
        heroToLifeTrigger.kill();
        lifeToAboutTrigger.kill();

        heroToLifeController.destroy();
        lifeToAboutController.destroy();
        aboutSceneController.destroy();
      };
    });

    return () => ctx.revert();
  }, []);
}
