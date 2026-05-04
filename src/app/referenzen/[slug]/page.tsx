import { notFound } from "next/navigation";
import Link from "next/link";
import { NavBar } from "@/components/ui/NavBar";
import { Footer } from "@/components/ui/Footer";
import { CASES, getCase, getRelatedCases } from "@/lib/cases";
import { CaseStudyCTA } from "./CaseStudyCTA";

const ACCENT = "#7BA3FF";
const ACCENT_BG = "rgba(123, 163, 255, 0.13)";
const EVENT = "#E8A84A";

/* ─── Reusable charts ─── */

function Funnel({ rows }: { rows: { label: string; value: number }[] }) {
  const max = Math.max(...rows.map((r) => r.value));
  return (
    <div className="space-y-2.5">
      {rows.map((r) => {
        const widthPct = max > 0 ? (r.value / max) * 100 : 0;
        return (
          <div
            key={r.label}
            className="grid grid-cols-[110px_1fr_55px] sm:grid-cols-[140px_1fr_60px] items-center gap-3"
          >
            <span className="text-[12px] sm:text-[13px] text-[#8994A7]">{r.label}</span>
            <div className="h-4 rounded" style={{ background: ACCENT_BG }}>
              <div
                className="h-full rounded transition-[width] duration-500"
                style={{ width: `${widthPct}%`, background: ACCENT }}
              />
            </div>
            <span className="text-right text-[13px] font-medium tabular-nums text-[#EEF2F7]">
              {r.value.toLocaleString("de-DE")}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function HBarChart({ rows }: { rows: { label: string; value: number }[] }) {
  const max = Math.max(...rows.map((r) => r.value));
  return (
    <div className="space-y-2">
      {rows.map((r) => {
        const widthPct = max > 0 ? (r.value / max) * 100 : 0;
        return (
          <div
            key={r.label}
            className="grid grid-cols-[120px_1fr_28px] sm:grid-cols-[150px_1fr_32px] items-center gap-3"
          >
            <span className="text-[11px] sm:text-[12px] text-[#8994A7] truncate" title={r.label}>
              {r.label}
            </span>
            <div className="h-3 rounded" style={{ background: ACCENT_BG }}>
              <div
                className="h-full rounded transition-[width] duration-500"
                style={{ width: `${widthPct}%`, background: ACCENT }}
              />
            </div>
            <span className="text-right text-[12px] font-medium tabular-nums text-[#EEF2F7]">
              {r.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function Timeline({
  data,
}: {
  data: { dates: string[]; values: number[]; eventDayIndex: number };
}) {
  const dataMax = Math.max(...data.values, 1);
  // Use a slightly higher visual ceiling so bars don't all hit 100% when values are small/equal.
  const ceiling = Math.max(dataMax + 1, Math.ceil(dataMax * 1.25));
  // Build integer Y-axis ticks (max ~5 lines).
  const tickStep = ceiling <= 5 ? 1 : Math.ceil(ceiling / 5);
  const ticks: number[] = [];
  for (let t = 0; t <= ceiling; t += tickStep) ticks.push(t);

  return (
    <div className="grid grid-cols-[28px_1fr] gap-2">
      {/* Y-axis */}
      <div className="relative h-[160px] pr-1">
        {ticks.map((t) => (
          <span
            key={t}
            className="absolute right-1 -translate-y-1/2 text-[10px] tabular-nums text-[#4D5666]"
            style={{ bottom: `${(t / ceiling) * 100}%` }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Plot + x-axis */}
      <div>
        <div className="relative h-[160px]">
          {/* Horizontal grid lines */}
          {ticks.map((t) => (
            <div
              key={t}
              className="absolute left-0 right-0 border-t border-[#1E2530]"
              style={{ bottom: `${(t / ceiling) * 100}%` }}
            />
          ))}

          {/* Bars */}
          <div className="absolute inset-0 flex items-stretch gap-1.5">
            {data.values.map((v, i) => {
              const isEvent = i === data.eventDayIndex;
              const heightPct = (v / ceiling) * 100;
              return (
                <div
                  key={i}
                  className="flex-1 flex flex-col justify-end min-w-0 relative"
                  title={`${data.dates[i]}: ${v} Termin${v === 1 ? "" : "e"}`}
                >
                  {v > 0 && (
                    <>
                      <span
                        className="absolute left-1/2 -translate-x-1/2 text-[10px] tabular-nums font-semibold leading-none text-[#EEF2F7] pointer-events-none"
                        style={{ bottom: `calc(${heightPct}% + 4px)` }}
                      >
                        {v}
                      </span>
                      <div
                        className="w-full rounded-t-sm"
                        style={{
                          height: `${heightPct}%`,
                          minHeight: "6px",
                          background: isEvent ? EVENT : ACCENT,
                        }}
                      />
                    </>
                  )}
                  {v === 0 && isEvent && (
                    <div
                      className="w-full rounded-t-sm border border-dashed"
                      style={{
                        height: "8%",
                        borderColor: EVENT,
                        opacity: 0.6,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-1.5 mt-2">
          {data.dates.map((d, i) => (
            <span
              key={`${d}-${i}`}
              className={`flex-1 text-center text-[10px] tabular-nums truncate ${
                i === data.eventDayIndex ? "text-[#E8A84A] font-semibold" : "text-[#4D5666]"
              }`}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#1E2530] bg-[#0F1318] p-5">
      <p className="text-[13px] font-semibold text-[#EEF2F7] mb-1">{title}</p>
      {subtitle && <p className="text-[12px] text-[#4D5666] mb-4">{subtitle}</p>}
      {children}
    </div>
  );
}

/* ─── Page ─── */

export function generateStaticParams() {
  return CASES.filter((c) => c.available).map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c || !c.available || !c.page) notFound();

  const p = c.page;
  const isPostEvent = p.variant === "post";
  const timelineSubtitle = isPostEvent
    ? "Buchungen pro Tag nach Event-Schluss"
    : "Buchungen pro Tag bis Event-Start";
  const related = getRelatedCases(c.slug, 3);

  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-12 px-6 overflow-hidden border-b border-[#1E2530]">
          {/* Background grid */}
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
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[12px] text-[#4D5666] mb-6">
              <Link href="/" className="hover:text-[#8994A7] transition-colors">PREDICT</Link>
              <span>›</span>
              <Link href="/referenzen" className="hover:text-[#8994A7] transition-colors">Referenzen</Link>
              <span>›</span>
              <span className="text-[#7BA3FF]">{c.company}</span>
            </nav>

            {/* Eyebrow */}
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-5">
              Case Study · {p.meta.event}
            </p>

            {/* Headline */}
            <h1 className="text-[32px] md:text-[44px] lg:text-[52px] font-bold leading-[1.1] tracking-[-0.025em] text-[#EEF2F7] mb-5 max-w-4xl">
              {p.headline}
            </h1>

            {/* Subhead */}
            <p className="text-[16px] md:text-[18px] text-[#8994A7] leading-relaxed max-w-3xl mb-10">
              {p.subhead}
            </p>

            {/* Hero stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {p.heroStats.map((s) => (
                <div key={s.label} className="rounded-xl border border-[#1E2530] bg-[#0F1318] px-5 py-4">
                  <p className="text-[10px] tracking-widest uppercase text-[#4D5666] font-medium mb-2 leading-snug">
                    {s.label}
                  </p>
                  <p className="text-[28px] md:text-[32px] font-bold text-[#7BA3FF] tabular-nums leading-none">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prose */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            {p.prose.map((block) => (
              <div key={block.label}>
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#4D5666] mb-3">
                  {block.label}
                </p>
                <p className="text-[16px] md:text-[17px] text-[#EEF2F7] leading-[1.7]">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ergebnisse */}
        <section className="py-16 px-6 border-t border-[#1E2530]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-[-0.02em] text-[#EEF2F7] mb-10">
              Ergebnisse
            </h2>

            {/* Funnel */}
            <ChartCard title="Conversion-Funnel" subtitle="Vom ICP-Account bis zum gebuchten Termin">
              <Funnel rows={p.funnel} />
            </ChartCard>

            {/* Industry / Job-Function + Seniority — side by side */}
            {!p.reduced && (p.industryChart || p.jobFunctionChart) && p.seniorityChart && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {p.industryChart && (
                  <ChartCard title="Branchen erreicht" subtitle="Termine nach Branche">
                    <HBarChart rows={p.industryChart} />
                  </ChartCard>
                )}
                {p.jobFunctionChart && (
                  <ChartCard title="Funktionen erreicht" subtitle="Termine nach Job-Funktion">
                    <HBarChart rows={p.jobFunctionChart} />
                  </ChartCard>
                )}
                <ChartCard title="Entscheider-Ebenen" subtitle="Termine nach Seniorität">
                  <HBarChart rows={p.seniorityChart} />
                </ChartCard>
              </div>
            )}

            {/* Timeline */}
            {!p.reduced && p.timelineChart && (
              <div className="mt-4">
                <ChartCard
                  title={isPostEvent ? "Termine nach Messe-Schluss" : "Termine vor dem Event"}
                  subtitle={timelineSubtitle}
                >
                  <Timeline data={p.timelineChart} />
                </ChartCard>
              </div>
            )}
          </div>
        </section>

        {/* Meta footer */}
        <section className="py-12 px-6 border-t border-[#1E2530]">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Branche", value: p.meta.branche },
              { label: "Standort", value: p.meta.standort },
              { label: "Event", value: p.meta.event },
              { label: "Kampagnenfenster", value: p.meta.kampagnenfenster },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-[10px] tracking-widest uppercase text-[#4D5666] font-medium mb-1.5">
                  {m.label}
                </p>
                <p className="text-[13px] text-[#EEF2F7] font-medium leading-snug">{m.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CaseStudyCTA />

        {/* Related */}
        {related.length > 0 && (
          <section className="py-16 px-6 border-t border-[#1E2530]">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-end justify-between gap-4 mb-8">
                <h3 className="text-[22px] md:text-[26px] font-bold tracking-[-0.015em] text-[#EEF2F7]">
                  Weitere Referenzen
                </h3>
                <Link
                  href="/referenzen"
                  className="text-[13px] font-medium text-[#7BA3FF] hover:text-[#EEF2F7] transition-colors flex items-center gap-1"
                >
                  Alle Referenzen
                  <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                    <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/referenzen/${r.slug}`}
                    className="group rounded-xl border border-[#1E2530] bg-[#0F1318] p-5 hover:border-[#2E3540] transition-colors"
                  >
                    <p className="text-[10px] tracking-widest uppercase text-[#4D5666] font-medium mb-2">
                      {r.event}
                    </p>
                    <p className="text-[15px] font-semibold text-[#EEF2F7] mb-1">{r.company}</p>
                    <p className="text-[12px] text-[#8994A7] mb-4 line-clamp-2">{r.quote}</p>
                    <span className="text-[12px] font-medium text-[#7BA3FF] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Case Study lesen
                      <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                        <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
