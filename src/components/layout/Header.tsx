"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import MarqueeComponents from "../common/MarqueeComponents";
import Animation from "../utils/animation";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    Animation.layout.header();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header id="header">
      <div className="header-inner">
        <section className="logo">
          <a href="#hero">
            <Image
              src="/images/logo/portfolio-logo.png"
              alt="김봄 포트폴리오 로고"
              width={32}
              height={32}
            />
            <h3>프론트-엔드</h3>
          </a>
        </section>

        {/* 메뉴 */}
        {isMobile ? (
          <button type="button">=</button>
        ) : (
          <nav className="menu">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
          </nav>
        )}
      </div>

      <MarqueeComponents
        title={"THIS PAGE MADE BY REACT, NEXT.JS FRONTEND PORTFOLIO"}
      />
    </header>
  );
}
