import gsap from "gsap";

import {
  clampProgress,
  createNoopController,
  type AnimationController,
} from "@/animations/_shared";
import type { AboutSceneAnimationElements } from "@/components/scenes/about/dom";

import AboutHeroAnimation from "./aboutHero.animation";
import AboutSkillsAnimation from "./aboutSkills.animation";

const mapRange = (progress: number, start: number, end: number) => {
  return clampProgress((progress - start) / (end - start));
};

const AboutSceneAnimation = {
  create(elements: AboutSceneAnimationElements): AnimationController {
    const { root, hero, skills } = elements;

    const aboutHero = hero.root;
    const skillsRoot = skills.root;
    const heroInner = hero.inner;
    const skillsInner = skills.inner;

    if (
      !root ||
      !aboutHero ||
      !skillsRoot ||
      !heroInner ||
      !skillsInner ||
      !hero.heading ||
      !hero.desc
    ) {
      return createNoopController();
    }

    gsap.set(aboutHero, {
      autoAlpha: 1,
      pointerEvents: "auto",
    });

    gsap.set(skillsRoot, {
      autoAlpha: 0,
      pointerEvents: "none",
    });

    gsap.set(heroInner, {
      y: 0,
      autoAlpha: 1,
    });

    gsap.set(skillsInner, {
      y: 140,
      autoAlpha: 0,
    });

    const heroAnimation = AboutHeroAnimation.create(hero);

    const skillsIntroTimeline = AboutSkillsAnimation.intro(skills);

    const skillsTitleFillTimeline = AboutSkillsAnimation.createSkillTitleFill(
      skills.titleFill
    );

    const sceneTimeline = gsap.timeline({ paused: true });

    sceneTimeline
      .to(
        heroInner,
        {
          y: -140,
          autoAlpha: 0,
          duration: 0.34,
          ease: "power3.inOut",
        },
        0.5
      )
      .to(
        skillsRoot,
        {
          autoAlpha: 1,
          pointerEvents: "auto",
          duration: 0.18,
          ease: "power2.out",
        },
        0.54
      )
      .fromTo(
        skillsInner,
        {
          y: 140,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.36,
          ease: "power3.out",
        },
        0.56
      )
      .to(
        aboutHero,
        {
          autoAlpha: 0,
          pointerEvents: "none",
          duration: 0.12,
          ease: "power2.out",
        },
        0.76
      );

    const setProgress = (progress: number) => {
      const nextProgress = clampProgress(progress);

      sceneTimeline.progress(nextProgress);

      heroAnimation.setProgress(mapRange(nextProgress, 0.04, 0.34));

      skillsTitleFillTimeline?.progress(mapRange(nextProgress, 0.62, 0.74));
      skillsIntroTimeline.progress(mapRange(nextProgress, 0.64, 0.9));
    };

    const destroy = () => {
      sceneTimeline.kill();

      heroAnimation.destroy();
      skillsIntroTimeline.kill();
      skillsTitleFillTimeline?.kill();

      gsap.set([aboutHero, skillsRoot, heroInner, skillsInner], {
        clearProps: "all",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default AboutSceneAnimation;
