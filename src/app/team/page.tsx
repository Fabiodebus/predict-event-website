"use client";

import { useState } from "react";
import { NavBar } from "@/components/ui/NavBar";
import { Footer } from "@/components/ui/Footer";

type Member = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string | null;
};

const TEAM: Member[] = [
  {
    id: "levin",
    name: "Levin Germann",
    role: "Founder · Sales & Marketing",
    bio: "Steak connoisseur & freetime philosopher. Lifts heavy shit, gets punched in the face for fun. Up at 3AM because mediocrity sleeps in.",
    photo: "/team/levin.jpg",
  },
  {
    id: "fabio",
    name: "Fabio Debus",
    role: "Founder · Product & Consulting",
    bio: "Serial entrepreneur that loves AI, Stoicism, and scaling B2B companies. Calm when everything's on fire. Training for Ironman because regular stress isn't enough.",
    photo: "/team/fabio.jpg",
  },
  {
    id: "jin",
    name: "Jin Yu",
    role: "GTM Engineer",
    bio: "The brain behind all signals, automations and the very best memes. Expert chef. Runs on anime, discipline, and 4AM bursts of genius.",
    photo: "/team/jin.jpg",
  },
  {
    id: "tim",
    name: "Tim Krohm",
    role: "PGM Consultant",
    bio: "Finance brain, consultant instincts. Became managing director of a 60-person consultancy at 24. Boxing keeps the instincts calibrated. Usually in a suit (HR made him dress down for the photo).",
    photo: "/team/tim.jpg",
  },
  {
    id: "franz",
    name: "Franz Rühm",
    role: "Senior GTM Consultant",
    bio: "Started at Daimler, sharpened at SAP, polished at Horváth. Double Degree & Multi-Year Experience in enterprise consulting. Now runs GTM strategy for B2B companies who've outgrown guesswork.",
    photo: "/team/franz.jpg",
  },
  {
    id: "kai",
    name: "Kai Uphues",
    role: "Growth Consultant",
    bio: "Founded at 15. Scouted talent for Ajax Amsterdam, built networks across Swiss and German pro football. Now scouts pipeline opportunities for PREDICT. Same eye for potential, different playing field.",
    photo: "/team/kai.jpg",
  },
  {
    id: "jasmin",
    name: "Jasmin Maurer",
    role: "Backoffice & Customer Support",
    bio: "Professional „doer of things the right way\". Built her own house with her own hands. Brings precision and care to everything she touches. The reason things actually work around here.",
    photo: "/team/jasmin.jpg",
  },
  {
    id: "madelaine",
    name: "Madelaine",
    role: "Backoffice & Customer Support",
    bio: "Has called four continents home and made each one work. Adaptable by nature, meticulous by choice. If reliability had a name, it would be Madelaine.",
    photo: "/team/madelaine.jpg",
  },
];

const MILESTONES: { year: string; headline: string; body: string }[] = [
  {
    year: "2020",
    headline: "First Growth Agency — €1–15M in 4 Jahren",
    body: "Scaled first agency from €1–15M ARR as employees 1 & 5. €24.2M cash collected across PREDICT founders. PE exit by 2023. Worked with 432+ B2B organizations hands on.",
  },
  {
    year: "2024",
    headline: "PREDICT Foundation",
    body: "Founded PREDICT as a tech-enabled outbound agency in March 2024. The mission: transform how B2B organizations approach sales.",
  },
  {
    year: "2025",
    headline: "Bootstrapped from €0–1.8M ARR in 11 Monaten",
    body: "Rapid growth, 40+ clients like Instaffo, Perspective, DRIP, Randstad. Built out the team. Developed proprietary software (PREDICT OS). Started consulting agencies on the side.",
  },
  {
    year: "2026",
    headline: "Scaling PREDICT Event AI",
    body: "Launched PREDICT Event AI as a productized SaaS — turning event spend into measurable pipeline for B2B teams. 60+ clients on track to triple the business in 2026. Built to make every trade-show campaign predictable, before the show starts.",
  },
  {
    year: "2026+",
    headline: "Vision: PREDICT Ventures",
    body: "Start Europe's first sales-focused VC fund. Use our own OS and Growth Model to profitably scale investments. Spark the European startup revolution — 2+ unicorns on European soil per year.",
  },
];

function Portrait({ name, photo }: { name: string; photo: string | null }) {
  const [errored, setErrored] = useState(false);
  if (!photo || errored) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#161B24] via-[#0F1318] to-[#080B10]">
        <span className="text-[56px] md:text-[64px] font-bold text-[#3A4150] select-none tracking-tight">
          {name[0]}
        </span>
      </div>
    );
  }
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={photo}
      alt={name}
      onError={() => setErrored(true)}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
    />
  );
}

