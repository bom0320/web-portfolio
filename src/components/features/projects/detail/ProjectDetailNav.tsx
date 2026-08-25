"use client";

import { useEffect, useState } from "react";

import type { ProjectDetailNavItem } from "@/data/projects";

interface ProjectDetailNavProps {
  items: ProjectDetailNavItem[];
}

export default function ProjectDetailNav({ items }: ProjectDetailNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        const currentSection = visibleSections[0];

        if (!currentSection) return;

        setActiveId(currentSection.target.id);
      },
      {
        root: null,

        /*
         * 화면 상단 약 20~30% 지점을
         * 현재 읽고 있는 section의 기준으로 사용
         */
        rootMargin: "-20% 0px -70% 0px",

        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  return (
    <nav className="project-detail-nav" aria-label="프로젝트 상세 목차">
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`project-detail-nav__item ${
              isActive ? "is-active" : ""
            }`}
            onClick={() => setActiveId(item.id)}
          >
            <span className="project-detail-nav__number">{item.number}</span>

            <span className="project-detail-nav__line" />

            <span className="project-detail-nav__label">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
