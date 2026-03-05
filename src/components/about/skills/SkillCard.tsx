import Image from "next/image";

type Props = {
  name: string;
  icon: string;
  value: number; // 0~100
  sub?: string;
};

const clamp = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

export default function SkillCard({ name, icon, value, sub }: Props) {
  const v = clamp(value, 0, 100);
  const deg = (v / 100) * 360;

  const gaugeVars = {
    ["--deg"]: `${deg}deg`,
  } as React.CSSProperties;

  return (
    <article className="skill-card" aria-label={`${name} skill ${v}%`}>
      <div className="skill-card__pacman">
        <div
          className="skill-card__gauge"
          style={gaugeVars}
          aria-hidden="true"
        />

        <div className="skill-card__icon-wrap">
          <Image
            className="skill-card__icon"
            src={icon}
            alt={name}
            width={34}
            height={34}
            priority={false}
          />
        </div>
      </div>

      <div className="skill-card__meta">
        <p className="skill-card__name">{name}</p>
        {sub ? <p className="skill-card__sub">{sub}</p> : null}
      </div>
    </article>
  );
}
