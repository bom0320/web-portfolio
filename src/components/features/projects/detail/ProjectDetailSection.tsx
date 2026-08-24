import Image from "next/image";

import type { ProjectItem } from "@/data/projects";
import type { ProjectDetailSection as ProjectDetailSectionType } from "@/data/projects/projectDetailItems";

interface ProjectDetailSectionProps {
  item: ProjectItem;
  section: ProjectDetailSectionType;
}

export default function ProjectDetailSection({
  item,
  section,
}: ProjectDetailSectionProps) {
  const image =
    section.imageIndex !== undefined
      ? item.detailImages[section.imageIndex]
      : undefined;

  return (
    <section id={section.id} className="project-detail-section">
      <div className="project-detail-section__heading">
        {section.eyebrow && (
          <p className="project-detail-section__eyebrow">{section.eyebrow}</p>
        )}

        <h2 className="project-detail-section__title">{section.title}</h2>
      </div>

      <div className="project-detail-section__body">
        {section.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {image && (
        <div className="project-detail-section__media">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 760px"
          />
        </div>
      )}
    </section>
  );
}
