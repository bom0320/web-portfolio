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
    <aside className="capability-detail-hero">
      <Link
        href="/#projects"
        scroll={false}
        className="capability-detail-hero__back"
        aria-label="프로젝트 목록으로 돌아가기"
      >
        <span className="capability-detail-hero__back-icon">←</span>
      </Link>

      <div className="capability-detail-hero__text">
        <p className="capability-detail-hero__category">{item.category}</p>

        <h1 className="capability-detail-hero__title">{item.title}</h1>

        <p className="capability-detail-hero__overview">{item.overview}</p>

        <dl className="capability-detail-hero__meta">
          {projectMeta.map((meta) => (
            <div key={meta.label} className="capability-detail-hero__meta-row">
              <dt className="capability-detail-hero__meta-label">
                {meta.label}
              </dt>

              <dd className="capability-detail-hero__meta-value">
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
