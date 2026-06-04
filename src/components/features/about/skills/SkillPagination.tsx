type SkillPaginationProps = {
  total: number;
  activeIndex: number;
};

export default function SkillPagination({
  total,
  activeIndex,
}: SkillPaginationProps) {
  return (
    <div className="skill-pagination" aria-hidden="true">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={
            index === activeIndex
              ? "skill-pagination__item skill-pagination__item--active"
              : "skill-pagination__item"
          }
        />
      ))}
    </div>
  );
}
