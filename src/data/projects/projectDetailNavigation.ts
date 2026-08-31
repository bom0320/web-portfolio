export interface ProjectDetailNavChild {
  id: string;
  number: string;
  label: string;
}

export interface ProjectDetailNavItem {
  id: string;
  number: string;
  label: string;
  children?: ProjectDetailNavChild[];
}

const PROJECT_DETAIL_NAV_ITEMS: Record<string, ProjectDetailNavItem[]> = {
  washer: [
    {
      id: "overview",
      number: "01",
      label: "Overview",
    },
    {
      id: "problem",
      number: "02",
      label: "Problem",
    },
    {
      id: "experience",
      number: "03",
      label: "Experience",
      children: [
        {
          id: "experience-action-flow",
          number: "01",
          label: "조회에서 끝나지 않고, 조치까지 이어지는 관리자 흐름",
        },
        {
          id: "experience-navigation",
          number: "02",
          label: "관리자가 필요한 정보에 빠르게 도달하도록 설계",
        },
        {
          id: "experience-entry-path",
          number: "03",
          label: "로그인 오류를 사용자 경로의 문제로 다시 정의",
        },
      ],
    },
    {
      id: "engineering",
      number: "04",
      label: "Engineering",
      children: [
        {
          id: "engineering-boundary",
          number: "01",
          label: "1,603줄의 관리자 페이지를 어떻게 나눌 것인가",
        },
        {
          id: "engineering-cache",
          number: "02",
          label: "최신성을 유지하면서 요청을 어떻게 줄일 것인가",
        },
        {
          id: "engineering-validation",
          number: "03",
          label: "실제 API 응답을 어디까지 신뢰할 것인가",
        },
        {
          id: "engineering-error",
          number: "04",
          label: "어떤 오류에서 세션을 종료할 것인가",
        },
      ],
    },
    {
      id: "impact",
      number: "05",
      label: "Impact",
      children: [
        {
          id: "impact-operation",
          number: "01",
          label:
            "운영 — 서비스 밖에 남아 있던 관리 업무를 내부로 가져왔습니다.",
        },
        {
          id: "impact-structure",
          number: "02",
          label: "구조 — 기능이 늘어나도 관리할 수 있는 기준을 만들었습니다.",
        },
        {
          id: "impact-before-after",
          number: "03",
          label: "v1에서 v2로, 이렇게 달라졌습니다.",
        },
      ],
    },
    {
      id: "retrospective",
      number: "06",
      label: "Retrospective",
      children: [
        {
          id: "retrospective-next",
          number: "01",
          label: "다음 프로젝트에서는",
        },
      ],
    },
  ],
};

export function getProjectDetailNavItems(
  projectId: string
): ProjectDetailNavItem[] {
  return PROJECT_DETAIL_NAV_ITEMS[projectId] ?? [];
}
