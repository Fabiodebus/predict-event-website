"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function BentoTile({
  className,
  eyebrow,
  title,
  desc,
  visual,
  isHero = false,
  delay = 0,
  inView,
}: {
  className?: string;
  eyebrow?: string;
  title: string;
  desc: string;
  visual?: React.ReactNode;
  isHero?: boolean;
  delay?: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className={`relative border border-[#1E2530] rounded-2xl overflow-hidden p-5 md:p-6 flex flex-col ${
        isHero
          ? "bg-gradient-to-br from-[#0201FF]/[0.06] via-[#0F1318] to-[#0F1318]"
          : "bg-[#0F1318]"
      } ${className ?? ""}`}
    >
      {eyebrow && (
        <span
          className={`text-[10px] font-semibold tracking-[0.22em] uppercase mb-3 ${
            isHero ? "text-[#7BA3FF]" : "text-[#4D5666]"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h3
        className={`font-semibold text-[#EEF2F7] leading-tight tracking-[-0.01em] mb-2 ${
          isHero ? "text-[22px] md:text-[26px] font-bold" : "text-[15px] md:text-[16px]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`leading-relaxed text-[#8994A7] ${
          isHero ? "text-[14px] md:text-[15px]" : "text-[13px]"
        } ${visual ? "" : "mt-auto"}`}
      >
        {desc}
      </p>
      {visual && <div className="mt-auto pt-5">{visual}</div>}
    </motion.div>
  );
}

function SparklineVisual() {
  return (
    <svg viewBox="0 0 200 60" className="w-full h-16 md:h-20" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0201FF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0201FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,52 L30,46 L60,38 L90,32 L120,22 L150,14 L180,8 L200,4 L200,60 L0,60 Z"
        fill="url(#sparkGradient)"
      />
      <path
        d="M0,52 L30,46 L60,38 L90,32 L120,22 L150,14 L180,8 L200,4"
        stroke="#0201FF"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="200" cy="4" r="3.5" fill="#0201FF" />
      <circle cx="200" cy="4" r="6" fill="#0201FF" opacity="0.25" />
    </svg>
  );
}

function AvatarStackVisual() {
  return (
    <div className="flex -space-x-2 items-center">
      {["S", "K", "B", "P", "T"].map((letter, i) => (
        <div
          key={i}
          className="w-8 h-8 rounded-full border-2 border-[#0F1318] flex items-center justify-center text-[10px] font-medium text-[#8994A7] bg-gradient-to-br from-[#161B24] to-[#1E2530]"
        >
          {letter}
        </div>
      ))}
      <div className="w-8 h-8 rounded-full bg-[#0201FF]/15 border-2 border-[#0F1318] flex items-center justify-center text-[10px] font-semibold text-[#7BA3FF]">
        +
      </div>
      <span className="pl-3 text-[12px] text-[#4D5666] tabular-nums">139 ICP-Fit</span>
    </div>
  );
}

function CalendarSliceVisual() {
  const days = [true, true, false, true, true];
  return (
    <div className="space-y-1.5">
      <div className="flex gap-1.5">
        {["Mo", "Di", "Mi", "Do", "Fr"].map((d) => (
          <div
            key={d}
            className="flex-1 text-[9px] tracking-wider uppercase text-[#4D5666] text-center"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        {days.map((filled, i) => (
          <div
            key={i}
            className={`flex-1 h-6 rounded ${
              filled
                ? "bg-[#0201FF]/35 border border-[#0201FF]/50"
                : "bg-[#1E2530]/60 border border-[#1E2530]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function EmailSnippetVisual() {
  return (
    <div className="rounded-md bg-[#080B10] border border-[#1E2530] p-3 text-[11px] font-mono text-[#6A7889] leading-relaxed">
      <span className="text-[#4D5666]">Re: </span>
      Treffen wir uns in Hannover?
      <br />
      <span className="text-[#4D5666]">„</span>…als Speaker zum Thema Industrie 4.0…
      <span className="text-[#4D5666]">"</span>
    </div>
  );
}

export function FeatureGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden">
      {/* Decorative section number */}
      <div
        aria-hidden="true"
        className="absolute right-6 top-8 text-[160px] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(30, 37, 48, 0.6)", letterSpacing: "-0.04em" }}
      >
        05
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
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
          className="text-[36px] md:text-[48px] font-bold leading-[1.08] tracking-[-0.025em] text-[#EEF2F7] mb-5 max-w-3xl"
        >
          Von Event-Chaos zu planbarer Pipeline
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-[17px] leading-relaxed max-w-2xl mb-14 text-[#8994A7]"
        >
          Schluss mit Spreadsheets, Excel, Visitenkarten sammeln und hoffen.
          <br />
          <span className="text-[#EEF2F7] font-medium">
            Ein KI-Agent, der Events in konkrete Pipeline verwandelt.
          </span>
        </motion.p>

        {/* Bento grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-3"
          style={{ gridAutoFlow: "dense" }}
        >
          {/* ROI hero — 2×2 */}
          <BentoTile
            className="col-span-2 row-span-2"
            eyebrow="Outcome"
            title="ROI, der sichtbar wird"
            desc="Pipeline, Umsatz und Event-Performance klar messbar."
            visual={<SparklineVisual />}
            isHero
            delay={0.15}
            inView={inView}
          />
          <BentoTile
            title="Erkennen, ob sich das Event lohnt"
            desc="Break-even und ROI-Prognose vorab."
            delay={0.2}
            inView={inView}
          />
          <BentoTile
            title="Die richtigen Ansprechpartner"
            desc="Mit klarer Begründung, warum genau jetzt."
            delay={0.25}
            inView={inView}
          />
          <BentoTile
            title="Jedes Gespräch wird verwertbar"
            desc="Notizen, nächste Schritte, Pipeline-Wert."
            delay={0.3}
            inView={inView}
          />
          <BentoTile
            title="Follow-ups, die nicht verloren gehen"
            desc="Strukturierte Weiterführung jedes Kontakts."
            delay={0.35}
            inView={inView}
          />
          <BentoTile
            className="col-span-2"
            title="Die richtigen Accounts – vor dem Event"
            desc="Priorisiert, ICP-fit, datengetrieben."
            visual={<AvatarStackVisual />}
            delay={0.4}
            inView={inView}
          />
          <BentoTile
            className="col-span-2"
            title="Meetings buchen, bevor Sie anreisen"
            desc="Kalender gefüllt vor Eventstart."
            visual={<CalendarSliceVisual />}
            delay={0.45}
            inView={inView}
          />
          <BentoTile
            className="col-span-2 md:col-span-4"
            title="Gesprächsanlässe, die funktionieren"
            desc="Konkreter Event-Kontext statt Floskeln."
            visual={<EmailSnippetVisual />}
            delay={0.5}
            inView={inView}
          />
        </div>
      </div>
    </section>
  );
}
