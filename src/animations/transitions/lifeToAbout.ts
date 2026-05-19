import gsap from "gsap";

type LifeToAboutController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const LifeToAboutAnimation = {
  create(): LifeToAboutController {
    const aboutScenes = document.querySelector<HTMLElement>(".js-about-scenes");
    const aboutHero = document.querySelector<HTMLElement>(".about-hero");
    const skills = document.querySelector<HTMLElement>(".about-skills");
    const interview = document.querySelector<HTMLElement>(".about-interview");

    if (!aboutScenes || !aboutHero || !skills || !interview) {
      return {
        setProgress: () => {},
        destroy: () => {},
      };
    }

    gsap.set(aboutScenes, {
      y: "100vh",
      scale: 0.98,
      borderRadius: "36px 36px 0 0",
      transformOrigin: "center bottom",
      autoAlpha: 1,
    });

    gsap.set(aboutHero, {
      autoAlpha: 1,
      y: 0,
    });

    gsap.set([skills, interview], {
      autoAlpha: 0,
      y: 40,
    });

    const timeline = gsap.timeline({
      paused: true,
    });
    timeline
      // 1. AboutScenes 카드 진입
      .to(
        aboutScenes,
        {
          y: "0vh",
          scale: 1,
          borderRadius: "0px",
          ease: "power2.inOut",
        },
        0
      )

      // 2. AboutHero 유지 구간
      .to(
        aboutHero,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: "none",
        },
        0.18
      )

      // 3. AboutHero exit
      .to(
        aboutHero,
        {
          autoAlpha: 0,
          y: -56,
          scale: 0.97,
          ease: "power3.inOut",
        },
        0.42
      )

      // 4. Skills enter
      .fromTo(
        skills,
        {
          autoAlpha: 0,
          y: 72,
          scale: 0.96,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: "power3.out",
        },
        0.48
      )

      // 5. Skills exit
      .to(
        skills,
        {
          autoAlpha: 0,
          y: -56,
          scale: 0.97,
          ease: "power3.inOut",
        },
        0.68
      )

      // 6. Interview enter
      .fromTo(
        interview,
        {
          autoAlpha: 0,
          y: 72,
          scale: 0.96,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: "power3.out",
        },
        0.74
      );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set([aboutScenes, aboutHero, skills, interview], {
        clearProps: "transform,borderRadius,opacity,visibility",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default LifeToAboutAnimation;
