import { forwardRef, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ProjectItem } from "@/data/projects";

interface ProjectSlideProps {
  item: ProjectItem;
  isActive: boolean;
  onSelect: () => void;
}

const ProjectSlide = forwardRef<HTMLDivElement, ProjectSlideProps>(
  function ProjectSlide({ item, isActive, onSelect }, ref) {
    const cardContent: ReactNode = (
      <div className="project-slide__card">
        <div className="project-slide__media">
          <Image
            src={item.heroImage}
            alt={`${item.title} 프로젝트 미리보기`}
            fill
            sizes="(max-width: 640px) 82vw, (max-width: 1024px) 72vw, 760px"
          />
        </div>

        <div className="project-slide__content">
          <div className="project-slide__meta">
            <span>{item.category}</span>
            <span>{item.period}</span>
          </div>

          <h3 className="project-slide__title">{item.title}</h3>

          <p className="project-slide__description">{item.overview}</p>

          <ul className="project-slide__stack">
            {item.stack.slice(0, 4).map((stack) => (
              <li key={stack}>{stack}</li>
            ))}
          </ul>

          {isActive && (
            <Link href={item.link} className="project-slide__cta">
              <span>VIEW PROJECT</span>
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
      </div>
    );

    return (
      <div
        ref={ref}
        className={`project-slide ${isActive ? "is-active" : ""}`}
        aria-current={isActive ? "true" : undefined}
      >
        {isActive ? (
          cardContent
        ) : (
          <button
            type="button"
            className="project-slide__select"
            onClick={onSelect}
            aria-label={`${item.title} 프로젝트 보기`}
          >
            {cardContent}
          </button>
        )}
      </div>
    );
  }
);

export default ProjectSlide;
