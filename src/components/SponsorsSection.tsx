"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function SponsorsSection() {
  const { isArabic } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <section
      className="relative z-10 pt-12 md:pt-16"
      style={{
        width: "100%",
        minHeight: "min-content",
        paddingBottom: isMobile ? "2rem" : "4rem",
      }}
    >
      {/* Background image — no dark overlay (same as content section) */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            inset: "-10px",
            backgroundImage: "url('/images/pages-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        />
      </div>

      <div
        className="relative"
        style={{
          zIndex: 1,
          width: isMobile ? "95%" : "80%",
          maxWidth: "64rem",
          margin: "0 auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <motion.h2
          className="font-heading font-bold text-center mb-8 md:mb-10"
          style={{
            color: "var(--gold)",
            fontSize: isMobile ? "1.75rem" : "2.25rem",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {isArabic ? "الرعاه" : "Sponsors"}
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative w-full max-w-md aspect-[3/2] rounded-xl overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.25)", boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}>
            <Image
              src="/images/advertise-1.png"
              alt={isArabic ? "راعي ١" : "Sponsor 1"}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 95vw, 400px"
            />
          </div>
          <div className="relative w-full max-w-md aspect-[3/2] rounded-xl overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.25)", boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}>
            <Image
              src="/images/advertise-2.png"
              alt={isArabic ? "راعي ٢" : "Sponsor 2"}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 95vw, 400px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
