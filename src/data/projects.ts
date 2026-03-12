export interface ProjectItem {
  id: string;
  category: string;
  title: string;

  period: string;
  contribution: string;
  stack: string[];

  keywords: string[];
  overview: string;

  heroImage: string;
  thumbnails: string[];

  themeColor: string;
  background: "dark" | "light";
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "mealdo",
    category: "website",
    title: "MEALDO",

    period: "2023.09 - 2023.12",
    contribution: "1인 개발 100%",
    stack: ["React", "Next.js", "TypeScript"],

    keywords: ["공공", "신뢰", "디지털"],

    overview:
      "공공 데이터를 기반으로 식단 정보를 제공하는 웹 서비스입니다. 사용자에게 직관적인 UI를 제공하기 위해 디자인 시스템을 구축하고 React 기반 컴포넌트 구조로 개발했습니다.",

    heroImage: "/images/projects/mealdo/mockup.png",

    thumbnails: [
      "/images/projects/mealdo/01.png",
      "/images/projects/mealdo/02.png",
      "/images/projects/mealdo/03.png",
      "/images/projects/mealdo/04.png",
    ],

    themeColor: "#7c3aed",
    background: "dark",
  },

  {
    id: "studylog",
    category: "web app",
    title: "STUDY LOG",

    period: "2024.01 - 2024.03",
    contribution: "개인 프로젝트",
    stack: ["Next.js", "Tailwind", "Supabase"],

    keywords: ["생산성", "기록", "관리"],

    overview:
      "개발 학습 기록을 관리하기 위한 웹 애플리케이션입니다. 학습 내용을 기록하고 통계로 시각화하여 학습 흐름을 파악할 수 있도록 설계했습니다.",

    heroImage: "/images/projects/studylog/mockup.png",

    thumbnails: [
      "/images/projects/studylog/01.png",
      "/images/projects/studylog/02.png",
      "/images/projects/studylog/03.png",
      "/images/projects/studylog/04.png",
    ],

    themeColor: "#10b981",
    background: "light",
  },

  {
    id: "portfolio",
    category: "website",
    title: "PORTFOLIO",

    period: "2024.03 - 2024.04",
    contribution: "개인 프로젝트",
    stack: ["Next.js", "GSAP", "SCSS"],

    keywords: ["포트폴리오", "인터랙션", "애니메이션"],

    overview:
      "프론트엔드 개발자로서의 작업과 프로젝트를 정리한 포트폴리오 사이트입니다. GSAP 기반 스크롤 인터랙션을 중심으로 사용자 경험을 설계했습니다.",

    heroImage: "/images/projects/portfolio/mockup.png",

    thumbnails: [
      "/images/projects/portfolio/01.png",
      "/images/projects/portfolio/02.png",
      "/images/projects/portfolio/03.png",
      "/images/projects/portfolio/04.png",
    ],

    themeColor: "#2563eb",
    background: "dark",
  },

  {
    id: "designsystem",
    category: "design system",
    title: "UI KIT",

    period: "2024.04 - 2024.05",
    contribution: "개인 프로젝트",
    stack: ["React", "Storybook", "TypeScript"],

    keywords: ["컴포넌트", "디자인 시스템", "재사용"],

    overview:
      "프로젝트에서 반복적으로 사용하는 UI 요소들을 컴포넌트화하여 디자인 시스템 형태로 구축했습니다. Storybook을 활용해 컴포넌트 문서를 관리했습니다.",

    heroImage: "/images/projects/uikit/mockup.png",

    thumbnails: [
      "/images/projects/uikit/01.png",
      "/images/projects/uikit/02.png",
      "/images/projects/uikit/03.png",
      "/images/projects/uikit/04.png",
    ],

    themeColor: "#f59e0b",
    background: "light",
  },
];
