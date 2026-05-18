"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { HeroScene, LifeMotionScene, AboutScenes } from "@/components/scenes";
import HeroToLifeAnimation from "@/animations/transitions/heroToLife";
import LifeToAboutAnimation from "@/animations/transitions/lifeToAbout";

gsap.registerPlugin(ScrollTrigger);

export default function ProfileStage() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroToLifeController = HeroToLifeAnimation.create();
      const lifeToAboutController = LifeToAboutAnimation.create();

      heroToLifeController.setProgress(0);
      lifeToAboutController.setProgress(0);

      const heroToLifeTrigger = ScrollTrigger.create({
        trigger: ".js-intro-stage",
        start: "top top",
        end: "65% top",
        scrub: 1.2,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          console.log("heroToLife", {
            progress: self.progress.toFixed(3),
            start: self.start,
            end: self.end,
            scroll: self.scroll(),
          });
          heroToLifeController.setProgress(self.progress);
        },
      });

      const lifeToAboutTrigger = ScrollTrigger.create({
        trigger: ".js-intro-stage",
        start: "45% top",
        end: "75% top",
        scrub: 1.2,
        invalidateOnRefresh: true,
        markers: true,
        onUpdate: (self) => {
          console.log("lifeToAbout", {
            progress: self.progress.toFixed(3),
            start: self.start,
            end: self.end,
            scroll: self.scroll(),
          });

          lifeToAboutController.setProgress(self.progress);
        },
      });

      return () => {
        heroToLifeTrigger.kill();
        lifeToAboutTrigger.kill();

        heroToLifeController.destroy();
        lifeToAboutController.destroy();
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
