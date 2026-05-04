"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { PopupButton } from "@typeform/embed-react";

const TYPEFORM_ID = "m5mMGqEM";

function formatEuro(n: number) {
  return "€" + Math.round(n).toLocaleString("de-DE");
}

function calcForecast(eventCost: number, dealSize: number, meetingToOpp: number, winRate: number) {
  const breakEvenMeetings = Math.ceil(eventCost / (dealSize * (meetingToOpp / 100) * (winRate / 100)));
  const expectedMeetings = 24;
  const expectedOpps = Math.round(expectedMeetings * (meetingToOpp / 100));
  const expectedPipeline = expectedOpps * dealSize;
  const expectedRevenue = Math.round(expectedPipeline * (winRate / 100));
  const roi = expectedRevenue > 0 ? (expectedRevenue / eventCost).toFixed(1) : "0";
  return { breakEvenMeetings, expectedMeetings, expectedOpps, expectedPipeline, expectedRevenue, roi };
}

export function EventForecast() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [eventCost, setEventCost] = useState(15000);
  const [dealSize, setDealSize] = useState(80000);
  const [meetingToOpp, setMeetingToOpp] = useState(60);
  const [winRate, setWinRate] = useState(25);

  const result = calcForecast(eventCost, dealSize, meetingToOpp, winRate);

  return (
    <section ref={ref} className="relative py-24 px-6 bg-[#080B10] border-y border-[#1E2530] overflow-hidden">
      {/* Decorative section number */}
      <div
        aria-hidden="true"
        className="absolute right-6 top-8 text-[160px] font-black leading-none select-none pointer-events-none"
        style={{ color: 'rgba(30, 37, 48, 0.6)', letterSpacing: '-0.04em' }}
      >
        04
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
          Event ROI Calculator
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
          className="text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-[#EEF2F7] mb-4 max-w-2xl"
        >
          Lohnt sich dieses Event überhaupt?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-[16px] md:text-[17px] text-[#8994A7] leading-relaxed max-w-2xl mb-12"
        >
          Bevor Ihr Team Budget und Kapazität investiert, berechnet PREDICT das kommerzielle
          Potenzial eines Events — und wie viele Meetings Sie für Profitabilität brauchen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Inputs */}
          <div className="rounded-2xl border border-[#1E2530] bg-[#0F1318] p-5 md:p-7">
            <h3 className="text-[16px] font-semibold text-[#EEF2F7] mb-6">Ihre Event-Parameter</h3>

            <div className="space-y-6">
              {[
                {
                  label: "Eventkosten (Messestand, Team, Reise)",
                  value: eventCost,
                  min: 5000, max: 150000, step: 1000,
                  format: (v: number) => formatEuro(v),
                  setter: setEventCost,
                },
                {
                  label: "Average Deal Size",
                  value: dealSize,
                  min: 10000, max: 500000, step: 5000,
                  format: (v: number) => formatEuro(v),
                  setter: setDealSize,
                },
                {
                  label: "Meeting-to-Opportunity Rate",
                  value: meetingToOpp,
                  min: 10, max: 90, step: 5,
                  format: (v: number) => `${v}%`,
                  setter: setMeetingToOpp,
                },
                {
                  label: "Win Rate",
                  value: winRate,
                  min: 5, max: 70, step: 5,
                  format: (v: number) => `${v}%`,
                  setter: setWinRate,
                },
              ].map((field) => (
                <div key={field.label}>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[13px] text-[#8994A7]">{field.label}</label>
                    <span className="text-[14px] font-semibold text-[#EEF2F7]">{field.format(field.value)}</span>
                  </div>
                  <input
                    type="range"
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={field.value}
                    onChange={(e) => field.setter(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #0201FF ${((field.value - field.min) / (field.max - field.min)) * 100}%, #1E2530 0%)`,
                      accentColor: "#0201FF",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="rounded-2xl border border-[#0201FF]/25 bg-[#0201FF]/4 p-6 md:p-8 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0201FF]/6 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-[16px] font-semibold text-[#EEF2F7]">Event Profitability Forecast</h3>
                  <p className="text-[12px] text-[#4D5666] mt-0.5">Hannover Messe 2025 · Automatisch berechnet</p>
                </div>
              </div>

              {/* Break-even — hero number */}
              <div className="rounded-xl border border-[#0201FF]/25 bg-[#0201FF]/8 px-5 py-5 mb-6">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-1">Break-even bei</p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={result.breakEvenMeetings}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="text-[44px] md:text-[56px] font-black text-[#EEF2F7] tracking-tight leading-none"
                  >
                    {result.breakEvenMeetings}
                    <span className="text-[22px] md:text-[28px] font-bold text-[#8994A7] ml-2">Meetings</span>
                  </motion.p>
                </AnimatePresence>
                <p className="text-[12px] text-[#4D5666] mt-2">Um dieses Event profitabel zu machen</p>
              </div>

              {/* Clean metric rows */}
              <div className="space-y-0 border border-[#1E2530] rounded-xl overflow-hidden mb-6">
                {[
                  { label: "Erwartete Meetings", value: String(result.expectedMeetings), highlight: false },
                  { label: "Erwartete Opportunities", value: String(result.expectedOpps), highlight: false },
                  { label: "Erwartete Pipeline", value: formatEuro(result.expectedPipeline), highlight: true },
                  { label: "Erwarteter ROI", value: `${result.roi}×`, highlight: true },
                ].map((row, i) => (
                  <div key={row.label} className={`flex items-center justify-between px-4 py-3 ${i < 3 ? "border-b border-[#1E2530]" : ""}`}>
                    <span className="text-[11px] font-medium tracking-wider uppercase text-[#4D5666]">{row.label}</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={row.value}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className={`text-[22px] font-bold tracking-tight ${row.highlight ? "text-[#0201FF]" : "text-[#EEF2F7]"}`}
                      >
                        {row.value}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <PopupButton
                id={TYPEFORM_ID}
                className="mt-auto w-full flex items-center justify-center gap-2 bg-[#0201FF] hover:bg-[#0101D4] text-white font-semibold text-[14px] rounded-xl px-4 py-3.5 transition-colors duration-150 shadow-lg shadow-[#0201FF]/20"
              >
                Jetzt Event-Potenzial kostenlos prüfen
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </PopupButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
