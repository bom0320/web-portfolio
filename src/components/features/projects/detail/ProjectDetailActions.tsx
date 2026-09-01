"use client";

import { ANALYTICS_EVENT } from "@/lib/analytics/events";
import { trackAmplitudeEvent } from "@/lib/amplitude";

interface ProjectDetailActionsProps {
  projectId: string;
  projectName: string;
  liveUrl?: string;
  githubUrl?: string;
}

type ProjectExternalDestination = "live_site" | "github";

export default function ProjectDetailActions({
  projectId,
  projectName,
  liveUrl,
  githubUrl,
}: ProjectDetailActionsProps) {
  const actionCount = Number(Boolean(liveUrl)) + Number(Boolean(githubUrl));

  const handleExternalLinkClick = (
    destination: ProjectExternalDestination
  ): void => {
    trackAmplitudeEvent(ANALYTICS_EVENT.PROJECT_EXTERNAL_LINK_CLICKED, {
      project_id: projectId,
      project_name: projectName,
      destination,
    });
  };

  if (actionCount === 0) return null;

  return (
    <div className="project-detail-hero__actions" data-count={actionCount}>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="project-detail-hero__action"
          onClick={() => handleExternalLinkClick("live_site")}
        >
          View Site
        </a>
      )}

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="project-detail-hero__action project-detail-hero__action--secondary"
          onClick={() => handleExternalLinkClick("github")}
        >
          GitHub
        </a>
      )}
    </div>
  );
}
