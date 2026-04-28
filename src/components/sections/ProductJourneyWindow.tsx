"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STAGE_DURATION = 7000;

const STAGES = [
  {
    id: "event",
    label: "Event hinzufügen",
    sidebarStatus: "Event wird analysiert...",
    windowTitle: "PREDICT — Event hinzufügen",
  },
  {
    id: "accounts",
    label: "Accounts identifiziert",
    sidebarStatus: "87 ICP-fit Accounts",
    windowTitle: "PREDICT — Account Universe",
  },
  {
    id: "campaign",
    label: "Campaign erstellt",
    sidebarStatus: "87 Sequenzen generiert",
    windowTitle: "PREDICT — Outreach Queue",
  },
  {
    id: "replies",
    label: "Antworten kommen rein",
    sidebarStatus: "18 Antworten · 24 Meetings",
    windowTitle: "PREDICT — Inbox",
  },
  {
    id: "calendar",
    label: "Kalender wird voll",
    sidebarStatus: "24 Meetings bestätigt",
    windowTitle: "PREDICT — Meeting Calendar",
  },
  {
    id: "roi",
    label: "ROI berechnet",
    sidebarStatus: "Event ROI: 5.8×",
    windowTitle: "PREDICT — ROI Report",
  },
];

/* ─── Stage 0: Event hinzufügen ─── */
function StageEvent() {
  const [typed, setTyped] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const target = "hannover-messe.de/exhibitors";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i < target.length) {
        setTyped(target.slice(0, i + 1));
        i++;
      } else {
        clearInterval(t);
        setTimeout(() => setAnalyzing(true), 500);
      }
    }, 90);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!analyzing) return;
    let p = 0;
    const t = setInterval(() => {
      p += 3;
      setProgress(Math.min(p, 82));
      if (p >= 82) clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, [analyzing]);

  return (
    <div className="p-5 space-y-4">
      <div>
        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-2">Event URL</p>
        <div className="flex items-center gap-2 bg-[#080B10] border border-[#1E2530] rounded-lg px-3 py-2.5">
          <svg className="w-3.5 h-3.5 text-[#4D5666] flex-shrink-0" fill="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M5 8c0-2 1-4 3-4s3 2 3 4-1 4-3 4-3-2-3-4z" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M1.5 8h13" stroke="currentColor" strokeWidth="1.3"/>
          </svg>
          <span className="text-[13px] font-mono text-[#EEF2F7] tracking-tight">
            {typed}
            <span className="inline-block w-0.5 h-3.5 bg-[#0201FF] ml-0.5 animate-pulse" />
          </span>
        </div>
      </div>

      {analyzing && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-[#1E2530] bg-[#080B10] p-4 space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0201FF] animate-pulse" />
              <span className="text-[12px] font-medium text-[#EEF2F7]">Hannover Messe 2025</span>
            </div>
            <span className="text-[11px] text-[#4D5666]">12–16 Mai</span>
          </div>
          <div>
            <div className="flex justify-between mb-1.5">
              <span className="text-[11px] text-[#4D5666]">Aussteller werden analysiert...</span>
              <span className="text-[11px] font-medium text-[#0201FF]">{progress}%</span>
            </div>
            <div className="h-1 rounded-full bg-[#1E2530]">
              <motion.div
                className="h-full rounded-full bg-[#0201FF]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["2.847 Aussteller", "61 Länder", "B2B Industrie"].map((tag) => (
              <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#161B24] border border-[#1E2530] text-[#8994A7]">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

/* ─── Stage 1: Accounts identifiziert ─── */
const ACCOUNTS = [
  { name: "Siemens AG", tier: "Tier 1", score: 96, signal: "Aussteller" },
  { name: "KION Group", tier: "Tier 1", score: 91, signal: "Speaker" },
  { name: "Bosch Rexroth", tier: "Tier 2", score: 78, signal: "LinkedIn" },
  { name: "Phoenix Contact", tier: "Tier 2", score: 74, signal: "Vorjahr" },
  { name: "Weidmüller", tier: "Tier 3", score: 61, signal: "ICP-Fit" },
];

function StageAccounts() {
  return (
    <div className="p-4 space-y-2">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[12px] font-semibold text-[#EEF2F7]">87 ICP-fit Accounts</span>
        <span className="text-[11px] text-[#0201FF] font-medium">von 2.847 Ausstellern</span>
      </div>

      <div className="rounded-xl border border-[#1E2530] overflow-hidden">
        <div className="grid grid-cols-4 gap-2 px-3 py-2 bg-[#161B24] border-b border-[#1E2530]">
          {["Account", "Tier", "Score", "Signal"].map((h) => (
            <span key={h} className="text-[9px] font-semibold tracking-widest uppercase text-[#4D5666]">{h}</span>
          ))}
        </div>
        {ACCOUNTS.map((row, i) => (
          <motion.div
            key={row.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07, duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-4 gap-2 px-3 py-2.5 border-b border-[#1E2530]/50 last:border-0"
          >
            <span className="text-[11px] font-medium text-[#EEF2F7] truncate">{row.name}</span>
            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded w-fit ${
              row.tier === "Tier 1" ? "bg-[#0201FF]/15 text-[#0201FF]" :
              row.tier === "Tier 2" ? "bg-[#E8A84A]/15 text-[#E8A84A]" :
              "bg-[#1E2530] text-[#8994A7]"
            }`}>
              {row.tier}
            </span>
            <div className="flex items-center gap-1.5">
              <div className="flex-1 h-1 rounded-full bg-[#1E2530]">
                <motion.div
                  className={`h-full rounded-full ${row.score >= 85 ? "bg-[#0201FF]" : row.score >= 70 ? "bg-[#E8A84A]" : "bg-[#4D5666]"}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${row.score}%` }}
                  transition={{ delay: i * 0.07 + 0.15, duration: 0.5 }}
                />
              </div>
              <span className="text-[10px] text-[#8994A7] w-5 text-right">{row.score}</span>
            </div>
            <span className="text-[10px] text-[#8994A7]">{row.signal}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Stage 2: Campaign erstellt ─── */
function StageCampaign() {
  const [typed, setTyped] = useState("");
  const body = "Hallo {{Vorname}}, ich habe gesehen, dass Siemens dieses Jahr auf der Hannover Messe ausstellt. Wir helfen B2B-Teams wie Ihrem, vor dem Event gezielt Meetings zu buchen...";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i < body.length) {
        setTyped(body.slice(0, i + 1));
        i++;
      } else {
        clearInterval(t);
      }
    }, 32);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium text-[#8994A7]">Sequenz 1 von 87 Accounts</span>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#0201FF]/15 text-[#0201FF]">AI-generiert</span>
      </div>
      <div className="rounded-xl border border-[#1E2530] bg-[#080B10] overflow-hidden">
        <div className="px-4 py-3 border-b border-[#1E2530] space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#4D5666] w-8">Von:</span>
            <span className="text-[11px] text-[#8994A7]">max.mueller@company.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#4D5666] w-8">An:</span>
            <span className="text-[11px] text-[#EEF2F7]">einkauf@siemens.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#4D5666] w-8">Betr.:</span>
            <span className="text-[11px] font-semibold text-[#EEF2F7]">Treffen wir uns in Hannover?</span>
          </div>
        </div>
        <div className="px-4 py-3">
          <p className="text-[12px] text-[#8994A7] leading-relaxed">
            {typed}
            <span className="inline-block w-0.5 h-3 bg-[#0201FF] ml-0.5 animate-pulse" />
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-[11px] text-[#4D5666]">
        <svg className="w-3 h-3 text-[#0201FF]" fill="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M4 6l1.5 1.5L8 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        87 personalisierte Sequenzen generiert · Versand ab morgen
      </div>
    </div>
  );
}

/* ─── Stage 3: Antworten kommen rein ─── */
const REPLIES = [
  { name: "Thomas K.", company: "Siemens AG", text: "Ja gerne, wann passt Ihnen?", time: "14:23", positive: true },
  { name: "Sarah M.", company: "KION Group", text: "Interessant! Können Sie mehr Details schicken?", time: "15:01", positive: true },
  { name: "Jan W.", company: "Bosch Rexroth", text: "Leider kein Interesse.", time: "15:44", positive: false },
  { name: "Petra L.", company: "Phoenix Contact", text: "Schicken Sie mir einen Calendly-Link.", time: "16:12", positive: true },
];

function StageReplies() {
  const [count, setCount] = useState(8);

  useEffect(() => {
    const targets = [12, 15, 18];
    let i = 0;
    const t = setInterval(() => {
      if (i < targets.length) {
        setCount(targets[i]);
        i++;
      } else {
        clearInterval(t);
      }
    }, 600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="p-4 space-y-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[12px] font-semibold text-[#EEF2F7]">Posteingang</span>
        <motion.span
          key={count}
          initial={{ scale: 1.3, color: "#0201FF" }}
          animate={{ scale: 1, color: "#8994A7" }}
          transition={{ duration: 0.3 }}
          className="text-[11px] font-semibold"
        >
          {count} neue Antworten
        </motion.span>
      </div>
      {REPLIES.map((r, i) => (
        <motion.div
          key={r.name}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.35 }}
          className={`flex items-start gap-3 p-3 rounded-lg border ${
            r.positive ? "border-[#0201FF]/20 bg-[#0201FF]/5" : "border-[#1E2530] bg-[#080B10]"
          }`}
        >
          <div className="w-6 h-6 rounded-full bg-[#161B24] border border-[#1E2530] flex items-center justify-center flex-shrink-0 text-[10px] font-medium text-[#8994A7]">
            {r.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold text-[#EEF2F7] truncate">{r.name} · {r.company}</span>
              <span className="text-[10px] text-[#4D5666] flex-shrink-0">{r.time}</span>
            </div>
            <p className="text-[11px] text-[#8994A7] mt-0.5 truncate">{r.text}</p>
          </div>
          {r.positive && (
            <div className="w-1.5 h-1.5 rounded-full bg-[#0201FF] flex-shrink-0 mt-1.5" />
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Stage 4: Kalender wird voll ─── */
const MEETINGS = [
  { day: "Mo", slot: "10:00", name: "Siemens AG", col: 0 },
  { day: "Di", slot: "11:00", name: "KION Group", col: 1 },
  { day: "Di", slot: "14:00", name: "Phoenix Contact", col: 1 },
  { day: "Mi", slot: "09:00", name: "Trumpf GmbH", col: 2 },
  { day: "Mi", slot: "15:00", name: "Festo SE", col: 2 },
  { day: "Do", slot: "10:00", name: "Lenze SE", col: 3 },
  { day: "Do", slot: "13:00", name: "Wago GmbH", col: 3 },
  { day: "Fr", slot: "11:00", name: "Endress+Hauser", col: 4 },
];

const DAYS = ["Mo", "Di", "Mi", "Do", "Fr"];

function StageCalendar() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(v => {
        if (v < MEETINGS.length) return v + 1;
        clearInterval(t);
        return v;
      });
    }, 450);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium text-[#8994A7]">12–16 Mai · Hannover Messe</span>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#E8A84A]/15 text-[#E8A84A]">
          ⚡ 4 Tage bis zur Messe
        </span>
      </div>

      <div className="rounded-xl border border-[#1E2530] overflow-hidden">
        <div className="grid grid-cols-5 border-b border-[#1E2530]">
          {DAYS.map(d => (
            <div key={d} className="py-1.5 text-center text-[10px] font-semibold tracking-widest uppercase text-[#4D5666] border-r border-[#1E2530] last:border-0">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 min-h-[120px] p-1 gap-1">
          {DAYS.map((_, col) => (
            <div key={col} className="space-y-1">
              {MEETINGS.filter(m => m.col === col).map((m, i) => {
                const idx = MEETINGS.indexOf(m);
                return (
                  <AnimatePresence key={m.name}>
                    {idx < visible && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25, ease: "backOut" }}
                        className="rounded-md bg-[#0201FF]/15 border border-[#0201FF]/25 p-1.5"
                      >
                        <p className="text-[9px] font-semibold text-[#0201FF]">{m.slot}</p>
                        <p className="text-[9px] text-[#EEF2F7] leading-tight truncate">{m.name}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={visible >= 6 ? { opacity: 1 } : { opacity: 0 }}
        className="flex items-center justify-center gap-2 py-2 rounded-lg bg-[#0201FF]/8 border border-[#0201FF]/20"
      >
        <svg className="w-3.5 h-3.5 text-[#0201FF]" fill="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M5 7l1.5 1.5L9 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[11px] font-semibold text-[#0201FF]">24 Meetings bestätigt vor dem Event</span>
      </motion.div>
    </div>
  );
}

/* ─── Stage 5: ROI berechnet ─── */
function useCountUp(target: number, duration = 1200, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const raf = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function StageROI() {
  const [started, setStarted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setStarted(true), 100); return () => clearTimeout(t); }, []);

  const accounts = useCountUp(87, 900, started);
  const meetings = useCountUp(24, 1000, started);
  const pipeline = useCountUp(420, 1100, started);
  const roi = useCountUp(58, 1200, started);

  const stats = [
    { label: "ICP-fit Accounts", value: accounts.toString(), unit: "" },
    { label: "Meetings gebucht", value: meetings.toString(), unit: "" },
    { label: "Pipeline generiert", value: `€${pipeline}k`, unit: "" },
    { label: "Event ROI", value: `${(roi / 10).toFixed(1)}×`, unit: "" },
  ];

  return (
    <div className="p-5 space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="rounded-xl border border-[#1E2530] bg-[#080B10] px-4 py-3"
          >
            <p className="text-[10px] font-medium text-[#4D5666] uppercase tracking-wider">{s.label}</p>
            <p className="text-[24px] font-bold text-[#EEF2F7] leading-tight mt-1">{s.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#0201FF]/25 bg-[#0201FF]/8"
      >
        <svg className="w-4 h-4 text-[#0201FF]" fill="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M5.5 8l2 2L10.5 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[12px] font-semibold tracking-widest uppercase text-[#0201FF]">Done by PREDICT</span>
      </motion.div>
    </div>
  );
}

/* ─── Stage content router ─── */
const STAGE_PANELS = [StageEvent, StageAccounts, StageCampaign, StageReplies, StageCalendar, StageROI];

/* ─── Progress bar ─── */
function ProgressBar() {
  return (
    <div className="h-0.5 bg-[#1E2530] w-full">
      <motion.div
        className="h-full bg-[#0201FF]"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: STAGE_DURATION / 1000, ease: "linear" }}
      />
    </div>
  );
}

/* ─── Main component ─── */
export function ProductJourneyWindow() {
  const [activeStage, setActiveStage] = useState(0);
  const [hasCompletedCycle, setHasCompletedCycle] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    setActiveStage(prev => {
      const next = (prev + 1) % STAGES.length;
      if (next === 0) setHasCompletedCycle(true);
      setProgressKey(k => k + 1);
      return next;
    });
  }, []);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(advance, STAGE_DURATION);
  }, [advance]);

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startInterval]);

  const goToStage = useCallback((index: number) => {
    setActiveStage(index);
    setProgressKey(k => k + 1);
    startInterval();
  }, [startInterval]);

  const goNext = () => goToStage((activeStage + 1) % STAGES.length);
  const goPrev = () => goToStage((activeStage - 1 + STAGES.length) % STAGES.length);

  const StagePanel = STAGE_PANELS[activeStage];

  return (
    <div className="relative w-full">
      {/* Window */}
      <div
        className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
        style={{
          border: '1px solid transparent',
          backgroundImage: 'linear-gradient(#0F1318, #0F1318), linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 45%, rgba(255,255,255,0.07) 100%)',
          backgroundClip: 'padding-box, border-box',
          backgroundOrigin: 'padding-box, border-box',
        }}
      >
        {/* Chrome bar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#1E2530] relative">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E85050]/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8A84A]/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#0201FF]/70" />
          <div className="absolute left-1/2 -translate-x-1/2">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeStage}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="text-[11px] font-medium tracking-widest uppercase text-[#4D5666]"
              >
                {STAGES[activeStage].windowTitle}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Two-panel layout */}
        <div className="flex" style={{ minHeight: "280px" }}>
          {/* Sidebar */}
          <div className="w-[200px] flex-shrink-0 border-r border-[#1E2530] bg-[#080B10] py-4 px-3 space-y-1">
            {STAGES.map((stage, i) => {
              const isDone = i < activeStage;
              const isActive = i === activeStage;
              return (
                <button
                  key={stage.id}
                  onClick={() => goToStage(i)}
                  className={`w-full text-left rounded-lg px-2.5 py-2 transition-all duration-150 ${
                    isActive ? "bg-[#0201FF]/10" : "hover:bg-[#161B24]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 border ${
                      isDone
                        ? "bg-[#0201FF]/20 border-[#0201FF]/40"
                        : isActive
                        ? "border-[#0201FF]"
                        : "border-[#1E2530]"
                    }`}>
                      {isDone ? (
                        <svg className="w-2.5 h-2.5 text-[#0201FF]" fill="none" viewBox="0 0 10 10">
                          <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : isActive ? (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0201FF]" />
                      ) : null}
                    </div>
                    <div className="min-w-0">
                      <p className={`text-[11px] font-medium leading-tight ${
                        isActive ? "text-[#EEF2F7]" : isDone ? "text-[#8994A7]" : "text-[#4D5666]"
                      }`}>
                        {stage.label}
                      </p>
                      {(isDone || isActive) && (
                        <p className={`text-[10px] mt-0.5 truncate ${
                          isActive ? "text-[#0201FF]" : "text-[#4D5666]"
                        }`}>
                          {stage.sidebarStatus}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Main panel */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <StagePanel />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress bar */}
        <ProgressBar key={progressKey} />
      </div>

      {/* Nav controls */}
      <div className="flex items-center justify-center gap-4 mt-5">
        <button
          onClick={goPrev}
          className="w-7 h-7 rounded-full border border-[#1E2530] bg-[#0F1318] flex items-center justify-center text-[#4D5666] hover:text-[#8994A7] hover:border-[#2E3540] transition-all"
          aria-label="Vorheriger Schritt"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
            <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {STAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToStage(i)}
              disabled={!hasCompletedCycle && i > activeStage}
              className="transition-all duration-200"
              aria-label={`Schritt ${i + 1}`}
            >
              <motion.div
                animate={{
                  width: i === activeStage ? 20 : 6,
                  backgroundColor: i === activeStage ? "#0201FF" : i < activeStage ? "#0201FF66" : "#1E2530",
                }}
                transition={{ duration: 0.25 }}
                className="h-1.5 rounded-full"
              />
            </button>
          ))}
        </div>

        <button
          onClick={goNext}
          className="w-7 h-7 rounded-full border border-[#1E2530] bg-[#0F1318] flex items-center justify-center text-[#4D5666] hover:text-[#8994A7] hover:border-[#2E3540] transition-all"
          aria-label="Nächster Schritt"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
            <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Stage label */}
      <div className="text-center mt-2">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeStage}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-[12px] font-medium text-[#4D5666]"
          >
            Schritt {activeStage + 1} von {STAGES.length} · {STAGES[activeStage].label}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Glow underneath */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-[#0201FF]/6 blur-3xl rounded-full pointer-events-none" />
    </div>
  );
}
