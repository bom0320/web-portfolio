import Image from "next/image";
import Link from "next/link";
import type { ProjectItem } from "@/data/projects";

interface ProjectDetailHeroProps {
  project: ProjectItem;
}

export default function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <section className="project-detail-hero">
      <div className="project-detail-hero__nav">
        <Link href="/#projects" className="project-detail-hero__back">
          ←
        </Link>
      </div>

      <div className="project-detail-hero__header">
        <div>
          <p className="project-detail-hero__category">{project.category}</p>
          <h1 className="project-detail-hero__title">{project.title}</h1>
        </div>

        <div className="project-detail-hero__links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-detail-hero__link"
            >
              See it live ↗
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-detail-hero__link"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>

      <div className="project-detail-hero__image">
        <Image
          src={project.heroImage}
          alt={`${project.title} main preview`}
          fill
          className="project-detail-hero__img"
          sizes="(max-width: 1024px) 90vw, 920px"
          priority
        />
      </div>
    </section>
  );
}
