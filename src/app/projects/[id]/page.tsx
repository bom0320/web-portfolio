import { notFound } from "next/navigation";

import { ProjectDetailStage } from "@/components/stages";
import { getProjectItemById } from "@/data/projects";
import { getProjectDetailContent } from "@/data/projects/projectDetailItems";

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
  const detail = getProjectDetailContent(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="project-detail-page">
      <ProjectDetailStage item={item} sections={detail?.sections ?? []} />
    </div>
  );
}
