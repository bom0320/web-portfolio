"use client";

import { type MouseEvent, useEffect, useMemo, useRef, useState } from "react";

import type { ProjectDetailNavItem } from "@/data/projects";

interface ProjectDetailNavProps {
  items: ProjectDetailNavItem[];
}

interface NavTarget {
  id: string;
  parentId: string;
}

interface RailHeading {
  id: string;
  level: 2 | 3 | 4;
}

const ACTIVATION_RATIO = 0.28;
const MAX_ACTIVATION_Y = 260;
const NAV_OFFSET = 32;

export default function ProjectDetailNav({ items }: ProjectDetailNavProps) {
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

  const activeParentId = useMemo(() => {
    return (
      targets.find((target) => target.id === activeId)?.parentId ??
      items[0]?.id ??
      ""
    );
  }, [activeId, items, targets]);

  /*
   * Sidebar click navigation
   */
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

    const top =
      window.scrollY +
      target.getBoundingClientRect().top -
      headerHeight -
      NAV_OFFSET;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  /*
   * 실제 document hierarchy를 rail로 변환
   */
  useEffect(() => {
    const content = document.querySelector(".project-detail-content__sections");

    if (!content) return;

    const sections = Array.from(
      content.querySelectorAll<HTMLElement>(".project-detail-section")
    );

    const headings: RailHeading[] = [];

    sections.forEach((section) => {
      if (!section.id) return;

      headings.push({
        id: section.id,
        level: 2,
      });

      const nestedHeadings = Array.from(
        section.querySelectorAll<HTMLElement>(
          ".project-detail-section__body h3, .project-detail-section__body h4"
        )
      );

      nestedHeadings.forEach((heading, index) => {
        if (!heading.id) {
          heading.id = `${section.id}-heading-${index + 1}`;
        }

        const level = Number(heading.tagName.slice(1)) as 3 | 4;

        headings.push({
          id: heading.id,
          level,
        });
      });
    });

    setRailHeadings(headings);
  }, [items]);

  /*
   * 현재 읽고 있는 위치 추적
   */
  useEffect(() => {
    const updateActiveSection = () => {
      const activationY = Math.min(
        window.innerHeight * ACTIVATION_RATIO,
        MAX_ACTIVATION_Y
      );

      const availableTargets = targets.flatMap((target) => {
        const element = document.getElementById(target.id);

        if (!element) return [];

        return [
          {
            id: target.id,
            top: element.getBoundingClientRect().top,
          },
        ];
      });

      if (availableTargets.length > 0) {
        let currentTarget = availableTargets[0];

        for (const target of availableTargets) {
          if (target.top <= activationY) {
            currentTarget = target;
            continue;
          }

          break;
        }

        setActiveId(currentTarget.id);
      }

      const availableRailHeadings = railHeadings.flatMap((heading) => {
        const element = document.getElementById(heading.id);

        if (!element) return [];

        return [
          {
            id: heading.id,
            top: element.getBoundingClientRect().top,
          },
        ];
      });

      if (availableRailHeadings.length > 0) {
        let currentHeading = availableRailHeadings[0];

        for (const heading of availableRailHeadings) {
          if (heading.top <= activationY) {
            currentHeading = heading;
            continue;
          }

          break;
        }

        setActiveRailId(currentHeading.id);
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

  return (
    <nav className="project-detail-nav" aria-label="프로젝트 상세 목차">
      <div className="project-detail-nav__rail" aria-hidden="true">
        {railHeadings.map((heading) => (
          <span
            key={heading.id}
            className={[
              "project-detail-nav__tick",
              `project-detail-nav__tick--h${heading.level}`,
              activeRailId === heading.id ? "is-active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          />
        ))}
      </div>

      <div className="project-detail-nav__panel">
        <div className="project-detail-nav__list">
          {items.map((item) => {
            const isParentActive = activeParentId === item.id;

            return (
              <div
                key={item.id}
                className={[
                  "project-detail-nav__group",
                  isParentActive ? "is-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <a
                  href={`#${item.id}`}
                  className="project-detail-nav__parent"
                  onClick={(event) => handleNavigate(event, item.id)}
                >
                  <span className="project-detail-nav__parent-number">
                    {item.number}
                  </span>

                  <span className="project-detail-nav__parent-label">
                    {item.label}
                  </span>
                </a>

                {item.children?.length ? (
                  <div className="project-detail-nav__children">
                    {item.children.map((child) => {
                      const isChildActive = activeId === child.id;

                      return (
                        <a
                          key={child.id}
                          href={`#${child.id}`}
                          className={[
                            "project-detail-nav__child",
                            isChildActive ? "is-active" : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          onClick={(event) => handleNavigate(event, child.id)}
                        >
                          <span className="project-detail-nav__child-number">
                            {child.number}
                          </span>

                          <span className="project-detail-nav__child-label">
                            {child.label}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
