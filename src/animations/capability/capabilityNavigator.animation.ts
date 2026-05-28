import gsap from "gsap";

interface CapabilityNavigatorLayerTransitionParams {
  nextLayer: HTMLDivElement;
  onComplete?: () => void;
}

const CapabilityNavigatorAnimation = {
  createLayerTransition({
    nextLayer,
    onComplete,
  }: CapabilityNavigatorLayerTransitionParams) {
    gsap.set(nextLayer, { opacity: 0 });

    return gsap
      .timeline({
        defaults: {
          duration: 0.5,
          ease: "power2.out",
        },
        onComplete,
      })
      .to(nextLayer, { opacity: 1 }, 0);
  },
};

export default CapabilityNavigatorAnimation;
