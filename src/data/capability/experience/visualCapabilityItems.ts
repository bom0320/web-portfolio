export type VisualCapabilityIcon = "sparkles" | "type" | "motion" | "route";

export type VisualCapabilityItem = {
  id: string;
  title: string;
  subtitle: string;
  message: string;
  description: string;
  imageType: string;
  icon: VisualCapabilityIcon;
};

export const VISUAL_CAPABILITY_ITEMS: VisualCapabilityItem[] = [
  {
    id: "character-exploration",
    title: "Character Exploration",
    subtitle: "포트폴리오의 감정 톤을 만드는 시각 요소",
    message:
      "단순한 장식보다, 화면의 분위기와 감정을 함께 전달하고 싶었습니다.",
    description:
      "직접 그린 캐릭터, variation, silhouette 비교, Hero 적용 과정을 통해 포트폴리오의 첫인상을 조율합니다.",
    imageType: "Character sketches / variation",
    icon: "sparkles",
  },
  {
    id: "typography-rhythm",
    title: "Typography Rhythm",
    subtitle: "크기와 간격으로 만드는 화면의 리듬",
    message:
      "텍스트는 단순한 정보가 아니라, 화면의 리듬을 만드는 요소라고 생각합니다.",
    description:
      "large headline, spacing, hierarchy, text density를 비교하며 답답하지 않고 자연스럽게 읽히는 흐름을 만듭니다.",
    imageType: "Spacing comparison / headline test",
    icon: "type",
  },
  {
    id: "motion-balance",
    title: "Motion Balance",
    subtitle: "움직임의 속도와 전환 리듬 조율",
    message:
      "움직임은 시선을 끌기보다, 흐름을 자연스럽게 이어주는 역할이어야 한다고 생각합니다.",
    description:
      "GSAP timing, pinned transition, easing, scroll rhythm을 반복적으로 조정하며 흐름이 끊기지 않도록 다듬습니다.",
    imageType: "Timeline fragment / easing comparison",
    icon: "motion",
  },
  {
    id: "visual-storytelling",
    title: "Visual Storytelling",
    subtitle: "장면을 이어 하나의 스크롤 서사로 구성",
    message:
      "화면을 단순히 이어붙이기보다, 하나의 흐름처럼 경험되도록 구성하려고 합니다.",
    description:
      "Apple reference, scene flow sketch, stage transition 구조를 바탕으로 장면의 전환과 분위기까지 설계합니다.",
    imageType: "Scene flow / stage structure",
    icon: "route",
  },
];
