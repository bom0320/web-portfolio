import {
  ProjectsClosingAnimation,
  ProjectsNavigatorAnimation,
} from "@/animations/projects";

import {
  getProjectsClosingAnimationElements,
  getProjectsNavigatorIntroAnimationElements,
} from "@/components/scenes/projects/dom";

import type { ProjectsStageElements } from "./projectsStageElements";

export function createProjectsStageControllers(
  elements: ProjectsStageElements
) {
  return {
    navigatorIntro: ProjectsNavigatorAnimation.createIntro(
      getProjectsNavigatorIntroAnimationElements(elements.navigatorIntro)
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
  controllers.navigatorIntro.setProgress(0);
  controllers.closing.setProgress(0);
}

export function destroyProjectsStageControllers(
  controllers: ProjectsStageControllers
) {
  controllers.navigatorIntro.destroy();
  controllers.closing.destroy();
}
