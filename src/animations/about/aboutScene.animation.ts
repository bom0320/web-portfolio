import gsap from "gsap";
import AboutHeroAnimation from "./aboutHero.animation";
import AboutSkillsAnimation from "./aboutSkills.animation";

type AboutSceneController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const mapRange = (progress: number, start: number, end: number) => {
  return clampProgress((progress - start) / (end - start));
};

const AboutSceneAnimation = {
  create(): AboutSceneController {
    const aboutHero = document.querySelector<HTMLElement>(".js-about-hero");
    const skills = document.querySelector<HTMLElement>(".js-about-skills");

    const heroInner = document.querySelector<HTMLElement>(
      ".js-about-hero-inner"
    );
    const skillsInner = document.querySelector<HTMLElement>(
      ".js-about-skills-inner"
    );

    const heroEyebrow = document.querySelector<HTMLElement>(
      ".js-about-hero-eyebrow"
    );
    const heroHeading = document.querySelector<HTMLElement>(
      ".js-about-hero-title"
    );
    const heroDesc = document.querySelector<HTMLElement>(".js-about-hero-desc");
    const heroVisual = document.querySelector<HTMLElement>(
      ".js-about-hero-visual"
    );
    const heroCta = document.querySelector<HTMLElement>(".js-about-hero-cta");

    const skillTitleFillElement = document.querySelector<SVGGElement>(
      ".js-about-skills-title-fill"
    );

    if (
      !aboutHero ||
      !skills ||
      !heroInner ||
      !skillsInner ||
      !heroHeading ||
      !heroDesc
    ) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    gsap.set(aboutHero, {
      autoAlpha: 1,
      pointerEvents: "auto",
    });

    gsap.set(skills, {
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

    const heroAnimation = AboutHeroAnimation.create({
      eyebrow: heroEyebrow,
      heading: heroHeading,
      desc: heroDesc,
      visual: heroVisual,
      cta: heroCta,
    });

    const skillsIntroTimeline = AboutSkillsAnimation.intro(skills);

    const skillsTitleFillTimeline = skillTitleFillElement
      ? AboutSkillsAnimation.createSkillTitleFill(skillTitleFillElement)
      : null;

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
        skills,
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

      gsap.set([aboutHero, skills, heroInner, skillsInner], {
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
