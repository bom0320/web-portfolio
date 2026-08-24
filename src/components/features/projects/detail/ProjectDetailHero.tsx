import Image from "next/image";

import type { ProjectItem } from "@/data/projects";
import type { ProjectDetailSection } from "@/data/projects/projectDetailItems";

import ProjectDetailActions from "./ProjectDetailActions";
import ProjectDetailNav from "./ProjectDetailNav";

interface ProjectDetailHeroProps {
  item: ProjectItem;
  sections: ProjectDetailSection[];
}

export default function ProjectDetailHero({
  item,
  sections,
}: ProjectDetailHeroProps) {
  return (
    <section className="project-detail-hero">
      <div className="project-detail-hero__inner">
        <div className="project-detail-hero__profile">
          <div>
            <p className="project-detail-hero__category">{item.category}</p>

            <h1 className="project-detail-hero__title">{item.title}</h1>

            <p className="project-detail-hero__overview">{item.overview}</p>

            <ProjectDetailActions
              projectId={item.id}
              projectName={item.title}
              liveUrl={item.liveUrl}
              githubUrl={item.githubUrl}
            />
          </div>

          <ProjectDetailNav sections={sections} activeId="intro" />
        </div>

        <div className="project-detail-hero__visual">
          <div className="project-detail-hero__image">
            <Image
              src={item.heroImage}
              alt={`${item.title} 프로젝트`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 60vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
