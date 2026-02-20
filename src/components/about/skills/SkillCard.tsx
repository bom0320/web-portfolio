type Props = {
  name: string;
  icon: string;
  value: number;
  sub?: string;
};

export default function SkillCard({ name, icon, value, sub }: Props) {
  const deg = Math.max(0, Math.min(180, (value / 100) * 180));

  return (
    <article className="skill-card">
      <div className="skill-card__pacman">
        <div
          className="skill-card__gauge"
          style={{
            background: `conic-gradient(
                from 180deg,
                rgba(255,255,255,0.75) 0deg ${deg}deg,
                rgba(255,255,255,0.10) ${deg}deg 180deg
              )`,
          }}
        />
        <div className="skill-card__icon-wrap">
          <img className="skill-card__icon" src={icon} alt={name} />
        </div>
      </div>

      <div className="skill-card__meta">
        <p className="skill-card__name">{name}</p>
        {sub && <p className="skill-card__sub">{sub}</p>}
      </div>
    </article>
  );
}
