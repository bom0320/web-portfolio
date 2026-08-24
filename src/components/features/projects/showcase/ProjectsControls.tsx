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
      <p className="projects-controls__pagination" aria-live="polite">
        {String(activeIndex + 1).padStart(2, "0")}
        <span aria-hidden="true"> / </span>
        {String(total).padStart(2, "0")}
      </p>

      <button
        type="button"
        className="projects-controls__button"
        onClick={onPrevious}
        disabled={total <= 1}
        aria-label="이전 프로젝트"
      >
        <ArrowLeft size={18} />
      </button>

      <button
        type="button"
        className="projects-controls__button"
        onClick={onNext}
        disabled={total <= 1}
        aria-label="다음 프로젝트"
      >
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
