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
  background: string;
  tone: "dark" | "light";
}
export const PROJECTS: ProjectItem[] = [
  {
    id: "mealdo",
    category: "TEST 01",
    title: "MEALDO",
    period: "1111.01 - 1111.02",
    contribution: "1번 프로젝트",
    stack: ["React", "Next.js"],
    keywords: ["one", "alpha", "purple"],
    overview: "첫 번째 테스트 프로젝트입니다.",
    heroImage: "/images/projects/mealdo/screen.png",
    thumbnails: [
      "/images/projects/mealdo/thumb-01.png",
      "/images/projects/mealdo/thumb-02.png",
      "/images/projects/mealdo/thumb-03.png",
      "/images/projects/mealdo/thumb-04.png",
    ],
    themeColor: "#a855f7",
    background: "#2b1b3f",
    tone: "dark",
  },
  {
    id: "tving",
    category: "TEST 02",
    title: "TVING",
    period: "2222.02 - 2222.03",
    contribution: "2번 프로젝트",
    stack: ["Vue", "TypeScript"],
    keywords: ["two", "beta", "red"],
    overview:
      "두 번째 테스트 프로젝트입니다.두 번째 테스트 프로젝트입니다.두 번째 테스트 프로젝트입니다.두 번째 테스트 프로젝트입니다.",
    heroImage: "/images/projects/tving/screen.png",
    thumbnails: [
      "/images/projects/tving/thumb-01.png",
      "/images/projects/tving/thumb-02.png",
      "/images/projects/tving/thumb-03.png",
      "/images/projects/tving/thumb-04.png",
    ],
    themeColor: "#ff4d4f",
    background: "#2a0f12",
    tone: "dark",
  },
  {
    id: "mint",
    category: "TEST 03",
    title: "MINT",
    period: "3333.03 - 3333.04",
    contribution: "3번 프로젝트",
    stack: ["Svelte", "JavaScript"],
    keywords: ["three", "gamma", "mint"],
    overview: "세 번째 테스트 프로젝트입니다.",
    heroImage: "/images/projects/mint/screen.png",
    thumbnails: [
      "/images/projects/mint/thumb-01.png",
      "/images/projects/mint/thumb-02.png",
      "/images/projects/mint/thumb-03.png",
      "/images/projects/mint/thumb-04.png",
    ],
    themeColor: "#06c58b",
    background: "#dff8ee",
    tone: "light",
  },
  {
    id: "uikit",
    category: "TEST 04",
    title: "UI KIT",
    period: "4444.04 - 4444.05",
    contribution: "4번 프로젝트",
    stack: ["Storybook", "React", "SCSS"],
    keywords: ["four", "delta", "yellow"],
    overview: "네 번째 테스트 프로젝트입니다.",
    heroImage: "/images/projects/uikit/screen.png",
    thumbnails: [
      "/images/projects/uikit/thumb-01.png",
      "/images/projects/uikit/thumb-02.png",
      "/images/projects/uikit/thumb-03.png",
      "/images/projects/uikit/thumb-04.png",
    ],
    themeColor: "#f2b21b",
    background: "#fff4cc",
    tone: "light",
  },
];
