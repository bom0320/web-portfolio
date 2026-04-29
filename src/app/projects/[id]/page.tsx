import { notFound } from "next/navigation";
import { getProjectById, PROJECTS } from "@/data/projects";
import ProjectDetailHero from "@/components/project/detail/ProjectDetailHero";
import ProjectDetailGallery from "@/components/project/detail/ProjectDetailGallery";
import ProjectDetailContent from "@/components/project/detail/ProjectDetailContent";

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | BOM Portfolio`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-detail-page">
      <ProjectDetailHero project={project} />
      <ProjectDetailGallery project={project} />
      <ProjectDetailContent project={project} />
    </main>
  );
}
