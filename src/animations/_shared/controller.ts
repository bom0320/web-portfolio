export type AnimationController = {
  setProgress: (progress: number) => void;
  destroy: () => void;
};

export const createNoopController = (): AnimationController => ({
  setProgress: () => {},
  destroy: () => {},
});
