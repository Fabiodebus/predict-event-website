"use client";

import { motion } from "framer-motion";
import { ProductJourneyWindow } from "@/components/sections/ProductJourneyWindow";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1E2530 1px, transparent 1px), linear-gradient(90deg, #1E2530 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.25,
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      {/* Radial glow center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0201FF]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-[#0201FF]/3 rounded-full blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#0201FF]/30 bg-[#0201FF]/10 px-4 py-1.5 mb-7"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#7BA3FF] animate-pulse" />
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#7BA3FF]">
            PREDICT Event AI
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[52px] md:text-[68px] lg:text-[76px] font-bold leading-[1.0] tracking-[-0.03em] text-[#EEF2F7] mb-6"
        >
          Machen Sie jedes Event
          <br />
          <span className="bg-gradient-to-br from-[#5580FF] via-[#2240FF] to-[#0201FF] bg-clip-text text-transparent">
            zu planbarer Pipeline
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-[18px] md:text-[20px] text-[#8994A7] leading-relaxed max-w-3xl mx-auto mb-10"
        >
          B2B-Unternehmen nutzen Event AI, um relevante Accounts zu identifizieren,
          Termine zu buchen und Events in messbare Pipeline zu verwandeln.
          <br />
          — noch bevor die Messe startet.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.48 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#"
            className="group flex items-center gap-2 bg-[#0201FF] hover:bg-[#0101D4] text-white font-semibold text-[15px] rounded-xl px-6 py-3.5 transition-all duration-150 active:scale-[0.98] shadow-lg shadow-[#0201FF]/20"
          >
            Event kostenlos prüfen
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 border border-[#1E2530] hover:border-[#2E3540] text-[#EEF2F7] font-medium text-[15px] rounded-xl px-6 py-3.5 transition-all duration-150 bg-[#0F1318]/60 hover:bg-[#0F1318]"
          >
            <svg className="w-4 h-4 text-[#0201FF]" fill="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6.5 5.5L11 8L6.5 10.5V5.5Z" fill="currentColor"/>
            </svg>
            Demo ansehen
          </a>
        </motion.div>

      </div>

      {/* Product journey window */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-6xl mx-auto mt-16"
      >
        <ProductJourneyWindow />
      </motion.div>
    </section>
  );
}
