"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { HeroScene, LifeMotionScene, AboutScenes } from "@/components/scenes";
import HeroToLifeAnimation from "@/animations/transitions/heroToLife";
import LifeToAboutAnimation from "@/animations/transitions/lifeToAbout";
import { AboutSceneAnimation } from "@/animations/about";

gsap.registerPlugin(ScrollTrigger);

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

export default function ProfileStage() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroToLifeController = HeroToLifeAnimation.create();
      const lifeToAboutController = LifeToAboutAnimation.create();
      const aboutSceneController = AboutSceneAnimation.create();

      heroToLifeController.setProgress(0);
      lifeToAboutController.setProgress(0);
      aboutSceneController.setProgress(0);

      const heroToLifeTrigger = ScrollTrigger.create({
        trigger: ".js-intro-stage",
        start: "top top",
        end: "65% top",
        scrub: 1.2,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          heroToLifeController.setProgress(self.progress);
        },
      });

      const lifeToAboutTrigger = ScrollTrigger.create({
        trigger: ".js-intro-stage",
        start: "45% top",
        end: "95% top",
        scrub: 1.2,
        invalidateOnRefresh: true,
        markers: true,
        onUpdate: (self) => {
          const progress = self.progress;

          const enterProgress = clampProgress(progress / 0.32);
          const sceneProgress = clampProgress((progress - 0.32) / 0.68);

          lifeToAboutController.setProgress(enterProgress);
          aboutSceneController.setProgress(sceneProgress);
        },
      });

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

  return (
    <section className="profile-stage js-intro-stage">
      <div className="profile-stage__sticky">
        <HeroScene />
        <LifeMotionScene />
        <AboutScenes />
      </div>
    </section>
  );
}
