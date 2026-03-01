"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSliderProps {
  images: string[];
  altBase: string;
}

export default function ImageSlider({ images, altBase }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, next, images.length]);

  if (images.length === 1) {
    return (
      <div className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden">
        <Image src={images[0]} alt={altBase} fill className="object-cover" sizes="90vw" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden group"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Images with crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${altBase} ${current + 1}`}
            fill
            className="object-cover"
            sizes="90vw"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(26,18,9,0.6) 0%, transparent 40%)" }}
      />

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        className="absolute start-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        style={{ background: "rgba(201,168,76,0.75)" }}
        aria-label="Previous"
      >
        <span className="text-lg font-bold" style={{ color: "var(--dark)" }}>‹</span>
      </button>
      <button
        onClick={next}
        className="absolute end-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        style={{ background: "rgba(201,168,76,0.75)" }}
        aria-label="Next"
      >
        <span className="text-lg font-bold" style={{ color: "var(--dark)" }}>›</span>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300 cursor-pointer"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              background: i === current ? "var(--gold)" : "rgba(240,226,176,0.4)",
            }}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div
        className="absolute top-4 end-4 z-20 px-3 py-1 rounded-full text-xs font-body"
        style={{ background: "rgba(26,18,9,0.7)", color: "var(--gold-light)" }}
      >
        {current + 1} / {images.length}
      </div>
    </div>
  );
}
