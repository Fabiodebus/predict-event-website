"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ===== Tab icons (stroke-based, currentColor, matches project icon style) =====

type IconProps = { className?: string };

function ForecastIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16V12"/>
      <path d="M10 16V7"/>
      <path d="M16 16V4"/>
      <path d="M3 17.5H17"/>
    </svg>
  );
}

function AccountsIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17V4C5 3.45 5.45 3 6 3H14C14.55 3 15 3.45 15 4V17"/>
      <path d="M3 17H17"/>
      <path d="M9 17V14H11V17"/>
      <path d="M8 7H8.01"/>
      <path d="M12 7H12.01"/>
      <path d="M8 10H8.01"/>
      <path d="M12 10H12.01"/>
    </svg>
  );
}

function PeopleIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.5 17.5V16C13.5 14.34 12.16 13 10.5 13H5.5C3.84 13 2.5 14.34 2.5 16V17.5"/>
      <circle cx="8" cy="7" r="3"/>
      <path d="M17.5 17.5V16C17.5 14.6 16.55 13.4 15.25 13.05"/>
      <path d="M12.75 3.05C14.05 3.4 15 4.6 15 6C15 7.4 14.05 8.6 12.75 8.95"/>
    </svg>
  );
}

function OutreachIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3L9 11"/>
      <path d="M17 3L12 17L9 11L3 8L17 3Z"/>
    </svg>
  );
}

function CalendarIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="14" height="12" rx="1.5"/>
      <path d="M3 9H17"/>
      <path d="M7 3V6"/>
      <path d="M13 3V6"/>
    </svg>
  );
}

function ROIIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14L7 10L11 12L17 5"/>
      <path d="M13 5H17V9"/>
    </svg>
  );
}

// ===== Calendar shared data =====

const CALENDAR_MEETINGS = [
  { day: 0, time: "10:00", company: "Siemens AG", contact: "Jana H." },
  { day: 0, time: "14:30", company: "Phoenix Contact", contact: "Petra L." },
  { day: 1, time: "09:30", company: "KION Group", contact: "Markus B." },
  { day: 1, time: "14:00", company: "Bosch Rexroth", contact: "Stefan K." },
  { day: 2, time: "09:00", company: "Trumpf", contact: "Tim S." },
  { day: 2, time: "15:00", company: "Festo", contact: "Andrea M." },
  { day: 3, time: "10:00", company: "Lenze", contact: "Klaus R." },
  { day: 3, time: "13:30", company: "Wago", contact: "Frank B." },
  { day: 4, time: "11:00", company: "Endress", contact: "Petra H." },
];

const DAY_LABELS = ["MO 12", "DI 13", "MI 14", "DO 15", "FR 16"];

// ===== Panels =====

