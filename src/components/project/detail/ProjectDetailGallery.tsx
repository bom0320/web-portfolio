import Image from "next/image";
import type { ProjectItem } from "@/data/projects";

interface ProjectDetailGalleryProps {
  project: ProjectItem;
}

export default function ProjectDetailGallery({
  project,
}: ProjectDetailGalleryProps) {
  return (
    <section className="project-detail-gallery">
      {project.detailImages.map((image, index) => (
        <div className="project-detail-gallery__item" key={image}>
          <Image
            src={image}
            alt={`${project.title} detail ${index + 1}`}
            fill
            className="project-detail-gallery__image"
            sizes="(max-width: 1024px) 90vw, 760px"
          />
        </div>
      ))}
    </section>
  );
}
