import * as amplitude from "@amplitude/analytics-browser";

const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

let isInitialized = false;

export const initAmplitude = (): void => {
  if (typeof window === "undefined" || isInitialized) {
    return;
  }

  if (!apiKey) {
    console.warn("[Amplitude] API Key가 설정되지 않았습니다.");
    return;
  }

  amplitude.init(apiKey, undefined, {
    autocapture: false,
  });

  isInitialized = true;
};

export const trackAmplitudeEvent = (
  eventName: string,
  properties?: Record<string, unknown>
): void => {
  if (typeof window === "undefined" || !isInitialized) {
    return;
  }

  amplitude.track(eventName, {
    ...properties,
    pathname: window.location.pathname,
    viewport_width: window.innerWidth,
  });
};
