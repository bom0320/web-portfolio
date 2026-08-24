import {
  ProjectsClosingAnimation,
  ProjectsShowcaseAnimation,
} from "@/animations/projects";

import {
  getProjectsClosingAnimationElements,
  getProjectsShowcaseIntroAnimationElements,
} from "@/components/scenes/projects/dom";

import type { ProjectsStageElements } from "./projectsStageElements";

export function createProjectsStageControllers(
  elements: ProjectsStageElements
) {
  return {
    showcaseIntro: ProjectsShowcaseAnimation.createIntro(
      getProjectsShowcaseIntroAnimationElements(elements.showcaseIntro)
    ),

    closing: ProjectsClosingAnimation.create(
      getProjectsClosingAnimationElements(elements.closing)
    ),
  };
}

export type ProjectsStageControllers = ReturnType<
  typeof createProjectsStageControllers
>;

export function resetProjectsStageControllers(
  controllers: ProjectsStageControllers
) {
  controllers.showcaseIntro.setProgress(0);
  controllers.closing.setProgress(0);
}

export function destroyProjectsStageControllers(
  controllers: ProjectsStageControllers
) {
  controllers.showcaseIntro.destroy();
  controllers.closing.destroy();
}
