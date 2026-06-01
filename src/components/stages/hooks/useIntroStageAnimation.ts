"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

import { AboutSceneAnimation } from "@/animations/about";
import HeroToLifeAnimation from "@/animations/transitions/heroToLife";
import LifeToAboutAnimation from "@/animations/transitions/lifeToAbout";
import { createScrollTrigger, refreshScrollTrigger } from "@/lib/gsap";

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
        trigger: ".js-intro-stage",
        start: "top top",
        end: () => `+=${window.innerHeight * 1.2}`,
        scrub: 1.2,
        onUpdate: (self) => {
          heroToLifeController.setProgress(self.progress);
        },
      });

      const lifeToAboutTrigger = createScrollTrigger({
        trigger: ".js-intro-stage",
        start: () => `top+=${window.innerHeight * 1.1} top`,
        end: () => `+=${window.innerHeight * 3.2}`,
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;

          const enterProgress = clampProgress(progress / 0.32);
          const sceneProgress = clampProgress((progress - 0.32) / 0.68);

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
