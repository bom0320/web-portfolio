"use client";

import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

import HeaderAnimation from "@/animations/header.animation";
import MarqueeComponents from "@/components/shared/common/MarqueeComponents";

import HeaderNavigation from "./HeaderNavigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      HeaderAnimation.marqueeLoop();
    }, headerRef);

    return () => {
      context.revert();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-inner">
        <div className="logo">
          <a href="#hero" onClick={closeMenu} aria-label="홈으로 이동">
            <Image
              src="/images/logo/portfolio_logo.png"
              alt=""
              width={21}
              height={21}
              priority
            />

            <span>kimbom.dev</span>
          </a>
        </div>

        <HeaderNavigation
          className="menu menu--desktop"
          ariaLabel="Desktop navigation"
          onNavigate={closeMenu}
        />

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? "menu-toggle--open" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isMenuOpen && (
        <HeaderNavigation
          id="mobile-menu"
          className="menu-mobile"
          ariaLabel="Mobile navigation"
          onNavigate={closeMenu}
        />
      )}

      <MarqueeComponents title="I TURN DESIGN INTENT INTO INTERACTIVE EXPERIENCES THROUGH TECHNOLOGY" />
    </header>
  );
}
