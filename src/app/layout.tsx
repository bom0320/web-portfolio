import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/styles/index.scss";
import Header from "@/components/shared/layout/header/Header";
import SmoothScrollProvider from "@/components/shared/providers/SmoothScrollProvider";
import AmplitudeProvider from "@/components/providers/AmplitudeProvider";
import ScrollToTop from "@/components/shared/navigation/ScrollToTop";

const SITE_URL = "https://kimbom.dev";

const SITE_DESCRIPTION =
  "디자인과 기술 사이에서 사용자 경험을 설계하고, 인터랙션과 엔지니어링으로 구현하며 지속적으로 개선하는 김봄의 개인 웹사이트입니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "kimbom.dev | 김봄",
  description: SITE_DESCRIPTION,

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "kimbom.dev | 김봄",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "kimbom.dev",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "kimbom.dev 김봄 개인 웹사이트 미리보기 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "kimbom.dev | 김봄",
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <AmplitudeProvider>
          <SmoothScrollProvider>
            <ScrollToTop />
            <Header />
            <main className="app">{children}</main>
          </SmoothScrollProvider>
        </AmplitudeProvider>
      </body>
    </html>
  );
}
