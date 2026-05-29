import gsap from "gsap";

type ContactIntroAnimationController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

interface CreateContactFooterAnimationParams {
  footer: HTMLElement;
}

interface CreateContactIntroAnimationParams {
  intro: HTMLElement;
}

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

export function createContactIntroAnimation({
  intro,
}: CreateContactIntroAnimationParams): ContactIntroAnimationController {
  const eyebrow = intro.querySelector<HTMLElement>(".js-contact-intro-eyebrow");
  const title = intro.querySelector<HTMLElement>(".js-contact-intro-title");
  const description = intro.querySelector<HTMLElement>(
    ".js-contact-intro-description"
  );

  const elements = [eyebrow, title, description].filter(Boolean);

  gsap.set(elements, {
    autoAlpha: 0,
    y: 36,
    filter: "blur(10px)",
  });

  const timeline = gsap.timeline({
    paused: true,
  });

  timeline
    .to(eyebrow, {
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.14,
      ease: "none",
    })
    .to(
      title,
      {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.2,
        ease: "none",
      },
      0.08
    )
    .to(
      description,
      {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.18,
        ease: "none",
      },
      0.22
    );

  const setProgress = (progress: number) => {
    timeline.progress(clampProgress(progress));
  };

  const destroy = () => {
    timeline.kill();

    gsap.set(elements, {
      clearProps: "all",
    });
  };

  return {
    setProgress,
    destroy,
  };
}

export function createContactFooterAnimation({
  footer,
}: CreateContactFooterAnimationParams) {
  gsap.set(footer, {
    y: 110,
    willChange: "transform",
  });

  const timeline = gsap.timeline({
    paused: true,
  });

  timeline.to(footer, {
    y: 0,
    duration: 1,
    ease: "power2.out",
  });

  return timeline;
}
