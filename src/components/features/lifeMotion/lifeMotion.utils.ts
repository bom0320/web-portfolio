export const fillToSameLength = <T>(items: T[], targetLength: number) => {
  if (items.length === 0) return [];

  return Array.from(
    { length: targetLength },
    (_, index) => items[index % items.length]
  );
};

export const repeatItems = <T>(items: T[], repeatCount: number) => {
  return Array.from({ length: repeatCount }, () => items).flat();
};

export const createLifeMotionGroups = <T>(items: T[], repeatCount: number) => {
  const topBaseItems = items.filter((_, index) => index % 2 === 0);
  const bottomBaseItems = items.filter((_, index) => index % 2 === 1);

  const targetBaseLength = Math.max(
    topBaseItems.length,
    bottomBaseItems.length
  );

  const normalizedTopBaseItems = fillToSameLength(
    topBaseItems,
    targetBaseLength
  );

  const normalizedBottomBaseItems = fillToSameLength(
    bottomBaseItems,
    targetBaseLength
  );

  return {
    topGroupItems: repeatItems(normalizedTopBaseItems, repeatCount),
    bottomGroupItems: repeatItems(normalizedBottomBaseItems, repeatCount),
  };
};
