import PortfolioContent from "./portfolio.mdx";
import WasherContent from "./washer.mdx";

const PROJECT_DETAIL_CONTENTS = {
  washer: WasherContent,
  portfolio: PortfolioContent,
} as const;

export function getProjectDetailContent(projectId: string) {
  return PROJECT_DETAIL_CONTENTS[
    projectId as keyof typeof PROJECT_DETAIL_CONTENTS
  ];
}
