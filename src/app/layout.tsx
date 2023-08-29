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
  title: "FrontEnd Test",
  description: "Um teste de front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} text-neutral-50`}>
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
