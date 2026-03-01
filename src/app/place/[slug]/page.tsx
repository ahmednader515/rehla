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

interface PageProps {
  params: Promise<{ slug: string }>;
}

const PANEL_BG = "rgba(12, 8, 2, 0.96)";

export default function PlacePage({ params }: PageProps) {
  const { slug } = use(params);
  const place = places.find((p) => p.slug === slug);
  const { isArabic } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  if (!place) notFound();

  const title = isArabic ? place.nameAr : place.nameEn;
  const fullDesc = isArabic ? place.fullDescAr : place.fullDescEn;
  const paragraphs = fullDesc.split("\n\n").filter(Boolean);

  useEffect(() => {
    if (place.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % place.images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [place.images.length]);

  return (
    <>
      <div className="page-bg" />
      <Navbar />

      {/* ── Full-viewport container ── */}
      <div
        className="relative overflow-hidden"
        style={{ height: "calc(100vh - 76px)", marginTop: "76px" }}
      >
        {/* ── Background: auto-scrolling images fill entire area ── */}
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={place.images[currentImage]}
              alt={title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={currentImage === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Image counter */}
        {place.images.length > 1 && (
          <div
            className="absolute bottom-6 left-8 z-30 font-body text-sm px-3 py-1 rounded-full"
            style={{ background: "rgba(201,168,76,0.85)", color: "var(--dark)" }}
          >
            {currentImage + 1} / {place.images.length}
          </div>
        )}

        {/* Progress dots */}
        {place.images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {place.images.map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: i === currentImage ? 1 : 0.35, scale: i === currentImage ? 1.3 : 1 }}
                className="rounded-full"
                style={{ width: 7, height: 7, background: "var(--gold)" }}
              />
            ))}
          </div>
        )}

        {/* ── SVG curved separator — starts straight at top, curves LEFT toward bottom ── */}
        {/*
          ViewBox: 0 0 100 100
          Path: starts at (52, 0) near top-right of image area
                curves down staying straight, then bends LEFT at bottom to (34, 100)
                fills the entire right text panel with the dark color
        */}
        <svg
          className="absolute inset-0 z-20 pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
        >
          <path
            d="M 52 0 C 52 40, 46 68, 34 100 L 100 100 L 100 0 Z"
            fill={PANEL_BG}
          />
        </svg>

        {/* ── Text panel — positioned on the right ── */}
        <div
          className="absolute top-0 right-0 bottom-0 z-30 flex flex-col justify-center py-12 overflow-y-auto"
          style={{ width: "48%", paddingLeft: "3.5rem", paddingRight: "3rem" }}
        >
          {/* Back button */}
          <Link href="/" className="mb-8">
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-2 font-body text-sm cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
              style={{ color: "var(--gold-light)" }}
            >
              <span style={{ color: "var(--gold)" }}>{isArabic ? "←" : "→"}</span>
              {isArabic ? "العودة للرئيسية" : "Back to Home"}
            </motion.div>
          </Link>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--gold)", textAlign: isArabic ? "right" : "left" }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className="font-body text-base leading-[2] opacity-85"
                style={{
                  color: "var(--gold-light)",
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {para}
              </p>
            ))}
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
            style={{ justifyContent: isArabic ? "flex-end" : "flex-start" }}
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
          marginTop: "2rem",
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
    </>
  );
}
