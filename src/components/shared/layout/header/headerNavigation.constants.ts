export type HeaderNavigationItem = {
  href: string;
  label: string;
  offset?: number;
};

export const HEADER_NAVIGATION_ITEMS: HeaderNavigationItem[] = [
  {
    href: "#about",
    label: "ABOUT",
  },
  {
    href: "#build",
    label: "BUILD",
    offset: 1840,
  },
  {
    href: "#projects",
    label: "PROJECTS",
  },
  {
    href: "#contact",
    label: "CONTACT",
  },
];
