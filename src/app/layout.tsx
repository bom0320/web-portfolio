import type { Metadata } from "next";
import "@/styles/index.scss";
import Header from "@/components/shared/layout/Header";
import SmoothScrollProvider from "@/components/shared/providers/SmoothScrollProvider"; // 1. 임포트 추가

export const metadata: Metadata = {
  title: "2026 | 김봄 포트폴리오",
  description: "Frontend Developer Portfolio",
  icons: {
    icon: "/images/logo/meta_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
