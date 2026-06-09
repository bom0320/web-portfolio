export type Skill = {
  name: string;
  icon: string;
  value: number;
  sub?: string;
  bg: string;
};

export const SKILLS: Skill[] = [
  {
    name: "Next.js",
    icon: "/icons/next.svg",
    value: 80,
    sub: "Framework",
    bg: "#000000",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
    value: 75,
    sub: "UI Library",
    bg: "#222222",
  },
  {
    name: "TypeScript",
    icon: "/icons/ts.svg",
    value: 78,
    sub: "Static Typing",
    bg: "#3178C6",
  },
  {
    name: "React Query",
    icon: "/icons/reactquery.svg",
    value: 85,
    sub: "Data Fetching",
    bg: "#ffffff",
  },
  {
    name: "Zustand",
    icon: "/icons/zustand_a.svg",
    value: 70,
    sub: "State Management",
    bg: "#ECB63F",
  },
  {
    name: "React Native",
    icon: "/icons/react-native.svg",
    value: 72,
    sub: "Mobile App",
    bg: "#20232A",
  },
  {
    name: "GSAP",
    icon: "/icons/gsap.svg",
    value: 82,
    sub: "Web Animation",
    bg: "#000000",
  },
];
