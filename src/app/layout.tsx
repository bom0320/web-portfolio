import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/styles/index.scss";
import Header from "@/components/shared/layout/Header";
import SmoothScrollProvider from "@/components/shared/providers/SmoothScrollProvider";

const SITE_URL = "https://kimbom.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "2026 | 김봄 포트폴리오",
  description:
    "흐름, 구조, 움직임을 통해 사용자가 자연스럽게 이해하는 화면을 만드는 프론트엔드 개발자 김봄의 포트폴리오입니다.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "2026 | 김봄 포트폴리오",
    description:
      "흐름, 구조, 움직임을 통해 사용자가 자연스럽게 이해하는 화면을 만드는 프론트엔드 개발자 김봄의 포트폴리오입니다.",
    url: SITE_URL,
    siteName: "김봄 포트폴리오",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "김봄 프론트엔드 포트폴리오 미리보기 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 | 김봄 포트폴리오",
    description:
      "흐름, 구조, 움직임을 통해 사용자가 자연스럽게 이해하는 화면을 만드는 프론트엔드 개발자 김봄의 포트폴리오입니다.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <SmoothScrollProvider>
          <Header />
          <main className="app">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
