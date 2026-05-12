export interface ProjectItem {
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
  liveUrl?: string;
  githubUrl?: string;
  link: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "washer",
    title: "Washer Admin",
    category: "Admin Web",
    period: "2026.03 - 2026.04",
    contribution: "Frontend 100%",
    stack: ["Next.js", "TypeScript", "React Query", "SCSS"],
    role: "UI 설계 · API 연동 · 상태 관리 · 관리자 화면 구현",
    summary: "세탁기/건조기 상태와 예약 현황을 관리하는 관리자 웹입니다.",
    overview:
      "기기 상태, 예약 현황, 고장 신고를 한 화면에서 확인하고 관리할 수 있도록 설계한 관리자 대시보드입니다.",
    heroImage: "/images/projects/washer-hero.png",
    monitorImage: "/images/projects/washer-monitor.png",
    detailImages: [
      "/images/projects/washer-detail-1.png",
      "/images/projects/washer-detail-2.png",
      "/images/projects/washer-detail-3.png",
    ],
    githubUrl: "https://github.com/bom0320",
    link: "https://workos.com",
  },
  {
    id: "hyoit",
    title: "Hyoit",
    category: "Mobile App",
    period: "2026.04 - 진행중",
    contribution: "Frontend Lead",
    stack: ["React Native", "Expo", "TypeScript", "Expo Router"],
    role: "앱 구조 설계 · 엔트리 플로우 · 역할 기반 라우팅",
    summary: "부모와 자녀의 간단한 소통을 돕는 가족 커뮤니케이션 앱입니다.",
    overview:
      "부모/자녀 역할에 따라 다른 흐름을 제공하고, 알림 기반 소통 경험을 중심으로 설계한 모바일 앱입니다.",
    heroImage: "/images/projects/hyoit-hero.png",
    monitorImage: "/images/projects/hyoit-monitor.png",
    detailImages: [
      "/images/projects/hyoit-detail-1.png",
      "/images/projects/hyoit-detail-2.png",
    ],
    githubUrl: "https://github.com/project-hyoit/hyoit-FE",
    link: "https://workos.com",
  },
  {
    id: "portfolio",
    title: "BOM Portfolio",
    category: "Interactive Website",
    period: "2026.03 - 진행중",
    contribution: "Design · Frontend 100%",
    stack: ["Next.js", "TypeScript", "GSAP", "SCSS"],
    role: "인터랙션 설계 · UI 구현 · 스크롤 애니메이션",
    summary: "스크롤 기반 스토리텔링으로 구성한 인터랙티브 포트폴리오입니다.",
    overview:
      "Hero, About, Projects, Contact를 하나의 흐름으로 연결하고 GSAP 기반 인터랙션을 적용한 포트폴리오 웹사이트입니다.",
    heroImage: "/images/projects/portfolio-hero.png",
    monitorImage: "/images/projects/portfolio-monitor.png",
    detailImages: [
      "/images/projects/portfolio-detail-1.png",
      "/images/projects/portfolio-detail-2.png",
    ],
    liveUrl: "https://your-domain.com",
    githubUrl: "https://github.com/bom0320/web-portfolio",
    link: "https://workos.com",
  },
];

export function getProjectById(id: string) {
  return PROJECTS.find((project) => project.id === id);
}
