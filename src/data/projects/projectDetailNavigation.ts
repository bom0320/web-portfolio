export interface ProjectDetailNavItem {
  id: string;
  number: string;
  label: string;
}

const PROJECT_DETAIL_NAV_ITEMS: Record<string, ProjectDetailNavItem[]> = {
  washer: [
    {
      id: "overview",
      number: "01",
      label: "Overview",
    },
    {
      id: "problem",
      number: "02",
      label: "Problem",
    },
    {
      id: "experience",
      number: "03",
      label: "Experience",
    },
    {
      id: "engineering",
      number: "04",
      label: "Engineering",
    },
    {
      id: "impact",
      number: "05",
      label: "Impact",
    },
    {
      id: "retrospective",
      number: "06",
      label: "Retrospective",
    },
  ],
};

export function getProjectDetailNavItems(projectId: string) {
  return PROJECT_DETAIL_NAV_ITEMS[projectId] ?? [];
}
