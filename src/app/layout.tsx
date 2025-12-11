import type { Metadata } from "next";
import "@/styles/index.scss";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
