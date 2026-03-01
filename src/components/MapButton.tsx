"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface MapButtonProps {
  url: string;
}

export default function MapButton({ url }: MapButtonProps) {
  const { isArabic } = useLanguage();

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex items-center gap-3 rounded-xl font-heading font-semibold transition-colors duration-300"
      style={{
        background: "linear-gradient(135deg, rgba(201,168,76,0.25), rgba(201,168,76,0.1))",
        border: "1.5px solid rgba(201,168,76,0.7)",
        color: "var(--gold)",
        fontSize: "1.1rem",
        padding: "0.85rem 2rem",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      {isArabic ? "عرض على الخريطة" : "View on Map"}
    </motion.a>
  );
}
