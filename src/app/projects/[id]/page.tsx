import { PROJECTS } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailHero from "@/components/projects/detail/ProjectDetailHero";
import ProjectDetailGallery from "@/components/projects/detail/ProjectDetailGallery";

interface ProjectDetailPageParams {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageParams) {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-detail-page">
      <section className="project-detail-layout">
        <ProjectDetailHero project={project} />
        <ProjectDetailGallery images={project.detailImages} />
      </section>
    </main>
  );
}
