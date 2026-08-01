"use client";

import { useEffect, useRef, type RefObject } from "react";

import { ANALYTICS_EVENT } from "@/lib/analytics/events";
import { trackAmplitudeEvent } from "@/lib/amplitude";

interface UseSectionViewTrackingOptions {
  sectionName: string;
  sectionOrder: number;
}

export function useSectionViewTracking(
  sectionRef: RefObject<HTMLElement | null>,
  { sectionName, sectionOrder }: UseSectionViewTrackingOptions
): void {
  const hasTracked = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry || !entry.isIntersecting || hasTracked.current) {
          return;
        }

        hasTracked.current = true;

        trackAmplitudeEvent(ANALYTICS_EVENT.SECTION_VIEWED, {
          section_name: sectionName,
          section_order: sectionOrder,
          visibility_ratio: entry.intersectionRatio,
        });

        observer.disconnect();
      },
      {
        threshold: 0,
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [sectionName, sectionOrder, sectionRef]);
}
