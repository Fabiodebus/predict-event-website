"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PROBLEMS = [
  {
    title: "Pipeline-Arbeit startet erst auf der Messe",
    desc: "Zu spät. Zu wenig Kontext. Zu wenig Kontrolle.",
  },
  {
    title: "Keine klaren Ziel-Unternehmen",
    desc: "Wer ist wirklich anwesend und relevant? Niemand weiß es genau.",
  },
  {
    title: "Leere Kalender",
    desc: "Gespräche entstehen vor Ort durch Zufall — nicht durch Planung.",
  },
  {
    title: "Kein klarer ROI",
    desc: "Wie viel qualifizierte Pipeline und Umsatz kam aus diesem Event? Unklar.",
  },
  {
    title: "Visitenkarten statt Pipeline",
    desc: "Kontakte werden gesammelt, aber nicht in echte Pipeline konvertiert.",
  },
  {
    title: "Sales & Marketing arbeiten aneinander vorbei",
    desc: "Keine gemeinsame Priorisierung. Keine klare Strategie vor, während und nach dem Event.",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 px-6 overflow-hidden">
      {/* Decorative section number */}
      <div
        aria-hidden="true"
        className="absolute right-6 top-8 text-[160px] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(30, 37, 48, 0.6)", letterSpacing: "-0.04em" }}
      >
        01
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-5"
        >
          Das Problem
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[34px] md:text-[42px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.025em] text-[#EEF2F7] mb-6 max-w-3xl"
        >
          Messen & Events werden jedes Jahr teurer, die Resultate jedoch oft dem Zufall überlassen.
        </motion.h2>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[16px] md:text-[17px] text-[#8994A7] leading-relaxed max-w-2xl mb-10"
        >
          Viele B2B-Unternehmen investieren 5- bis 6-stellige Beträge pro Event —
          ohne zu wissen, ob daraus tatsächlich Pipeline und Umsatz entsteht.
        </motion.p>

        {/* Editorial problem index */}
        <div className="border-t border-[#1E2530]">
          {PROBLEMS.map((prob, i) => (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
              className="grid grid-cols-[auto_1fr] gap-x-8 md:gap-x-14 py-5 md:py-6 border-b border-[#1E2530] group"
            >
              <span className="text-[13px] md:text-[14px] font-medium tabular-nums tracking-[0.08em] text-[#4D5666] pt-1.5 group-hover:text-[#7BA3FF] transition-colors duration-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#EEF2F7] mb-2">
                  {prob.title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#8994A7] leading-relaxed max-w-2xl">
                  {prob.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Felt-reality split quote */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="relative mt-14 py-12 border-y border-[#1E2530]"
        >
          <p className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[#4D5666] mb-6 text-center">
            Die gefühlte Wahrheit
          </p>
          <div className="grid grid-cols-2 max-w-3xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1E2530]" />
            <p className="text-[20px] md:text-[26px] lg:text-[30px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#EEF2F7] pr-8 md:pr-10 text-right">
              Mal gehen Sie<br />
              mit neuen Kunden<br />
              nach Hause.
            </p>
            <p className="text-[20px] md:text-[26px] lg:text-[30px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#5D6675] pl-8 md:pl-10 text-left">
              Mal mit einem<br />
              Stapel irrelevanter<br />
              Visitenkarten.
            </p>
          </div>
        </motion.div>

        {/* Closing — bare typography, no card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative mt-12 pl-6"
        >
          <div className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-transparent via-[#0201FF] to-transparent" />
          <p className="text-[20px] md:text-[26px] lg:text-[28px] font-medium leading-[1.35] tracking-[-0.01em] text-[#EEF2F7] max-w-3xl">
            Das Problem ist nicht das Event.{" "}
            <span className="text-[#8994A7]">
              Das Problem ist, dass es nicht wie ein Pipeline-Kanal gesteuert wird.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
