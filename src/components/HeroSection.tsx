"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { isArabic } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16">
      {/* Main Title */}
      <motion.div
        className="text-center mb-12 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          className="gold-divider mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <h1
          className="font-heading text-5xl md:text-7xl font-bold mb-4 leading-tight"
          style={{ color: "var(--gold)" }}
        >
          {isArabic ? "رحلة في تراث عسير" : "A Journey Through Asir Heritage"}
        </h1>
        <p
          className="font-heading text-xl md:text-2xl opacity-80 mb-2"
          style={{ color: "var(--gold-light)" }}
        >
          {isArabic ? "عبر التقنية" : "via Technology"}
        </p>
        <p
          className="font-body text-base md:text-lg opacity-60 max-w-xl mx-auto mt-4"
          style={{ color: "var(--gold-light)" }}
        >
          {isArabic
            ? "استكشف أبرز المعالم التراثية والتاريخية في محافظة أحد رفيدة"
            : "Explore the most prominent heritage and historical landmarks of Ahad Rafidah Governorate"}
        </p>
        <motion.div
          className="gold-divider mt-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>

      {/* Prince Quote Card */}
      <motion.div
        className="z-10 w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
      >
        <div
          className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch gap-0 shadow-2xl"
          style={{
            background: "rgba(26,18,9,0.85)",
            border: "1px solid rgba(201,168,76,0.3)",
          }}
        >
          {/* Quote image (extras-1.png) */}
          <div className="relative w-full md:w-2/3 min-h-[220px]">
            <Image
              src="/images/extras-1.png"
              alt={isArabic ? "رحلة صعود عسير" : "Asir Rise Journey"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>

          {/* Prince photo (extras-2.png) */}
          <div
            className="relative w-full md:w-1/3 min-h-[220px] flex flex-col items-center justify-center p-4 gap-3"
            style={{ borderLeft: isArabic ? "none" : "1px solid rgba(201,168,76,0.2)", borderRight: isArabic ? "1px solid rgba(201,168,76,0.2)" : "none" }}
          >
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 shadow-xl" style={{ borderColor: "var(--gold)" }}>
              <Image
                src="/images/extras-2.png"
                alt={isArabic ? "أمير منطقة عسير" : "Governor of Asir Region"}
                fill
                className="object-cover object-top"
                sizes="144px"
              />
            </div>
            <p
              className="font-heading text-sm text-center leading-relaxed whitespace-pre-line"
              style={{ color: "var(--gold)" }}
            >
              {isArabic
                ? "الأمير تركي بن طلال بن عبدالعزيز\nأمير منطقة عسير"
                : "Prince Turki bin Talal bin Abdulaziz\nGovernor of Asir Region"}
            </p>
          </div>
        </div>
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
