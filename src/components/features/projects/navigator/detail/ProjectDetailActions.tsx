interface ProjectDetailActionsProps {
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectDetailActions({
  liveUrl,
  githubUrl,
}: ProjectDetailActionsProps) {
  const actionCount = Number(Boolean(liveUrl)) + Number(Boolean(githubUrl));

  if (actionCount === 0) return null;

  return (
    <div className="project-detail-hero__actions" data-count={actionCount}>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="project-detail-hero__action"
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
        >
          GitHub
        </a>
      )}
    </div>
  );
}
