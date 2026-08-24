import { notFound } from "next/navigation";

import {
  ProjectDetailContent,
  ProjectDetailHero,
  ProjectDetailNav,
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

  const sections = detail?.sections ?? [];

  return (
    <main className="project-detail-page">
      {sections.length > 0 && (
        <aside className="project-detail-page__nav">
          <ProjectDetailNav sections={sections} activeId="intro" />
        </aside>
      )}

      <ProjectDetailHero item={item} />

      {detail && (
        <ProjectDetailContent item={item} sections={detail.sections} />
      )}
    </main>
  );
}
