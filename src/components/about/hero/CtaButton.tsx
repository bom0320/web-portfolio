"use client";

import Link from "next/link";

type CtaButtonProps = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
};

export default function CtaButton({
  href,
  label,
  variant,
  className = "",
  ariaLabel,
  onClick,
  children,
}: CtaButtonProps) {
  const classes = ["cta-btn", `cta-btn--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={classes}
      aria-label={ariaLabel ?? label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      onClick={onClick}
    >
      <span className="cta-btn__iconWrap">{children}</span>
      <span className="cta-btn__label">{label}</span>
    </Link>
  );
}
