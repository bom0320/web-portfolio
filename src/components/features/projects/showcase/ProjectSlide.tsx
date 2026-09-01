"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ProjectItem } from "@/data/projects";

export type ProjectSlidePosition =
  | "previous"
  | "active"
  | "next"
  | "hidden-left"
  | "hidden-right";

interface ProjectSlideProps {
  item: ProjectItem;
  position: ProjectSlidePosition;
  onSelect: () => void;
}

export default function ProjectSlide({
  item,
  position,
  onSelect,
}: ProjectSlideProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isActive = position === "active";

  const isHidden = position === "hidden-left" || position === "hidden-right";

  const isRevealed = isActive && isHovered;

  const inactiveContent = (
    <div className="project-slide__inactive-content">
      <p className="project-slide__inactive-category">{item.category}</p>

      <div className="project-slide__inactive-body">
        <h3 className="project-slide__title">{item.title}</h3>

        <p className="project-slide__description">{item.overview}</p>
      </div>
    </div>
  );

  return (
    <article
      className={[
        "project-slide",
        `is-${position}`,
        isRevealed ? "is-revealed" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-current={isActive ? "true" : undefined}
      aria-hidden={isHidden ? true : undefined}
      onMouseEnter={() => {
        if (isActive) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onFocusCapture={() => {
        if (isActive) {
          setIsHovered(true);
        }
      }}
      onBlurCapture={() => {
        setIsHovered(false);
      }}
    >
      {isActive ? (
        <div className="project-slide__card">
          <div className="project-slide__media">
            <Image
              src={item.heroImage}
              alt={`${item.title} 프로젝트 미리보기`}
              fill
              priority
              sizes="(max-width: 900px) 86vw, 760px"
              className="project-slide__image"
            />

            <div className="project-slide__media-overlay" />
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

              <Link href={item.link} className="project-slide__cta">
                <span>View project</span>

                <span className="project-slide__cta-icon">
                  <ArrowRight size={16} strokeWidth={1.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      ) : isHidden ? (
        inactiveContent
      ) : (
        <button
          type="button"
          className="project-slide__select"
          onClick={onSelect}
          aria-label={`${item.title} 프로젝트 선택`}
        >
          {inactiveContent}
        </button>
      )}
    </article>
  );
}
