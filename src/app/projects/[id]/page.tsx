import { notFound } from "next/navigation";

import {
  ProjectDetailGallery,
  ProjectDetailHero,
} from "@/components/features/projects";
import { getProjectItemById } from "@/data/projects";

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

  return (
    <main className="project-detail-page">
      <div className="project-detail-layout">
        <ProjectDetailHero item={item} />

        <ProjectDetailGallery title={item.title} images={item.detailImages} />
      </div>
    </main>
  );
}
