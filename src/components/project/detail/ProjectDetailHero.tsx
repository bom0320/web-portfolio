import Link from "next/link";
import type { ProjectItem } from "@/data/projects";

interface ProjectDetailHeroProps {
  project: ProjectItem;
}

export default function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <aside className="project-detail-hero">
      <Link href="/#projects" className="project-detail-hero__back">
        ←
      </Link>

      <div className="project-detail-hero__text">
        <p className="project-detail-hero__category">{project.category}</p>
        <h1 className="project-detail-hero__title">{project.title}</h1>
        <p className="project-detail-hero__overview">{project.overview}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-detail-hero__link"
          >
            See it live ↗
          </a>
        )}
      </div>
    </aside>
  );
}
