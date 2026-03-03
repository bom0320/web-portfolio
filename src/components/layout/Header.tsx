"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import MarqueeComponents from "../common/MarqueeComponents";
import HeaderAnimation from "../animations/header";
import gsap from "gsap";

const NAV_ITEMS = [
  { href: "#hero", label: "HERO" },
  { href: "#about", label: "ABOUT" },
  { href: "#projects", label: "PROJECTS" },
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

        {/* 데스크탑 메뉴 (CSS에서 모바일이면 숨김) */}
        <nav className="menu menu--desktop" aria-label="Desktop navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* 모바일 햄버거 (CSS에서 데스크탑이면 숨김) */}
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

      {/* 모바일 드롭다운 메뉴 */}
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
