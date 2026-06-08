"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

import HeaderAnimation from "../../../animations/header.animation";
import MarqueeComponents from "../common/MarqueeComponents";

const NAV_ITEMS = [
  { href: "#hero", label: "HERO" },
  { href: "#about", label: "ABOUT" },
  { href: "#capability", label: "CAPABILITY" },
  { href: "#contact", label: "CONTACT" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      HeaderAnimation.marqueeLoop();
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-inner">
        <section className="logo">
          <a href="#hero" onClick={closeMenu}>
            <h3>프론트-엔드</h3>
            <Image
              src="/images/logo/portfolio_logo.png"
              alt="logo"
              width={22}
              height={22}
              priority
            />
            <h3 className="target">김봄</h3>
          </a>
        </section>

        <nav className="menu menu--desktop" aria-label="Desktop navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? "menu-toggle--open" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Mobile menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="menu-mobile"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <MarqueeComponents title="THIS PAGE MADE BY REACT, NEXT.JS FRONTEND PORTFOLIO" />
    </header>
  );
}
