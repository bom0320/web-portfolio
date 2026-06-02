import {
  createContactFooterAnimation,
  createContactIntroAnimation,
} from "@/animations/contact";

import type { ContactStageElements } from "./getContactStageElements";

export function createContactStageControllers(elements: ContactStageElements) {
  return {
    intro: elements.intro
      ? createContactIntroAnimation({
          intro: elements.intro,
        })
      : undefined,

    footer: elements.footer
      ? createContactFooterAnimation({
          footer: elements.footer,
        })
      : undefined,
  };
}

export type ContactStageControllers = ReturnType<
  typeof createContactStageControllers
>;

export function resetContactStageControllers(
  controllers: ContactStageControllers
) {
  controllers.intro?.setProgress(0);
}

export function destroyContactStageControllers(
  controllers: ContactStageControllers
) {
  controllers.intro?.destroy();
  controllers.footer?.kill();
}
