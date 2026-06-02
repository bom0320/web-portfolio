import gsap from "gsap";

export type ContactIntroAnimationController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

interface CreateContactIntroAnimationParams {
  intro: HTMLElement | null;
}

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);

export function createContactIntroAnimation({
  intro,
}: CreateContactIntroAnimationParams): ContactIntroAnimationController {
  if (!intro) {
    return {
      setProgress: () => {},
      destroy: () => {},
    };
  }

  const eyebrow = intro.querySelector<HTMLElement>(".js-contact-intro-eyebrow");
  const title = intro.querySelector<HTMLElement>(".js-contact-intro-title");
  const description = intro.querySelector<HTMLElement>(
    ".js-contact-intro-description"
  );

  const elements = [eyebrow, title, description].filter(
    (element): element is HTMLElement => Boolean(element)
  );

  gsap.set(elements, {
    autoAlpha: 0,
    y: 36,
    filter: "blur(10px)",
  });

  const timeline = gsap.timeline({
    paused: true,
  });

  if (eyebrow) {
    timeline.to(eyebrow, {
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.14,
      ease: "none",
    });
  }

  if (title) {
    timeline.to(
      title,
      {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.2,
        ease: "none",
      },
      0.08
    );
  }

  if (description) {
    timeline.to(
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
  }

  return {
    setProgress(progress: number) {
      timeline.progress(clampProgress(progress));
    },

    destroy() {
      timeline.kill();

      gsap.set(elements, {
        clearProps: "all",
      });
    },
  };
}
