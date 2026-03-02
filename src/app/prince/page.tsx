"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import { useIsMobile } from "@/hooks/useIsMobile";

const PANEL_BG = "rgb(12, 8, 2)";

const QUOTE_AR = `عندما يتواجد الصلاح في القلب تجد الجمال في الشخصية
عندما يتواجد الجمال في الشخصية تجد السعادة في المنزل
عندما تتواجد السعادة في المنزل تجد النظام في الأمة
وعندما يتواجد النظام في الأمة تجد السلام في العالم`;

const QUOTE_EN = `When righteousness is in the heart, you find beauty in character.
When beauty is in character, you find happiness in the home.
When happiness is in the home, you find order in the nation.
And when order is in the nation, you find peace in the world.`;

const ATTRIBUTION_AR = "صاحب السمو الملكي الأمير تركي بن طلال بن عبد العزيز آل سعود";
const ATTRIBUTION_EN = "His Royal Highness Prince Turki bin Talal bin Abdulaziz Al Saud";

const TITLE_AR = "صاحب السمو الملكي الأمير تركي بن طلال";
const TITLE_EN = "His Royal Highness Prince Turki bin Talal";

const EMIRS_AR = [
  "الأمير : شويش بن ضويحي المطيري ١٣٣٨-١٣٣٩ هـ",
  "الأمير : عبد الله بن إبراهيم بن سويلم ١٣٣٩ هـ",
  "الأمير : فهد بن عبد الكريم العقيلي ١٣٣٩ هـ",
  "الأمير : سعد بن سليمان بن عفيصان ١٣٤١ هـ",
  "الأمير : عبد العزيز بن إبراهيم آل إبراهيم ١٣٤٢ هـ",
  "الأمير : عبد الله بن إبراهيم العسكر ١٣٤٢ - ١٣٥٠ هـ",
  "الأمير : تركي بن أحمد السديري ١٣٥٢ - ١٣٧١ هـ",
  "الأمير : تركي بن محمد بن ماضي ١٣٧١ - ١٣٨٥ هـ",
  "صاحب السمو الملكي الأمير : خالد بن فيصل بن عبد العزيز آل سعود ١٣٩١- ١٤٢٨ هـ",
  "صاحب السمو الملكي الأمير : فيصل بن خالد بن عبد العزيز آل سعود ١٤٢٨ - ١٤٤٠ هـ",
  "صاحب السمو الملكي الأمير : تركي بن طلال بن عبد العزيز آل سعود ١٤٤٠ - حتى الآن.",
];

const EMIRS_EN = [
  "Emir: Shuwaish bin Duwaihi Al-Mutairi 1338-1339 AH",
  "Emir: Abdullah bin Ibrahim bin Suwailim 1339 AH",
  "Emir: Fahd bin Abdul Karim Al-Aqili 1339 AH",
  "Emir: Saad bin Sulaiman bin Afisan 1341 AH",
  "Emir: Abdulaziz bin Ibrahim Al Ibrahim 1342 AH",
  "Emir: Abdullah bin Ibrahim Al-Askar 1342 - 1350 AH",
  "Emir: Turki bin Ahmed Al-Sudairi 1352 - 1371 AH",
  "Emir: Turki bin Mohammed bin Madi 1371 - 1385 AH",
  "His Royal Highness Prince: Khalid bin Faisal bin Abdulaziz Al Saud 1391- 1428 AH",
  "His Royal Highness Prince: Faisal bin Khalid bin Abdulaziz Al Saud 1428 - 1440 AH",
  "His Royal Highness Prince: Turki bin Talal bin Abdulaziz Al Saud 1440 - present.",
];

