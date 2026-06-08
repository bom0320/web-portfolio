"use client";

import Link from "next/link";
import type { CapabilityNavigatorItem } from "@/data/capability";

interface CapabilityNavigatorListProps {
  items: CapabilityNavigatorItem[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
}

export default function CapabilityNavigatorList({
  items,
  activeIndex,
  onActiveIndexChange,
}: CapabilityNavigatorListProps) {
  return (
    <ul className="capability-navigator-list" data-lenis-prevent>
      {items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <li className="capability-navigator-list__row" key={item.id}>
            <Link
              href={item.link}
              className={`capability-navigator-list__item ${
                isActive ? "is-active" : ""
              }`}
              aria-current={isActive ? "true" : undefined}
              onMouseEnter={() => onActiveIndexChange(index)}
              onFocus={() => onActiveIndexChange(index)}
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
