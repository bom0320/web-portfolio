import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectsControlsProps {
  activeIndex: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ProjectsControls({
  activeIndex,
  total,
  onPrevious,
  onNext,
}: ProjectsControlsProps) {
  if (total === 0) return null;

  return (
    <div className="projects-controls">
      <button
        type="button"
        className="projects-controls__button projects-controls__button--previous"
        onClick={onPrevious}
        disabled={total <= 1}
        aria-label="이전 프로젝트"
      >
        <ArrowLeft size={20} strokeWidth={1.4} />
      </button>

      <p className="projects-controls__pagination" aria-live="polite">
        <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>

        <span aria-hidden="true"> / </span>

        {String(total).padStart(2, "0")}
      </p>

      <button
        type="button"
        className="projects-controls__button projects-controls__button--next"
        onClick={onNext}
        disabled={total <= 1}
        aria-label="다음 프로젝트"
      >
        <ArrowRight size={20} strokeWidth={1.4} />
      </button>
    </div>
  );
}
