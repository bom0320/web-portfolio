export const CAPABILITY_INTRO_TITLE = {
  eyebrow: "CAPABILITY",
  title: "Flow. Structure. Motion.",
  subtitle: "경험을 설계하는 방식.",
};

export const CAPABILITY_INTRO_PHASES = {
  statement: {
    body: "저는 단순히 화면을 구현하는 것보다, 사용자가 어떤 흐름으로 이해하고 행동하는지를 더 중요하게 바라봅니다. 그래서 인터페이스, 인터랙션, 상태 흐름, 그리고 구조까지도 하나의 연결된 경험처럼 설계하려고 합니다.",
  },

  philosophy: {
    titleLines: ["망설임은 적게", "흐름은 조금 더 자연스럽게"],
    body: "좋은 경험은 흐름을 의식하지 않게 만듭니다. 사용자는 기능을 하나씩 읽기보다, 흐름 안에서 자연스럽게 이해하고 행동한다고 생각합니다. 설명을 늘리는 것보다, 망설임 없이 이어질 수 있는 구조를 더 중요하게 바라봅니다.",
  },
};

export type CapabilityIntroProofPoint = {
  id: string;
  index: string;
  title: string;
  description: string;
  side: "left" | "right";
};

export const CAPABILITY_INTRO_PROOF_POINTS: CapabilityIntroProofPoint[] = [
  {
    id: "first-impression",
    index: "01",
    title: "부담스럽지 않은 첫인상",
    side: "left",
    description:
      "사용자가 처음 화면에 들어왔을 때, 기능보다 먼저 편안함을 느끼길 바랐습니다. 날카롭지 않은 형태와 부드러운 컬러, 단순한 표정으로 심리적 거리를 낮추고 친근하게 다가갈 수 있도록 설계했습니다.",
  },
  {
    id: "gaze-guide",
    index: "02",
    title: "시선을 안내하는 기준점",
    side: "right",
    description:
      "이 캐릭터는 장식이 아니라 사용자의 시선과 장면의 흐름을 안정적으로 이어주는 역할을 합니다. 중요한 순간마다 자연스럽게 등장해 사용자의 주의를 다음 액션으로 안내합니다.",
  },
  {
    id: "motion-temperature",
    index: "03",
    title: "움직임의 감정 온도",
    side: "left",
    description:
      "과한 움직임보다 편안한 리듬을 선택했습니다. 느리고 자연스러운 반응은 화면의 긴장을 낮추고, 사용자가 여유롭게 흐름에 집중할 수 있도록 돕습니다.",
  },
  {
    id: "flow-element",
    index: "04",
    title: "흐름 안에서 존재하는 요소",
    side: "right",
    description:
      "모든 요소는 개별적으로 존재하기보다, 사용자의 행동 흐름 안에서 자연스럽게 이어져야 한다고 생각합니다. 그래서 캐릭터 역시 특정 장면의 일부로서 맥락에 맞게 등장하고 사라지도록 설계했습니다.",
  },
];

export const CAPABILITY_INTRO_PROOF_QUOTE = {
  lead: "저는 인터페이스를 단순히 정보를 보여주는 화면보다,",
  emphasis: "사용자가 자연스럽게 흐름을 이어갈 수 있는 경험",
  suffix: "으로 만들고 싶었습니다.",
};

export const CAPABILITY_INTRO_PROOF_IMAGE = {
  src: "/images/character_1.png",
  alt: "",
  width: 420,
  height: 470,
};
