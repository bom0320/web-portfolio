import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/styles/index.scss";
import Header from "@/components/shared/layout/Header";
import SmoothScrollProvider from "@/components/shared/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "2026 | 김봄 포트폴리오",
  description: "Frontend Developer Portfolio",
  icons: {
    icon: "/images/logo/meta_logo.png",
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
