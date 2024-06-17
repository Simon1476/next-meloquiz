import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";
import { SpeedInsights } from "@vercel/speed-insights/next";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MeloQuiz",
  description:
    "A website for people who are interested in k-pop and want a convenient quiz game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <MainHeader />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
