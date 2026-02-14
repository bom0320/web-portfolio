type CtaButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "ghost";
};

export default function CtaButton({
  href,
  label,
  variant = "ghost",
}: CtaButtonProps) {
  return (
    <a
      className={`about-hero__btn ${
        variant === "primary" ? "about-hero__btn--primary" : ""
      }`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span>{label}</span>
      <span className="about-hero__icon" aria-hidden>
        →
      </span>
    </a>
  );
}
