"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { places } from "@/data/places";
import PlaceCard from "./PlaceCard";

interface PlacesGridProps {
  searchQuery?: string;
}

export default function PlacesGrid({ searchQuery = "" }: PlacesGridProps) {
  const { isArabic } = useLanguage();

  const filtered = searchQuery.trim()
    ? places.filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          p.nameAr.includes(searchQuery) ||
          p.nameEn.toLowerCase().includes(q) ||
          p.shortDescAr.includes(searchQuery) ||
          p.shortDescEn.toLowerCase().includes(q)
        );
      })
    : places;

  return (
    <section className="relative z-10 pb-24 text-center">
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2
          className="font-heading text-3xl md:text-4xl font-bold"
          style={{ color: "var(--gold)", marginBottom: "1.5rem" }}
        >
          {isArabic ? "الأماكن التراثية" : "Heritage Places"}
        </h2>
        <p
          className="font-body text-base opacity-65 max-w-lg"
          style={{ color: "var(--gold-light)", marginBottom: "1.25rem", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
        >
          {isArabic
            ? "اختر مكاناً لاستكشاف تاريخه وصوره"
            : "Select a place to explore its history and gallery"}
        </p>
      </motion.div>

      <div
        className="flex flex-wrap justify-center gap-6 px-4"
        style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}
      >
        {filtered.length === 0 && (
          <div className="w-full py-16 text-center font-body opacity-50" style={{ color: "var(--gold-light)" }}>
            {isArabic ? "لا توجد نتائج" : "No results found"}
          </div>
        )}
        {filtered.map((place, index) => (
          <div
            key={place.slug}
            className="w-full sm:w-[calc(50%-12px)]"
            style={{ height: "230px" }}
          >
            <PlaceCard place={place} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
