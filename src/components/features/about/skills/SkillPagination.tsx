type SkillPaginationProps = {
  total: number;
};

export default function SkillPagination({ total }: SkillPaginationProps) {
  return (
    <div className="skill-pagination js-skill-pagination" aria-hidden="true">
      <span className="skill-pagination__cursor js-skill-pagination-cursor" />

      {Array.from({ length: total }).map((_, index) => (
        <span key={index} className="skill-pagination__dot" />
      ))}
    </div>
  );
}