function ForecastPanel() {
  return (
    <div className="rounded-xl border border-[#1E2530] bg-[#080B10] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E2530]">
        <span className="text-[12px] font-semibold text-[#EEF2F7]">Hannover Messe 2025</span>
        <span className="text-[11px] text-[#4D5666]">Automatisch berechnet</span>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] uppercase tracking-widest text-[#4D5666] font-semibold">ICP-fit Unternehmen</span>
            <span className="text-[28px] font-bold text-[#EEF2F7] leading-none">87</span>
          </div>
          <div className="h-1.5 bg-[#1E2530] rounded-full">
            <div className="h-full rounded-full bg-[#0201FF]" style={{ width: "87%" }} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            { label: "Erreichbare Meetings", value: "18–32" },
            { label: "Erwartete Pipeline", value: "€280k–€510k" },
            { label: "Break-even", value: "5 Meetings" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg bg-[#0F1318] px-3 py-3">
              <p className="text-[10px] uppercase tracking-wider text-[#4D5666] font-medium mb-1 leading-tight">{m.label}</p>
              <p className="text-[15px] font-bold text-[#EEF2F7] leading-tight">{m.value}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] uppercase tracking-widest text-[#4D5666] font-semibold">Confidence Score</span>
            <span className="text-[14px] font-bold text-[#0201FF]">87%</span>
          </div>
          <div className="h-1.5 bg-[#1E2530] rounded-full">
            <div className="h-full rounded-full bg-gradient-to-r from-[#0201FF] to-[#5580FF]" style={{ width: "87%" }} />
          </div>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <svg className="w-4 h-4 text-[#0201FF]" fill="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[12px] text-[#4D5666]">Empfohlen · Hannover Messe 2025</span>
        </div>
      </div>
    </div>
  );
}

function AccountsPanel() {
  const accounts = [
    { name: "Siemens AG", tier: "T1", score: 96, signals: ["Aussteller", "Sponsor"] },
    { name: "KION Group", tier: "T1", score: 91, signals: ["Speaker"] },
    { name: "Bosch Rexroth", tier: "T2", score: 78, signals: ["LinkedIn"] },
    { name: "Phoenix Contact", tier: "T2", score: 74, signals: ["Vorjahr"] },
    { name: "Weidmüller", tier: "T3", score: 61, signals: ["ICP-Fit"] },
  ];

  return (
    <div className="rounded-xl border border-[#1E2530] bg-[#080B10] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E2530]">
        <span className="text-[12px] font-semibold text-[#EEF2F7]">87 ICP-fit Accounts</span>
        <span className="text-[11px] font-semibold text-[#0201FF]">von 2.847 Ausstellern</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[#1E2530]/50">
        <span className="flex-1 text-[9px] tracking-widest uppercase text-[#4D5666] font-semibold">Account</span>
        <span className="text-[9px] tracking-widest uppercase text-[#4D5666] font-semibold w-8 text-center">Tier</span>
        <span className="text-[9px] tracking-widest uppercase text-[#4D5666] font-semibold w-12 sm:w-[84px]">Score</span>
        <span className="hidden sm:inline text-[9px] tracking-widest uppercase text-[#4D5666] font-semibold">Signale</span>
      </div>
      {accounts.map((acc, i) => (
        <motion.div
          key={acc.name}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.07, duration: 0.3 }}
          className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1E2530]/50 last:border-0"
        >
          <span className="flex-1 text-[13px] text-[#EEF2F7] truncate">{acc.name}</span>
          <span className={`w-8 text-center text-[10px] font-bold rounded px-1.5 py-0.5 ${
            acc.tier === "T1" ? "bg-[#0201FF]/15 text-[#0201FF]" :
            acc.tier === "T2" ? "bg-[#E8A84A]/15 text-[#E8A84A]" :
            "bg-[#1E2530] text-[#4D5666]"
          }`}>{acc.tier}</span>
          <div className="flex items-center gap-1.5 w-12 sm:w-[84px]">
            <div className="flex-1 h-1 rounded-full bg-[#1E2530]">
              <div className="h-full rounded-full bg-[#0201FF]" style={{ width: `${acc.score}%` }} />
            </div>
            <span className="hidden sm:inline text-[10px] text-[#4D5666] w-5 text-right tabular-nums">{acc.score}</span>
          </div>
          <div className="hidden sm:flex gap-1">
            {acc.signals.map(s => (
              <span key={s} className="text-[9px] border border-[#1E2530] rounded px-1.5 py-0.5 text-[#8994A7]">{s}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function PeoplePanel() {
  const contacts = [
    {
      initials: "JH",
      name: "Jana Hofmann",
      title: "VP Marketing",
      company: "Siemens AG",
      phone: "+49 151 234 5678",
      angle: "Messeauftritt als Pipeline-Kanal — Budget-ROI vor CFO rechtfertigen",
    },
    {
      initials: "MB",
      name: "Markus Bauer",
      title: "Head of Sales",
      company: "KION Group",
      phone: "+49 170 987 6543",
      angle: "Q4 Pipeline vor Hannover aufbauen — bestehende Gesprächshistorie",
    },
    {
      initials: "SK",
      name: "Stefan Klein",
      title: "CMO",
      company: "Bosch Rexroth",
      phone: "+49 160 345 6789",
      angle: "Event-Attribution für Marketing-Budget — ROI-Nachweis gesucht",
    },
  ];

  return (
    <div className="rounded-xl border border-[#1E2530] bg-[#080B10] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E2530]">
        <span className="text-[12px] font-semibold text-[#EEF2F7]">213 Kontakte enriched</span>
        <span className="text-[11px] font-semibold text-[#E8A84A]">89% verifiziert</span>
      </div>
      {contacts.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
          className="flex items-start gap-3 px-4 py-3.5 border-b border-[#1E2530]/50 last:border-0"
        >
          <div className="w-9 h-9 rounded-full bg-[#0201FF]/15 border border-[#0201FF]/30 text-[#0201FF] text-[12px] font-bold flex items-center justify-center flex-shrink-0">
            {c.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-[#EEF2F7]">{c.name}</p>
            <p className="text-[11px] text-[#4D5666]">{c.title} · {c.company}</p>
            <p className="text-[11px] text-[#8994A7] mt-0.5">{c.phone}</p>
            <p className="text-[11px] text-[#4D5666] italic mt-1">↗ {c.angle}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function OutreachPanel() {
  const steps = [
    {
      step: "Step 1", day: "Tag 1", channel: "Email",
      subject: 'Betr.: "Treffen wir uns in Hannover?"',
      preview: "Ich habe gesehen, dass Siemens dieses Jahr auf der...",
      status: "sent",
    },
    {
      step: "Step 2", day: "Tag 3", channel: "LinkedIn",
      subject: "Hallo Jana, ich wollte kurz nachfragen, ob...",
      preview: "",
      status: "sent",
    },
    {
      step: "Step 3", day: "Tag 7", channel: "Follow-up Email",
      subject: "Kurze Nachfrage — konnten Sie meine letzte...",
      preview: "",
      status: "pending",
    },
    {
      step: "Step 4", day: "Tag 14", channel: "Breakup",
      subject: "Falls der Zeitpunkt nicht passt, kein Problem...",
      preview: "",
      status: "planned",
    },
  ];

  return (
    <div className="rounded-xl border border-[#1E2530] bg-[#080B10] overflow-hidden">
      <div className="flex items-start justify-between px-4 py-3 border-b border-[#1E2530] gap-3 flex-wrap">
        <div className="min-w-0">
          <p className="text-[12px] font-semibold text-[#EEF2F7]">Siemens AG — Jana Hofmann</p>
          <p className="text-[11px] text-[#4D5666] mt-0.5">
            87 Sequenzen aktiv · 64% Öffnungsrate · <span className="text-[#0201FF]">24 Meetings gebucht</span>
          </p>
        </div>
        <span className="text-[10px] bg-[#0201FF]/15 text-[#0201FF] px-2 py-0.5 rounded-full font-semibold flex-shrink-0">AI-generiert</span>
      </div>
      <div className="p-4">
        <div className="relative">
          <div className="absolute left-[4px] top-2 bottom-2 w-0.5 bg-[#1E2530]" />
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 relative">
                <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5 relative z-10 ${
                  s.status === "sent" ? "bg-[#0201FF]" :
                  s.status === "pending" ? "border-2 border-[#E8A84A] bg-[#080B10]" :
                  "border border-[#1E2530] bg-[#080B10]"
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5 gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] tracking-widest uppercase text-[#4D5666]">{s.step} · {s.day}</span>
                      <span className="text-[9px] border border-[#1E2530] rounded px-1.5 py-0.5 text-[#8994A7]">{s.channel}</span>
                    </div>
                    <span className={`text-[10px] font-semibold flex-shrink-0 ${
                      s.status === "sent" ? "text-[#0201FF]" :
                      s.status === "pending" ? "text-[#E8A84A]" :
                      "text-[#4D5666]"
                    }`}>
                      {s.status === "sent" ? "Gesendet ✓" : s.status === "pending" ? "Ausstehend" : "Geplant"}
                    </span>
                  </div>
                  <p className="text-[12px] font-semibold text-[#EEF2F7]">{s.subject}</p>
                  {s.preview && <p className="text-[11px] text-[#8994A7] truncate">{s.preview}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarPanel() {
  const [visibleMeetings, setVisibleMeetings] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setVisibleMeetings(v => {
        if (v >= CALENDAR_MEETINGS.length - 1) { clearInterval(t); return CALENDAR_MEETINGS.length; }
        return v + 1;
      });
    }, 350);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-xl border border-[#1E2530] bg-[#080B10] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E2530] gap-2 flex-wrap">
        <span className="text-[12px] font-semibold text-[#EEF2F7]">12–16 Mai 2025 · Hannover Messe</span>
        <span className="text-[11px] font-semibold text-[#E8A84A] whitespace-nowrap">⚡ 4 Tage bis zur Messe</span>
      </div>
      <div className="px-4 py-2 border-b border-[#1E2530]">
        <p className="text-[11px] text-[#4D5666]">24 Meetings bestätigt · Halle 9, Stand B24</p>
      </div>
      <div className="p-4">
        {/* Desktop/tablet: week grid */}
        <div className="hidden sm:grid grid-cols-5 gap-2">
          {DAY_LABELS.map(d => (
            <div key={d} className="text-[10px] font-semibold text-[#4D5666] uppercase tracking-wider pb-2 border-b border-[#1E2530] text-center">
              {d}
            </div>
          ))}
          {DAY_LABELS.map((_, dayIndex) => (
            <div key={dayIndex} className="space-y-1.5 pt-2 min-h-[60px]">
              {CALENDAR_MEETINGS.map((m, allIdx) => {
                if (m.day !== dayIndex) return null;
                if (allIdx >= visibleMeetings) return null;
                return (
                  <motion.div
                    key={m.company}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-md bg-[#0201FF]/15 border border-[#0201FF]/25 p-1.5"
                  >
                    <p className="text-[9px] font-semibold text-[#0201FF]">{m.time}</p>
                    <p className="text-[10px] font-medium text-[#EEF2F7] leading-tight">{m.company}</p>
                    <p className="text-[9px] text-[#8994A7]">{m.contact}</p>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Mobile: stacked day list */}
        <div className="sm:hidden space-y-4">
          {DAY_LABELS.map((dayLabel, dayIndex) => {
            const dayMeetings = CALENDAR_MEETINGS
              .map((m, idx) => ({ ...m, allIdx: idx }))
              .filter(m => m.day === dayIndex);
            if (dayMeetings.length === 0) return null;
            return (
              <div key={dayLabel}>
                <div className="text-[10px] font-semibold tracking-wider uppercase text-[#4D5666] pb-1.5 border-b border-[#1E2530] mb-2">
                  {dayLabel}
                </div>
                <div className="space-y-1.5">
                  {dayMeetings.map((m) => {
                    if (m.allIdx >= visibleMeetings) return null;
                    return (
                      <motion.div
                        key={m.company}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-3 rounded-md bg-[#0201FF]/10 border border-[#0201FF]/20 px-3 py-2"
                      >
                        <span className="text-[11px] font-semibold text-[#0201FF] w-12 flex-shrink-0 tabular-nums">{m.time}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-medium text-[#EEF2F7] leading-tight">{m.company}</p>
                          <p className="text-[11px] text-[#8994A7]">{m.contact}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {visibleMeetings >= CALENDAR_MEETINGS.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 flex items-center gap-2 border-t border-[#1E2530] pt-3"
          >
            <svg className="w-4 h-4 text-[#0201FF]" fill="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[12px] text-[#4D5666]">24 Meetings bestätigt vor dem Event</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ROIPanel() {
  return (
    <div className="rounded-xl border border-[#1E2530] bg-[#080B10] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E2530]">
        <span className="text-[12px] font-semibold text-[#EEF2F7]">Hannover Messe 2025 · Abgeschlossen</span>
        <span className="text-[11px] font-bold text-[#0201FF]">5.8× ROI</span>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <div className="flex items-end gap-3 mb-3">
            <span className="text-[40px] md:text-[52px] font-black text-[#EEF2F7] tracking-tight leading-none">5.8×</span>
            <span className="text-[10px] md:text-[11px] tracking-widest uppercase text-[#4D5666] mb-1.5 md:mb-2">EVENT ROI</span>
          </div>
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <div className="flex-1 min-w-[140px] h-2 rounded-full bg-[#1E2530]">
              <div className="h-full rounded-full bg-gradient-to-r from-[#0201FF] to-[#5580FF]" style={{ width: "73%" }} />
            </div>
            <span className="text-[11px] bg-[#0201FF]/15 text-[#0201FF] px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">+93% über Ziel</span>
          </div>
          <p className="text-[11px] text-[#4D5666]">Ziel: 3.0×</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Pipeline generiert", value: "€420k", sub: "+67% vs. Forecast" },
            { label: "Meetings gehalten", value: "21 / 24", sub: "88% Show-up Rate" },
            { label: "Opportunities", value: "14", sub: "von 21 Meetings" },
            { label: "Kosten pro Meeting", value: "€2.100", sub: "Ziel war €2.500 ✓" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg bg-[#0F1318] px-3 py-3">
              <p className="text-[10px] text-[#4D5666] uppercase tracking-wider font-medium mb-0.5 leading-tight">{m.label}</p>
              <p className="text-[20px] md:text-[22px] font-bold text-[#EEF2F7]">{m.value}</p>
              <p className="text-[11px] text-[#8994A7] mt-0.5">{m.sub}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-1 border-t border-[#1E2530] gap-3 flex-wrap">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[13px]">🏆</span>
            <span className="text-[12px] text-[#4D5666] truncate">Bestes Event dieser Saison (Score: 91/100)</span>
          </div>
          <a href="#" className="text-[12px] text-[#0201FF] font-medium hover:underline whitespace-nowrap flex-shrink-0">Nächstes Event →</a>
        </div>
      </div>
    </div>
  );
}

function ActivePanel({ id }: { id: string }) {
  switch (id) {
    case "forecast": return <ForecastPanel />;
    case "accounts": return <AccountsPanel />;
    case "people": return <PeoplePanel />;
    case "outreach": return <OutreachPanel />;
    case "calendar": return <CalendarPanel />;
    case "roi": return <ROIPanel />;
    default: return null;
  }
}

// ===== Tabs configuration =====

type TabIcon = (props: IconProps) => React.JSX.Element;

interface Tab {
  id: string;
  label: string;
  icon: TabIcon;
  headline: string;
  desc: string;
}

const TABS: Tab[] = [
  {
    id: "forecast",
    label: "Forecast",
    icon: ForecastIcon,
    headline: "Event Profitability Forecast",
    desc: "Bevor Budget investiert wird: PREDICT berechnet das kommerzielle Potenzial des Events.",
  },
  {
    id: "accounts",
    label: "Accounts",
    icon: AccountsIcon,
    headline: "ICP-fit Account Universe",
    desc: "Kombiniert Event-Quellen, CRM-Daten und öffentliche Signale zu einer priorisierten Account-Liste.",
  },
  {
    id: "people",
    label: "People",
    icon: PeopleIcon,
    headline: "Persona & Contact Discovery",
    desc: "Findet relevante Ansprechpartner pro Account mit Begründung, warum diese Person vor dem Event kontaktiert werden sollte.",
  },
  {
    id: "outreach",
    label: "Outreach",
    icon: OutreachIcon,
    headline: "Event POV & Outreach Queue",
    desc: "Erstellt account- und event-spezifische Gesprächsanlässe und E-Mail/LinkedIn-Sequenzen.",
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: CalendarIcon,
    headline: "Event Meeting Calendar",
    desc: "Organisiert gebuchte Meetings, Prep Notes und Follow-up — alles in einem Event-Workspace.",
  },
  {
    id: "roi",
    label: "ROI Report",
    icon: ROIIcon,
    headline: "ROI Report & Learnings",
    desc: "Zeigt Meetings, Opportunities, Pipeline, Eventkosten, ROI und Learnings für das nächste Event.",
  },
];

export function ProductCore() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const active = TABS[activeTab];
  const ActiveIcon = active.icon;

  return (
    <section ref={ref} className="relative py-24 px-6 bg-[#080B10] border-y border-[#1E2530] overflow-hidden">
      {/* Decorative section number */}
      <div
        aria-hidden="true"
        className="absolute right-6 top-8 text-[160px] font-black leading-none select-none pointer-events-none"
        style={{ color: 'rgba(30, 37, 48, 0.6)', letterSpacing: '-0.04em' }}
      >
        02
      </div>
      {/* Background grid — matches Hero */}
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
      {/* Ambient glow — blooms when section enters view */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: [0, 0.09, 0.04] } : { opacity: 0 }}
        transition={{ duration: 2.8, ease: "easeOut", times: [0, 0.4, 1] }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-[#0201FF] rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Eyebrow — plain label, matches other sections */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-5"
        >
          Das Produkt
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-[#EEF2F7] mb-4 max-w-3xl"
        >
          Der Event Pipeline<br />Operating Room
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[16px] md:text-[17px] text-[#8994A7] leading-relaxed max-w-2xl mb-12"
        >
          Von Event Research bis ROI Report — alles in einem Workspace.
        </motion.p>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex gap-1 overflow-x-auto pb-2 mb-8 scrollbar-none"
        >
          {TABS.map((tab, i) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-[13px] font-medium whitespace-nowrap transition-all duration-150 ${
                  activeTab === i
                    ? "bg-[#0201FF]/15 text-[#0201FF] border border-[#0201FF]/30"
                    : "text-[#8994A7] hover:text-[#EEF2F7] hover:bg-[#161B24] border border-transparent"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
          style={{
            border: '1px solid transparent',
            backgroundImage: 'linear-gradient(#0A0D13, #0A0D13), linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 45%, rgba(255,255,255,0.07) 100%)',
            backgroundClip: 'padding-box, border-box',
            backgroundOrigin: 'padding-box, border-box',
          }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#1E2530]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E85050]/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#E8A84A]/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#0201FF]/70" />
            <span className="ml-2 text-[11px] text-[#4D5666] tracking-widest uppercase font-medium">PREDICT — {active.label}</span>
          </div>

          <div className="p-5 sm:p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8"
              >
                {/* Left: description */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <ActiveIcon className="w-7 h-7 text-[#0201FF] mb-4" />
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#EEF2F7] tracking-[-0.015em] mb-3">
                    {active.headline}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#8994A7] leading-relaxed mb-6">
                    {active.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0201FF] hover:underline"
                  >
                    Mehr erfahren
                    <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                      <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

                {/* Right: tab-specific product panel */}
                <div className="lg:col-span-3">
                  <ActivePanel id={active.id} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
        {/* Under-window ambient glow */}
        <div className="mx-auto mt-0 w-2/3 h-16 bg-[#0201FF]/6 blur-3xl rounded-full pointer-events-none" />
      </div>
    </section>
  );
}
