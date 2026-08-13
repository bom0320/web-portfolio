"use client";

import Link from "next/link";

type CtaButtonProps = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
  download?: string;
  target?: "_blank" | "_self";
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
};

export default function CtaButton({
  href,
  label,
  variant,
  className = "",
  ariaLabel,
  download,
  target,
  onClick,
  children,
}: CtaButtonProps) {
  const classes = ["cta-btn", `cta-btn--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  const isExternal = href.startsWith("http");
  const linkTarget = target ?? (isExternal ? "_blank" : undefined);

  return (
    <Link
      href={href}
      className={classes}
      aria-label={ariaLabel ?? label}
      target={linkTarget}
      rel={linkTarget === "_blank" ? "noreferrer" : undefined}
      download={download}
      onClick={onClick}
    >
      <span className="cta-btn__iconWrap">{children}</span>
      <span className="cta-btn__label">{label}</span>
    </Link>
  );
}
