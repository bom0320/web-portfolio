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
    period: "2018.09 - 2018.12",
    contribution: "1인 100%",
    stack: ["React", "Next.js"],
    keywords: ["공공", "선물", "디저트"],
    overview:
      "스틸라강의 Colors에 맞춰 C4D로 제작한 짧은 애니메이션으로 어느 장면에서 정지하더라도 하나의 엽서 일러스트처럼 보이도록 기획 및 디자인하였습니다. 디저트가 레일을 타고 우리에게 배달되는 과정을 표현하였으며, 파스텔 톤 컬러와 아기자기한 소품들을 사용하여 사랑스러움과 달콤함을 강조하였습니다.",
    heroImage: "/images/projects/mealdo/screen.png",
    thumbnails: [
      "/images/projects/mealdo/thumb-01.png",
      "/images/projects/mealdo/thumb-02.png",
      "/images/projects/mealdo/thumb-03.png",
      "/images/projects/mealdo/thumb-04.png",
    ],
    themeColor: "#7a4cff",
    background: "dark",
  },
  {
    id: "tving",
    category: "website",
    title: "TVING",
    period: "2018.09 - 2018.12",
    contribution: "1인 100%",
    stack: ["React", "Next.js"],
    keywords: ["영상", "선택", "그래픽"],
    overview:
      "콘텐츠 탐색 경험을 중심으로 메인 비주얼과 정보 구조를 설계한 프로젝트입니다. 강한 컬러와 대비를 통해 브랜드 인상을 강조하고, 시선 흐름이 자연스럽게 이어지도록 레이아웃을 구성했습니다.",
    heroImage: "/images/projects/tving/screen.png",
    thumbnails: [
      "/images/projects/tving/thumb-01.png",
      "/images/projects/tving/thumb-02.png",
      "/images/projects/tving/thumb-03.png",
      "/images/projects/tving/thumb-04.png",
    ],
    themeColor: "#ffffff",
    background: "dark",
  },
  {
    id: "mint",
    category: "website",
    title: "MEALDO",
    period: "2018.09 - 2018.12",
    contribution: "1인 100%",
    stack: ["React", "Next.js"],
    keywords: ["공공", "선물", "디저트"],
    overview:
      "밝은 톤의 비주얼과 친근한 그래픽 요소를 기반으로 서비스 경험을 표현한 프로젝트입니다. 컬러와 컴포넌트 리듬을 활용해 산뜻하고 가벼운 인상을 주도록 구성했습니다.",
    heroImage: "/images/projects/mint/screen.png",
    thumbnails: [
      "/images/projects/mint/thumb-01.png",
      "/images/projects/mint/thumb-02.png",
      "/images/projects/mint/thumb-03.png",
      "/images/projects/mint/thumb-04.png",
    ],
    themeColor: "#06c58b",
    background: "light",
  },
  {
    id: "uikit",
    category: "design system",
    title: "UI KIT",
    period: "2024.03 - 2024.04",
    contribution: "개인 프로젝트",
    stack: ["React", "Storybook", "TypeScript"],
    keywords: ["컴포넌트", "일관성", "재사용"],
    overview:
      "반복되는 UI를 체계적으로 관리하기 위해 컴포넌트 규칙과 스타일 토큰을 정리한 프로젝트입니다. 구조적 일관성과 재사용성을 높이는 데 집중했습니다.",
    heroImage: "/images/projects/uikit/screen.png",
    thumbnails: [
      "/images/projects/uikit/thumb-01.png",
      "/images/projects/uikit/thumb-02.png",
      "/images/projects/uikit/thumb-03.png",
      "/images/projects/uikit/thumb-04.png",
    ],
    themeColor: "#f2b21b",
    background: "light",
  },
];
