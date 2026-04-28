"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PROBLEMS = [
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M10 3V10L14 14" stroke="#E85050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="10" r="8" stroke="#E85050" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Zu spät gestartet",
    desc: "Die Pipeline-Arbeit beginnt erst, wenn das Event schon läuft — oder vorbei ist.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M4 10H16M4 6H10M4 14H8" stroke="#E8A84A" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="15" cy="14" r="3" stroke="#E8A84A" strokeWidth="1.5"/>
        <path d="M15 13V15M15 16V16.01" stroke="#E8A84A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Keine klare Zielaccount-Liste",
    desc: "Wer soll angesprochen werden? Teams fahren ohne Priorisierung, ohne ICP-Fit.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <rect x="3" y="4" width="14" height="12" rx="2" stroke="#E85050" strokeWidth="1.5"/>
        <path d="M7 9L9 11L13 7" stroke="#E85050" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 8H17" stroke="#E85050" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Zu wenige gebuchte Meetings",
    desc: "Gespräche entstehen durch Zufall statt durch Vorbereitung — der Messestand wartet.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M10 3L17 16H3L10 3Z" stroke="#E8A84A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 9V12" stroke="#E8A84A" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="14.5" r="0.5" fill="#E8A84A" stroke="#E8A84A"/>
      </svg>
    ),
    title: "Kein messbarer ROI",
    desc: "Wie viel Pipeline kam aus diesem Event? Niemand weiß es — Budget für nächstes Jahr unsicher.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M7 3H13M5 7H15M3 11H17" stroke="#4D5666" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 15H15" stroke="#4D5666" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
    title: "Schwaches Follow-up",
    desc: "Visitenkarten verschwinden im Stapel. Follow-ups kommen zu spät oder gar nicht.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <circle cx="8" cy="8" r="5" stroke="#4D5666" strokeWidth="1.5"/>
        <path d="M13 13L17 17" stroke="#4D5666" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 8H10M8 6V10" stroke="#4D5666" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Sales und Marketing nicht aligned",
    desc: "Field Marketing plant den Stand. Sales weiß nicht, welche Accounts priorisiert werden sollen.",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden">
      {/* Decorative section number */}
      <div
        aria-hidden="true"
        className="absolute right-6 top-8 text-[160px] font-black leading-none select-none pointer-events-none"
        style={{ color: 'rgba(30, 37, 48, 0.6)', letterSpacing: '-0.04em' }}
      >
        01
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section label */}
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
          className="text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-[#EEF2F7] mb-6 max-w-3xl"
        >
          Die meisten Events werden zu spät verkauft
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[16px] md:text-[17px] text-[#8994A7] leading-relaxed max-w-2xl mb-12"
        >
          Viele B2B-Teams investieren erhebliches Budget in Messen und Konferenzen.
          Aber die eigentliche Pipeline-Arbeit beginnt oft erst, wenn das Event schon läuft oder vorbei ist.
        </motion.p>

        {/* Problem grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEMS.map((prob, i) => (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className="rounded-xl border border-[#1E2530] bg-[#0F1318] p-5 hover:border-[#2E3540] transition-colors duration-200"
            >
              <div className="mb-3">{prob.icon}</div>
              <h3 className="text-[14px] font-semibold text-[#EEF2F7] mb-1.5">{prob.title}</h3>
              <p className="text-[13px] text-[#8994A7] leading-relaxed">{prob.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Key line */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-12 rounded-xl border border-[#1E2530] bg-[#0F1318] px-6 py-5 relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#0201FF] to-transparent" />
          <p className="text-[16px] md:text-[18px] text-[#EEF2F7] font-medium leading-relaxed pl-4">
            Das Event ist selten das Problem.{" "}
            <span className="text-[#8994A7]">
              Das Problem ist, dass es nicht wie ein Pipeline-Kanal gesteuert wird.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

