import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import PageTransition from "@/components/PageTransition";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "رحلة في تراث عسير | A Journey Through Asir Heritage",
  description:
    "استكشف أبرز المعالم التراثية والتاريخية في محافظة أحد رفيدة بمنطقة عسير | Explore the most prominent heritage and historical landmarks of Ahad Rafidah Governorate in the Asir Region",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <LanguageProvider>
          <LoadingScreen />
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
