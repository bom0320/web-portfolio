export type SkillCategoryIcon =
  | "framework"
  | "ui"
  | "typing"
  | "server-state"
  | "client-state"
  | "mobile"
  | "interaction";

export type Skill = {
  name: string;
  category: string;
  categoryIcon: SkillCategoryIcon;
  description: string;
};

export const SKILLS: Skill[] = [
  {
    name: "Next.js",
    category: "Framework",
    categoryIcon: "framework",
    description:
      "App Router 기반으로 페이지와 라우팅을 구성하고, 서비스 구조와 데이터 흐름을 설계합니다.",
  },
  {
    name: "React",
    category: "UI Library",
    categoryIcon: "ui",
    description:
      "상태에 따라 변화하는 UI를 구현하고, 화면을 역할에 따라 재사용 가능한 컴포넌트로 설계합니다.",
  },
  {
    name: "TypeScript",
    category: "Static Typing",
    categoryIcon: "typing",
    description:
      "API와 도메인 타입을 정의하고, 데이터 경계의 불일치를 검증하며 타입 안정성을 높입니다.",
  },
  {
    name: "TanStack Query",
    category: "Server State",
    categoryIcon: "server-state",
    description:
      "Query Key와 캐싱·무효화 전략을 데이터 변경 주기에 맞게 설계해 서버 상태를 관리합니다.",
  },
  {
    name: "Zustand",
    category: "Client State",
    categoryIcon: "client-state",
    description:
      "인증과 사용자 역할처럼 여러 화면에서 공유되는 클라이언트 상태를 모델링하고 관리합니다.",
  },
  {
    name: "React Native",
    category: "Mobile App",
    categoryIcon: "mobile",
    description:
      "Expo 기반 모바일 앱에서 화면 흐름과 역할별 UI, 상태 및 서버 데이터 연동을 구현합니다.",
  },
  {
    name: "GSAP",
    category: "Interaction",
    categoryIcon: "interaction",
    description:
      "ScrollTrigger 기반 스크롤 인터랙션을 구현하고, 복합 동작의 실행과 정리 구조를 설계합니다.",
  },
];
