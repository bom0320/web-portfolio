export type ProjectFilter = "all" | "featured" | "Next.js" | "React Native";

interface ProjectsFilterProps {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}

const FILTERS: {
  label: string;
  value: ProjectFilter;
}[] = [
  {
    label: "ALL",
    value: "all",
  },
  {
    label: "FEATURED",
    value: "featured",
  },
  {
    label: "NEXT.JS",
    value: "Next.js",
  },
  {
    label: "REACT NATIVE",
    value: "React Native",
  },
];

export default function ProjectsFilter({
  activeFilter,
  onFilterChange,
}: ProjectsFilterProps) {
  return (
    <div className="projects-filter" role="group" aria-label="프로젝트 필터">
      {FILTERS.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            className={`projects-filter__button ${isActive ? "is-active" : ""}`}
            aria-pressed={isActive}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
