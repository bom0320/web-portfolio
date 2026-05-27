export type StructureCapabilityItem = {
  id: string;
  index: string;
  title: string;
  message: string;
  description: string;
};

export const STRUCTURE_CAPABILITY_ITEMS: StructureCapabilityItem[] = [
  {
    id: "react-architecture",
    index: "01",
    title: "React Architecture",
    message: "readable flow",
    description:
      "복잡한 상태와 흐름도 누구나 읽을 수 있도록 컴포넌트의 역할과 책임을 명확하게 분리해서 설계합니다.",
  },
  {
    id: "shared-components",
    index: "02",
    title: "Shared Components",
    message: "reusable structure",
    description:
      "중복되는 경험보다 일관된 경험을 더 중요하게 생각합니다. 재사용 가능한 구조를 통해 변화에도 유연하게 대응합니다.",
  },
  {
    id: "role-based-system",
    index: "03",
    title: "Role-based System",
    message: "역할 기반 흐름",
    description:
      "같은 시스템 안에서도 사용자의 목적과 흐름은 서로 다릅니다. 각 역할에 맞는 경험이 자연스럽게 이어지도록 구조를 분리합니다.",
  },
  {
    id: "api-data-flow",
    index: "04",
    title: "API & Data Flow",
    message: "DTO ↔ UI separation",
    description:
      "데이터의 복잡함을 사용자 경험까지 가져가지 않습니다. 내부에서 정보를 정리하고 UI는 더 직관적으로 흐르도록 설계합니다.",
  },
  {
    id: "motion-system",
    index: "05",
    title: "Motion System",
    message: "trigger ownership",
    description:
      "움직임은 시선을 끌기보다 흐름을 이어주는 역할이어야 한다고 생각합니다. 각 인터랙션은 자신의 흐름 안에서 동작합니다.",
  },
  {
    id: "styling-structure",
    index: "06",
    title: "Styling Structure",
    message: "naming consistency",
    description:
      "스타일 역시 읽기 쉬운 구조의 일부라고 생각합니다. 일관된 규칙과 네이밍을 통해 유지보수 가능한 흐름을 만들어갑니다.",
  },
];
