import React from "react";

import { HEADER_NAVIGATION_ITEMS } from "./headerNavigation.constants";

type HeaderNavigationProps = {
  className: string;
  ariaLabel: string;
  id?: string;
  onNavigate?: () => void;
};

export default function HeaderNavigation({
  className,
  ariaLabel,
  id,
  onNavigate,
}: HeaderNavigationProps) {
  const handleNavigate = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    offset = 0
  ) => {
    event.preventDefault();

    const target = document.querySelector<HTMLElement>(href);

    if (!target) return;

    const targetTop =
      target.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);
    onNavigate?.();
  };

  return (
    <nav id={id} className={className} aria-label={ariaLabel}>
      {HEADER_NAVIGATION_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(event) => handleNavigate(event, item.href, item.offset)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
