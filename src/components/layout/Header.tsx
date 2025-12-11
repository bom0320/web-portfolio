"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import MarqueeComponents from "../common/MarqueeComponents";
import HeaderAnimation from "../animations/header";
const NAV_ITEMS = [
  { href: "#hero", label: "HERO" },
  { href: "#about", label: "ABOUT" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    HeaderAnimation.layout.header();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === "undefined") return;
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header id="header">
      <div className="header-inner">
        <section className="logo">
          <a href="#hero">
            <h3>프론트-엔드</h3>
            <Image
              src="/images/logo/portfolio_logo.png"
              alt="/"
              width={22}
              height={22}
            />
            <h3 className="target">김봄</h3>
          </a>
        </section>

        {isMobile ? (
          <button
            type="button"
            className="menu-toggle"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Mobile Menu Open"
          >
            <span />
            <span />
            <span />
          </button>
        ) : (
          <nav className="menu">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isMobile && isMenuOpen && (
        <nav className="menu-mobile">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <MarqueeComponents
        title={"THIS PAGE MADE BY REACT, NEXT.JS FRONTEND PORTFOLIO"}
      />
    </header>
  );
}
