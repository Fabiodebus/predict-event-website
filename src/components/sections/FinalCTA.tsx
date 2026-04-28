"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative rounded-2xl border border-[#0201FF]/20 bg-[#0F1318] overflow-hidden text-center py-16 px-8"
      >
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#0201FF]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-32 bg-[#0201FF]/5 rounded-full blur-2xl pointer-events-none" />

        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#1E2530 1px, transparent 1px), linear-gradient(90deg, #1E2530 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.15,
          }}
        />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0201FF]/30 bg-[#0201FF]/10 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0201FF] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#0201FF]">
              Jetzt starten
            </span>
          </div>

          <h2 className="text-[36px] md:text-[52px] font-bold leading-[1.08] tracking-[-0.025em] text-[#EEF2F7] mb-5">
            Das nächste Event ist zu teuer,
            <br />
            um es dem Zufall zu überlassen.
          </h2>

          <p className="text-[17px] text-[#8994A7] max-w-xl mx-auto mb-10">
            Starten Sie mit Ihrem nächsten Event. PREDICT analysiert das Potenzial,
            identifiziert ICP-Accounts und hilft Ihnen, Meetings zu buchen — bevor Sie abreisen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#"
              className="group flex items-center gap-2 bg-[#0201FF] hover:bg-[#0101D4] text-white font-semibold text-[15px] rounded-xl px-7 py-4 transition-all duration-150 active:scale-[0.98] shadow-lg shadow-[#0201FF]/25"
            >
              Event kostenlos bewerten
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border border-[#1E2530] hover:border-[#2E3540] text-[#EEF2F7] font-medium text-[15px] rounded-xl px-7 py-4 transition-all duration-150"
            >
              Demo buchen
            </a>
          </div>

          <p className="text-[12px] text-[#4D5666] mt-5">
            Kein Commitment. Kein Credit Card. Erste Einschätzung innerhalb von 24 Stunden.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
