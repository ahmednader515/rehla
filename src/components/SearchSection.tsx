"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

export default function SearchSection({ onSearch }: SearchSectionProps) {
  const { isArabic } = useLanguage();
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-4 pt-20 pb-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="w-full"
      >
        <h1
          className="font-heading text-5xl md:text-7xl font-bold leading-tight"
          style={{ color: "#ffffff", marginTop: 0, marginBottom: "1.25rem" }}
        >
          {isArabic ? "رحلة في تراث عسير" : "A Journey Through Asir Heritage"}
        </h1>

        <p
          className="font-body text-base md:text-lg opacity-60 max-w-xl"
          style={{ color: "var(--gold-light)", marginTop: 0, marginBottom: "2.5rem", marginLeft: "auto", marginRight: "auto" }}
        >
          {isArabic
            ? "استكشف أبرز المعالم التراثية والتاريخية في محافظة أحد رفيدة"
            : "Explore the most prominent heritage and historical landmarks of Ahad Rafidah Governorate"}
        </p>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative w-full max-w-2xl"
          style={{ marginLeft: "auto", marginRight: "auto", marginTop: 0, marginBottom: "2rem" }}
        >
          <div
            className="flex items-center overflow-hidden"
            style={{
              background: "#ffffff",
              border: "2px solid var(--gold)",
              borderRadius: "9999px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
              direction: isArabic ? "rtl" : "ltr",
            }}
          >
            {/* Search button */}
            <button
              onClick={() => onSearch(query)}
              className="flex items-center justify-center shrink-0 cursor-pointer transition-all duration-200"
              style={{
                background: "var(--gold)",
                borderRadius: "9999px",
                width: "72px",
                height: "72px",
                margin: "6px",
                flexShrink: 0,
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder={isArabic ? "ابحث عن مكان تراثي..." : "Search for a heritage place..."}
              className="flex-1 outline-none font-body text-2xl px-8 py-10"
              style={{
                background: "transparent",
                color: "#3a2a0a",
                direction: isArabic ? "rtl" : "ltr",
                textAlign: isArabic ? "right" : "left",
              }}
            />

            <AnimatePresence>
              {query && (
                <motion.button
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "64px" }}
                  exit={{ opacity: 0, width: 0 }}
                  onClick={handleClear}
                  className="shrink-0 flex items-center justify-center cursor-pointer text-xl font-bold"
                  style={{ color: "var(--gold-dark)", marginRight: "8px" }}
                >
                  ✕
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="font-body text-xs opacity-50" style={{ color: "var(--gold-light)" }}>
          {isArabic ? "اكتشف الأماكن" : "Discover Places"}
        </p>
        <motion.div
          className="w-0.5 h-10 rounded-full"
          style={{ background: "var(--gold)" }}
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