function TeamCard({ member }: { member: Member }) {
  return (
    <article className="group rounded-2xl border border-[#1E2530] bg-[#0F1318] overflow-hidden flex flex-col transition-colors hover:border-[#2E3540]">
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#0B0F14]">
        <Portrait name={member.name} photo={member.photo} />
      </div>
      <div className="p-5 md:p-6 flex flex-col">
        <h3 className="text-[17px] md:text-[18px] font-bold text-[#EEF2F7] leading-tight mb-1 tracking-[-0.01em]">
          {member.name}
        </h3>
        <p className="text-[12px] md:text-[13px] font-medium text-[#7BA3FF] mb-3 tracking-tight">
          {member.role}
        </p>
        <p className="text-[13px] text-[#8994A7] leading-relaxed">
          {member.bio}
        </p>
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-12 px-6 overflow-hidden">
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
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-[#0201FF]/[0.06] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-5">
              Team
            </p>
            <h1 className="text-[44px] md:text-[60px] lg:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] text-[#EEF2F7] mb-6">
              Das PREDICT Team
            </h1>
            <p className="text-[17px] md:text-[19px] text-[#8994A7] leading-relaxed max-w-2xl mx-auto">
              Bootstrapped. Multidisziplinär. Manchmal verrückt.
              <br />
              <span className="text-[#EEF2F7] font-medium">
                Das sind die Menschen hinter PREDICT.
              </span>
            </p>
          </div>
        </section>

        {/* Team grid */}
        <section className="relative py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Story & Vision timeline */}
        <section className="relative py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-3">
                Story & Vision
              </p>
              <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.02em] leading-[1.1] text-[#EEF2F7]">
                Wo wir herkommen,{" "}
                <span className="text-[#5D6675]">wo wir hinwollen.</span>
              </h2>
            </div>

            <ol className="relative">
              {/* vertical rail — sits behind the dots */}
              <div
                className="absolute left-[60px] md:left-[80px] top-2 w-px bg-[#1E2530]"
                style={{ height: "calc(100% - 28px)" }}
                aria-hidden
              />

              {MILESTONES.map((m, i) => (
                <li
                  key={m.year}
                  className={`relative grid grid-cols-[52px_20px_1fr] md:grid-cols-[72px_20px_1fr] gap-3 md:gap-5 ${
                    i === MILESTONES.length - 1 ? "" : "pb-10"
                  }`}
                >
                  <p className="text-[13px] md:text-[14px] font-bold text-[#7BA3FF] tabular-nums text-right pt-0.5">
                    {m.year}
                  </p>
                  <div className="flex justify-center pt-1.5">
                    <span className="block w-3 h-3 rounded-full bg-[#080B10] border-2 border-[#7BA3FF]" />
                  </div>
                  <div>
                    <h3 className="text-[16px] md:text-[17px] font-bold text-[#EEF2F7] mb-1.5 leading-snug tracking-[-0.01em]">
                      {m.headline}
                    </h3>
                    <p className="text-[14px] text-[#8994A7] leading-relaxed">
                      {m.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Manifesto / quote */}
        <section className="relative py-20 px-6 border-t border-[#1E2530] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#1E2530 1px, transparent 1px), linear-gradient(90deg, #1E2530 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              opacity: 0.12,
              maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)",
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#4D5666] mb-6">
              Warum wir das bauen
            </p>
            <p className="text-[24px] md:text-[32px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#EEF2F7]">
              Wir haben zu viele Teams gesehen, die fünf- bis sechsstellige Beträge in Events
              investieren —{" "}
              <span className="text-[#5D6675]">
                und am Ende nicht wissen, ob es sich gelohnt hat.
              </span>
            </p>
            <p className="text-[14px] text-[#4D5666] mt-8">
              — Das PREDICT Team
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-[-0.02em] text-[#EEF2F7] mb-4">
              Lust auf PREDICT?
            </h2>
            <p className="text-[16px] text-[#8994A7] mb-8 max-w-xl mx-auto">
              Wir suchen immer Menschen, die B2B-Pipeline lieben, schnell denken und Eigenverantwortung schätzen.
            </p>
            <a
              href="mailto:hi@predict-ability.com"
              className="inline-flex items-center gap-2 bg-[#0201FF] hover:bg-[#0101D4] text-white font-semibold text-[15px] rounded-xl px-6 py-3.5 transition-colors duration-150 shadow-lg shadow-[#0201FF]/20"
            >
              Schreib uns
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path
                  d="M3 8H13M9 4L13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
