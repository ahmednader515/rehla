"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import MapButton from "@/components/MapButton";
import { places } from "@/data/places";
import { useLanguage } from "@/context/LanguageContext";
import { useIsMobile } from "@/hooks/useIsMobile";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const PANEL_BG = "rgb(12, 8, 2)";

export default function PlacePage({ params }: PageProps) {
  const { slug } = use(params);
  const place = places.find((p) => p.slug === slug);
  const { isArabic } = useLanguage();
  const isMobile = useIsMobile();
  const [currentImage, setCurrentImage] = useState(0);

  if (!place) notFound();

  const title = isArabic ? place.nameAr : place.nameEn;
  const fullDesc = isArabic ? place.fullDescAr : place.fullDescEn;
  const paragraphs = fullDesc.split("\n\n").filter(Boolean);
  const navbarH = isMobile ? 56 : 76;

  useEffect(() => {
    if (place.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % place.images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [place.images.length]);

  /* ── MOBILE layout: image top, text bottom ── */
  if (isMobile) {
    return (
      <>
        <div className="page-bg" />
        <Navbar />

        {/* Back button */}
        <Link href="/" className="fixed z-50" style={{ top: navbarH + 12, right: "1rem" }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 font-body text-sm cursor-pointer rounded-full"
            style={{
              color: "var(--gold-light)",
              background: "rgba(12,8,2,0.8)",
              border: "1px solid rgba(201,168,76,0.3)",
              backdropFilter: "blur(8px)",
              padding: "0.4rem 1rem",
              whiteSpace: "nowrap",
              fontSize: "0.8rem",
            }}
          >
            <span style={{ color: "var(--gold)" }}>{isArabic ? "←" : "→"}</span>
            {isArabic ? "العودة" : "Back"}
          </motion.div>
        </Link>

        <div style={{ paddingTop: navbarH, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          {/* Image — top 45vh */}
          <div className="relative w-full overflow-hidden" style={{ height: "45vh", flexShrink: 0 }}>
            <AnimatePresence mode="sync">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.0 }}
                className="absolute inset-0"
              >
                <Image src={place.images[currentImage]} alt={title} fill className="object-cover" sizes="100vw" priority={currentImage === 0} />
              </motion.div>
            </AnimatePresence>

            {/* Counter */}
            {place.images.length > 1 && (
              <div
                className="absolute bottom-4 left-4 z-10 font-heading font-bold rounded-full"
                style={{ background: "rgba(201,168,76,0.95)", color: "#fff", fontSize: "0.85rem", padding: "0.3rem 0.8rem" }}
              >
                {currentImage + 1} / {place.images.length}
              </div>
            )}

            {/* Dots */}
            {place.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {place.images.map((_, i) => (
                  <motion.div key={i} animate={{ opacity: i === currentImage ? 1 : 0.4, scale: i === currentImage ? 1.3 : 1 }}
                    className="rounded-full" style={{ width: 6, height: 6, background: "var(--gold)" }} />
                ))}
              </div>
            )}

            {/* Fade to dark at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-16" style={{ background: "linear-gradient(to top, rgb(12,8,2), transparent)" }} />
          </div>

          {/* Text section */}
          <div className="flex-1 overflow-y-auto" style={{ background: PANEL_BG, padding: "1.5rem" }}>
            <h1
              className="font-heading font-bold"
              style={{ color: "var(--gold)", fontSize: "1.75rem", textAlign: isArabic ? "right" : "left", marginBottom: "1.5rem" }}
            >
              {title}
            </h1>

            <div className="space-y-3">
              {paragraphs.map((para, i) => (
                <p key={i} className="font-body text-sm leading-relaxed opacity-85"
                  style={{ color: "var(--gold-light)", textAlign: isArabic ? "right" : "left" }}>
                  {para}
                </p>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
              <MapButton url={place.mapsUrl} />
            </div>
          </div>

          {/* Footer */}
          <footer
            className="text-center font-body flex items-center justify-center shrink-0"
            style={{
              color: "var(--gold-light)",
              borderTop: "1px solid rgba(201,168,76,0.2)",
              background: PANEL_BG,
              opacity: 0.65,
              fontSize: "0.7rem",
              minHeight: "44px",
            }}
          >
            {isArabic ? "© 2025 رحلة في تراث عسير — محافظة أحد رفيدة" : "© 2025 A Journey Through Asir Heritage — Ahad Rafidah Governorate"}
          </footer>
        </div>
      </>
    );
  }

  /* ── DESKTOP layout: side-by-side with SVG curve ── */
  return (
    <>
      <div className="page-bg" />
      <Navbar />

      {/* Back button — fixed top right */}
      <Link href="/" className="fixed z-50" style={{ top: navbarH + 16, right: "1.5rem" }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 font-body text-sm cursor-pointer rounded-full"
          style={{
            color: "var(--gold-light)",
            background: "rgba(12,8,2,0.75)",
            border: "1px solid rgba(201,168,76,0.3)",
            backdropFilter: "blur(8px)",
            padding: "0.6rem 1.5rem",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "var(--gold)" }}>{isArabic ? "←" : "→"}</span>
          {isArabic ? "العودة للرئيسية" : "Back to Home"}
        </motion.div>
      </Link>

      <div style={{ display: "flex", flexDirection: "column", height: "100vh", paddingTop: navbarH }}>
        {/* Main content row */}
        <div className="relative overflow-hidden" style={{ flex: 1, display: "flex", direction: "ltr" }}>

          {/* LEFT: Image section (60%) */}
          <div className="relative" style={{ width: "60%", flexShrink: 0 }}>
            <AnimatePresence mode="sync">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image src={place.images[currentImage]} alt={title} fill className="object-cover" sizes="60vw" priority={currentImage === 0} />
              </motion.div>
            </AnimatePresence>

            {place.images.length > 1 && (
              <div className="absolute bottom-6 left-6 z-30 font-heading font-bold rounded-full"
                style={{ background: "rgba(201,168,76,0.95)", color: "#ffffff", fontSize: "1rem", padding: "0.5rem 1.1rem", boxShadow: "0 4px 16px rgba(0,0,0,0.5)" }}>
                {currentImage + 1} / {place.images.length}
              </div>
            )}

            {place.images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {place.images.map((_, i) => (
                  <motion.div key={i} animate={{ opacity: i === currentImage ? 1 : 0.35, scale: i === currentImage ? 1.3 : 1 }}
                    className="rounded-full" style={{ width: 7, height: 7, background: "var(--gold)" }} />
                ))}
              </div>
            )}
          </div>

          {/* SVG curved separator */}
          <svg className="absolute inset-0 z-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M 58 0 C 65 55, 52 80, 46 100 L 100 100 L 100 0 Z" fill={PANEL_BG} />
          </svg>

          {/* RIGHT: Text panel (35%) */}
          <div className="relative z-30 flex flex-col justify-center overflow-y-auto" style={{ flex: 1, background: PANEL_BG, padding: "2rem 2.5rem 1.5rem 3.5rem" }}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading font-bold"
              style={{ color: "var(--gold)", textAlign: isArabic ? "right" : "left", fontSize: "2.5rem", marginBottom: "2rem" }}
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-3"
            >
              {paragraphs.map((para, i) => (
                <p key={i} className="font-body text-sm leading-[1.9] opacity-85"
                  style={{ color: "var(--gold-light)", textAlign: isArabic ? "right" : "left" }}>
                  {para}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
              style={{ marginTop: "2.5rem", justifyContent: isArabic ? "flex-end" : "flex-start" }}
            >
              <MapButton url={place.mapsUrl} />
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="relative z-10 text-center px-4 font-body flex items-center justify-center"
          style={{
            color: "var(--gold-light)",
            borderTop: "2px solid rgba(201,168,76,0.3)",
            opacity: 0.75,
            fontSize: "0.875rem",
            minHeight: "56px",
            flexShrink: 0,
            background: PANEL_BG,
          }}
        >
          {isArabic ? "© 2025 رحلة في تراث عسير — محافظة أحد رفيدة" : "© 2025 A Journey Through Asir Heritage — Ahad Rafidah Governorate"}
        </footer>
      </div>
    </>
  );
}
