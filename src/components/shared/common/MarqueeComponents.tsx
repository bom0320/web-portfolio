type MarqueeProps = {
  title: string;
};

export default function MarqueeComponents({ title }: MarqueeProps) {
  return (
    <section className="marquee">
      <section className="content">
        {Array.from({ length: 8 }).map((_, i) => (
          <h5 key={i} aria-hidden="true">
            {title}
          </h5>
        ))}
      </section>
    </section>
  );
}
