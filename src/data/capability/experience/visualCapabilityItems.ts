export type VisualCapabilityIcon = "sparkles" | "type" | "motion" | "workflow";

export type VisualCapabilityVariant = "image" | "text" | "motion";

export type VisualCapabilityItem = {
  id: "character" | "typography" | "storytelling" | "motion";
  title: string;
  description?: string;
  icon: VisualCapabilityIcon;
  variant: VisualCapabilityVariant;
  accent?: boolean; // accent가 true면 아이콘에 그라데이션 적용
  image?: {
    src: string;
    alt: string;
  };
};

export const VISUAL_CAPABILITY_ITEMS: VisualCapabilityItem[] = [
  {
    id: "character",
    title: "서비스의 분위기에 맞는 캐릭터와 비주얼 톤까지 직접 설계합니다.",
    icon: "sparkles",
    variant: "image",
    image: {
      src: "/images/capability/visual/character-sketch.jpg",
      alt: "직접 그린 캐릭터 스케치와 시각 실험 과정",
    },
  },
  {
    id: "typography",
    title: "텍스트의 크기, 간격, 밀도를 조정해 화면의 리듬까지 설계합니다.",
    icon: "type",
    variant: "text",
    accent: true,
  },
  {
    id: "storytelling",
    title: "하나의 흐름으로 경험되도록 구현합니다.",
    icon: "workflow",
    variant: "text",
    accent: true,
  },
  {
    id: "motion",
    title: "GSAP 기반의 스크롤 전환으로 장면의 속도와 흐름까지 조율합니다.",
    icon: "motion",
    variant: "motion",
    image: {
      src: "/images/capability/visual/motion-curve.jpg",
      alt: "GSAP easing curves와 motion timing 조율 화면",
    },
  },
];
