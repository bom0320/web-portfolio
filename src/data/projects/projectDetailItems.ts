export interface ProjectDetailSection {
  id: string;
  number: string;
  label: string;
  eyebrow?: string;
  title: string;
  description: string[];
  imageIndex?: number;
}

export interface ProjectDetailContent {
  projectId: string;
  sections: ProjectDetailSection[];
}

export const PROJECT_DETAIL_ITEMS: ProjectDetailContent[] = [
  {
    projectId: "washer",
    sections: [
      {
        id: "intro",
        number: "01",
        label: "Intro",
        eyebrow: "OVERVIEW",
        title: "운영 중인 서비스를 다시 설계했습니다.",
        description: [
          "Washer는 기수 간 인수인계를 통해 실제 학교에서 운영되고 있는 세탁기 관리 서비스입니다.",
          "기존 기능을 유지하는 것에 그치지 않고 예약, 기기 상태, 신고 흐름을 다시 살펴보며 사용자가 더 빠르게 목적을 달성할 수 있도록 클라이언트 구조와 화면을 재설계했습니다.",
        ],
        imageIndex: 0,
      },
      {
        id: "skills",
        number: "02",
        label: "Skills",
        eyebrow: "CONTRIBUTION",
        title: "기능 단위가 아닌 사용자 흐름을 기준으로 설계했습니다.",
        description: [
          "예약 조회와 생성, 세탁기 상태 확인, 고장 신고처럼 서로 연결되는 기능을 하나의 사용자 흐름으로 바라봤습니다.",
          "Next.js와 TypeScript를 기반으로 클라이언트 구조를 정리하고 TanStack Query를 활용해 서버 상태와 화면 상태의 책임을 분리했습니다.",
        ],
        imageIndex: 1,
      },
      {
        id: "trouble-shooting",
        number: "03",
        label: "Trouble Shooting",
        eyebrow: "TROUBLE SHOOTING",
        title: "API 응답과 클라이언트 모델의 차이를 추적했습니다.",
        description: [
          "운영 과정에서 예약 상태와 사용자 정보가 예상과 다른 형태로 전달되면서 일부 화면이 정상적으로 갱신되지 않는 문제가 발생했습니다.",
          "네트워크 응답부터 Query 캐시, 타입 정의까지 데이터 흐름을 다시 추적하고 서버 응답을 기준으로 모델과 갱신 전략을 재정리했습니다.",
          "이 영역에는 이후 실제 문제 상황, 원인 분석, 해결 코드와 결과를 더 길게 작성할 예정입니다.",
        ],
        imageIndex: 2,
      },
      {
        id: "background",
        number: "04",
        label: "Background",
        eyebrow: "BACKGROUND",
        title: "한 번 만드는 것보다 이어서 운영할 수 있는 구조를 고민했습니다.",
        description: [
          "학교 프로젝트 특성상 담당자가 매년 바뀌기 때문에 특정 개발자에게 의존하지 않는 구조가 필요했습니다.",
          "기능과 데이터 접근 책임을 정리하고 다음 개발자가 빠르게 흐름을 파악할 수 있도록 일관된 구조를 만드는 데 집중했습니다.",
        ],
        imageIndex: 3,
      },
    ],
  },
];

export function getProjectDetailContent(projectId: string) {
  return PROJECT_DETAIL_ITEMS.find((item) => item.projectId === projectId);
}
