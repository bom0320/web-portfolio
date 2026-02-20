export type Skill = {
  name: string;
  icon: string;
  value: number;
  sub?: string;
};

export const SKILLS: Skill[] = [
  {
    name: "Next.js",
    icon: "/images/logo/next.svg",
    value: 80,
    sub: "20080320",
  },
  {
    name: "React",
    icon: "/images/logo/react.svg",
    value: 75,
    sub: "20080320",
  },
  {
    name: "JavaScript",
    icon: "/images/logo/js.svg",
    value: 85,
    sub: "20080320",
  },
  {
    name: "Zustand",
    icon: "/images/logo/zustand.svg",
    value: 70,
    sub: "20080320",
  },
  {
    name: "TypeScript",
    icon: "/images/logo/ts.svg",
    value: 78,
    sub: "20080320",
  },
];
