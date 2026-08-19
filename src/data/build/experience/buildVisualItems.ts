import { getBuildImagePath } from "@/assets/buildImages";

export type BuildVisualIcon = "sparkles" | "type" | "motion" | "workflow";

export type BuildVisualVariant = "image" | "text" | "motion";

export type BuildVisualItem = {
  id:
    | "visual-direction"
    | "visual-balance"
    | "visual-flow"
    | "motion-direction";

  title: string;
  description?: string;
  icon: BuildVisualIcon;
  variant: BuildVisualVariant;
  accent?: boolean;

  image?: {
    src: string;
    alt: string;
  };
};

export const BUILD_VISUAL_ITEMS: BuildVisualItem[] = [
  {
    id: "visual-direction",
    title: "맥락에 어울리는 시각적 방향을 탐색합니다.",
    description:
      "주어진 의도와 요구사항을 기준으로 여러 표현을 비교하고, 비율과 밀도, 색과 형태를 조율하며 화면에 가장 잘 어울리는 방향을 찾아갑니다.",
    icon: "sparkles",
    variant: "image",
    image: {
      src: getBuildImagePath("visual", "character-sketch.jpg"),
      alt: "여러 시각적 방향을 탐색하고 조율한 과정",
    },
  },

  {
    id: "visual-balance",
    title: "작은 차이에서 화면의 균형을 찾아갑니다.",
    icon: "type",
    variant: "text",
    accent: true,
  },

  {
    id: "visual-flow",
    title: "시선과 장면이 하나의 흐름으로 이어지게 합니다.",
    icon: "workflow",
    variant: "text",
    accent: true,
  },

  {
    id: "motion-direction",
    title: "속도와 타이밍으로 움직임의 인상을 조율합니다.",
    description:
      "같은 전환도 속도와 easing, 등장 시점에 따라 다르게 느껴집니다. 장면의 맥락에 어울리는 리듬을 찾으며 움직임을 다듬습니다.",
    icon: "motion",
    variant: "motion",
    image: {
      src: getBuildImagePath("visual", "motion-curve.jpg"),
      alt: "모션의 속도와 easing, 타이밍을 조율한 과정",
    },
  },
];
