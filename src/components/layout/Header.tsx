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
            <h3>프론트-엔드</h3>
            <Image
              src="/images/logo/portfolio_logo.png"
              alt="/"
              width={32}
              height={32}
            />
            <h3 className="target">김봄</h3>
          </a>
        </section>

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
