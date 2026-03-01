"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchSection from "@/components/SearchSection";
import ExtrasSection from "@/components/ExtrasSection";
import PlacesGrid from "@/components/PlacesGrid";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { isArabic } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Fixed background */}
      <div className="page-bg" />

      <Navbar />

      <main>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <SearchSection onSearch={setSearchQuery} />
        </div>

        <div style={{ marginTop: "4rem" }}>
          <ExtrasSection />
        </div>

        <div style={{ width: "80%", margin: "4rem auto 0" }}>
          <PlacesGrid searchQuery={searchQuery} />
        </div>
      </main>

      {/* Footer */}
      <div style={{ width: "80%", margin: "0 auto" }}>
        <footer
          className="relative z-10 text-center px-4 font-body flex items-center justify-center"
          style={{
            color: "var(--gold-light)",
            borderTop: "2px solid rgba(201,168,76,0.3)",
            marginTop: "4rem",
            marginBottom: "2rem",
            opacity: 0.75,
            fontSize: "0.875rem",
            minHeight: "60px",
          }}
        >
          {isArabic
            ? "© 2025 رحلة في تراث عسير — محافظة أحد رفيدة"
            : "© 2025 A Journey Through Asir Heritage — Ahad Rafidah Governorate"}
        </footer>
      </div>
    </>
  );
}
