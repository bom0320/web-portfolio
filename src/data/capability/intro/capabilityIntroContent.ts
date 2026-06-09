export type CapabilityIntroProofPoint = {
  id: string;
  index: string;
  title: string;
  description: string;
  side: "left" | "right";
};

export const CAPABILITY_INTRO_PROOF_POINTS: CapabilityIntroProofPoint[] = [
  {
    id: "flow-first",
    index: "01",
    title: "흐름을 먼저 보는 시선",
    side: "left",
    description:
      "화면을 구성할 때 사용자가 어떤 순서로 정보를 받아들이는지 먼저 살핍니다. 섹션과 요소가 자연스럽게 이어져, 다음 흐름을 어렵지 않게 따라갈 수 있도록 설계합니다.",
  },
  {
    id: "reasoned-interaction",
    index: "02",
    title: "이유 있는 인터랙션",
    side: "right",
    description:
      "작은 움직임도 단순한 장식이 아니라 사용자의 이해를 돕는 역할을 해야 한다고 생각합니다. 시선의 이동, 상태 변화, 등장 타이밍에 이유를 두고 인터랙션을 조정합니다.",
  },
  {
    id: "character-gaze-guide",
    index: "03",
    title: "시선을 안내하는 캐릭터",
    side: "left",
    description:
      "캐릭터를 단순한 장식이 아닌 화면의 시선 기준점으로 두었습니다. 장면의 맥락에 맞춰 등장하고 사라지며, 사용자가 다음 흐름을 자연스럽게 따라가도록 안내합니다.",
  },
  {
    id: "stable-structure",
    index: "04",
    title: "무너지지 않는 구조",
    side: "right",
    description:
      "완성된 화면뿐 아니라 이후 수정과 확장까지 고려해 구조를 나눕니다. 컴포넌트, 데이터, 애니메이션 로직의 역할을 분리해 안정적으로 유지되는 화면을 만들고자 합니다.",
  },
];
