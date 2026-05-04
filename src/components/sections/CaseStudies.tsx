"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { CASES as ALL_CASES } from "@/lib/cases";

const CASES = ALL_CASES.filter((c) => c.available);

export function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = 400;
    el.scrollBy({ left: dir === "right" ? cardWidth : -cardWidth, behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="referenzen"
      className="relative py-24 px-6 bg-[#080B10] border-y border-[#1E2530] overflow-hidden scroll-mt-20"
    >
      {/* Decorative section number */}
      <div
        aria-hidden="true"
        className="absolute right-6 top-8 text-[160px] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(30, 37, 48, 0.6)", letterSpacing: "-0.04em" }}
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

        {/* Header row: subhead + arrows */}
        <div className="flex items-end justify-between gap-4 mb-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[17px] text-[#8994A7] max-w-xl"
          >
            Echte Ergebnisse von Teams, die aufgehört haben zu hoffen und angefangen haben zu planen.
          </motion.p>

          {/* Arrows — desktop only */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scrollByAmount("left")}
              disabled={!canPrev}
              aria-label="Vorherige Case Study"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                canPrev
                  ? "border-[#1E2530] text-[#8994A7] hover:text-[#EEF2F7] hover:border-[#2E3540] bg-[#0F1318]"
                  : "border-[#141920] text-[#3A4150] bg-[#0F1318] cursor-not-allowed"
              }`}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scrollByAmount("right")}
              disabled={!canNext}
              aria-label="Nächste Case Study"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                canNext
                  ? "border-[#1E2530] text-[#8994A7] hover:text-[#EEF2F7] hover:border-[#2E3540] bg-[#0F1318]"
                  : "border-[#141920] text-[#3A4150] bg-[#0F1318] cursor-not-allowed"
              }`}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.45 }}
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6 px-6 pb-2"
        >
          {CASES.map((c) => (
            <article
              key={c.slug}
              className="snap-start flex-shrink-0 w-[340px] md:w-[400px] rounded-2xl border border-[#1E2530] bg-[#080B10] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b border-[#1E2530]">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="min-w-0">
                    <p className="text-[14px] font-semibold text-[#EEF2F7] truncate">{c.company}</p>
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
                    <p className="text-[10px] text-[#4D5666] uppercase tracking-wider font-medium">
                      {r.label}
                    </p>
                    <p className="text-[22px] font-bold text-[#7BA3FF] mt-0.5 tabular-nums leading-tight">
                      {r.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pitch / quote */}
              <div className="px-6 py-5 flex-1 flex flex-col justify-between">
                <p
                  className={`text-[14px] text-[#8994A7] leading-relaxed mb-4 ${
                    c.quoteIsPlaceholder ? "" : "italic"
                  }`}
                >
                  {c.quoteIsPlaceholder ? c.quote : `“${c.quote}”`}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-[12px] text-[#4D5666]">{c.author}</p>
                  <a
                    href={`/referenzen/${c.slug}`}
                    className="text-[12px] font-medium text-[#7BA3FF] hover:text-[#EEF2F7] flex items-center gap-1 transition-colors"
                  >
                    Case Study lesen
                    <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                      <path
                        d="M2 6H10M7 3L10 6L7 9"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/referenzen"
            className="group flex items-center gap-2 text-[14px] font-medium text-[#EEF2F7] border border-[#1E2530] hover:border-[#2E3540] bg-[#0F1318] hover:bg-[#161B24] rounded-xl px-5 py-3 transition-all"
          >
            Alle Referenzen ansehen
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 14 14">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
