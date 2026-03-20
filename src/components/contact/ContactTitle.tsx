interface ContactTitleProps {
  className?: string;
}

export default function ContactTitle({ className }: ContactTitleProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 180"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CONTACT ME"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontSize="120"
        fontWeight="900"
        letterSpacing="-0.05em"
      >
        CONTACT ME
      </text>
    </svg>
  );
}
