"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { HeroScene, LifeMotionScene } from "../scenes";
import HeroToLifeAnimation from "../../animations/transitions/heroToLife";

gsap.registerPlugin(ScrollTrigger);

export default function IntroStage() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const controller = HeroToLifeAnimation.create();

      controller.setProgress(0);

      const trigger = ScrollTrigger.create({
        trigger: ".js-intro-stage",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
        invalidateOnRefresh: true,

        onUpdate: (self) => {
          controller.setProgress(self.progress);
        },
      });

      return () => {
        trigger.kill();
        controller.destroy();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="intro-stage js-intro-stage">
      <div className="intro-stage__sticky">
        <HeroScene />
        <LifeMotionScene />
      </div>
    </section>
  );
}
