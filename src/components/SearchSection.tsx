"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useIsMobile } from "@/hooks/useIsMobile";
import { places } from "@/data/places";

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

export default function SearchSection({ onSearch }: SearchSectionProps) {
  const { isArabic } = useLanguage();
  const isMobile = useIsMobile();
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const suggestions = query.trim()
    ? places.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.nameAr.includes(query) ||
          p.nameEn.toLowerCase().includes(q) ||
          p.shortDescAr.includes(query) ||
          p.shortDescEn.toLowerCase().includes(q)
        );
      }).slice(0, 6)
    : [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
    setShowSuggestions(true);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
    setShowSuggestions(false);
  };

  const handleSelect = (slug: string) => {
    setShowSuggestions(false);
    router.push(`/place/${slug}`);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const btnSize = isMobile ? 48 : 72;
  const inputFontSize = isMobile ? "1rem" : "1.5rem";
  const inputPadding = isMobile ? "0.75rem 1.25rem" : "2.5rem 2.5rem";

  return (
    <section
      className="relative flex flex-col items-center justify-center px-4 text-center overflow-hidden"
      style={{ minHeight: isMobile ? "60vh" : "75vh", paddingTop: isMobile ? "72px" : "88px", paddingBottom: "2rem" }}
    >
      {/* Decorative block image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
        className="absolute pointer-events-none"
        style={isMobile ? {
          top: "48%",
          left: "-10%",
          right: "-10%",
          bottom: "-20%",
          zIndex: 0,
          width: "150%",
        } : {
          bottom: "-40%",
          left: "-30%",
          width: "85%",
          zIndex: 0,
        }}
      >
        {isMobile ? (
          <Image
            src="/images/block.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        ) : (
          <Image
            src="/images/block.png"
            alt=""
            width={1400}
            height={900}
            className="w-full h-auto"
            style={{ objectFit: "contain", objectPosition: "bottom left" }}
            priority
          />
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full"
        style={{ zIndex: 1 }}
      >
        <p
          className="font-body font-medium leading-tight"
          style={{
            color: "#ffffff",
            marginTop: 0,
            marginBottom: "0.5rem",
            fontSize: isMobile ? "1rem" : "1.35rem",
          }}
        >
          {isArabic ? "بسم الله نبدى وبه نستعين" : "In the name of God we begin and in Him we seek help"}
        </p>
        <h1
          className="font-heading font-bold leading-tight"
          style={{
            color: "#ffffff",
            marginTop: 0,
            marginBottom: "1rem",
            fontSize: isMobile ? "2.5rem" : "4.5rem",
          }}
        >
          {isArabic ? "رحلة في تراث عسير" : "A Journey Through Asir Heritage"}
        </h1>

        <p
          className="font-body opacity-60 max-w-xl"
          style={{
            color: "var(--gold-light)",
            marginTop: 0,
            marginBottom: isMobile ? "1.5rem" : "2.5rem",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: isMobile ? "0.875rem" : "1.1rem",
          }}
        >
          {isArabic
            ? "استكشف أبرز المعالم التراثية والتاريخية في محافظة أحد رفيدة"
            : "Explore the most prominent heritage and historical landmarks of Ahad Rafidah Governorate"}
        </p>

        {/* Search bar + suggestions */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative w-full"
          style={{
            maxWidth: isMobile ? "100%" : "42rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 0,
            marginBottom: "2rem",
          }}
        >
          {/* Input row */}
          <div
            className="flex items-center overflow-hidden"
            style={{
              background: "#ffffff",
              border: "2px solid var(--gold)",
              borderRadius: showSuggestions && suggestions.length > 0 ? "24px 24px 0 0" : "9999px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
              direction: isArabic ? "rtl" : "ltr",
              transition: "border-radius 0.2s",
            }}
          >
            {/* Search button */}
            <button
              onClick={() => { onSearch(query); setShowSuggestions(false); }}
              className="flex items-center justify-center shrink-0 cursor-pointer transition-all duration-200"
              style={{
                background: "var(--gold)",
                borderRadius: "9999px",
                width: btnSize,
                height: btnSize,
                margin: "5px",
                flexShrink: 0,
              }}
            >
              <svg width={isMobile ? 20 : 32} height={isMobile ? 20 : 32} viewBox="0 0 24 24" fill="none"
                stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            <input
              type="text"
              value={query}
              onChange={handleChange}
              onFocus={() => query && setShowSuggestions(true)}
              placeholder={isArabic ? "ابحث عن مكان تراثي..." : "Search for a heritage place..."}
              className={isMobile ? "flex-1 outline-none font-body" : "flex-1 outline-none font-body text-2xl px-8 py-10"}
              style={{
                background: "transparent",
                color: "#3a2a0a",
                direction: isArabic ? "rtl" : "ltr",
                textAlign: isArabic ? "right" : "left",
                ...(isMobile ? { fontSize: "1rem", padding: "0.75rem 1.25rem" } : {}),
              }}
            />

            <AnimatePresence>
              {query && (
                <motion.button
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: isMobile ? "40px" : "64px" }}
                  exit={{ opacity: 0, width: 0 }}
                  onClick={handleClear}
                  className="shrink-0 flex items-center justify-center cursor-pointer font-bold"
                  style={{ color: "var(--gold-dark)", marginRight: "8px", fontSize: isMobile ? "1rem" : "1.25rem" }}
                >
                  ✕
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Suggestions dropdown */}
          <AnimatePresence>
            {showSuggestions && suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="absolute left-0 right-0 z-50 overflow-hidden"
                style={{
                  background: "#ffffff",
                  border: "2px solid var(--gold)",
                  borderTop: "1px solid rgba(201,168,76,0.3)",
                  borderRadius: "0 0 24px 24px",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
                }}
              >
                {suggestions.map((place, i) => (
                  <motion.button
                    key={place.slug}
                    onClick={() => handleSelect(place.slug)}
                    className="w-full flex items-center gap-3 cursor-pointer transition-colors duration-150"
                    style={{
                      padding: isMobile ? "0.65rem 1rem" : "0.85rem 1.5rem",
                      borderBottom: i < suggestions.length - 1 ? "1px solid rgba(201,168,76,0.15)" : "none",
                      background: "transparent",
                      direction: isArabic ? "rtl" : "ltr",
                      textAlign: isArabic ? "right" : "left",
                    }}
                    whileHover={{ background: "rgba(201,168,76,0.08)" }}
                  >
                    <div className="relative shrink-0 rounded-lg overflow-hidden" style={{ width: isMobile ? 40 : 52, height: isMobile ? 40 : 52 }}>
                      <Image src={place.images[0]} alt={isArabic ? place.nameAr : place.nameEn} fill className="object-cover" sizes="52px" />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="font-heading font-bold truncate" style={{ color: "var(--dark)", fontSize: isMobile ? "0.875rem" : "1rem" }}>
                        {isArabic ? place.nameAr : place.nameEn}
                      </span>
                      {!isMobile && (
                        <span className="font-body text-sm truncate opacity-60" style={{ color: "var(--dark)" }}>
                          {isArabic ? place.shortDescAr : place.shortDescEn}
                        </span>
                      )}
                    </div>
                    <span style={{ color: "var(--gold)", flexShrink: 0 }}>{isArabic ? "←" : "→"}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </motion.div>

      {/* Scroll indicator — hide on mobile */}
      {!isMobile && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ zIndex: 2 }}
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
      )}
    </section>
  );
}
