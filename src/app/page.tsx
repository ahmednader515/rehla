"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchSection from "@/components/SearchSection";
import ExtrasSection from "@/components/ExtrasSection";
import PlacesGrid from "@/components/PlacesGrid";
import SponsorsSection from "@/components/SponsorsSection";
import { useLanguage } from "@/context/LanguageContext";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function HomePage() {
  const { isArabic } = useLanguage();
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState("");

  const wrapStyle = {
    width: isMobile ? "95%" : "80%",
    margin: "0 auto",
  };

  return (
    <>
      <div className="page-bg" />
      <Navbar />

      <main>
        <SearchSection onSearch={setSearchQuery} />

        <div style={{ marginTop: isMobile ? "2rem" : "4rem" }}>
          <ExtrasSection />
        </div>

        <div style={{ ...wrapStyle, marginTop: isMobile ? "2rem" : "4rem" }}>
          <PlacesGrid searchQuery={searchQuery} />
        </div>

        <div style={{ marginTop: isMobile ? "2rem" : "4rem" }}>
          <SponsorsSection />
        </div>
      </main>

      <footer
        className="relative z-10 text-center px-4 font-body flex flex-col items-center justify-center gap-2 py-4"
        style={{
          color: "var(--gold-light)",
          borderTop: "2px solid rgba(201,168,76,0.3)",
          marginTop: 0,
          opacity: 0.75,
          fontSize: isMobile ? "0.75rem" : "0.875rem",
          minHeight: "56px",
          background: "rgb(12, 8, 2)",
        }}
      >
        <span>
          {isArabic
            ? "© 2026 رحلة في تراث عسير — محافظة أحد رفيدة"
            : "© 2026 A Journey Through Asir Heritage — Ahad Rafidah Governorate"}
        </span>
        <span style={{ opacity: 0.9 }}>
          {isArabic ? "بيانات التواصل :" : "Contact:"} {isArabic ? "رقم :" : "Phone:"} 0544443194 · {isArabic ? "تيك توك - تويتر :" : "TikTok - Twitter:"} ASEER_KKU
        </span>
      </footer>
    </>
  );
}
