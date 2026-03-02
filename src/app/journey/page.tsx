"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function JourneyPage() {
  const { isArabic } = useLanguage();
  const isMobile = useIsMobile();
  const navbarH = isMobile ? 56 : 76;

  return (
    <>
      <div className="page-bg" />
      <Navbar />

      <Link href="/" className="fixed z-50" style={{ top: navbarH + 12, right: isMobile ? "1rem" : "1.5rem" }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 font-body text-sm cursor-pointer rounded-full"
          style={{
            color: "var(--gold-light)",
            background: "rgba(12,8,2,0.8)",
            border: "1px solid rgba(201,168,76,0.3)",
            backdropFilter: "blur(8px)",
            padding: isMobile ? "0.4rem 1rem" : "0.6rem 1.5rem",
            whiteSpace: "nowrap",
            fontSize: isMobile ? "0.8rem" : undefined,
          }}
        >
          <span style={{ color: "var(--gold)" }}>{isArabic ? "←" : "→"}</span>
          {isArabic ? (isMobile ? "العودة" : "العودة للرئيسية") : isMobile ? "Back" : "Back to Home"}
        </motion.div>
      </Link>

      <main
        className="relative z-10 w-full"
        style={{
          position: "fixed",
          top: navbarH,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/extras-4.png"
            alt={isArabic ? "رحلة صعود عسير" : "Asir Rise Journey"}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </motion.div>
      </main>
    </>
  );
}
