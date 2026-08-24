import { notFound } from "next/navigation";

import { ProjectDetailStage } from "@/components/stages";
import { getProjectDetailContent } from "@/content/projects";
import { getProjectDetailNavItems, getProjectItemById } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;

  const item = getProjectItemById(id);

  if (!item) {
    notFound();
  }

  const Content = getProjectDetailContent(id);
  const navItems = getProjectDetailNavItems(id);

  return (
    <div className="project-detail-page">
      <ProjectDetailStage item={item} navItems={navItems}>
        {Content && <Content />}
      </ProjectDetailStage>
    </div>
  );
}
