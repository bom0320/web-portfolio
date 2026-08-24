export interface ProjectDetailNavItem {
  id: string;
  number: string;
  label: string;
}

const PROJECT_DETAIL_NAV_ITEMS: Record<string, ProjectDetailNavItem[]> = {
  washer: [
    {
      id: "intro",
      number: "01",
      label: "Intro",
    },
    {
      id: "skills",
      number: "02",
      label: "Skills",
    },
    {
      id: "trouble-shooting",
      number: "03",
      label: "Trouble Shooting",
    },
    {
      id: "background",
      number: "04",
      label: "Background",
    },
  ],
};

export function getProjectDetailNavItems(projectId: string) {
  return PROJECT_DETAIL_NAV_ITEMS[projectId] ?? [];
}
