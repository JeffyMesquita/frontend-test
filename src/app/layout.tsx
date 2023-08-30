import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "../styles/globals.css";
import { Providers } from "./Providers";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frontend-test.jeffymesquita.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: [
      {
        url: "https://frontend-test.jeffymesquita.dev/weather/opengraph-image.png",
        alt: "FrontEnd Test - Weather App",
      },
    ],
    type: "website",
  },
  twitter: {
    images: [
      {
        url: "https://frontend-test.jeffymesquita.dev/weather/twitter-image.png",
        alt: "FrontEnd Test - Weather App",
      },
    ],
    card: "summary_large_image",
    site: "https://jeffymesquita.dev",
    creator: "@_jeferson___",
  },
  title: {
    default: "FrontEnd Test",
    template: "FrontEnd Test | %s",
  },
  description: "Um teste de front-end",
  verification: {
    google: "google-site-verification=878787878",
  },
  robots: {
    index: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} text-neutral-50 scrollbar-hide w-full h-full`}
      >
        <NextTopLoader
          color="#91DEFF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #91DEFF,0 0 5px #91DEFF"
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
