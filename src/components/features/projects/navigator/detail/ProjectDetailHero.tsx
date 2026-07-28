import Link from "next/link";

import type { ProjectItem } from "@/data/projects";

import ProjectDetailActions from "./ProjectDetailActions";

interface ProjectDetailHeroProps {
  item: ProjectItem;
}

export default function ProjectDetailHero({ item }: ProjectDetailHeroProps) {
  const projectMeta = [
    {
      label: "Period",
      value: item.period,
    },
    {
      label: "Role",
      value: item.role,
    },
    {
      label: "Stack",
      value: item.stack.join(", "),
    },
  ];

  return (
    <aside className="project-detail-hero">
      <Link
        href="/#projects"
        scroll={false}
        className="project-detail-hero__back"
        aria-label="프로젝트 목록으로 돌아가기"
      >
        <span className="project-detail-hero__back-icon">←</span>
      </Link>

      <div className="project-detail-hero__text">
        <p className="project-detail-hero__category">{item.category}</p>

        <h1 className="project-detail-hero__title">{item.title}</h1>

        <p className="project-detail-hero__overview">{item.overview}</p>

        <dl className="project-detail-hero__meta">
          {projectMeta.map((meta) => (
            <div key={meta.label} className="project-detail-hero__meta-row">
              <dt className="project-detail-hero__meta-label">
                {meta.label}
              </dt>

              <dd className="project-detail-hero__meta-value">
                {meta.value}
              </dd>
            </div>
          ))}
        </dl>

        <ProjectDetailActions
          liveUrl={item.liveUrl}
          githubUrl={item.githubUrl}
        />
      </div>
    </aside>
  );
}
