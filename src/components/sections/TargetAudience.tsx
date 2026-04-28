"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const PERSONAS = [
  {
    id: "marketing",
    label: "Field Marketing",
    role: "Field Marketing & Marketing",
    icon: (
      <svg width="80" height="80" fill="none" viewBox="0 0 22 22">
        <path d="M11 3L19 7V11C19 15.42 15.5 19.17 11 20C6.5 19.17 3 15.42 3 11V7L11 3Z" stroke="#0201FF" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M8 11L10 13L14 9" stroke="#0201FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    message: "Zeigen Sie nicht nur, dass Ihr Team auf Events präsent war. Zeigen Sie, welche Pipeline daraus entstanden ist.",
    features: [
      "Event-ROI per Kanal",
      "Budget-Justifikation gegenüber CFO",
      "Pipeline-Attribution pro Event",
      "Benchmark-Reports für Folgejahre",
    ],
  },
  {
    id: "sales",
    label: "Sales & BD",
    role: "Sales & Business Development",
    icon: (
      <svg width="80" height="80" fill="none" viewBox="0 0 22 22">
        <circle cx="11" cy="8" r="4" stroke="#0201FF" strokeWidth="1.2"/>
        <path d="M3 19C3 15.68 6.58 13 11 13C15.42 13 19 15.68 19 19" stroke="#0201FF" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    message: "Kommen Sie nicht mit Hoffnung zum Event. Kommen Sie mit einem priorisierten Account-Plan und gebuchten Gesprächen.",
    features: [
      "Priorisierte Account-Liste vor Anreise",
      "Kontakt Discovery & Outreach",
      "Meeting-Buchung vor Ort",
      "Prep Notes pro Gespräch",
    ],
  },
  {
    id: "leadership",
    label: "Leadership",
    role: "Leadership & Geschäftsführung",
    icon: (
      <svg width="80" height="80" fill="none" viewBox="0 0 22 22">
        <path d="M4 16L8 10L12 13L16 7L20 10" stroke="#0201FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 19H20" stroke="#0201FF" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    message: "Entscheiden Sie datenbasiert, welche Events sich lohnen und welche nicht — bevor Budget, Reisezeit und Kapazität investiert werden.",
    features: [
      "Event Profitability Score",
      "ROI Forecast pro Event",
      "Budget-Rechtfertigung in Board-Meetings",
      "Vergleich Forecast vs. tatsächliches Ergebnis",
    ],
  },
  {
    id: "revops",
    label: "Revenue & GTM",
    role: "Revenue & GTM Teams",
    icon: (
      <svg width="80" height="80" fill="none" viewBox="0 0 22 22">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#0201FF" strokeWidth="1.2"/>
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="#0201FF" strokeWidth="1.2"/>
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="#0201FF" strokeWidth="1.2"/>
        <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="#0201FF" strokeWidth="1.2"/>
      </svg>
    ),
    message: "Machen Sie Events zu einem wiederholbaren GTM-Kanal statt zu isolierten Einzelaktionen ohne Pipeline-Rückverfolgung.",
    features: [
      "Standardisiertes GTM Playbook",
      "CRM-Integration (Salesforce, HubSpot)",
      "End-to-End Pipeline Tracking",
      "Multi-Touch Kanal-Attribution",
    ],
  },
];

export function TargetAudience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activePersona, setActivePersona] = useState(0);

  const persona = PERSONAS[activePersona];

  return (
    <section ref={ref} className="relative py-24 px-6 bg-[#0F1318] border-y border-[#1E2530] overflow-hidden">
      {/* Decorative section number */}
      <div
        aria-hidden="true"
        className="absolute right-6 top-8 text-[160px] font-black leading-none select-none pointer-events-none"
        style={{ color: 'rgba(30, 37, 48, 0.6)', letterSpacing: '-0.04em' }}
      >
        04
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-5"
        >
          Für wen
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-[#EEF2F7] mb-4 max-w-3xl"
        >
          Für B2B-Unternehmen, bei denen jedes Event zählen muss
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-[16px] md:text-[17px] text-[#8994A7] leading-relaxed max-w-2xl mb-12"
        >
          PREDICT ist gebaut für Unternehmen mit erklärungsbedürftigen Produkten,
          einem Average Contract Value ab ca. 10.000 € und dem Anspruch,
          Events als messbaren Vertriebs- und Marketingkanal zu nutzen.
        </motion.p>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="flex gap-0 border-b border-[#1E2530] mb-10 overflow-x-auto scrollbar-none"
        >
          {PERSONAS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActivePersona(i)}
              className={`px-4 sm:px-5 py-3 text-[13px] sm:text-[14px] whitespace-nowrap transition-all duration-150 -mb-px ${
                activePersona === i
                  ? "border-b-2 border-[#0201FF] text-[#EEF2F7] font-semibold"
                  : "border-b-2 border-transparent text-[#8994A7] hover:text-[#B0BCC9] font-medium"
              }`}
            >
              {p.label}
            </button>
          ))}
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={persona.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-14"
          >
            {/* Left: role, quote, features */}
            <div className="lg:col-span-5">
              <h3 className="text-[22px] md:text-[26px] lg:text-[28px] font-bold text-[#EEF2F7] tracking-[-0.015em] mb-5 md:mb-6">
                {persona.role}
              </h3>
              <p className="text-[17px] md:text-[20px] lg:text-[22px] text-[#B0BCC9] leading-[1.45] mb-8 md:mb-10 max-w-2xl">
                {persona.message}
              </p>

              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-4">
                Was PREDICT Ihnen zeigt
              </p>
              <ul className="space-y-3">
                {persona.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-[#EEF2F7]">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0201FF]" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: decorative icon panel */}
            <div className="lg:col-span-3 hidden lg:flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[280px] flex items-center justify-center">
                {/* Soft glow behind icon */}
                <div className="absolute inset-0 bg-[#0201FF]/8 rounded-full blur-3xl" />
                {/* Outer ring */}
                <div className="absolute inset-6 rounded-full border border-[#1E2530]" />
                {/* Inner ring */}
                <div className="absolute inset-14 rounded-full border border-[#1E2530]/60" />
                {/* Icon with subtle blue drop-shadow glow */}
                <div className="relative z-10 drop-shadow-[0_0_24px_rgba(2,1,255,0.45)]">
                  {persona.icon}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
