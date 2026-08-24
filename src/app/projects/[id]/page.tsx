import { notFound } from "next/navigation";

import {
  ProjectDetailHero,
  ProjectDetailContent,
} from "@/components/features/projects/detail";
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
    <main className="project-detail-page">
      <ProjectDetailHero item={item} sections={detail?.sections ?? []} />

      {detail && (
        <ProjectDetailContent item={item} sections={detail.sections} />
      )}
    </main>
  );
}
