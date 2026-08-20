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
    title: "의도를 읽고, 결과물에 어울리는 표현을 찾아갑니다.",
    description:
      "디자인을 볼 때 형태 자체보다 어떤 인상을 만들고 있는지 먼저 봅니다. 색과 대비, 비율과 밀도처럼 화면의 분위기를 좌우하는 요소를 세밀하게 살피고, 여러 가능성을 비교하며 목적과 맥락에 가장 잘 어울리는 표현을 찾아갑니다.",
    icon: "sparkles",
    variant: "image",
    image: {
      src: getBuildImagePath("visual", "mosaic-direction.jpg"),
      alt: "색상과 셀의 비율, 밀도를 조율하며 모자이크 표현을 탐색한 작업",
    },
  },

  {
    id: "visual-balance",
    title: "작은 시각적 차이가 사용 경험을 바꾸는 지점을 살핍니다.",
    icon: "type",
    variant: "text",
    accent: true,
  },

  {
    id: "visual-flow",
    title: "기능과 표현이 서로 방해하지 않는 균형을 찾습니다.",
    icon: "workflow",
    variant: "text",
    accent: true,
  },

  {
    id: "motion-direction",
    title: "속도와 타이밍으로 움직임의 인상을 조율합니다.",
    description:
      "같은 전환도 속도와 easing, 등장 시점에 따라 전혀 다르게 느껴집니다. 장면의 역할과 앞뒤 흐름을 기준으로 여러 값을 비교하며 가장 자연스러운 리듬을 찾아갑니다.",
    icon: "motion",
    variant: "motion",
    image: {
      src: getBuildImagePath("visual", "motion-curve.jpg"),
      alt: "모션의 속도와 easing, 타이밍을 조율한 과정",
    },
  },
];
