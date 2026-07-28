const PROJECTS_IMAGE_BASE_PATH = "/images/projects";

export const getProjectsAssetPath = (fileName: string) =>
  `${PROJECTS_IMAGE_BASE_PATH}/${fileName}`;

export const getProjectImagePath = (projectId: string, fileName: string) =>
  `${PROJECTS_IMAGE_BASE_PATH}/${projectId}/${fileName}`;

export const getProjectDetailImages = (projectId: string, count: number) =>
  Array.from({ length: count }, (_, index) =>
    getProjectImagePath(
      projectId,
      `detail-${String(index + 1).padStart(2, "0")}.png`
    )
  );

export const createProjectImages = (
  projectId: string,
  detailCount: number
) => ({
  heroImage: getProjectImagePath(projectId, "hero.png"),
  detailImages: getProjectDetailImages(projectId, detailCount),
});

export const PROJECTS_NAVIGATOR_MONITOR_FRAME =
  getProjectsAssetPath("monitor-frame.png");
