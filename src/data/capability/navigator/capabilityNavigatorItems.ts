import { createCapabilityNavigatorImages } from "@/assets/capabilityImages";

export interface CapabilityNavigatorItem {
  id: string;
  title: string;
  category: string;
  period: string;
  stack: string[];
  role: string;
  overview: string;
  heroImage: string;
  detailImages: string[];
  liveUrl?: string;
  githubUrl?: string;
  link: string;
}

export const CAPABILITY_NAVIGATOR_ITEMS: CapabilityNavigatorItem[] = [
  {
    id: "washer",
    title: "Washer Client v2",
    category: "website",
    period: "2025.10 - 2026.04 · 유지보수 중",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Radix UI",
    ],
    role: "서비스 클라이언트 v2 설계 · UI/UX 전면 재구성 · API 연동 · 운영 유지보수",
    overview:
      "기수 간 인수인계로 이어져 운영되는 세탁기 관리 시스템의 v2 클라이언트입니다. 예약, 기기 상태, 신고 관리 흐름을 다시 설계하고 실제 운영 환경에서 유지보수까지 이어가고 있습니다.",
    ...createCapabilityNavigatorImages("washer", 4),
    liveUrl: "https://www.washer-gsm.com/sign-in",
    githubUrl: "https://github.com/team-washer",
    link: "/capability/washer",
  },
  {
    id: "nova",
    title: "Nova",
    category: "App",
    period: "2024.03 - 2024.12",
    stack: ["React Native", "JavaScript", "Expo"],
    role: "팀 리딩 · 앱 기획 · UI/캐릭터 디자인 · 클라이언트 구현",
    overview:
      "마이스터고 학생들이 겪는 빠른 전공 선택의 부담을 줄이기 위해, 진로 탐색 과정을 경험 중심으로 재구성한 앱입니다. 개발을 처음 시작하던 시기에 팀 리더로서 앱 기획, UI와 캐릭터 디자인, 클라이언트 구현을 함께 맡았습니다.",
    ...createCapabilityNavigatorImages("nova", 16),
    githubUrl: "https://github.com/FourLeaves4/Client",
    link: "/capability/nova",
  },
  {
    id: "hyoit",
    title: "Hyoit",
    category: "App",
    period: "2025.09 - 진행중",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "TanStack Query",
      "Zustand",
      "Axios",
      "Async Storage",
    ],
    role: "팀 리드 · UX/UI 설계 · 앱 구조 설계 · 역할별 플로우 구현",
    overview:
      "고령층 부모와 자녀의 사용 목적을 분리하고, 빠른 응답과 알림 흐름을 통해 부담 없는 안부 소통 경험을 설계한 모바일 앱입니다.",
    ...createCapabilityNavigatorImages("hyoit", 2),
    githubUrl: "https://github.com/project-hyoit/hyoit-FE",
    link: "/capability/hyoit",
  },
  {
    id: "portfolio",
    title: "BOM Portfolio",
    category: "Interactive Website",
    period: "2025.08 - 2026.06 · 유지보수 중",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "GSAP",
      "ScrollTrigger",
      "Lenis",
      "SCSS",
    ],
    role: "스크롤 인터랙션 설계 · Stage/Scene 구조 설계 · GSAP 애니메이션 구현 · 반응형 UI 최적화",
    overview:
      "Hero, About, Capability, Contact를 하나의 스크롤 내러티브로 연결한 인터랙티브 포트폴리오입니다. Stage와 Scene 단위로 화면과 애니메이션 책임을 분리하고, GSAP 기반 전환과 반응형 인터랙션을 구현했습니다.",
    ...createCapabilityNavigatorImages("portfolio", 3),
    liveUrl: "https://kimbom.dev",
    githubUrl: "https://github.com/bom0320/web-portfolio",
    link: "/capability/portfolio",
  },
];

export function getCapabilityNavigatorItemById(id: string) {
  return CAPABILITY_NAVIGATOR_ITEMS.find((item) => item.id === id);
}
