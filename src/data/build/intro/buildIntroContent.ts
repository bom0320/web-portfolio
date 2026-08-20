export type BuildIntroProofPoint = {
  id: string;
  index: string;
  title: string;
  description: string;
  side: "left" | "right";
};

export const BUILD_INTRO_PROOF_POINTS: BuildIntroProofPoint[] = [
  {
    id: "flow-first",
    index: "01",
    title: "흐름을 먼저 읽는 화면",
    side: "left",
    description:
      "무엇을 보여줄지보다 무엇을 먼저 이해해야 하는지부터 정리합니다. 정보의 우선순위를 기준으로 섹션과 요소의 순서를 잡아, 시선과 행동이 끊기지 않도록 구성합니다.",
  },
  {
    id: "reasoned-interaction",
    index: "02",
    title: "필요한 순간의 인터랙션",
    side: "right",
    description:
      "움직임은 눈에 띄기 위해서보다 변화의 이유를 전달하기 위해 사용합니다. 상태 전환과 등장 타이밍에 맥락을 두고, 필요한 순간에만 인터랙션을 더합니다.",
  },
  {
    id: "performance-aware",
    index: "03",
    title: "표현을 지탱하는 성능",
    side: "left",
    description:
      "시각적 완성도를 위해 성능을 희생하지 않습니다. 이미지 로딩 우선순위와 렌더링 비용을 함께 살피며, 풍부한 표현이 실제 사용 경험을 방해하지 않도록 조정합니다.",
  },
  {
    id: "stable-structure",
    index: "04",
    title: "확장을 견디는 구조",
    side: "right",
    description:
      "화면이 복잡해져도 수정 범위가 불필요하게 번지지 않도록 책임을 나눕니다. 컴포넌트와 데이터, 애니메이션 로직을 분리해 변화에 대응할 수 있는 구조를 만듭니다.",
  },
];
