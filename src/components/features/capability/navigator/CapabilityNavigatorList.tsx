"use client";

import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";

import type { CapabilityNavigatorItem } from "@/data/capability";

interface CapabilityNavigatorListProps {
  items: CapabilityNavigatorItem[];
  activeIndex: number;
  visibleIndex: number;
  onPreviewIndexChange: Dispatch<SetStateAction<number | null>>;
}

export default function CapabilityNavigatorList({
  items,
  activeIndex,
  visibleIndex,
  onPreviewIndexChange,
}: CapabilityNavigatorListProps) {
  return (
    <ul className="capability-navigator-list">
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        const isPreview =
          index === visibleIndex && visibleIndex !== activeIndex;

        const itemClassName = [
          "capability-navigator-list__item",
          isActive && "is-active",
          isPreview && "is-preview",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <li className="capability-navigator-list__row" key={item.id}>
            <Link
              href={item.link}
              className={itemClassName}
              aria-current={isActive ? "true" : undefined}
              onMouseEnter={() => onPreviewIndexChange(index)}
              onMouseLeave={() => onPreviewIndexChange(null)}
              onFocus={() => onPreviewIndexChange(index)}
              onBlur={() => onPreviewIndexChange(null)}
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
