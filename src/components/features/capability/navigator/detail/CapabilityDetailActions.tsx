interface CapabilityDetailActionsProps {
  liveUrl?: string;
  githubUrl?: string;
}

export default function CapabilityDetailActions({
  liveUrl,
  githubUrl,
}: CapabilityDetailActionsProps) {
  const actionCount = Number(Boolean(liveUrl)) + Number(Boolean(githubUrl));

  if (actionCount === 0) return null;

  return (
    <div className="capability-detail-hero__actions" data-count={actionCount}>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="capability-detail-hero__action"
        >
          View Site
        </a>
      )}

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="capability-detail-hero__action capability-detail-hero__action--secondary"
        >
          GitHub
        </a>
      )}
    </div>
  );
}
