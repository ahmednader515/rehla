"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchSection from "@/components/SearchSection";
import ExtrasSection from "@/components/ExtrasSection";
import PlacesGrid from "@/components/PlacesGrid";
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
      </main>

      <footer
        className="relative z-10 text-center px-4 font-body flex items-center justify-center"
        style={{
          color: "var(--gold-light)",
          borderTop: "2px solid rgba(201,168,76,0.3)",
          marginTop: isMobile ? "2rem" : "4rem",
          opacity: 0.75,
          fontSize: isMobile ? "0.75rem" : "0.875rem",
          minHeight: "56px",
          background: "rgb(12, 8, 2)",
        }}
      >
        {isArabic
          ? "© 2025 رحلة في تراث عسير — محافظة أحد رفيدة"
          : "© 2025 A Journey Through Asir Heritage — Ahad Rafidah Governorate"}
      </footer>
    </>
  );
}
