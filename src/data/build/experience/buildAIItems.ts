export type BuildAIIcon = "git-compare" | "compass" | "brain-circuit";

export type BuildAIItem = {
  id: string;
  title: string;
  subtitle: string;
  message: string;
  description: string;
  details: string[];
  icon: BuildAIIcon;
};

export const BUILD_AI_ITEMS: BuildAIItem[] = [
  {
    id: "context-engineering",
    title: "Context Engineering",
    subtitle: "필요한 맥락을 설계하는 방식",
    message: "좋은 결과보다, 좋은 맥락부터.",
    description:
      "AI가 문제를 정확히 이해할 수 있도록 필요한 정보와 제약 조건, 작업 범위를 구조화합니다. 단순한 프롬프트보다 어떤 맥락을 언제 제공할지 설계하는 과정을 중요하게 봅니다.",
    details: [
      "관련 코드와 요구사항을 필요한 범위로 구성",
      "제약 조건과 완료 기준 명시",
      "큰 문제를 작은 작업 단위로 분해",
      "작업 단계에 따라 필요한 컨텍스트 조정",
    ],
    icon: "git-compare",
  },

  {
    id: "agentic-workflow",
    title: "Agentic Workflow",
    subtitle: "AI와 작업을 나누고 연결하는 방식",
    message: "한 번의 명령보다, 이어지는 작업 흐름을.",
    description:
      "탐색부터 구현과 검증까지 작업을 단계로 나누고, 각 단계에서 AI가 맡을 역할을 구분합니다. 결과가 다음 작업의 맥락으로 이어질 수 있도록 개발 흐름을 설계합니다.",
    details: [
      "탐색 · 구현 · 검증 단계 분리",
      "작업별 역할과 완료 조건 정의",
      "결과를 다음 단계의 컨텍스트로 연결",
      "반복 작업의 흐름을 점진적으로 개선",
    ],
    icon: "compass",
  },

  {
    id: "evaluation-verification",
    title: "Evaluation & Verification",
    subtitle: "결과를 검증하고 개선하는 방식",
    message: "생성보다, 검증 가능한 결과를.",
    description:
      "AI가 생성한 결과를 그대로 신뢰하지 않습니다. 실제 코드와 동작, 테스트와 문서를 기준으로 확인하고 실패 원인을 다시 맥락에 반영하며 결과를 개선합니다.",
    details: [
      "생성 코드의 구조와 동작 검토",
      "테스트와 실제 실행을 통한 검증",
      "기존 요구사항과 결과 비교",
      "실패 원인을 다음 작업에 다시 반영",
    ],
    icon: "brain-circuit",
  },
];
