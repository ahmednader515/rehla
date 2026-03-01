"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { Place } from "@/data/places";

interface PlaceCardProps {
  place: Place;
  index: number;
}

export default function PlaceCard({ place, index }: PlaceCardProps) {
  const { isArabic } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative rounded-3xl overflow-hidden shadow-2xl h-full cursor-pointer"
      style={{
        border: "1px solid rgba(201,168,76,0.2)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
        direction: "ltr",
      }}
    >
      <Link href={`/place/${place.slug}`} className="flex h-full w-full">

        {/* Text section (left, ~58%) */}
        <div
          className="relative flex flex-col justify-between"
          style={{
            width: "58%",
            background: "rgba(20,13,5,0.95)",
            flexShrink: 0,
            zIndex: 1,
            padding: "1.25rem 2.5rem 1.25rem 1.25rem",
          }}
        >
          {/* Image count badge */}
          <div
            className="absolute top-3 left-3 rounded-full font-body font-semibold"
            style={{
              background: "rgba(201,168,76,0.85)",
              color: "var(--dark)",
              fontSize: "0.75rem",
              padding: "0.25rem 0.65rem",
              whiteSpace: "nowrap",
            }}
          >
            {place.images.length} {isArabic ? "صور" : "photos"}
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <h3
              className="font-heading font-bold leading-snug mb-2"
              style={{
                color: "var(--gold)",
                textAlign: isArabic ? "right" : "left",
                fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
              }}
            >
              {isArabic ? place.nameAr : place.nameEn}
            </h3>
            <p
              className="font-body leading-relaxed line-clamp-3 opacity-80"
              style={{
                color: "var(--gold-light)",
                textAlign: isArabic ? "right" : "left",
                fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
              }}
            >
              {isArabic ? place.shortDescAr : place.shortDescEn}
            </p>
          </div>

          <motion.div
            className="mt-3 w-full py-2 text-center font-heading font-semibold transition-all duration-300"
            style={{
              borderTop: "1px solid rgba(201,168,76,0.4)",
              borderBottom: "1px solid rgba(201,168,76,0.4)",
              color: "var(--gold)",
              fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
            }}
            whileHover={{ background: "rgba(201,168,76,0.12)" }}
          >
            {isArabic ? "← اكتشف المكان" : "Explore →"}
          </motion.div>
        </div>

        {/* Image section (right, ~42%) */}
        <div className="relative flex-1 overflow-hidden">
          <Image
            src={place.images[0]}
            alt={isArabic ? place.nameAr : place.nameEn}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 42vw, 25vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(20,13,5,0.95) 0%, rgba(20,13,5,0.4) 35%, transparent 100%)",
            }}
          />
        </div>
      </Link>

      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: "inset 0 0 0 1.5px rgba(201,168,76,0.5)" }}
      />
    </motion.div>
  );
}
