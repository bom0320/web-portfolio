"use client";

import { useEffect, useRef } from "react";
import Animation from "../utils/animation";
type HeaderProps = {
  isMobile: boolean;
  isVisible: boolean;
  func: () => void;
};

export default function Header({ isMobile, isVisible, func }: HeaderProps) {
  const refMarquee = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    Animation.layout.header();
  }, []);

  return <></>;
}
