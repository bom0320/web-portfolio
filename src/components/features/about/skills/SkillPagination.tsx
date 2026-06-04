type SkillPaginationProps = {
  total: number;
};

export default function SkillPagination({ total }: SkillPaginationProps) {
  return (
    <div className="skill-pagination js-skill-pagination" aria-hidden="true">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className="skill-pagination__item js-skill-pagination-item"
        />
      ))}
    </div>
  );
}
