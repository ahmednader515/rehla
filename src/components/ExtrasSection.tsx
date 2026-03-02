"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function ExtrasSection() {
  const { isArabic } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <section
      className="relative z-10 flex flex-col"
      style={{
        paddingTop: "2rem",
        paddingBottom: isMobile ? "3rem" : "3rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        minHeight: isMobile ? "auto" : "100vh",
      }}
    >
      {/* Background image — no dark overlay */}
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

      {/* Section heading */}
      <motion.div
        className="text-center mb-8"
        style={{ position: "relative", zIndex: 1 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="font-heading font-bold"
          style={{ color: "var(--gold)", marginBottom: "1rem", fontSize: isMobile ? "1.75rem" : "2.25rem" }}
        >
          {isArabic ? "المحتوى" : "Content"}
        </h2>
      </motion.div>

      {/* Two cards — on mobile order swapped: prince photo first, quote second */}
      <div
        className="flex flex-col md:flex-row gap-6"
        style={{ width: isMobile ? "90%" : "100%", maxWidth: "64rem", marginLeft: "auto", marginRight: "auto", position: "relative", zIndex: 1 }}
      >
        {/* Right card — رحلة صعود عسير (order 2 on mobile); click opens journey page with extras-4 */}
        <Link href="/journey" className="block flex-1" style={{ order: isMobile ? 2 : undefined }}>
          <motion.div
            className="relative rounded-2xl overflow-hidden cursor-pointer"
            style={{
              minHeight: isMobile ? "260px" : "520px",
              border: "1px solid rgba(201,168,76,0.3)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/extras-1.png"
              alt={isArabic ? "رحله صعود عسير" : "Asir Rise Journey"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </Link>

        {/* Left card — prince photo (order 1 on mobile); click opens prince page */}
        <Link
          href="/prince"
          className="block"
          style={{
            order: isMobile ? 1 : undefined,
            ...(!isMobile && { maxWidth: "320px", flexShrink: 0, marginLeft: "auto", marginRight: "auto" }),
          }}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden flex flex-col"
            style={{
              minHeight: isMobile ? "320px" : "520px",
              width: "100%",
              maxWidth: isMobile ? "100%" : "320px",
              background: "rgba(26,18,9,0.75)",
              border: "1px solid rgba(201,168,76,0.4)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              flexShrink: 0,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div className="relative w-full flex-1" style={{ minHeight: isMobile ? "230px" : "380px" }}>
              <Image
                src="/images/extras-2.png"
                alt={isArabic ? "أمير منطقة عسير" : "Governor of Asir Region"}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>

            <div className="w-full text-center" style={{ paddingTop: "1.25rem", paddingBottom: "1.5rem", paddingLeft: isMobile ? "1.5rem" : "2rem", paddingRight: isMobile ? "1.5rem" : "2rem" }}>
              <p
                className="font-heading font-bold leading-relaxed"
                style={{ color: "var(--gold)", fontSize: isMobile ? "1rem" : "1.25rem" }}
              >
                {isArabic ? "الأمير تركي بن طلال بن عبدالعزيز" : "Prince Turki bin Talal bin Abdulaziz"}
              </p>
              <p
                className="font-body opacity-70 mt-1"
                style={{ color: "var(--gold-light)", fontSize: isMobile ? "0.8rem" : "0.875rem" }}
              >
                {isArabic ? "أمير منطقة عسير" : "Governor of Asir Region"}
              </p>
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Stats below the two images */}
      <motion.div
        className="rounded-2xl overflow-hidden"
        style={{
          marginTop: isMobile ? "2.5rem" : "3.5rem",
          width: isMobile ? "90%" : "100%",
          maxWidth: "64rem",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          zIndex: 1,
          background: "rgba(26,18,9,0.75)",
          border: "1px solid rgba(201,168,76,0.3)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          paddingTop: isMobile ? "2rem" : "2.5rem",
          paddingBottom: isMobile ? "1.25rem" : "1.75rem",
          paddingLeft: isMobile ? "1rem" : "2rem",
          paddingRight: isMobile ? "1rem" : "2rem",
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div
          className="grid gap-4 md:gap-6"
          style={{
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(180px, 1fr))",
            textAlign: isArabic ? "right" : "left",
            direction: isArabic ? "rtl" : "ltr",
          }}
        >
          <div>
            <p className="font-body opacity-70" style={{ fontSize: isMobile ? "0.875rem" : "1rem", marginBottom: "0.25rem" }}>
              {isArabic ? "عدد سكان منطقة عسير" : "Asir Region population"}
            </p>
            <p className="font-heading font-bold" style={{ color: "var(--gold)", fontSize: isMobile ? "1.15rem" : "1.35rem" }}>
              2,024,285 {isArabic ? "نسمة تقريباً" : "approx."} (2.2M)
            </p>
          </div>
          <div>
            <p className="font-body opacity-70" style={{ fontSize: isMobile ? "0.875rem" : "1rem", marginBottom: "0.25rem" }}>
              {isArabic ? "عدد محافظات منطقة عسير" : "Number of governorates in Asir"}
            </p>
            <p className="font-heading font-bold" style={{ color: "var(--gold)", fontSize: isMobile ? "1.15rem" : "1.35rem" }}>
              19 {isArabic ? "محافظة" : "governorates"}
            </p>
          </div>
          <div>
            <p className="font-body opacity-70" style={{ fontSize: isMobile ? "0.875rem" : "1rem", marginBottom: "0.25rem" }}>
              {isArabic ? "المواقع الأثرية" : "Archaeological sites"}
            </p>
            <p className="font-heading font-bold" style={{ color: "var(--gold)", fontSize: isMobile ? "1.15rem" : "1.35rem" }}>
              48
            </p>
          </div>
          <div>
            <p className="font-body opacity-70" style={{ fontSize: isMobile ? "0.875rem" : "1rem", marginBottom: "0.25rem" }}>
              {isArabic ? "القرى التراثية" : "Heritage villages"}
            </p>
            <p className="font-heading font-bold" style={{ color: "var(--gold)", fontSize: isMobile ? "1.15rem" : "1.35rem" }}>
              📍 {isArabic ? "محافظة أحد رفيدة" : "Ahad Rafidah Governorate"}
            </p>
          </div>
          <div>
            <p className="font-body opacity-70" style={{ fontSize: isMobile ? "0.875rem" : "1rem", marginBottom: "0.25rem" }}>
              {isArabic ? "عدد سكانها" : "Its population"}
            </p>
            <p className="font-heading font-bold" style={{ color: "var(--gold)", fontSize: isMobile ? "1.15rem" : "1.35rem" }}>
              107,894 {isArabic ? "نسمة تقريباً" : "approx."}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
