import { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ProjectItem } from "@/data/projects";

interface ProjectSlideProps {
  item: ProjectItem;
  isActive: boolean;
  onSelect: () => void;
}

const ProjectSlide = forwardRef<HTMLDivElement, ProjectSlideProps>(
  function ProjectSlide({ item, isActive, onSelect }, ref) {
    const content = (
      <div className="project-slide__card">
        <div className="project-slide__media">
          <Image
            src={item.heroImage}
            alt={isActive ? `${item.title} 프로젝트 미리보기` : ""}
            fill
            sizes="(max-width: 640px) 86vw, (max-width: 1024px) 72vw, 760px"
            className="project-slide__image"
          />

          <div className="project-slide__overlay" />
        </div>

        <div className="project-slide__detail">
          <div className="project-slide__detail-inner">
            <div className="project-slide__meta">
              <span>{item.category}</span>
              <span>{item.period}</span>
            </div>

            <div className="project-slide__body">
              <h3 className="project-slide__title">{item.title}</h3>

              <p className="project-slide__description">{item.overview}</p>
            </div>

            {isActive && (
              <div className="project-slide__footer">
                <Link href={item.link} className="project-slide__cta">
                  <span>View project</span>

                  <span className="project-slide__cta-icon">
                    <ArrowRight size={16} strokeWidth={1.6} />
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );

    return (
      <article
        ref={ref}
        className={`project-slide ${isActive ? "is-active" : ""}`}
        aria-current={isActive ? "true" : undefined}
      >
        {isActive ? (
          content
        ) : (
          <button
            type="button"
            className="project-slide__select"
            onClick={onSelect}
            aria-label={`${item.title} 프로젝트 선택`}
          >
            {content}
          </button>
        )}
      </article>
    );
  }
);

export default ProjectSlide;
