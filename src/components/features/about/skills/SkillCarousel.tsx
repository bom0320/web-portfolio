import { SkillCard } from "@/components/features/about/skills";

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

export default function SkillCarousel({ skills }: SkillCarouselProps) {
  return (
    <div className="skill-carousel" aria-label="기술 스택 목록">
      <div className="skill-carousel__viewport">
        <div className="skill-carousel__track">
          {skills.map((skill) => (
            <div className="skill-carousel__slide" key={skill.name}>
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

      <div className="skill-carousel__pagination" aria-hidden="true">
        <span className="skill-carousel__pagination-bar" />
        <span className="skill-carousel__pagination-dot" />
        <span className="skill-carousel__pagination-dot" />
        <span className="skill-carousel__pagination-dot" />
        <span className="skill-carousel__pagination-dot" />
      </div>
    </div>
  );
}
