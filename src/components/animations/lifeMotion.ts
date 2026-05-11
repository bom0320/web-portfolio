import gsap from "gsap";

type TrackParams = {
  topWindow: HTMLDivElement;
  bottomWindow: HTMLDivElement;
};

type LifeMotionController = {
  play: () => void;
  destroy: () => void;
};

const LifeMotionAnimation = {
  track({ topWindow, bottomWindow }: TrackParams): LifeMotionController {
    gsap.set(topWindow, {
      xPercent: -100,
    });

    gsap.set(bottomWindow, {
      xPercent: 100,
    });

    const timeline = gsap.timeline({
      paused: true,
      defaults: {
        duration: 3.2,
        ease: "power2.out",
      },
    });

    timeline
      .to(topWindow, {
        xPercent: 0,
      })
      .to(
        bottomWindow,
        {
          xPercent: 0,
        },
        0
      );

    return {
      play() {
        timeline.play();
      },

      destroy() {
        timeline.kill();

        gsap.set([topWindow, bottomWindow], {
          xPercent: 0,
        });
      },
    };
  },
};

export default LifeMotionAnimation;
