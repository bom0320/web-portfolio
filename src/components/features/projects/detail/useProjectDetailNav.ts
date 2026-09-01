"use client";

import { type MouseEvent, useEffect, useMemo, useRef, useState } from "react";

import type { ProjectDetailNavItem } from "@/data/projects";

interface NavTarget {
  id: string;
  parentId: string;
}

export interface RailHeading {
  id: string;
  level: 2 | 3 | 4;
}

const ACTIVATION_RATIO = 0.28;
const MAX_ACTIVATION_Y = 260;
const NAV_OFFSET = 32;

const getActivationY = () =>
  Math.min(window.innerHeight * ACTIVATION_RATIO, MAX_ACTIVATION_Y);

const getAvailableTargets = (ids: string[]) =>
  ids.flatMap((id) => {
    const element = document.getElementById(id);

    if (!element) return [];

    return [
      {
        id,
        top: element.getBoundingClientRect().top,
      },
    ];
  });

const getCurrentTargetId = (
  targets: { id: string; top: number }[],
  activationY: number
) => {
  if (targets.length === 0) return null;

  let current = targets[0];

  for (const target of targets) {
    if (target.top > activationY) break;

    current = target;
  }

  return current.id;
};

const collectRailHeadings = (): RailHeading[] => {
  const content = document.querySelector(".project-detail-content__sections");

  if (!content) return [];

  const sections = Array.from(
    content.querySelectorAll<HTMLElement>(".project-detail-section")
  );

  return sections.flatMap((section) => {
    if (!section.id) return [];

    const sectionHeading: RailHeading = {
      id: section.id,
      level: 2,
    };

    const nestedHeadings = Array.from(
      section.querySelectorAll<HTMLElement>(
        ".project-detail-section__body h3, .project-detail-section__body h4"
      )
    ).map((heading, index): RailHeading => {
      if (!heading.id) {
        heading.id = `${section.id}-heading-${index + 1}`;
      }

      return {
        id: heading.id,
        level: Number(heading.tagName.slice(1)) as 3 | 4,
      };
    });

    return [sectionHeading, ...nestedHeadings];
  });
};

export const useProjectDetailNav = (items: ProjectDetailNavItem[]) => {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [activeRailId, setActiveRailId] = useState(items[0]?.id ?? "");
  const [railHeadings, setRailHeadings] = useState<RailHeading[]>([]);

  const frameRef = useRef<number | null>(null);

  const targets = useMemo<NavTarget[]>(
    () =>
      items.flatMap((item) => [
        {
          id: item.id,
          parentId: item.id,
        },
        ...(item.children?.map((child) => ({
          id: child.id,
          parentId: item.id,
        })) ?? []),
      ]),
    [items]
  );

  const activeParentId = useMemo(
    () =>
      targets.find((target) => target.id === activeId)?.parentId ??
      items[0]?.id ??
      "",
    [activeId, items, targets]
  );

  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();

    const target = document.getElementById(id);

    if (!target) {
      console.warn(`[ProjectDetailNav] target not found: #${id}`);
      return;
    }

    const rootStyles = getComputedStyle(document.documentElement);

    const headerHeight =
      Number.parseFloat(rootStyles.getPropertyValue("--header-height")) || 96;

    const offset = -(headerHeight + NAV_OFFSET);

    setActiveId(id);
    setActiveRailId(id);

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#${id}`
    );

    if (window.__portfolioLenis) {
      window.__portfolioLenis.scrollTo(target, {
        offset,
        duration: 0.9,
      });

      return;
    }

    window.scrollTo({
      top:
        window.scrollY +
        target.getBoundingClientRect().top -
        headerHeight -
        NAV_OFFSET,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setRailHeadings(collectRailHeadings());
  }, [items]);

  useEffect(() => {
    const updateActiveSection = () => {
      const activationY = getActivationY();

      const currentTargetId = getCurrentTargetId(
        getAvailableTargets(targets.map((target) => target.id)),
        activationY
      );

      if (currentTargetId) {
        setActiveId(currentTargetId);
      }

      const currentRailId = getCurrentTargetId(
        getAvailableTargets(railHeadings.map((heading) => heading.id)),
        activationY
      );

      if (currentRailId) {
        setActiveRailId(currentRailId);
      }
    };

    const handleViewportChange = () => {
      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        updateActiveSection();
        frameRef.current = null;
      });
    };

    updateActiveSection();

    window.addEventListener("scroll", handleViewportChange, {
      passive: true,
    });

    window.addEventListener("resize", handleViewportChange);

    return () => {
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [railHeadings, targets]);

  return {
    activeId,
    activeParentId,
    activeRailId,
    railHeadings,
    handleNavigate,
  };
};
