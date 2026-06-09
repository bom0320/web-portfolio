"use client";

import Link from "next/link";
import type { Dispatch, MouseEvent, SetStateAction } from "react";

import type { CapabilityNavigatorItem } from "@/data/capability";

interface CapabilityNavigatorListProps {
  items: CapabilityNavigatorItem[];
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

export default function CapabilityNavigatorList({
  items,
  activeIndex,
  visibleIndex,
  onActiveIndexChange,
  onPreviewIndexChange,
}: CapabilityNavigatorListProps) {
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
    index: number
  ) => {
    if (!isMobileNavigator()) return;

    if (visibleIndex !== index) {
      event.preventDefault();

      onPreviewIndexChange(null);
      onActiveIndexChange(index);
    }
  };

  return (
    <ul className="capability-navigator-list">
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        const isVisible = index === visibleIndex;
        const isPreview = isVisible && visibleIndex !== activeIndex;

        const itemClassName = [
          "capability-navigator-list__item",
          isActive && "is-active",
          isPreview && "is-preview",
          isVisible && "is-visible",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <li className="capability-navigator-list__row" key={item.id}>
            <Link
              href={item.link}
              className={itemClassName}
              aria-current={isActive ? "true" : undefined}
              onClick={(event) => handleItemClick(event, index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleMouseEnter(index)}
              onBlur={handleMouseLeave}
            >
              <span className="capability-navigator-list__text">
                <span className="capability-navigator-list__category">
                  {item.category}
                </span>

                <span className="capability-navigator-list__title">
                  {item.title}
                </span>
              </span>

              <span className="capability-navigator-list__icon">↗</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