export default function PrincePage() {
  const { isArabic } = useLanguage();
  const isMobile = useIsMobile();
  const navbarH = isMobile ? 56 : 76;

  const quote = isArabic ? QUOTE_AR : QUOTE_EN;
  const attribution = isArabic ? ATTRIBUTION_AR : ATTRIBUTION_EN;
  const title = isArabic ? TITLE_AR : TITLE_EN;
  const emirs = isArabic ? EMIRS_AR : EMIRS_EN;

  /* ── MOBILE layout: image top, text bottom (same as place page) ── */
  if (isMobile) {
    return (
      <>
        <div className="page-bg" />
        <Navbar />

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
          <div className="relative w-full overflow-hidden" style={{ height: "45vh", flexShrink: 0 }}>
            <Image
              src="/images/extras-3.png"
              alt={attribution}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-16" style={{ background: "linear-gradient(to top, rgb(12,8,2), transparent)" }} />
          </div>

          <div className="flex-1 overflow-y-auto" style={{ background: PANEL_BG, padding: "1.5rem" }}>
            <h1
              className="font-heading font-bold"
              style={{ color: "var(--gold)", fontSize: "1.75rem", textAlign: isArabic ? "right" : "left", marginBottom: "1.5rem" }}
            >
              {title}
            </h1>

            <div className="whitespace-pre-line leading-relaxed mb-4" style={{ color: "var(--gold-light)", textAlign: isArabic ? "right" : "left", direction: isArabic ? "rtl" : "ltr" }}>
              {quote}
            </div>
            <p className="font-heading font-bold mb-4" style={{ color: "var(--gold)", fontSize: "1rem", textAlign: isArabic ? "right" : "left" }}>
              — {attribution}
            </p>

            <div className="pt-4 border-t" style={{ borderColor: "rgba(201,168,76,0.25)" }}>
              <p className="font-heading font-bold mb-3" style={{ color: "var(--gold)", fontSize: "1rem", textAlign: isArabic ? "right" : "left" }}>
                {isArabic ? "أمراء منطقة عسير" : "Emirs of the Asir Region"}
              </p>
              <ul className="space-y-2 opacity-90 text-sm" style={{ textAlign: isArabic ? "right" : "left", direction: isArabic ? "rtl" : "ltr" }}>
                {emirs.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>

          <footer
            className="text-center font-body flex flex-col items-center justify-center gap-1 shrink-0 py-3"
            style={{
              color: "var(--gold-light)",
              borderTop: "1px solid rgba(201,168,76,0.2)",
              background: PANEL_BG,
              opacity: 0.65,
              fontSize: "0.7rem",
              minHeight: "44px",
            }}
          >
            <span>{isArabic ? "© 2025 رحله في تراث عسير — محافظة أحد رفيدة" : "© 2025 A Journey Through Asir Heritage — Ahad Rafidah Governorate"}</span>
            <span style={{ opacity: 0.9 }}>
              {isArabic ? "بيانات التواصل :" : "Contact:"} {isArabic ? "رقم :" : "Phone:"} 0544443194 · {isArabic ? "تيك توك - تويتر :" : "TikTok - Twitter:"} ASEER_KKU
            </span>
          </footer>
        </div>
      </>
    );
  }

  /* ── DESKTOP layout: side-by-side with SVG curve (same as place page) ── */
  return (
    <>
      <div className="page-bg" />
      <Navbar />

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
        <div className="relative overflow-hidden" style={{ flex: 1, display: "flex", direction: "ltr" }}>
          {/* LEFT: Image section (60%) */}
          <div className="relative" style={{ width: "60%", flexShrink: 0 }}>
            <Image
              src="/images/extras-3.png"
              alt={attribution}
              fill
              className="object-cover object-center"
              sizes="60vw"
              priority
            />
          </div>

          {/* SVG curved separator */}
          <svg className="absolute inset-0 z-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M 58 0 C 65 55, 52 80, 46 100 L 100 100 L 100 0 Z" fill={PANEL_BG} />
          </svg>

          {/* RIGHT: Text panel */}
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
              style={{ color: "var(--gold-light)", textAlign: isArabic ? "right" : "left", direction: isArabic ? "rtl" : "ltr" }}
            >
              <div className="whitespace-pre-line leading-[1.9] text-sm opacity-90">{quote}</div>
              <p className="font-heading font-bold pt-1" style={{ color: "var(--gold)" }}>
                — {attribution}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 mt-4 border-t"
              style={{ borderColor: "rgba(201,168,76,0.25)", textAlign: isArabic ? "right" : "left", direction: isArabic ? "rtl" : "ltr" }}
            >
              <p className="font-heading font-bold mb-3" style={{ color: "var(--gold)", fontSize: "1.125rem" }}>
                {isArabic ? "أمراء منطقة عسير" : "Emirs of the Asir Region"}
              </p>
              <ul className="space-y-2 text-sm opacity-90 leading-relaxed">
                {emirs.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <footer
          className="relative z-10 text-center px-4 font-body flex flex-col items-center justify-center gap-2 py-4"
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
          <span>{isArabic ? "© 2025 رحله في تراث عسير — محافظة أحد رفيدة" : "© 2025 A Journey Through Asir Heritage — Ahad Rafidah Governorate"}</span>
          <span style={{ opacity: 0.9 }}>
            {isArabic ? "بيانات التواصل :" : "Contact:"} {isArabic ? "رقم :" : "Phone:"} 0544443194 · {isArabic ? "تيك توك - تويتر :" : "TikTok - Twitter:"} ASEER_KKU
          </span>
        </footer>
      </div>
    </>
  );
}
