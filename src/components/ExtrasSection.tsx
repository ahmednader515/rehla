"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ExtrasSection() {
  const { isArabic } = useLanguage();

  return (
    <section
      className="relative z-10 px-4 pb-16 min-h-screen flex flex-col"
      style={{
        paddingTop: "2rem",
      }}
    >
      {/* Background image — no dark overlay, GPU-composited to avoid scroll lag */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ zIndex: 0 }}
      >
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
        className="text-center mb-10"
        style={{ position: "relative", zIndex: 1 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="font-heading text-3xl md:text-4xl font-bold"
          style={{ color: "var(--gold)", marginBottom: "1.5rem" }}
        >
          {isArabic ? "المحتوى" : "Content"}
        </h2>
      </motion.div>

      {/* Two cards side by side */}
      <div
        className="flex flex-col md:flex-row gap-6 w-full max-w-5xl"
        style={{ marginLeft: "auto", marginRight: "auto", position: "relative", zIndex: 1 }}
      >
        {/* Right card — quote image */}
        <motion.div
          className="relative flex-1 rounded-2xl overflow-hidden"
          style={{
            minHeight: "520px",
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
            alt={isArabic ? "رحلة صعود عسير" : "Asir Rise Journey"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Left card — prince photo */}
        <motion.div
          className="relative rounded-2xl overflow-hidden flex flex-col"
          style={{
            minHeight: "520px",
            width: "100%",
            maxWidth: "320px",
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
          <div className="relative w-full flex-1" style={{ minHeight: "380px" }}>
            <Image
              src="/images/extras-2.png"
              alt={isArabic ? "أمير منطقة عسير" : "Governor of Asir Region"}
              fill
              className="object-cover object-top"
              sizes="320px"
            />
          </div>

          <div className="w-full text-center px-6" style={{ paddingTop: "1.25rem", paddingBottom: "2rem" }}>
            <p
              className="font-heading text-xl font-bold leading-relaxed"
              style={{ color: "var(--gold)" }}
            >
              {isArabic
                ? "الأمير تركي بن طلال بن عبدالعزيز"
                : "Prince Turki bin Talal bin Abdulaziz"}
            </p>
            <p
              className="font-body text-base opacity-70 mt-2"
              style={{ color: "var(--gold-light)" }}
            >
              {isArabic ? "أمير منطقة عسير" : "Governor of Asir Region"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
