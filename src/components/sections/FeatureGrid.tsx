"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="8" stroke="#0201FF" strokeWidth="1.5"/>
        <path d="M10 6V10L13 12" stroke="#0201FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Event Readiness Score",
    desc: "Erkennen Sie früh, ob genug Zeit und Daten für eine sinnvolle Event-Pipeline vorhanden sind.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="#0201FF" strokeWidth="1.5"/>
        <path d="M7 7H13M7 10H11M7 13H10" stroke="#0201FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Account Universe Builder",
    desc: "Kombiniert Event-Quellen, CRM-Daten und öffentliche Signale zu einer priorisierten Account-Liste.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <circle cx="8" cy="7" r="4" stroke="#0201FF" strokeWidth="1.5"/>
        <path d="M12 7C12 4.79 13.79 3 16 3" stroke="#0201FF" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
        <path d="M2 17C2 14.24 4.69 12 8 12C9.26 12 10.43 12.36 11.4 12.96" stroke="#0201FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Persona & Contact Discovery",
    desc: "Findet relevante Ansprechpartner pro Account mit Begründung, warum jetzt kontaktieren.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M4 6C4 4.9 4.9 4 6 4H14C15.1 4 16 4.9 16 6V9C16 13.42 12.5 17.17 8 18C3.5 17.17 0 13.42 0 9" stroke="#0201FF" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M17 3L19 5L14 10" stroke="#0201FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(-1 -1)"/>
      </svg>
    ),
    title: "Event POV Generator",
    desc: "Erstellt account- und event-spezifische Gesprächsanlässe, die nicht generisch wirken.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M3 4H17M5 8H15M7 12H13" stroke="#0201FF" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 16L12 14M12 14L14 12M12 14L10 12M12 14L14 16" stroke="#0201FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Outreach Queue",
    desc: "Generiert E-Mail- und LinkedIn-Sequenzen für Tier 1, Tier 2 und Tier 3 Accounts.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <rect x="3" y="4" width="14" height="13" rx="2" stroke="#0201FF" strokeWidth="1.5"/>
        <path d="M7 2V5M13 2V5M3 8H17" stroke="#0201FF" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 12H9M11 12H13M7 15H9" stroke="#0201FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Event Meeting Calendar",
    desc: "Organisiert gebuchte Meetings, Prep Notes und Gesprächsstatus in einem Event-Workspace.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M3 17L7 13L10 15L17 8" stroke="#0201FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 8H13M17 8V12" stroke="#0201FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Post-Event Follow-up",
    desc: "Segmentiert alle Kontakte nach Event-Status und erstellt passende nächste Schritte.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M4 15L7 9L10 12L13 7L16 10" stroke="#0201FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="#0201FF" strokeWidth="1.5"/>
      </svg>
    ),
    title: "ROI Report",
    desc: "Zeigt Meetings, Opportunities, Pipeline, Eventkosten, ROI und Learnings für das nächste Event.",
  },
];

export function FeatureGrid() {
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
        05
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-5"
        >
          Features
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="text-[36px] md:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-[#EEF2F7] mb-4 max-w-2xl"
        >
          Von Event Research bis ROI Report in einem Workflow
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-[17px] text-[#8994A7] max-w-xl mb-14"
        >
          Kein Tool-Flickwerk. Ein Workspace für den gesamten Event-Pipeline-Prozess.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              className="group rounded-xl border border-[#1E2530] bg-[#0F1318] p-5 hover:border-[#0201FF]/25 hover:bg-[#0201FF]/4 transition-all duration-200"
            >
              <div className="mb-3 group-hover:scale-110 transition-transform duration-200 origin-left">
                {feature.icon}
              </div>
              <h3 className="text-[14px] font-semibold text-[#EEF2F7] mb-2">{feature.title}</h3>
              <p className="text-[13px] text-[#8994A7] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
