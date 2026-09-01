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
  portfolio: [
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
          id: "experience-positioning",
          number: "01",
          label: "포지셔닝을 경험의 원칙으로 번역했습니다.",
        },
        {
          id: "experience-hierarchy",
          number: "02",
          label: "무엇을 먼저 보여주고, 무엇을 남겨둘지 설계했습니다.",
        },
        {
          id: "experience-motion",
          number: "03",
          label: "움직임을 효과가 아니라 장면의 행동으로 설계했습니다.",
        },
        {
          id: "experience-adaptation",
          number: "04",
          label: "같은 경험을 모든 화면에 그대로 축소하지 않았습니다.",
        },
        {
          id: "experience-feedback",
          number: "05",
          label: "피드백으로 정보 구조를 바꾸고, 데이터로 검증했습니다.",
        },
      ],
    },
    {
      id: "engineering",
      number: "04",
      label: "Engineering",
      children: [
        {
          id: "engineering-runtime",
          number: "01",
          label: "서로 다른 스크롤 동작을 예측 가능한 실행 구조 안에서 관리",
        },
        {
          id: "engineering-safari",
          number: "02",
          label: "Safari 환경에서 발생한 레이아웃 문제 해결",
        },
        {
          id: "engineering-performance",
          number: "03",
          label: "초기 리소스 경쟁을 줄여 LCP 76% 단축",
        },
      ],
    },
    {
      id: "impact",
      number: "05",
      label: "Impact",
      children: [
        {
          id: "impact-delivery",
          number: "01",
          label: "전달 — 말이 아니라 사이트의 경험 자체로 보여줬습니다.",
        },
        {
          id: "impact-engineering",
          number: "02",
          label: "구현 — 복잡한 인터랙션을 유지할 수 있는 실행 구조",
        },
        {
          id: "impact-validation",
          number: "03",
          label: "검증 — 실제 사용자와 성능 데이터로 확인",
        },
        {
          id: "impact-before-after",
          number: "04",
          label: "배포 이후, 이렇게 달라졌습니다.",
        },
      ],
    },
    {
      id: "retrospective",
      number: "06",
      label: "Retrospective",
    },
  ],
  hyoit: [
    {
      id: "overview",
      number: "01",
      label: "Overview",
    },
    {
      id: "problem",
      number: "02",
      label: "Problem",
      children: [
        {
          id: "problem-connection",
          number: "01",
          label: "관계의 단절은 돌봄의 공백으로 이어지고 있었습니다.",
        },
        {
          id: "problem-care-service",
          number: "02",
          label: "기존 돌봄 서비스는 관계 유지까지 해결하지 못했습니다.",
        },
        {
          id: "problem-family-burden",
          number: "03",
          label: "돌봄의 공백은 가족의 부담으로도 이어지고 있었습니다.",
        },
        {
          id: "problem-continuous-connection",
          number: "04",
          label: "지속적인 연결 경험에 집중했습니다.",
        },
      ],
    },
    {
      id: "experience",
      number: "03",
      label: "Experience",
      children: [
        {
          id: "experience-status-home",
          number: "01",
          label: "상태를 먼저 이해할 수 있는 홈을 설계했습니다.",
        },
        {
          id: "experience-quick-response",
          number: "02",
          label: "짧은 반응만으로 안부를 주고받도록 설계했습니다.",
        },
        {
          id: "experience-role-based",
          number: "03",
          label: "부모와 자녀의 경험을 역할별로 분리했습니다.",
        },
        {
          id: "experience-senior-ux",
          number: "04",
          label: "고령층의 조작 부담을 줄이는 UX를 적용했습니다.",
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
          label: "역할별 경험이 독립적으로 변경될 수 있도록 경계를 설계",
        },
        {
          id: "engineering-entry",
          number: "02",
          label: "사용자 상태로 진입 경로를 결정",
        },
        {
          id: "engineering-routing",
          number: "03",
          label: "라우팅과 화면 구현의 책임을 분리",
        },
      ],
    },
    {
      id: "current-status",
      number: "05",
      label: "Current Status",
    },
  ],
  nova: [
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
          id: "experience-discovery",
          number: "01",
          label: "막연한 관심사를 하나의 전공으로 좁혔습니다.",
        },
        {
          id: "experience-character",
          number: "02",
          label: "전공을 캐릭터라는 시각 언어로 만들었습니다.",
        },
        {
          id: "experience-growth",
          number: "03",
          label: "선택한 캐릭터를 이후의 성장 경험까지 이어갔습니다.",
        },
      ],
    },
    {
      id: "engineering",
      number: "04",
      label: "Engineering",
      children: [
        {
          id: "engineering-onboarding",
          number: "01",
          label: "사용자의 선택을 하나의 온보딩 경험으로 연결",
        },
        {
          id: "engineering-ai-state",
          number: "02",
          label: "AI의 응답 시간을 모바일 인터랙션의 상태로 처리",
        },
        {
          id: "engineering-growth",
          number: "03",
          label: "학습 행동을 시각적인 성장으로 연결",
        },
      ],
    },
    {
      id: "retrospective",
      number: "05",
      label: "Retrospective",
    },
  ],
};

export function getProjectDetailNavItems(
  projectId: string
): ProjectDetailNavItem[] {
  return PROJECT_DETAIL_NAV_ITEMS[projectId] ?? [];
}
