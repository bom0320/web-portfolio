import gsap from "gsap";

type AboutHeroController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

type AboutHeroParams = {
  eyebrow: HTMLElement | null;
  heading: HTMLElement;
  desc: HTMLElement;
  visual: HTMLElement | null;
  cta: HTMLElement | null;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

const AboutHeroAnimation = {
  create({
    eyebrow,
    heading,
    desc,
    visual,
    cta,
  }: AboutHeroParams): AboutHeroController {
    const targets = [eyebrow, heading, desc, visual, cta].filter(
      (target): target is HTMLElement => Boolean(target)
    );

    gsap.set([eyebrow, heading, desc, cta].filter(Boolean), {
      y: 32,
      autoAlpha: 0,
    });

    gsap.set(visual, {
      y: 36,
      scale: 0.96,
      autoAlpha: 0,
    });

    gsap.set(desc, {
      x: -16,
    });

    const timeline = gsap.timeline({ paused: true });

    timeline
      .to(
        visual,
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
        },
        0
      )
      .to(
        eyebrow,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        0.08
      )
      .to(
        heading,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        0.16
      )
      .to(
        desc,
        {
          y: 0,
          x: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        0.28
      )
      .to(
        cta,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        0.42
      );

    return {
      setProgress(progress: number) {
        timeline.progress(clampProgress(progress));
      },

      destroy() {
        timeline.kill();

        gsap.set(targets, {
          clearProps: "all",
        });
      },
    };
  },
};

export default AboutHeroAnimation;
