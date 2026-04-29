"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CASES = [
  {
    company: "Industrieausrüster GmbH",
    segment: "Maschinenbau",
    event: "Hannover Messe 2024",
    quote: "Zum ersten Mal konnten wir nach der Messe sagen: Diese Meetings waren die Pipeline wert.",
    author: "VP Sales",
    results: [
      { label: "Accounts identifiziert", value: "87" },
      { label: "Meetings vor dem Event", value: "24" },
      { label: "Pipeline nach 30 Tagen", value: "€420k" },
      { label: "Event ROI", value: "5.8×" },
    ],
  },
  {
    company: "B2B SaaS GmbH",
    segment: "Software & Tech",
    event: "SaaStr Europa 2024",
    quote: "PREDICT hat uns gezeigt, wie viele relevante Unternehmen wirklich auf SaaStr waren — das hatten wir vorher nie.",
    author: "Head of Field Marketing",
    results: [
      { label: "ICP Accounts gefunden", value: "64" },
      { label: "Meetings gebucht", value: "18" },
      { label: "Opportunities geöffnet", value: "11" },
      { label: "Pipeline generiert", value: "€290k" },
    ],
  },
  {
    company: "IT-Beratung AG",
    segment: "IT Services",
    event: "CeBIT Frankfurt 2024",
    quote: "Wir haben das erste Mal überhaupt einen echten ROI aus einer Messe berechnen können.",
    author: "CMO",
    results: [
      { label: "Accounts priorisiert", value: "52" },
      { label: "Vorab-Meetings", value: "14" },
      { label: "Event ROI", value: "4.2×" },
      { label: "Pipeline", value: "€180k" },
    ],
  },
];

export function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 px-6 bg-[#080B10] border-y border-[#1E2530] overflow-hidden">
      {/* Decorative section number */}
      <div
        aria-hidden="true"
        className="absolute right-6 top-8 text-[160px] font-black leading-none select-none pointer-events-none"
        style={{ color: 'rgba(30, 37, 48, 0.6)', letterSpacing: '-0.04em' }}
      >
        06
      </div>
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1E2530 1px, transparent 1px), linear-gradient(90deg, #1E2530 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.18,
          maskImage: "radial-gradient(ellipse 100% 60% at 50% 0%, black 10%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 100% 60% at 50% 0%, black 10%, transparent 100%)",
        }}
      />
      {/* Ambient glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: [0, 0.09, 0.04] } : { opacity: 0 }}
        transition={{ duration: 2.8, ease: "easeOut", times: [0, 0.4, 1] }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-[#0201FF] rounded-full blur-[100px] pointer-events-none"
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-5"
        >
          Ergebnisse
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="text-[36px] md:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-[#EEF2F7] mb-4 max-w-3xl"
        >
          Wie B2B-Teams mit PREDICT Events in Pipeline verwandeln
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-[17px] text-[#8994A7] max-w-xl mb-14"
        >
          Echte Ergebnisse von Teams, die aufgehört haben zu hoffen und angefangen haben zu planen.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 + i * 0.1, duration: 0.45 }}
              className="rounded-2xl border border-[#1E2530] bg-[#080B10] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b border-[#1E2530]">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[14px] font-semibold text-[#EEF2F7]">{c.company}</p>
                    <p className="text-[12px] text-[#4D5666] mt-0.5">{c.segment}</p>
                  </div>
                  <span className="text-[10px] font-medium rounded border border-[#1E2530] bg-[#0F1318] px-2 py-1 text-[#8994A7] whitespace-nowrap">
                    {c.event}
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 p-5 border-b border-[#1E2530]">
                {c.results.map((r) => (
                  <div key={r.label} className="rounded-lg border border-[#1E2530] bg-[#0F1318] px-3 py-3">
                    <p className="text-[10px] text-[#4D5666] uppercase tracking-wider font-medium">{r.label}</p>
                    <p className="text-[20px] font-bold text-[#0201FF] mt-0.5">{r.value}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="px-6 py-5 flex-1 flex flex-col justify-between">
                <blockquote className="text-[14px] text-[#8994A7] leading-relaxed mb-4 italic">
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <p className="text-[12px] text-[#4D5666]">— {c.author}</p>
                  <a
                    href="#"
                    className="text-[12px] font-medium text-[#0201FF] hover:underline flex items-center gap-1"
                  >
                    Case Study lesen
                    <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
