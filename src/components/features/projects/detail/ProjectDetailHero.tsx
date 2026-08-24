"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { ArrowButton } from "@/components/shared/ui";
import type { ProjectItem } from "@/data/projects";

import ProjectDetailActions from "./ProjectDetailActions";

interface ProjectDetailHeroProps {
  item: ProjectItem;
}

export default function ProjectDetailHero({ item }: ProjectDetailHeroProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = useMemo(
    () => Array.from(new Set([item.heroImage, ...item.detailImages])),
    [item.heroImage, item.detailImages]
  );

  const totalImages = images.length;
  const activeImage = images[activeImageIndex];

  const handlePreviousImage = () => {
    if (totalImages <= 1) return;

    setActiveImageIndex((current) =>
      current === 0 ? totalImages - 1 : current - 1
    );
  };

  const handleNextImage = () => {
    if (totalImages <= 1) return;

    setActiveImageIndex((current) =>
      current === totalImages - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="project-detail-hero">
      <div className="project-detail-hero__inner">
        <div className="project-detail-hero__profile">
          <div className="project-detail-hero__information">
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
        </div>

        <div className="project-detail-hero__visual">
          <div className="project-detail-hero__image">
            <Image
              key={activeImage}
              src={activeImage}
              alt={`${item.title} 프로젝트 이미지 ${activeImageIndex + 1}`}
              fill
              priority={activeImageIndex === 0}
              sizes="(max-width: 900px) 100vw, 680px"
            />
          </div>

          {totalImages > 1 && (
            <div className="project-detail-hero__visual-footer">
              <span className="project-detail-hero__image-count">
                {String(activeImageIndex + 1).padStart(2, "0")}
                <span>/</span>
                {String(totalImages).padStart(2, "0")}
              </span>

              <div className="project-detail-hero__controls">
                <ArrowButton
                  direction="left"
                  size="small"
                  onClick={handlePreviousImage}
                  ariaLabel="이전 프로젝트 이미지"
                />

                <ArrowButton
                  direction="right"
                  size="small"
                  onClick={handleNextImage}
                  ariaLabel="다음 프로젝트 이미지"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
