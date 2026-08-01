"use client";

import Link from "next/link";
import type { Dispatch, MouseEvent, SetStateAction } from "react";

import type { ProjectItem } from "@/data/projects";
import { ANALYTICS_EVENT } from "@/lib/analytics/events";
import { trackAmplitudeEvent } from "@/lib/amplitude";

interface ProjectsNavigatorListProps {
  items: ProjectItem[];
  activeIndex: number;
  visibleIndex: number;
  onActiveIndexChange: Dispatch<SetStateAction<number>>;
  onPreviewIndexChange: Dispatch<SetStateAction<number | null>>;
}

const canUseHoverPreview = () => {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
};

const isMobileNavigator = () => {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(max-width: 900px)").matches;
};

export default function ProjectsNavigatorList({
  items,
  activeIndex,
  visibleIndex,
  onActiveIndexChange,
  onPreviewIndexChange,
}: ProjectsNavigatorListProps) {
  const handleMouseEnter = (index: number) => {
    if (!canUseHoverPreview()) return;

    onPreviewIndexChange(index);
  };

  const handleMouseLeave = () => {
    if (!canUseHoverPreview()) return;

    onPreviewIndexChange(null);
  };

  const handleItemClick = (
    event: MouseEvent<HTMLAnchorElement>,
    item: ProjectItem,
    index: number
  ) => {
    if (isMobileNavigator() && visibleIndex !== index) {
      event.preventDefault();

      onPreviewIndexChange(null);
      onActiveIndexChange(index);
      return;
    }

    trackAmplitudeEvent(ANALYTICS_EVENT.PROJECT_CLICKED, {
      project_id: item.id,
      project_name: item.title,
      project_category: item.category,
      source: "projects_navigator",
    });
  };

  return (
    <ul className="projects-navigator-list">
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        const isVisible = index === visibleIndex;
        const isPreview = isVisible && visibleIndex !== activeIndex;

        const itemClassName = [
          "projects-navigator-list__item",
          isActive && "is-active",
          isPreview && "is-preview",
          isVisible && "is-visible",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <li className="projects-navigator-list__row" key={item.id}>
            <Link
              href={item.link}
              className={itemClassName}
              aria-current={isActive ? "true" : undefined}
              onClick={(event) => handleItemClick(event, item, index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter(index)}
              onBlur={handleMouseLeave}
            >
              <span className="projects-navigator-list__text">
                <span className="projects-navigator-list__category">
                  {item.category}
                </span>

                <span className="projects-navigator-list__title">
                  {item.title}
                </span>
              </span>

              <span className="projects-navigator-list__icon">↗</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
