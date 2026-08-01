import * as amplitude from "@amplitude/analytics-browser";
import type { AnalyticsEventName } from "@/lib/analytics/events";

const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

let isInitialized = false;

const getDeviceType = (): "mobile" | "tablet" | "desktop" => {
  const viewportWidth = window.innerWidth;

  if (viewportWidth < 640) {
    return "mobile";
  }

  if (viewportWidth < 1024) {
    return "tablet";
  }

  return "desktop";
};

export const initAmplitude = (): void => {
  if (typeof window === "undefined" || isInitialized) {
    return;
  }

  if (!apiKey) {
    console.warn("[Amplitude] API Key가 설정되지 않았습니다.");
    return;
  }

  amplitude.init(apiKey, undefined, {
    autocapture: {
      attribution: true,
      pageViews: true,
      sessions: true,
      elementInteractions: false,
      fileDownloads: true,
      formInteractions: false,
    },
  });

  isInitialized = true;
};

export const trackAmplitudeEvent = (
  eventName: AnalyticsEventName,
  properties?: Record<string, unknown>
): void => {
  if (typeof window === "undefined" || !isInitialized) {
    return;
  }

  amplitude.track(eventName, {
    ...properties,
    pathname: window.location.pathname,
    viewport_width: window.innerWidth,
    device_type: getDeviceType(),
  });
};
