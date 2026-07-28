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
  return (
    <nav id={id} className={className} aria-label={ariaLabel}>
      {HEADER_NAVIGATION_ITEMS.map((item) => (
        <a key={item.href} href={item.href} onClick={onNavigate}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
