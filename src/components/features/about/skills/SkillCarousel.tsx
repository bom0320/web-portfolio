import { SkillCard, SkillPagination } from "@/components/features/about/skills";

type SkillCarouselItem = {
  name: string;
  icon: string;
  value: number;
  sub?: string;
  bg: string;
};

type SkillCarouselProps = {
  skills: SkillCarouselItem[];
};

const PAGINATION_COUNT = 5;

export default function SkillCarousel({ skills }: SkillCarouselProps) {
  return (
    <div className="skill-carousel js-skill-carousel">
      <div
        className="skill-carousel__viewport js-skill-carousel-viewport"
        aria-label="기술 스택 목록"
      >
        <div className="skill-carousel__track js-skill-carousel-track">
          {skills.map((skill) => (
            <div className="skill-carousel__item" key={skill.name}>
              <SkillCard
                name={skill.name}
                icon={skill.icon}
                value={skill.value}
                sub={skill.sub}
                bg={skill.bg}
              />
            </div>
          ))}
        </div>
      </div>

      <SkillPagination total={PAGINATION_COUNT} />
    </div>
  );
}
