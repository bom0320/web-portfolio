import { createProjectImages } from "@/assets/projectsImages";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  role: string;
  team?: string;
  stack: string[];
  overview: string;
  heroImage: string;
  detailImages: string[];
  liveUrl?: string;
  githubUrl?: string;
  link: string;
}

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: "washer",
    title: "Washer Client v2",
    category: "Website",
    period: "2025.10 - 2026.04 · 유지보수 중",
    role: "Frontend · UI/UX · Service Maintenance",
    team: "Frontend 2 · Android 2 · Backend 2 · Design 1",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Zod",
    ],
    overview:
      "기수 간 인수인계로 이어져 운영되는 세탁기 관리 시스템의 v2 클라이언트입니다. 예약, 기기 상태, 신고 관리 흐름을 다시 설계하고 실제 운영 환경에서 유지보수까지 이어가고 있습니다.",
    ...createProjectImages("washer", 9),
    liveUrl: "https://www.washer-gsm.com/sign-in",
    githubUrl: "https://github.com/team-washer",
    link: "/projects/washer",
  },

  {
    id: "nova",
    title: "Nova",
    category: "App",
    period: "2024.03 - 2024.12",
    role: "Team Lead · Frontend · UI/UX Design",
    stack: [
      "React Native",
      "Expo",
      "JavaScript",
      "React Navigation",
      "Axios",
      "OpenAI API",
    ],
    overview:
      "마이스터고 학생들이 겪는 빠른 전공 선택의 부담을 줄이기 위해, 진로 탐색 과정을 경험 중심으로 재구성한 앱입니다. 개발을 처음 시작하던 시기에 팀 리더로서 앱 기획, UI와 캐릭터 디자인, 클라이언트 구현을 함께 맡았습니다.",
    ...createProjectImages("nova", 16),
    githubUrl: "https://github.com/FourLeaves4/Client",
    link: "/projects/nova",
  },

  {
    id: "hyoit",
    title: "Hyoit",
    category: "App",
    period: "2025.09 - 진행 중",
    role: "Team Lead · Frontend · UX/UI",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "TanStack Query",
      "Zustand",
      "pnpm Workspace",
    ],
    overview:
      "고령층 부모와 자녀의 사용 목적을 분리하고, 빠른 응답과 알림 흐름을 통해 부담 없는 안부 소통 경험을 설계한 모바일 앱입니다.",
    ...createProjectImages("hyoit", 2),
    githubUrl: "https://github.com/project-hyoit/hyoit-FE",
    link: "/projects/hyoit",
  },

  {
    id: "portfolio",
    title: "kimbom.dev",
    category: "Personal Website",
    period: "2025.08 - 진행 중",
    role: "Design · Interaction · Engineering",
    team: "Personal Project",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "GSAP",
      "ScrollTrigger",
      "Lenis",
      "SCSS",
      "Amplitude",
    ],
    overview:
      "저라는 사람을 웹이라는 매체에서 어떻게 경험하게 할지 고민하며, 정보 구조부터 디자인, 인터랙션, 기술적 구현까지 직접 설계한 개인 웹사이트입니다. 사용자 행동 데이터와 피드백을 바탕으로 경험을 지속적으로 개선하고 있습니다.",
    ...createProjectImages("portfolio", 3),
    liveUrl: "https://kimbom.dev",
    githubUrl: "https://github.com/bom0320/web-portfolio",
    link: "/projects/portfolio",
  },
];

export function getProjectItemById(id: string) {
  return PROJECT_ITEMS.find((item) => item.id === id);
}
