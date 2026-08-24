import { ArrowButton } from "@/components/shared/ui";

interface ProjectsControlsProps {
  total: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ProjectsControls({
  total,
  onPrevious,
  onNext,
}: ProjectsControlsProps) {
  if (total === 0) return null;

  return (
    <div className="projects-controls">
      <ArrowButton
        direction="left"
        size="medium"
        onClick={onPrevious}
        disabled={total <= 1}
        ariaLabel="이전 프로젝트"
        className="projects-controls__button projects-controls__button--previous"
      />

      <ArrowButton
        direction="right"
        size="medium"
        onClick={onNext}
        disabled={total <= 1}
        ariaLabel="다음 프로젝트"
        className="projects-controls__button projects-controls__button--next"
      />
    </div>
  );
}
