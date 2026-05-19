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

    const heroInner = document.querySelector<HTMLElement>(
      ".js-about-hero-inner"
    );
    const skillsInner = document.querySelector<HTMLElement>(
      ".js-about-skills-inner"
    );
    const interviewInner = document.querySelector<HTMLElement>(
      ".js-about-interview-inner"
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

    if (
      !aboutHero ||
      !skills ||
      !interview ||
      !heroInner ||
      !skillsInner ||
      !interviewInner ||
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

    gsap.set([skills, interview], {
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

    gsap.set(interviewInner, {
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
      /**
       * HERO → SKILLS
       */

      // Hero contents move up
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

      // Skills scene softly appears
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

      // Skills contents move in
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

      // Hero scene off after overlap
      .to(
        aboutHero,
        {
          autoAlpha: 0,
          pointerEvents: "none",
          duration: 0.12,
          ease: "power2.out",
        },
        0.76
      )

      /**
       * SKILLS → INTERVIEW
       */

      // Skills contents move up
      .to(
        skillsInner,
        {
          y: -140,
          autoAlpha: 0,
          duration: 0.34,
          ease: "power3.inOut",
        },
        0.8
      )

      // Interview scene softly appears
      .to(
        interview,
        {
          autoAlpha: 1,
          pointerEvents: "auto",
          duration: 0.18,
          ease: "power2.out",
        },
        0.84
      )

      // Interview contents move in
      .fromTo(
        interviewInner,
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
        0.86
      )

      // Skills scene off after overlap
      .to(
        skills,
        {
          autoAlpha: 0,
          pointerEvents: "none",
          duration: 0.12,
          ease: "power2.out",
        },
        0.98
      );

    const setProgress = (progress: number) => {
      const nextProgress = clampProgress(progress);

      sceneTimeline.progress(nextProgress);

      heroAnimation.setProgress(mapRange(nextProgress, 0.04, 0.34));

      skillsTitleFillTimeline?.progress(mapRange(nextProgress, 0.62, 0.74));
      skillsIntroTimeline.progress(mapRange(nextProgress, 0.64, 0.82));

      interviewTitleFillTimeline?.progress(mapRange(nextProgress, 0.9, 1));

      interviewRowTimelines.forEach((tl, index) => {
        const start = 0.9 + index * 0.025;
        const end = start + 0.1;

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

      gsap.set(
        [aboutHero, skills, interview, heroInner, skillsInner, interviewInner],
        {
          clearProps: "all",
        }
      );
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default AboutSceneAnimation;
