export type AICapabilityIcon = "git-compare" | "compass" | "brain-circuit";

export type AICapabilityItem = {
  id: string;
  title: string;
  subtitle: string;
  message: string;
  description: string;
  details: string[];
  icon: AICapabilityIcon;
};

export const AI_CAPABILITY_ITEMS: AICapabilityItem[] = [
  {
    id: "comparative-reasoning",
    title: "Comparative Reasoning",
    subtitle: "질문하고 비교하는 사고 방식",
    message: "답을 받아들이기보다, 더 나은 방향을 계속 비교합니다.",
    description:
      "같은 인터랙션이라도 왜 어색하게 느껴지는지, 왜 흐름이 끊기는지, 왜 구조가 복잡해지는지를 계속 질문합니다.",
    details: [
      "구조를 나누는 방식",
      "상태를 관리하는 흐름",
      "스크롤과 인터랙션의 연결 방식",
      "더 자연스럽고 읽기 쉬운 방향을 찾기 위한 비교와 검증",
    ],
    icon: "git-compare",
  },
  {
    id: "expanded-exploration",
    title: "Expanded Exploration",
    subtitle: "다양한 레퍼런스와 도구를 연결하며 탐색하는 방식",
    message: "하나의 도구보다, 더 넓은 탐색 과정을 중요하게 생각합니다.",
    description:
      "다양한 레퍼런스를 직접 탐색하고, 여러 AI 도구를 함께 활용하며, 구조와 흐름을 다각도로 비교합니다.",
    details: [
      "하나의 레퍼런스를 그대로 따라가기보다 여러 구조와 인터랙션 비교",
      "공통된 흐름과 원리 탐색",
      "필요한 맥락을 계속 수집하고 연결",
      "AI를 사고를 확장하고 탐색 범위를 넓혀주는 협업 파트너로 활용",
    ],
    icon: "compass",
  },
  {
    id: "understanding-over-answers",
    title: "Understanding Over Answers",
    subtitle: "결과보다 이해와 내재화를 중요하게 보는 태도",
    message: "답보다, 이해를 더 중요하게.",
    description:
      "단순히 동작하는 결과를 만드는 것보다 왜 이런 흐름이 필요한지, 왜 이런 구조가 만들어졌는지를 끝까지 이해하려고 합니다.",
    details: [
      "기록하고 다시 정리하는 과정",
      "스스로 설명할 수 있을 때까지 이해하기",
      "생성된 결과를 그대로 쓰기보다 구조와 이유 확인",
      "빠르게 만드는 것보다 깊게 이해하는 과정 중시",
    ],
    icon: "brain-circuit",
  },
];
