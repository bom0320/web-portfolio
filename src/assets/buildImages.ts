const BUILD_IMAGE_BASE_PATH = "/images/build";

export const getBuildImagePath = (section: string, fileName: string) =>
  `${BUILD_IMAGE_BASE_PATH}/${section}/${fileName}`;
