export type SkillCategoryIcon =
  | "framework"
  | "ui"
  | "typing"
  | "server-state"
  | "client-state"
  | "mobile"
  | "interaction";

export type SkillTheme = {
  background: string;
  activeBackground: string;
};

export type Skill = {
  name: string;
  category: string;
  categoryIcon: SkillCategoryIcon;
  description: string;
  theme: SkillTheme;
};

export const SKILLS: Skill[] = [
  {
    name: "Next.js",
    category: "Framework",
    categoryIcon: "framework",
    description:
      "App Router 기반으로 페이지와 라우팅 구조를 설계하고, 데이터 흐름과 이미지 로딩 등 실제 서비스의 성능까지 고려해 구현합니다.",
    theme: {
      // Next.js — neutral / silver
      background: `
        radial-gradient(
          140% 65% at 45% 112%,
          rgba(225, 225, 225, 0.34) 0%,
          rgba(145, 145, 150, 0.2) 28%,
          rgba(74, 74, 82, 0.1) 48%,
          transparent 72%
        ),
        radial-gradient(
          85% 70% at 92% 18%,
          rgba(82, 82, 90, 0.14) 0%,
          transparent 68%
        ),
        #080809
      `,

      activeBackground: `
        radial-gradient(
          145% 72% at 42% 114%,
          rgba(248, 248, 248, 0.64) 0%,
          rgba(215, 215, 218, 0.48) 18%,
          rgba(150, 150, 158, 0.3) 35%,
          rgba(79, 79, 88, 0.14) 53%,
          transparent 74%
        ),
        radial-gradient(
          95% 72% at 92% 14%,
          rgba(97, 97, 108, 0.18) 0%,
          transparent 72%
        ),
        #080809
      `,
    },
  },

  {
    name: "React",
    category: "UI Library",
    categoryIcon: "ui",
    description:
      "상태 변화에 따라 동작하는 UI를 구현하고, 화면의 역할과 책임을 기준으로 컴포넌트를 분리해 재사용 가능한 구조로 설계합니다.",
    theme: {
      // React — cyan
      background: `
        radial-gradient(
          120% 58% at 50% -8%,
          rgba(156, 223, 235, 0.32) 0%,
          rgba(75, 143, 157, 0.17) 38%,
          transparent 70%
        ),
        radial-gradient(
          125% 44% at 28% 108%,
          rgba(211, 234, 238, 0.34) 0%,
          rgba(84, 151, 163, 0.14) 38%,
          transparent 70%
        ),
        #070b0c
      `,

      activeBackground: `
        radial-gradient(
          130% 68% at 50% -10%,
          rgba(179, 236, 245, 0.44) 0%,
          rgba(88, 169, 183, 0.24) 35%,
          transparent 68%
        ),
        radial-gradient(
          135% 52% at 22% 110%,
          rgba(231, 248, 250, 0.58) 0%,
          rgba(139, 202, 212, 0.32) 28%,
          rgba(65, 125, 139, 0.14) 50%,
          transparent 72%
        ),
        #070b0c
      `,
    },
  },

  {
    name: "TypeScript",
    category: "Static Typing",
    categoryIcon: "typing",
    description:
      "API 응답과 도메인 타입을 정의하고, nullable·optional 등 데이터 경계의 불일치를 추적해 타입 안정성을 높입니다.",
    theme: {
      // TypeScript — #3178C6 계열
      background: `
        radial-gradient(
          140% 62% at 18% 5%,
          rgba(112, 163, 211, 0.38) 0%,
          rgba(49, 120, 198, 0.21) 36%,
          rgba(31, 69, 111, 0.1) 52%,
          transparent 72%
        ),
        #070a0e
      `,

      activeBackground: `
        radial-gradient(
          145% 74% at 14% 2%,
          rgba(161, 196, 228, 0.5) 0%,
          rgba(70, 137, 205, 0.32) 30%,
          rgba(40, 86, 137, 0.16) 52%,
          transparent 74%
        ),
        radial-gradient(
          90% 44% at 85% 105%,
          rgba(188, 208, 226, 0.17) 0%,
          transparent 68%
        ),
        #070a0e
      `,
    },
  },

  {
    name: "TanStack Query",
    category: "Server State",
    categoryIcon: "server-state",
    description:
      "Query Key를 기준으로 서버 상태를 구조화하고, 데이터 변경 주기에 맞춰 캐싱·무효화·재요청 전략을 설계합니다.",
    theme: {
      // TanStack Query — red / pink
      background: `
        radial-gradient(
          160% 26% at 50% 59%,
          rgba(241, 219, 224, 0.48) 0%,
          rgba(215, 105, 131, 0.27) 24%,
          rgba(132, 52, 78, 0.14) 46%,
          transparent 70%
        ),
        #0c0709
      `,

      activeBackground: `
        radial-gradient(
          165% 32% at 50% 59%,
          rgba(250, 235, 239, 0.64) 0%,
          rgba(231, 148, 166, 0.42) 23%,
          rgba(179, 74, 104, 0.24) 42%,
          rgba(101, 41, 62, 0.12) 58%,
          transparent 74%
        ),
        radial-gradient(
          85% 58% at 92% 95%,
          rgba(170, 58, 91, 0.18) 0%,
          transparent 70%
        ),
        #0c0709
      `,
    },
  },

  {
    name: "Zustand",
    category: "Client State",
    categoryIcon: "client-state",
    description:
      "인증 상태와 사용자 역할처럼 여러 화면에서 공유되는 상태를 모델링하고, 필요한 범위에 맞춰 전역 상태를 관리합니다.",
    theme: {
      // Zustand — warm brown / beige
      background: `
        radial-gradient(
          135% 58% at 48% 108%,
          rgba(185, 151, 113, 0.33) 0%,
          rgba(119, 82, 52, 0.19) 34%,
          rgba(68, 45, 28, 0.09) 52%,
          transparent 72%
        ),
        #0b0806
      `,

      activeBackground: `
        radial-gradient(
          145% 68% at 46% 110%,
          rgba(220, 189, 151, 0.45) 0%,
          rgba(154, 110, 73, 0.27) 32%,
          rgba(84, 55, 34, 0.13) 52%,
          transparent 72%
        ),
        #0b0806
      `,
    },
  },

  {
    name: "React Native",
    category: "Mobile App",
    categoryIcon: "mobile",
    description:
      "Expo 기반으로 모바일 화면과 역할별 사용자 흐름을 구현하고, 클라이언트 상태와 서버 데이터를 연결해 앱을 구성합니다.",
    theme: {
      // React Native — React보다 더 steel / deep cyan
      background: `
        radial-gradient(
          150% 34% at 48% 58%,
          rgba(147, 205, 220, 0.36) 0%,
          rgba(74, 139, 158, 0.2) 28%,
          rgba(40, 77, 91, 0.1) 48%,
          transparent 72%
        ),
        #070a0c
      `,

      activeBackground: `
        radial-gradient(
          155% 42% at 48% 58%,
          rgba(189, 228, 237, 0.5) 0%,
          rgba(103, 170, 188, 0.29) 30%,
          rgba(50, 101, 119, 0.14) 51%,
          transparent 72%
        ),
        #070a0c
      `,
    },
  },

  {
    name: "GSAP",
    category: "Interaction",
    categoryIcon: "interaction",
    description:
      "ScrollTrigger 기반의 pin·sticky·스크롤 인터랙션을 구현하고, 복합 애니메이션의 실행·초기화·정리 흐름까지 구조화합니다.",
    theme: {
      // GSAP — signature green
      background: `
        radial-gradient(
          135% 60% at 64% 110%,
          rgba(159, 219, 119, 0.32) 0%,
          rgba(78, 151, 49, 0.18) 36%,
          rgba(37, 83, 26, 0.09) 52%,
          transparent 72%
        ),
        #070b06
      `,

      activeBackground: `
        radial-gradient(
          145% 70% at 64% 112%,
          rgba(195, 235, 166, 0.44) 0%,
          rgba(105, 180, 73, 0.26) 34%,
          rgba(49, 105, 34, 0.12) 54%,
          transparent 74%
        ),
        #070b06
      `,
    },
  },
];
