export const fillToSameLength = <T>(items: T[], targetLength: number) => {
  if (items.length === 0) return [];

  return Array.from(
    { length: targetLength },
    (_, index) => items[index % items.length]
  );
};

export const createLifeMotionRows = <T>(items: T[]) => {
  const topItems = items.filter((_, index) => index % 2 === 0);
  const bottomItems = items.filter((_, index) => index % 2 === 1);

  const rowLength = Math.max(topItems.length, bottomItems.length);

  return {
    topItems: fillToSameLength(topItems, rowLength),
    bottomItems: fillToSameLength(bottomItems, rowLength),
  };
};
