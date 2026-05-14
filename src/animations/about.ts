import gsap from "gsap";

type AboutHeroController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

type AboutHeroParams = {
  heading: HTMLElement;
  desc: HTMLElement;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const AboutHeroAnimation = {
  create({ heading, desc }: AboutHeroParams): AboutHeroController {
    gsap.set(heading, {
      y: 40,
      autoAlpha: 0,
    });

    gsap.set(desc, {
      y: 28,
      x: -18,
      autoAlpha: 0,
    });

    const timeline = gsap.timeline({
      paused: true,
    });

    timeline
      .to(
        heading,
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
        },
        0
      )
      .to(
        desc,
        {
          y: 0,
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
        },
        0.18
      );

    const setProgress = (progress: number) => {
      timeline.progress(clampProgress(progress));
    };

    const destroy = () => {
      timeline.kill();

      gsap.set([heading, desc], {
        clearProps: "all",
      });
    };

    return {
      setProgress,
      destroy,
    };
  },
};

export default AboutHeroAnimation;
