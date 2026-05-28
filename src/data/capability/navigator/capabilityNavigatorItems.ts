export interface CapabilityNavigatorItem {
  id: string;
  title: string;
  category: string;
  period: string;
  contribution: string;
  stack: string[];
  role: string;
  summary: string;
  overview: string;
  heroImage: string;
  monitorImage: string;
  detailImages: string[];
  link: string;
}

export const CAPABILITY_NAVIGATOR_ITEMS: CapabilityNavigatorItem[] = [
  {
    id: "observation",
    title: "Observation",
    category: "User Flow",
    period: "Problem Finding",
    contribution: "UX Thinking",
    stack: ["User Flow", "Pain Point", "Context", "Observation"],
    role: "사용자의 흐름을 관찰하고 문제의 시작점을 찾는 관점",
    summary: "문제는 기능이 아니라 사용자의 흐름에서 먼저 발견됩니다.",
    overview:
      "저는 기능을 먼저 배치하기보다, 사용자가 어디서 멈추고 왜 피로를 느끼는지를 관찰하려고 합니다. 화면의 구조, 정보의 순서, 행동의 흐름 속에서 불편함이 생기는 지점을 찾고, 그 원인을 바탕으로 더 나은 경험의 방향을 설계합니다.",
    heroImage: "/images/capability/navigator/observation-hero.png",
    monitorImage: "/images/capability/navigator/observation-monitor.png",
    detailImages: [
      "/images/capability/navigator/observation-detail-1.png",
      "/images/capability/navigator/observation-detail-2.png",
    ],
    link: "/capability/observation",
  },
  {
    id: "structure",
    title: "Structure",
    category: "System Thinking",
    period: "Problem Organizing",
    contribution: "Frontend Architecture",
    stack: ["State", "Responsibility", "Data Flow", "Architecture"],
    role: "복잡한 문제를 상태, 책임, 흐름으로 나누어 정리하는 관점",
    summary: "복잡한 문제는 구조로 나누었을 때 다룰 수 있는 형태가 됩니다.",
    overview:
      "복잡한 기능을 감각적으로 처리하지 않고, 데이터와 상태, 역할과 책임, 화면 흐름으로 나누어 이해하려고 합니다. 내부 구조가 정리되어야 사용자 경험도 흔들리지 않는다고 생각하며, 구현 과정에서도 유지보수 가능한 형태를 중요하게 봅니다.",
    heroImage: "/images/capability/navigator/structure-hero.png",
    monitorImage: "/images/capability/navigator/structure-monitor.png",
    detailImages: [
      "/images/capability/navigator/structure-detail-1.png",
      "/images/capability/navigator/structure-detail-2.png",
    ],
    link: "/capability/structure",
  },
  {
    id: "flow",
    title: "Flow",
    category: "Interaction",
    period: "Experience Connecting",
    contribution: "Motion Design",
    stack: ["GSAP", "ScrollTrigger", "Transition", "Interaction"],
    role: "화면의 전환과 움직임을 통해 맥락을 연결하는 관점",
    summary: "흐름은 사용자가 경험을 이해하도록 돕는 방식입니다.",
    overview:
      "움직임은 단순한 효과가 아니라 상태 변화와 화면의 관계를 이해시키는 언어라고 생각합니다. 스크롤, 전환, 고정, 등장과 퇴장의 타이밍을 통해 사용자가 다음 맥락을 자연스럽게 받아들일 수 있도록 설계합니다.",
    heroImage: "/images/capability/navigator/flow-hero.png",
    monitorImage: "/images/capability/navigator/flow-monitor.png",
    detailImages: [
      "/images/capability/navigator/flow-detail-1.png",
      "/images/capability/navigator/flow-detail-2.png",
    ],
    link: "/capability/flow",
  },
  {
    id: "visual-sense",
    title: "Visual Sense",
    category: "Visual Experience",
    period: "Interface Impression",
    contribution: "Visual Direction",
    stack: ["Layout", "Mood", "Character", "Brand Tone"],
    role: "화면이 주는 첫인상과 감각을 함께 설계하는 관점",
    summary: "인터페이스 너머의 인상까지 경험의 일부로 바라봅니다.",
    overview:
      "기능이 정확히 동작하는 것만으로는 충분하지 않다고 생각합니다. 사용자가 화면을 처음 마주했을 때 느끼는 분위기, 색감, 여백, 캐릭터, 시각적 흐름까지 하나의 경험으로 보고, 인터페이스가 남기는 인상을 함께 고민합니다.",
    heroImage: "/images/capability/navigator/visual-hero.png",
    monitorImage: "/images/capability/navigator/visual-monitor.png",
    detailImages: [
      "/images/capability/navigator/visual-detail-1.png",
      "/images/capability/navigator/visual-detail-2.png",
    ],
    link: "/capability/visual-sense",
  },
  {
    id: "archive",
    title: "Archive",
    category: "Growth Record",
    period: "Learning Process",
    contribution: "Reflection",
    stack: ["Commit", "Iteration", "Refactor", "Record"],
    role: "수정과 시행착오를 성장의 기록으로 남기는 관점",
    summary: "기록은 흔적이 아니라 다음 판단을 만드는 기준이 됩니다.",
    overview:
      "많은 수정과 시행착오를 단순히 오래 걸린 과정으로 보지 않습니다. 왜 바꿨는지, 어떤 판단이 부족했는지, 다음에는 무엇을 더 명확히 해야 하는지를 기록하며 성장의 근거로 삼습니다. 쌓인 기록은 다음 설계에서 더 나은 판단을 가능하게 합니다.",
    heroImage: "/images/capability/navigator/archive-hero.png",
    monitorImage: "/images/capability/navigator/archive-monitor.png",
    detailImages: [
      "/images/capability/navigator/archive-detail-1.png",
      "/images/capability/navigator/archive-detail-2.png",
    ],
    link: "/capability/archive",
  },
];

export function getCapabilityNavigatorItemById(id: string) {
  return CAPABILITY_NAVIGATOR_ITEMS.find((item) => item.id === id);
}
