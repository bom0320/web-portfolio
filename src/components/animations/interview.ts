import gsap from "gsap";

const InterviewAnimation = {
  title(target: HTMLElement) {
    return gsap.fromTo(
      target,
      {
        autoAlpha: 0,
        y: 24,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        paused: true,
      }
    );
  },

  questionId(target: HTMLElement) {
    return gsap.fromTo(
      target,
      {
        autoAlpha: 0,
        x: -20,
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        paused: true,
      }
    );
  },

  content(target: HTMLElement) {
    return gsap.fromTo(
      target,
      {
        autoAlpha: 0,
        y: 20,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        paused: true,
      }
    );
  },

  row(q: HTMLElement | null, content: HTMLElement | null) {
    const tl = gsap.timeline({ paused: true });

    if (q) {
      tl.fromTo(
        q,
        {
          autoAlpha: 0,
          x: -20,
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }

    if (content) {
      tl.fromTo(
        content,
        {
          autoAlpha: 0,
          y: 20,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        q ? "-=0.35" : 0
      );
    }

    return tl;
  },
};

export default InterviewAnimation;
