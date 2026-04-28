"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ACCOUNTS_ALL = [
  { name: "Siemens AG", tier: 1, evidence: "Aussteller", score: 96, tags: ["Aussteller", "Speaker", "ICP-Fit hoch"] },
  { name: "KION Group", tier: 1, evidence: "Aussteller", score: 91, tags: ["Aussteller", "ICP-Fit hoch"] },
  { name: "Bosch Rexroth", tier: 1, evidence: "Speaker", score: 88, tags: ["Speaker", "Vorjahresteilnehmer"] },
  { name: "Continental AG", tier: 1, evidence: "Sponsor", score: 85, tags: ["Sponsor", "LinkedIn Post"] },
  { name: "Phoenix Contact", tier: 2, evidence: "LinkedIn Post", score: 78, tags: ["LinkedIn Post", "Vorjahr"] },
  { name: "Weidmüller", tier: 2, evidence: "Vorjahresteilnehmer", score: 74, tags: ["Vorjahresteilnehmer"] },
  { name: "Lenze SE", tier: 2, evidence: "ICP-Fit", score: 71, tags: ["ICP-Fit hoch", "Region"] },
  { name: "Sick AG", tier: 2, evidence: "ICP-Fit", score: 68, tags: ["ICP-Fit hoch"] },
  { name: "Festo SE", tier: 3, evidence: "ICP-Fit", score: 62, tags: ["ICP-Fit mittel", "Region relevant"] },
  { name: "Harting Group", tier: 3, evidence: "ICP-Fit", score: 58, tags: ["ICP-Fit mittel"] },
  { name: "Wago GmbH", tier: 3, evidence: "Region", score: 55, tags: ["Region relevant"] },
];

const TIER_LABELS = {
  1: { label: "Tier 1 — Bestätigte Teilnehmer", color: "#0201FF", bg: "bg-[#0201FF]/10", border: "border-[#0201FF]/20", badgeColor: "bg-[#0201FF]/15 text-[#0201FF]" },
  2: { label: "Tier 2 — Wahrscheinliche Teilnehmer", color: "#E8A84A", bg: "bg-[#E8A84A]/10", border: "border-[#E8A84A]/20", badgeColor: "bg-[#E8A84A]/15 text-[#E8A84A]" },
  3: { label: "Tier 3 — ICP-fit rund ums Event", color: "#8994A7", bg: "bg-[#1E2530]", border: "border-[#1E2530]", badgeColor: "bg-[#1E2530] text-[#8994A7]" },
};

const MESSAGES = {
  1: '"Wir haben gesehen, dass Ihr Team auf [Event] vertreten ist ..."',
  2: '"Nicht sicher, ob Sie dieses Jahr wieder auf [Event] sind ..."',
  3: '"Wir sind rund um [Event] in [Stadt] und treffen einige [ICP]-Teams ..."',
};

export function AccountTiering() {
  const [sorted, setSorted] = useState(false);
  const [hoveredAccount, setHoveredAccount] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const displayedAccounts = sorted ? [...ACCOUNTS_ALL].sort((a, b) => a.tier - b.tier || b.score - a.score) : ACCOUNTS_ALL;

  return (
    <section ref={ref} className="py-24 px-6 bg-[#0F1318] border-y border-[#1E2530]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-5"
        >
          Evidence-Backed Targeting
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="text-[36px] md:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-[#EEF2F7] mb-4 max-w-3xl"
        >
          Jeder Account braucht einen belegbaren Grund
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-[17px] text-[#8994A7] max-w-2xl mb-10"
        >
          PREDICT bewertet Accounts nicht blind. Jede Empfehlung basiert auf Event-Evidenz,
          ICP-Fit und kommerzieller Relevanz.
        </motion.p>

        {/* Tier explainer cards */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          {([1, 2, 3] as const).map((tier) => {
            const t = TIER_LABELS[tier];
            return (
              <div key={tier} className={`rounded-xl border ${t.border} ${t.bg} p-4`}>
                <div className={`inline-block text-[10px] font-bold rounded px-2 py-0.5 mb-2 ${t.badgeColor}`}>
                  {["Tier 1", "Tier 2", "Tier 3"][tier - 1]}
                </div>
                <p className="text-[13px] font-semibold text-[#EEF2F7] mb-1.5">{t.label.split("—")[1].trim()}</p>
                <p className="text-[12px] text-[#8994A7] italic leading-relaxed">{MESSAGES[tier]}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Sort button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
          className="flex items-center gap-3 mb-4"
        >
          <button
            onClick={() => setSorted(!sorted)}
            className={`flex items-center gap-2 text-[13px] font-medium rounded-lg border px-4 py-2 transition-all duration-200 ${
              sorted
                ? "border-[#0201FF]/30 bg-[#0201FF]/10 text-[#0201FF]"
                : "border-[#1E2530] bg-[#080B10] text-[#8994A7] hover:text-[#EEF2F7]"
            }`}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
              <path d="M2 4H12M4 7H10M6 10H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            {sorted ? "Accounts sortiert nach Tier ✓" : "Nach Tier sortieren"}
          </button>
          <p className="text-[12px] text-[#4D5666]">
            {ACCOUNTS_ALL.length} relevante Accounts identifiziert
          </p>
        </motion.div>

        {/* Account list */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-[#1E2530] bg-[#080B10] overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-12 gap-3 px-5 py-3 border-b border-[#1E2530] bg-[#0F1318]">
            {["Account", "Tier", "Evidence", "Tags", "ICP Score"].map((h, i) => (
              <span
                key={h}
                className={`text-[10px] font-semibold tracking-widest uppercase text-[#4D5666] ${
                  i === 0 ? "col-span-3" : i === 1 ? "col-span-1" : i === 2 ? "col-span-2" : i === 3 ? "col-span-4" : "col-span-2"
                }`}
              >
                {h}
              </span>
            ))}
          </div>

          <AnimatePresence>
            {displayedAccounts.map((acc, i) => {
              const t = TIER_LABELS[acc.tier as 1 | 2 | 3];
              return (
                <motion.div
                  key={acc.name}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ layout: { duration: 0.35, ease: "easeInOut" }, opacity: { duration: 0.2 } }}
                  onMouseEnter={() => setHoveredAccount(acc.name)}
                  onMouseLeave={() => setHoveredAccount(null)}
                  className={`grid grid-cols-12 gap-3 px-5 py-3 border-b border-[#1E2530]/50 transition-colors duration-150 cursor-default ${
                    hoveredAccount === acc.name ? "bg-[#0F1318]" : ""
                  }`}
                >
                  <span className="col-span-3 text-[13px] font-medium text-[#EEF2F7]">{acc.name}</span>
                  <span className={`col-span-1 text-[10px] font-bold rounded px-1.5 py-0.5 h-fit self-center ${t.badgeColor}`}>
                    T{acc.tier}
                  </span>
                  <span className="col-span-2 text-[12px] text-[#8994A7] self-center">{acc.evidence}</span>
                  <div className="col-span-4 flex flex-wrap gap-1 self-center">
                    {acc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium rounded border border-[#1E2530] bg-[#0F1318] px-2 py-0.5 text-[#4D5666]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="col-span-2 flex items-center gap-2 self-center">
                    <div className="flex-1 h-1 rounded-full bg-[#1E2530]">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${acc.score}%`,
                          backgroundColor: acc.score >= 85 ? "#0201FF" : acc.score >= 70 ? "#E8A84A" : "#4D5666",
                        }}
                      />
                    </div>
                    <span className="text-[11px] text-[#8994A7] w-6 text-right">{acc.score}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
