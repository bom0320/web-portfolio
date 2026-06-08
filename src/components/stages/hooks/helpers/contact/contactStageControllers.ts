import {
  createContactFooterAnimation,
  createContactIntroAnimation,
} from "@/animations/contact";

import {
  getContactFooterAnimationElements,
  getContactIntroAnimationElements,
} from "@/components/scenes/contact/dom";

import type { ContactStageElements } from "./getContactStageElements";

export function createContactStageControllers(elements: ContactStageElements) {
  return {
    intro: createContactIntroAnimation(
      getContactIntroAnimationElements(elements.intro)
    ),

    footer: createContactFooterAnimation(
      getContactFooterAnimationElements(elements.footer)
    ),
  };
}

export type ContactStageControllers = ReturnType<
  typeof createContactStageControllers
>;

export function resetContactStageControllers(
  controllers: ContactStageControllers
) {
  controllers.intro.setProgress(0);
  controllers.footer.setProgress(0);
}

export function destroyContactStageControllers(
  controllers: ContactStageControllers
) {
  controllers.intro.destroy();
  controllers.footer.destroy();
}
