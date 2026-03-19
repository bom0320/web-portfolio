import gsap from "gsap";

interface ProjectDetailTransitionParams {
  currentKeyword: HTMLDivElement;
  nextKeyword: HTMLDivElement;
  currentOverview: HTMLDivElement;
  nextOverview: HTMLDivElement;
  currentThumbs: HTMLDivElement;
  nextThumbs: HTMLDivElement;
}

interface ProjectHeroTextTransitionParams {
  currentText: HTMLDivElement;
  nextText: HTMLDivElement;
}

interface ProjectHeroVisualTransitionParams {
  currentImage: HTMLDivElement;
  nextImage: HTMLDivElement;
  onComplete?: () => void;
}

const ProjectAnimation = {
  createProjectDetailTransition({
    currentKeyword,
    nextKeyword,
    currentOverview,
    nextOverview,
    currentThumbs,
    nextThumbs,
  }: ProjectDetailTransitionParams) {
    gsap.set(nextKeyword, { opacity: 0, y: 8 });
    gsap.set(nextOverview, { opacity: 0, y: 10 });
    gsap.set(nextThumbs, { opacity: 0, x: 24 });

    return gsap
      .timeline({
        defaults: {
          duration: 0.35,
          ease: "power2.out",
        },
      })
      .to(currentKeyword, { opacity: 0, y: -8 }, 0)
      .to(currentOverview, { opacity: 0, y: -10 }, 0)
      .to(currentThumbs, { opacity: 0, x: -24 }, 0)
      .to(nextKeyword, { opacity: 1, y: 0 }, 0.12)
      .to(nextOverview, { opacity: 1, y: 0 }, 0.16)
      .to(nextThumbs, { opacity: 1, x: 0 }, 0.12)

      .set(currentKeyword, { opacity: 0, clearProps: "transform" })
      .set(currentOverview, { opacity: 0, clearProps: "transform" })
      .set(currentThumbs, { opacity: 0, clearProps: "transform" })

      .set(nextKeyword, { opacity: 1, clearProps: "transform" })
      .set(nextOverview, { opacity: 1, clearProps: "transform" })
      .set(nextThumbs, { opacity: 1, clearProps: "transform" });
  },

  createProjectHeroTextTransition({
    currentText,
    nextText,
  }: ProjectHeroTextTransitionParams) {
    gsap.set(nextText, { opacity: 0, y: 20 });

    return gsap
      .timeline({
        defaults: {
          duration: 0.45,
          ease: "power2.out",
        },
      })
      .to(currentText, { opacity: 0, y: -20 }, 0)
      .to(nextText, { opacity: 1, y: 0 }, 0.12)
      .set(currentText, { opacity: 0 })
      .set(nextText, { opacity: 1, y: 0 });
  },

  createProjectHeroVisualTransition({
    currentImage,
    nextImage,
    onComplete,
  }: ProjectHeroVisualTransitionParams) {
    gsap.set(nextImage, { opacity: 0, scale: 1.04 });

    return gsap
      .timeline({
        defaults: {
          duration: 0.5,
          ease: "power2.out",
        },
        onComplete,
      })
      .to(currentImage, { opacity: 0, scale: 0.98 }, 0)
      .to(nextImage, { opacity: 1, scale: 1 }, 0.1)
      .set(currentImage, { opacity: 0, scale: 0.98 })
      .set(nextImage, { opacity: 1, scale: 1 });
  },
};

export default ProjectAnimation;
