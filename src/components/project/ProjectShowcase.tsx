import Image from "next/image";
import { ProjectItem } from "@/data/projects";

interface ProjectShowcaseProps {
  project: ProjectItem;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <section
      className={`project-showcase project-showcase--${project.background}`}
      style={{ "--project-accent": project.themeColor } as React.CSSProperties}
    >
      <div className="project-showcase__hero">
        <div className="project-showcase__info">
          <p className="project-showcase__category">{project.category}</p>

          <h2 className="project-showcase__title">{project.title}</h2>

          <dl className="project-showcase__meta">
            <div className="project-showcase__meta-row">
              <dt>작업기간</dt>
              <dd>{project.period}</dd>
            </div>

            <div className="project-showcase__meta-row">
              <dt>기여도</dt>
              <dd>{project.contribution}</dd>
            </div>

            <div className="project-showcase__meta-row">
              <dt>프레임워크</dt>
              <dd>{project.stack.join(", ")}</dd>
            </div>
          </dl>

          <button type="button" className="project-showcase__button">
            View More
          </button>
        </div>

        <div className="project-showcase__visual">
          <div className="project-showcase__monitor">
            <div className="project-showcase__screen">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="project-showcase__screen-image"
              />
            </div>

            <Image
              src="/images/projects/monitor-frame.png"
              alt=""
              fill
              className="project-showcase__monitor-frame"
              priority
            />
          </div>
        </div>
      </div>

      <div className="project-showcase__detail">
        <div className="project-showcase__detail-left">
          <div className="project-showcase__text-block">
            <h3 className="project-showcase__detail-title">KEYWORD</h3>
            <p className="project-showcase__detail-text">
              {project.keywords.join(", ")}
            </p>
          </div>

          <div className="project-showcase__text-block">
            <h3 className="project-showcase__detail-title">OVERVIEW</h3>
            <p className="project-showcase__detail-text">{project.overview}</p>
          </div>
        </div>

        <div className="project-showcase__thumbs">
          {project.thumbnails.map((thumbnail, index) => (
            <div
              className="project-showcase__thumb"
              key={`${project.id}-${index}`}
            >
              <Image
                src={thumbnail}
                alt={`${project.title} thumbnail ${index + 1}`}
                fill
                className="project-showcase__thumb-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
