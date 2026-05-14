import gsap from "gsap";

const HERO_EXIT_LERP = 0.02;
const HERO_EXIT_DISTANCE_RATIO = 1.3;
const CHARACTER_EXIT_DISTANCE_RATIO = 0.35;

type HeroAnimationController = {
  destroy: () => void;
};

type HeroProgressController = HeroAnimationController & {
  setProgress: (progress: number) => void;
};

type ExitItemController = {
  element: HTMLElement;
  setY: (value: number) => void;
  setOpacity: (value: number) => void;
  start: number;
  end: number;
};

type CharacterController = {
  element: HTMLElement;
  setY: (value: number) => void;
  setRotate: (value: number) => void;
};

const clampProgress = (progress: number) => gsap.utils.clamp(0, 1, progress);
const easeOut = gsap.parseEase("power2.out");

const toLocalProgress = (progress: number, start: number, end: number) => {
  return gsap.utils.clamp(
    0,
    1,
    gsap.utils.mapRange(start, end, 0, 1, progress)
  );
};

const getExitDistance = () => window.innerHeight * HERO_EXIT_DISTANCE_RATIO;

const getCharacterExitDistance = () => {
  return window.innerHeight * CHARACTER_EXIT_DISTANCE_RATIO;
};

function createExitItemControllers(section: HTMLElement): ExitItemController[] {
  const items = gsap.utils.toArray<HTMLElement>(
    section.querySelectorAll(".js-hero-exit-item")
  );

  gsap.set(items, {
    y: 0,
    opacity: 1,
    visibility: "visible",
  });

  return items.map((item, index) => ({
    element: item,
    setY: gsap.quickSetter(item, "y", "px") as (value: number) => void,
    setOpacity: gsap.quickSetter(item, "opacity") as (value: number) => void,
    start: index * 0.16,
    end: 0.72 + index * 0.1,
  }));
}

function createCharacterController(
  section: HTMLElement
): CharacterController | null {
  const element = section.querySelector<HTMLElement>(".js-hero-character");

  if (!element) return null;

  gsap.set(element, {
    y: 0,
    rotate: 0,
    opacity: 1,
    visibility: "visible",
  });

  return {
    element,
    setY: gsap.quickSetter(element, "y", "px") as (value: number) => void,
    setRotate: gsap.quickSetter(element, "rotate", "deg") as (
      value: number
    ) => void,
  };
}

function renderExitItems(
  controllers: ExitItemController[],
  progress: number,
  exitDistance: number
) {
  controllers.forEach(({ element, setY, setOpacity, start, end }) => {
    const localProgress = toLocalProgress(progress, start, end);
    const moveProgress = easeOut(localProgress);
    const fadeProgress = gsap.utils.clamp(0, 1, localProgress / 0.35);
    const opacity = 1 - fadeProgress;

    setY(-exitDistance * moveProgress);
    setOpacity(opacity);

    element.style.visibility = opacity <= 0.01 ? "hidden" : "visible";
  });
}

function renderCharacter(
  controller: CharacterController | null,
  progress: number
) {
  if (!controller) return;

  const localProgress = toLocalProgress(progress, 0.05, 0.85);

  controller.setY(getCharacterExitDistance() * localProgress);
  controller.setRotate(-6 * localProgress);

  controller.element.style.opacity = "1";
  controller.element.style.visibility = "visible";
}

export function createHeroExit(section: HTMLElement): HeroProgressController {
  const exitItemControllers = createExitItemControllers(section);
  const characterController = createCharacterController(section);

  let currentProgress = 0;
  let targetProgress = 0;

  const render = () => {
    currentProgress += (targetProgress - currentProgress) * HERO_EXIT_LERP;

    renderExitItems(exitItemControllers, currentProgress, getExitDistance());
    renderCharacter(characterController, currentProgress);
  };

  gsap.ticker.add(render);

  return {
    setProgress(progress: number) {
      targetProgress = clampProgress(progress);
    },

    destroy() {
      gsap.ticker.remove(render);

      gsap.set(
        exitItemControllers.map(({ element }) => element),
        {
          clearProps: "transform,opacity,visibility",
        }
      );

      if (characterController) {
        gsap.set(characterController.element, {
          clearProps: "transform,opacity,visibility",
        });
      }
    },
  };
}
