export type BuildStructureIcon =
  | "hierarchy"
  | "components"
  | "users-group"
  | "arrows-exchange"
  | "ripple"
  | "palette";

export type BuildStructureItem = {
  id: string;
  index: string;
  title: string;
  message: string;
  description: string;
  icon: BuildStructureIcon;
};

export const BUILD_STRUCTURE_ITEMS: BuildStructureItem[] = [
  {
    id: "react-architecture",
    index: "01",
    title: "Component Architecture",
    message: "clear responsibility",
    description:
      "화면이 복잡해져도 책임이 섞이지 않도록 컴포넌트의 역할과 경계를 나눕니다. 상태와 동작의 흐름을 따라가며 변경 범위를 예측할 수 있도록 설계합니다.",
    icon: "hierarchy",
  },

  {
    id: "shared-components",
    index: "02",
    title: "Shared Components",
    message: "shared boundaries",
    description:
      "반복되는 UI와 동작은 공통화하되, 재사용을 위한 과한 추상화는 피합니다. 여러 화면에서 같은 기준으로 사용할 수 있는 범위까지만 공유합니다.",
    icon: "components",
  },

  {
    id: "role-based-system",
    index: "03",
    title: "Role-based System",
    message: "role-aware structure",
    description:
      "역할에 따라 필요한 화면과 상태가 달라질 때 공통 영역과 역할별 흐름을 분리합니다. 한 역할의 변경이 다른 흐름까지 번지지 않도록 경계를 둡니다.",
    icon: "users-group",
  },

  {
    id: "api-data-flow",
    index: "04",
    title: "API & Data Flow",
    message: "server ↔ ui boundary",
    description:
      "서버 응답과 화면에서 사용하는 데이터를 분리해 각 영역의 책임을 명확히 합니다. 필요한 형태로 가공해 전달하고, API 변경이 UI 전체로 번지지 않도록 관리합니다.",
    icon: "arrows-exchange",
  },

  {
    id: "motion-system",
    index: "05",
    title: "Motion System",
    message: "lifecycle ownership",
    description:
      "애니메이션의 생성과 실행, 정리 로직이 흩어지지 않도록 장면 단위로 책임을 묶습니다. 각 인터랙션의 생명주기를 명확히 해 수정과 확장에 대응합니다.",
    icon: "ripple",
  },

  {
    id: "styling-structure",
    index: "06",
    title: "Styling Structure",
    message: "predictable styling",
    description:
      "스타일도 화면과 기능의 경계에 맞춰 나누고 공통 규칙과 네이밍을 일관되게 유지합니다. 수정이 어디까지 영향을 주는지 예측할 수 있는 구조를 만듭니다.",
    icon: "palette",
  },
];
