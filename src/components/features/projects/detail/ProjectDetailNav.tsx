"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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

export default function ProjectDetailNav({ items }: ProjectDetailNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [activeRailId, setActiveRailId] = useState(items[0]?.id ?? "");
  const [railHeadings, setRailHeadings] = useState<RailHeading[]>([]);

  const frameRef = useRef<number | null>(null);

  /*
   * Expanded Panel에서 추적할 navigation target.
   *
   * 1depth:
   * Overview / Problem / Experience / Engineering ...
   *
   * 2depth:
   * Experience / Engineering 내부 주요 case
   */
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

  /*
   * child가 active인 경우에도
   * 어느 parent chapter에 속하는지 계산.
   */
  const activeParentId = useMemo(() => {
    return (
      targets.find((target) => target.id === activeId)?.parentId ??
      items[0]?.id ??
      ""
    );
  }, [activeId, items, targets]);

  /*
   * 실제 MDX 문서 구조를 읽어 Rail 생성.
   *
   * ProjectDetailSection → H2 depth
   * body h3              → H3 depth
   * body h4              → H4 depth
   *
   * Panel navigation과 달리 h4까지 포함해서
   * 문서 전체 hierarchy를 축약해서 보여준다.
   */
  useEffect(() => {
    const content = document.querySelector(".project-detail-content__sections");

    if (!content) return;

    const sections = Array.from(
      content.querySelectorAll<HTMLElement>(".project-detail-section")
    );

    const headings: RailHeading[] = [];

    sections.forEach((section) => {
      const sectionId = section.id;

      if (!sectionId) return;

      /*
       * ProjectDetailSection 자체를 H2로 취급.
       * 현재 id는 heading이 아니라 section에 붙어 있음.
       */
      headings.push({
        id: sectionId,
        level: 2,
      });

      const nestedHeadings = Array.from(
        section.querySelectorAll<HTMLElement>(
          ".project-detail-section__body h3, .project-detail-section__body h4"
        )
      );

      nestedHeadings.forEach((heading, index) => {
        /*
         * navigation child처럼 직접 id를 지정한 heading은 유지.
         *
         * 일반 Markdown heading처럼 id가 없다면
         * Rail tracking용 id를 생성.
         */
        if (!heading.id) {
          heading.id = `${sectionId}-heading-${index + 1}`;
        }

        const level = Number(heading.tagName.slice(1));

        if (level !== 3 && level !== 4) return;

        headings.push({
          id: heading.id,
          level,
        });
      });
    });

    setRailHeadings(headings);
  }, [items]);

  /*
   * Scroll 위치에 따라
   *
   * 1. Expanded Panel active
   * 2. Rail active
   *
   * 를 각각 계산한다.
   */
  useEffect(() => {
    const updateActiveSection = () => {
      const activationY = Math.min(
        window.innerHeight * ACTIVATION_RATIO,
        MAX_ACTIVATION_Y
      );

      /*
       * Panel active 계산
       */
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

      /*
       * Rail active 계산
       *
       * H2뿐 아니라 H3 / H4까지 모두 추적.
       */
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
      {/* ------------------------------------------------
       * Collapsed Rail
       * ------------------------------------------------ */}
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

      {/* ------------------------------------------------
       * Expanded Navigation
       * ------------------------------------------------ */}
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
                  onClick={() => setActiveId(item.id)}
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
                          onClick={() => setActiveId(child.id)}
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
