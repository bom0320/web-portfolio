const CAPABILITY_IMAGE_BASE_PATH = "/images/capability";

export const getCapabilityImagePath = (section: string, fileName: string) =>
  `${CAPABILITY_IMAGE_BASE_PATH}/${section}/${fileName}`;

export const getCapabilityNavigatorAssetPath = (fileName: string) =>
  getCapabilityImagePath("navigator", fileName);

export const getCapabilityNavigatorImagePath = (
  projectId: string,
  fileName: string
) => getCapabilityImagePath(`navigator/${projectId}`, fileName);

export const getCapabilityNavigatorDetailImages = (
  projectId: string,
  count: number
) =>
  Array.from({ length: count }, (_, index) =>
    getCapabilityNavigatorImagePath(
      projectId,
      `detail-${String(index + 1).padStart(2, "0")}.png`
    )
  );

export const createCapabilityNavigatorImages = (
  projectId: string,
  detailCount: number
) => ({
  heroImage: getCapabilityNavigatorImagePath(projectId, "hero.png"),
  detailImages: getCapabilityNavigatorDetailImages(projectId, detailCount),
});

export const CAPABILITY_NAVIGATOR_MONITOR_FRAME =
  getCapabilityNavigatorAssetPath("monitor-frame.png");
