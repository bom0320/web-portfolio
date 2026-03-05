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
    sub: "20080320",
    bg: "#000000",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
    value: 75,
    sub: "20080320",
    bg: "#222222",
  },
  {
    name: "React Query",
    icon: "/icons/reactquery.svg",
    value: 85,
    sub: "20080320",
    bg: "#ffffff",
  },
  {
    name: "Zustand",
    icon: "/icons/zustand.svg",
    value: 70,
    sub: "20080320",
    bg: "#ECB63F",
  },
  {
    name: "TypeScript",
    icon: "/icons/ts.svg",
    value: 78,
    sub: "20080320",
    bg: "#3178C6",
  },
];
