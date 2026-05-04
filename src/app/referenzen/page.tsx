import Link from "next/link";
import { NavBar } from "@/components/ui/NavBar";
import { Footer } from "@/components/ui/Footer";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { CASES } from "@/lib/cases";

export default function ReferenzenIndex() {
  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-12 px-6 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#1E2530 1px, transparent 1px), linear-gradient(90deg, #1E2530 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              opacity: 0.18,
              maskImage: "radial-gradient(ellipse 80% 50% at 50% 30%, black 10%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 30%, black 10%, transparent 100%)",
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-[#0201FF]/[0.06] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-5">
              Referenzen
            </p>
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.025em] text-[#EEF2F7] mb-5 max-w-4xl">
              Was Teams mit PREDICT erreichen
            </h1>
            <p className="text-[17px] md:text-[19px] text-[#8994A7] leading-relaxed max-w-2xl">
              Echte Kampagnen. Echte Zahlen. Direkt aus dem Data Warehouse —
              <br />
              <span className="text-[#EEF2F7] font-medium">
                pro Event, pro Kunde, pro Termin.
              </span>
            </p>
          </div>
        </section>

        {/* Logo marquee — social proof */}
        <LogoMarquee />

        {/* Grid */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {CASES.map((c) => {
              const Card = (
                <article
                  className={`group rounded-2xl border border-[#1E2530] bg-[#0F1318] overflow-hidden h-full flex flex-col transition-colors ${
                    c.available ? "hover:border-[#2E3540]" : "opacity-60"
                  }`}
                >
                  <div className="px-6 pt-6 pb-4 border-b border-[#1E2530]">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="min-w-0">
                        <p className="text-[15px] font-semibold text-[#EEF2F7] truncate">
                          {c.company}
                        </p>
                        <p className="text-[12px] text-[#4D5666] mt-0.5">{c.segment}</p>
                      </div>
                      <span className="text-[10px] font-medium rounded border border-[#1E2530] bg-[#080B10] px-2 py-1 text-[#8994A7] whitespace-nowrap">
                        {c.event}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 p-5 border-b border-[#1E2530]">
                    {c.results.map((r) => (
                      <div
                        key={r.label}
                        className="rounded-lg border border-[#1E2530] bg-[#080B10] px-3 py-3"
                      >
                        <p className="text-[10px] text-[#4D5666] uppercase tracking-wider font-medium leading-snug">
                          {r.label}
                        </p>
                        <p className="text-[22px] font-bold text-[#7BA3FF] mt-0.5 tabular-nums leading-tight">
                          {r.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="px-6 py-5 flex-1 flex flex-col justify-between">
                    <p className="text-[14px] text-[#8994A7] leading-relaxed mb-4">
                      {c.quote}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-[12px] text-[#4D5666]">{c.author}</p>
                      {c.available ? (
                        <span className="text-[12px] font-medium text-[#7BA3FF] flex items-center gap-1 group-hover:text-[#EEF2F7] transition-colors">
                          Case Study lesen
                          <svg
                            width="12"
                            height="12"
                            fill="none"
                            viewBox="0 0 12 12"
                            className="transition-transform group-hover:translate-x-0.5"
                          >
                            <path
                              d="M2 6H10M7 3L10 6L7 9"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium tracking-wider uppercase text-[#4D5666]">
                          In Vorbereitung
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );

              return c.available ? (
                <Link key={c.slug} href={`/referenzen/${c.slug}`} className="block">
                  {Card}
                </Link>
              ) : (
                <div key={c.slug}>{Card}</div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
