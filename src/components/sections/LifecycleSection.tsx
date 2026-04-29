"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const PHASES = [
  {
    id: "before",
    label: "Vor dem Event",
    headline: "Wissen, wen Sie treffen sollten, bevor Sie anreisen",
    desc: "PREDICT analysiert das Event, bewertet sein Potenzial und baut Ihre priorisierte Account-Liste auf — Wochen vor Ihrer Abreise.",
    features: [
      "Event Readiness Score",
      "Event Profitability Forecast",
      "ICP-fit Account Universe",
      "Tier 1 / Tier 2 / Tier 3 Priorisierung",
      "Persona & Contact Discovery",
      "Event-spezifische Outreach-Nachrichten",
    ],
    color: "#0201FF",
    ui: (
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border border-[#0201FF]/20 bg-[#0201FF]/8 px-4 py-3">
          <div>
            <p className="text-[11px] font-semibold tracking-wider uppercase text-[#0201FF]">Event Readiness Score</p>
            <p className="text-[24px] font-bold text-[#EEF2F7] mt-0.5">87 / 100</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-[#4D5666]">Hannover Messe 2025</p>
            <p className="text-[13px] text-[#0201FF] font-medium mt-0.5">Empfohlen ✓</p>
          </div>
        </div>
        {[
          { name: "Siemens AG", tier: "T1", score: 96 },
          { name: "KION Group", tier: "T1", score: 91 },
          { name: "Bosch Rexroth", tier: "T2", score: 78 },
          { name: "Phoenix Contact", tier: "T2", score: 72 },
          { name: "Weidmüller", tier: "T3", score: 61 },
        ].map((acc, i) => (
          <motion.div
            key={acc.name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            className="flex items-center gap-3 rounded-lg border border-[#1E2530] bg-[#0F1318] px-3 py-2.5"
          >
            <span className={`text-[10px] font-bold rounded px-1.5 py-0.5 ${
              acc.tier === "T1" ? "bg-[#0201FF]/15 text-[#0201FF]" :
              acc.tier === "T2" ? "bg-[#E8A84A]/15 text-[#E8A84A]" :
              "bg-[#1E2530] text-[#4D5666]"
            }`}>
              {acc.tier}
            </span>
            <span className="flex-1 text-[13px] text-[#EEF2F7]">{acc.name}</span>
            <div className="w-16 h-1 rounded-full bg-[#1E2530]">
              <div
                className="h-full rounded-full bg-[#0201FF]"
                style={{ width: `${acc.score}%` }}
              />
            </div>
            <span className="text-[11px] text-[#4D5666] w-6 text-right">{acc.score}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: "during",
    label: "Während des Events",
    headline: "Jedes Gespräch wird verwertbar",
    desc: "Gebuchte Meetings, spontane Gesprächserfassung und Live-Priorisierung — während Sie auf dem Messestand stehen.",
    features: [
      "Meeting Calendar & Prep Notes",
      "Spontane Gesprächserfassung",
      "Interessenlevel & nächste Schritte",
      "Geschätzter Pipeline-Wert",
      "Echtzeit-Update der Account-Liste",
      "Team-Sync für alle Event-Teilnehmer",
    ],
    color: "#E8A84A",
    ui: (
      <div className="space-y-3">
        <div className="rounded-lg border border-[#E8A84A]/20 bg-[#E8A84A]/8 px-4 py-3">
          <p className="text-[11px] font-semibold tracking-wider uppercase text-[#E8A84A]">Meeting Calendar — Tag 2</p>
          <p className="text-[13px] text-[#8994A7] mt-1">Hannover Messe · Halle 9 · Stand B24</p>
        </div>
        {[
          { time: "09:30", company: "Siemens AG", person: "Jana Hofmann, VP Marketing", status: "done", pipeline: "€80k" },
          { time: "11:00", company: "KION Group", person: "Markus Bauer, Head of Sales", status: "now", pipeline: "€120k" },
          { time: "14:00", company: "Bosch Rexroth", person: "Stefan Klein, CMO", status: "upcoming", pipeline: "€60k" },
          { time: "15:30", company: "Lenze", person: "Andrea Müller, Einkauf", status: "upcoming", pipeline: "€45k" },
        ].map((m, i) => (
          <div key={i} className={`flex items-start gap-3 rounded-lg border px-3 py-2.5 ${
            m.status === "now" ? "border-[#E8A84A]/40 bg-[#E8A84A]/8" : "border-[#1E2530] bg-[#0F1318]"
          }`}>
            <span className="text-[11px] text-[#4D5666] font-mono mt-0.5 w-9">{m.time}</span>
            <div className="flex-1">
              <p className="text-[13px] font-medium text-[#EEF2F7]">{m.company}</p>
              <p className="text-[11px] text-[#4D5666]">{m.person}</p>
            </div>
            <div className="text-right">
              <p className="text-[12px] font-semibold text-[#0201FF]">{m.pipeline}</p>
              <span className={`text-[10px] font-semibold ${
                m.status === "done" ? "text-[#0201FF]" :
                m.status === "now" ? "text-[#E8A84A]" : "text-[#4D5666]"
              }`}>
                {m.status === "done" ? "✓ Erledigt" : m.status === "now" ? "● Jetzt" : "○ Geplant"}
              </span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "after",
    label: "Nach dem Event",
    headline: "Follow-up, bevor Chancen kalt werden",
    desc: "PREDICT segmentiert alle Kontakte, erstellt Follow-up-Sequenzen und trackt die Pipeline bis zum Abschluss.",
    features: [
      "Follow-up für getroffene Personen",
      "Reaktivierung für verpasste Meetings",
      "Pipeline Tracking bis Close",
      "ROI Report mit Learnings",
      "Optimierung für das nächste Event",
      "Vergleich: Forecast vs. Ergebnis",
    ],
    color: "#0201FF",
    ui: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Pipeline generiert", value: "€420k", sub: "+67% vs. Forecast" },
            { label: "Event ROI", value: "5.8×", sub: "Break-even: 5 Meetings" },
            { label: "Opportunities offen", value: "14", sub: "von 21 Meetings" },
            { label: "Follow-up gesendet", value: "100%", sub: "innerhalb 24h" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-[#1E2530] bg-[#0F1318] px-3 py-3">
              <p className="text-[10px] text-[#4D5666] uppercase tracking-wider font-medium">{stat.label}</p>
              <p className="text-[20px] font-bold text-[#0201FF] mt-0.5">{stat.value}</p>
              <p className="text-[11px] text-[#8994A7] mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-[#1E2530] bg-[#0F1318] px-4 py-3">
          <p className="text-[12px] font-semibold text-[#EEF2F7] mb-2">Follow-up Queue</p>
          {[
            { name: "KION Group", status: "Meeting gehalten", action: "NDA-Gespräch vereinbart", priority: "hot" },
            { name: "Lenze", status: "Verpasst", action: "Rescheduling angeboten", priority: "warm" },
            { name: "Pilz GmbH", status: "Gespräch am Stand", action: "Case Study gesendet", priority: "warm" },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-t border-[#1E2530]">
              <div className={`w-1.5 h-1.5 rounded-full ${f.priority === "hot" ? "bg-[#0201FF]" : "bg-[#E8A84A]"}`} />
              <div className="flex-1">
                <p className="text-[12px] font-medium text-[#EEF2F7]">{f.name}</p>
                <p className="text-[11px] text-[#4D5666]">{f.status} → {f.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function LifecycleSection() {
  const [activePhase, setActivePhase] = useState(0);
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
        03
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-5"
        >
          Event Lifecycle
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-[#EEF2F7] mb-12 max-w-2xl"
        >
          Von der Planung bis zum ROI Report
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-8">
          {PHASES.map((phase, i) => (
            <motion.button
              key={phase.id}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.07 }}
              onClick={() => setActivePhase(i)}
              className={`text-left rounded-xl border p-5 transition-all duration-200 ${
                activePhase === i
                  ? "border-[#0201FF]/50 bg-[#0201FF]/10 shadow-[inset_2px_0_0_#0201FF]"
                  : "border-[#1E2530] bg-[#0F1318] hover:border-[#2E3540]"
              }`}
            >
              <div className={`text-[10px] font-bold tracking-widest uppercase mb-2 ${
                activePhase === i ? "text-[#0201FF]" : "text-[#6A7889]"
              }`}>
                {["01", "02", "03"][i]}
              </div>
              <p className={`text-[15px] font-semibold ${activePhase === i ? "text-[#EEF2F7]" : "text-[#B0BCC9]"}`}>
                {phase.label}
              </p>
              <p className={`text-[12px] mt-1 ${activePhase === i ? "text-[#8994A7]" : "text-[#6A7889]"}`}>
                {phase.headline}
              </p>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl p-8"
          style={{
            border: '1px solid transparent',
            backgroundImage: 'linear-gradient(#0F1318, #0F1318), linear-gradient(145deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.02) 45%, rgba(255,255,255,0.06) 100%)',
            backgroundClip: 'padding-box, border-box',
            backgroundOrigin: 'padding-box, border-box',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={PHASES[activePhase].id + "-left"}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              <h3 className="text-[22px] font-bold text-[#EEF2F7] tracking-[-0.015em] mb-3">
                {PHASES[activePhase].headline}
              </h3>
              <p className="text-[15px] text-[#8994A7] leading-relaxed mb-6">
                {PHASES[activePhase].desc}
              </p>
              <ul className="space-y-2.5">
                {PHASES[activePhase].features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#EEF2F7]">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0201FF]" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={PHASES[activePhase].id + "-right"}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.25 }}
            >
              {PHASES[activePhase].ui}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
