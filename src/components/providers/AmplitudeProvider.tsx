"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { ANALYTICS_EVENT } from "@/lib/analytics/events";
import { initAmplitude, trackAmplitudeEvent } from "@/lib/amplitude";

interface AmplitudeProviderProps {
  children: ReactNode;
}

export default function AmplitudeProvider({
  children,
}: AmplitudeProviderProps) {
  const hasTrackedPortfolioView = useRef(false);

  useEffect(() => {
    initAmplitude();

    if (hasTrackedPortfolioView.current) {
      return;
    }

    hasTrackedPortfolioView.current = true;

    trackAmplitudeEvent(ANALYTICS_EVENT.PORTFOLIO_VIEWED, {
      referrer: document.referrer || "direct",
    });
  }, []);

  return <>{children}</>;
}
