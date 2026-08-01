export const ANALYTICS_EVENT = {
  PORTFOLIO_VIEWED: "portfolio_viewed",
  SECTION_VIEWED: "section_viewed",

  PROJECT_CLICKED: "project_clicked",
  PROJECT_EXTERNAL_LINK_CLICKED: "project_external_link_clicked",

  CTA_CLICKED: "cta_clicked",

  CONTACT_FORM_STARTED: "contact_form_started",
  CONTACT_FORM_SUBMITTED: "contact_form_submitted",
  CONTACT_FORM_FAILED: "contact_form_failed",
} as const;

export type AnalyticsEventName =
  (typeof ANALYTICS_EVENT)[keyof typeof ANALYTICS_EVENT];
