import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StructureCapabilityAnimationController = {
  destroy: () => void;
};

const StructureCapabilityAnimation = {
  create(root: HTMLElement | null): StructureCapabilityAnimationController {
    if (!root) {
      return {
        destroy: () => {},
      };
    }

    const header = root.querySelector<HTMLElement>(
      ".js-structure-capability-header"
    );

    const core = root.querySelector<HTMLElement>(
      ".experience-capability-structure-map__core"
    );

    const stem = root.querySelector<HTMLElement>(
      ".experience-capability-structure-map__stem"
    );

    const branch = root.querySelector<HTMLElement>(
      ".experience-capability-structure-map__branch"
    );

    const nodes = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll(".experience-capability-structure-map__node")
    );

    const cards = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll(".experience-capability-structure-card")
    );

    const cardIcons = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll(".experience-capability-structure-card__icon")
    );

    const cardTitles = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll(".experience-capability-structure-card__title")
    );

    const cardMessages = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll(".experience-capability-structure-card__message")
    );

    const cardDescs = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll(".experience-capability-structure-card__desc")
    );

    gsap.set(header, {
      autoAlpha: 0,
      y: 34,
      filter: "blur(10px)",
    });

    gsap.set(core, {
      autoAlpha: 0,
      scale: 0.72,
      filter: "blur(10px)",
      transformOrigin: "center center",
    });

    gsap.set(stem, {
      scaleY: 0,
      transformOrigin: "top center",
    });

    gsap.set(branch, {
      scaleX: 0,
      transformOrigin: "center center",
      "--branch-end-scale": 0,
    });

    gsap.set(nodes, {
      autoAlpha: 0,
      y: -28,
      scale: 0.74,
      filter: "blur(8px)",
      transformOrigin: "center center",
      "--node-line-scale": 0,
    });

    gsap.set(cards, {
      autoAlpha: 0,
      y: 130,
      scale: 0.96,
      filter: "blur(10px)",
      transformOrigin: "center top",
    });

    gsap.set([cardIcons, cardTitles, cardMessages, cardDescs], {
      autoAlpha: 0,
      y: 28,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 72%",
        end: "bottom 56%",
        scrub: 1.15,
      },
    });

    timeline
      .to(header, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
      })

      .to(
        core,
        {
          autoAlpha: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "back.out(1.65)",
        },
        "-=0.22"
      )

      .to(
        stem,
        {
          scaleY: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.12"
      )

      .to(branch, {
        scaleX: 1,
        duration: 0.75,
        ease: "power2.inOut",
      })

      .to(
        branch,
        {
          "--branch-end-scale": 1,
          duration: 0.45,
          ease: "power2.out",
        },
        "-=0.18"
      )

      .to(
        nodes,
        {
          "--node-line-scale": 1,
          duration: 0.5,
          stagger: {
            each: 0.08,
            from: "center",
          },
          ease: "power2.out",
        },
        "-=0.22"
      )

      .to(
        nodes,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.55,
          stagger: {
            each: 0.08,
            from: "center",
          },
          ease: "back.out(1.45)",
        },
        "-=0.4"
      )

      .to(
        cards,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.05"
      )

      .to(
        cardIcons,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.62"
      )

      .to(
        cardTitles,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.48"
      )

      .to(
        cardMessages,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.4"
      )

      .to(
        cardDescs,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.36"
      );

    return {
      destroy: () => {
        timeline.kill();
        timeline.scrollTrigger?.kill();
      },
    };
  },
};

export default StructureCapabilityAnimation;
