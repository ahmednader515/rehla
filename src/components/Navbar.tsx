"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { isArabic, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{
        background: "rgba(10,7,2,0.75)",
        backdropFilter: "blur(10px)",
        minHeight: "76px",
        alignItems: "center",
      }}
    >
      <div className="flex items-center justify-between px-6 w-[80%]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none">
          <Image
            src="/images/logo.png"
            alt="رحلة"
            width={48}
            height={54}
            className="object-contain drop-shadow-lg"
            priority
          />
        </Link>

        {/* Site Title (center) */}
        <div className="hidden md:block text-center">
          <p
            className="font-heading text-2xl tracking-wide"
            style={{ color: "var(--gold-light)" }}
          >
            {isArabic
              ? "رحلة في تراث عسير عبر التقنية"
              : "A Journey Through Asir Heritage via Technology"}
          </p>
        </div>

        {/* Language Toggle — pill switch */}
        <button
          onClick={toggleLanguage}
          className="relative flex items-center select-none cursor-pointer overflow-hidden"
          style={{
            width: "116px",
            height: "48px",
            borderRadius: "9999px",
            background: "rgba(201,168,76,0.12)",
            border: "1.5px solid rgba(201,168,76,0.5)",
            direction: "ltr",
          }}
          aria-label={isArabic ? "Switch to English" : "التبديل للعربية"}
        >
          <motion.div
            animate={{ left: isArabic ? "62px" : "3px" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{
              width: "50px",
              height: "42px",
              borderRadius: "9999px",
              background: "var(--gold)",
              position: "absolute",
              top: "2px",
            }}
          />
          <span
            className="font-heading text-base font-bold z-10 flex-1 text-center"
            style={{ color: isArabic ? "var(--gold)" : "var(--dark)", position: "relative" }}
          >
            EN
          </span>
          <span
            className="font-heading text-base font-bold z-10 flex-1 text-center"
            style={{ color: isArabic ? "var(--dark)" : "var(--gold)", position: "relative" }}
          >
            ع
          </span>
        </button>
      </div>
    </nav>
  );
}
