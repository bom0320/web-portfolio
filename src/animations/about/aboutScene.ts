import gsap from "gsap";
import AboutHeroAnimation from "./aboutHero";
import AboutSkillsAnimation from "./aboutSkills";
import AboutInterviewAnimation from "./aboutInterview";

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
    const interview = document.querySelector<HTMLElement>(
      ".js-about-interview"
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

    const interviewTitleOutlineElement = document.querySelector<SVGGElement>(
      ".js-about-interview-title-outline"
    );
    const interviewTitleFillElement = document.querySelector<SVGGElement>(
      ".js-about-interview-title-fill"
    );

    const interviewRows = gsap.utils.toArray<HTMLElement>(
      ".js-about-interview-row"
    );

    if (!aboutHero || !skills || !interview || !heroHeading || !heroDesc) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    gsap.set(aboutHero, {
      autoAlpha: 1,
      pointerEvents: "auto",
    });

    gsap.set([skills, interview], {
      autoAlpha: 0,
      pointerEvents: "none",
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

    const interviewTitleFillTimeline =
      interviewTitleOutlineElement && interviewTitleFillElement
        ? AboutInterviewAnimation.createTitleFill(
            interviewTitleOutlineElement,
            interviewTitleFillElement
          )
        : null;

    const interviewRowTimelines = interviewRows.map((row) => {
      const reveal = row.querySelector<HTMLElement>(
        ".js-about-interview-reveal"
      );
      const overlay = row.querySelector<HTMLElement>(
        ".js-about-interview-overlay"
      );

      return AboutInterviewAnimation.row(reveal, overlay);
    });

    const sceneTimeline = gsap.timeline({ paused: true });

    sceneTimeline
      .to(
        aboutHero,
        {
          autoAlpha: 0,
          pointerEvents: "none",
          duration: 0.25,
          ease: "power2.inOut",
        },
        0.32
      )
      .to(
        skills,
        {
          autoAlpha: 1,
          pointerEvents: "auto",
          duration: 0.25,
          ease: "power2.inOut",
        },
        0.4
      )
      .to(
        skills,
        {
          autoAlpha: 0,
          pointerEvents: "none",
          duration: 0.25,
          ease: "power2.inOut",
        },
        0.66
      )
      .to(
        interview,
        {
          autoAlpha: 1,
          pointerEvents: "auto",
          duration: 0.25,
          ease: "power2.inOut",
        },
        0.74
      );

    const setProgress = (progress: number) => {
      const nextProgress = clampProgress(progress);

      sceneTimeline.progress(nextProgress);

      heroAnimation.setProgress(mapRange(nextProgress, 0.04, 0.34));

      skillsTitleFillTimeline?.progress(mapRange(nextProgress, 0.62, 0.74));
      skillsIntroTimeline.progress(mapRange(nextProgress, 0.64, 0.82));

      interviewTitleFillTimeline?.progress(mapRange(nextProgress, 0.9, 1));

      interviewRowTimelines.forEach((tl, index) => {
        const start = 0.8 + index * 0.04;
        const end = start + 0.16;

        tl.progress(mapRange(nextProgress, start, end));
      });
    };

    const destroy = () => {
      sceneTimeline.kill();

      heroAnimation.destroy();
      skillsIntroTimeline.kill();
      skillsTitleFillTimeline?.kill();
      interviewTitleFillTimeline?.kill();
      interviewRowTimelines.forEach((tl) => tl.kill());

      gsap.set([aboutHero, skills, interview], {
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
