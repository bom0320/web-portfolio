import { ArrowLeft, ArrowRight } from "lucide-react";

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
      <button
        type="button"
        className="projects-controls__button projects-controls__button--previous"
        onClick={onPrevious}
        disabled={total <= 1}
        aria-label="이전 프로젝트"
      >
        <ArrowLeft size={24} strokeWidth={1.5} />
      </button>

      <button
        type="button"
        className="projects-controls__button projects-controls__button--next"
        onClick={onNext}
        disabled={total <= 1}
        aria-label="다음 프로젝트"
      >
        <ArrowRight size={24} strokeWidth={1.5} />
      </button>
    </div>
  );
}
