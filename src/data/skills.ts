export type Skill = {
  name: string;
  icon: string;
  category: string;
  description: string;
  projects: string[];
  bg: string;
};

export const SKILLS: Skill[] = [
  {
    name: "Next.js",
    icon: "/icons/next.svg",
    category: "Framework",
    description:
      "App Router 기반으로 페이지와 라우팅을 구성하고, 서비스 구조와 데이터 흐름을 설계합니다.",
    projects: ["Washer", "Portfolio"],
    bg: "#000000",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
    category: "UI Library",
    description:
      "상태에 따라 변화하는 UI를 구현하고, 화면을 역할에 따라 재사용 가능한 컴포넌트로 설계합니다.",
    projects: ["Washer", "Hyoit", "Portfolio"],
    bg: "#222222",
  },
  {
    name: "TypeScript",
    icon: "/icons/ts.svg",
    category: "Static Typing",
    description:
      "API와 도메인 타입을 정의하고, 데이터 경계의 불일치를 검증하며 타입 안정성을 높입니다.",
    projects: ["Washer", "Hyoit", "Portfolio"],
    bg: "#3178C6",
  },
  {
    name: "TanStack Query",
    icon: "/icons/reactquery.svg",
    category: "Server State",
    description:
      "Query Key와 캐싱·무효화 전략을 데이터 변경 주기에 맞게 설계해 서버 상태를 관리합니다.",
    projects: ["Washer", "Hyoit"],
    bg: "#ffffff",
  },
  {
    name: "Zustand",
    icon: "/icons/zustand_a.svg",
    category: "Client State",
    description:
      "인증과 사용자 역할처럼 여러 화면에서 공유되는 클라이언트 상태를 모델링하고 관리합니다.",
    projects: ["Washer", "Hyoit"],
    bg: "#ECB63F",
  },
  {
    name: "React Native",
    icon: "/icons/react-native.svg",
    category: "Mobile App",
    description:
      "Expo 기반 모바일 앱에서 화면 흐름과 역할별 UI, 상태 및 서버 데이터 연동을 구현합니다.",
    projects: ["Hyoit", "NOVA"],
    bg: "#20232A",
  },
  {
    name: "GSAP",
    icon: "/icons/gsap.svg",
    category: "Interaction",
    description:
      "ScrollTrigger를 활용한 스크롤 인터랙션을 구현하고, 복합 동작의 실행과 정리 구조를 설계합니다.",
    projects: ["Portfolio"],
    bg: "#000000",
  },
];
