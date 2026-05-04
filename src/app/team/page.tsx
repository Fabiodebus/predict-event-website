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
    photo: null,
  },
  {
    id: "fabio",
    name: "Fabio Debus",
    role: "Founder · Product & Consulting",
    bio: "Serial entrepreneur that loves AI, Stoicism, and scaling B2B companies. Calm when everything's on fire. Training for Ironman because regular stress isn't enough.",
    photo: null,
  },
  {
    id: "jin",
    name: "Jin Yu",
    role: "GTM Engineer",
    bio: "The brain behind all signals, automations and the very best memes. Expert chef. Runs on anime, discipline, and 4AM bursts of genius.",
    photo: null,
  },
  {
    id: "tim",
    name: "Tim Krohm",
    role: "Head of Consulting",
    bio: "Finance brain, consultant instincts. Became managing director of a 60-person consultancy at 24. Boxing keeps the instincts calibrated. Usually in a suit (HR made him dress down for the photo).",
    photo: null,
  },
  {
    id: "franz",
    name: "Franz Rühm",
    role: "Senior GTM Consultant",
    bio: "Started at Daimler, sharpened at SAP, polished at Horváth. Double Degree & Multi-Year Experience in enterprise consulting. Now runs GTM strategy for B2B companies who've outgrown guesswork.",
    photo: null,
  },
  {
    id: "kai",
    name: "Kai Uphues",
    role: "Growth Consultant",
    bio: "Founded at 15. Scouted talent for Ajax Amsterdam, built networks across Swiss and German pro football. Now scouts pipeline opportunities for PREDICT. Same eye for potential, different playing field.",
    photo: null,
  },
  {
    id: "jasmin",
    name: "Jasmin Maurer",
    role: "Backoffice & Customer Support",
    bio: "Professional „doer of things the right way\". Built her own house with her own hands. Brings precision and care to everything she touches. The reason things actually work around here.",
    photo: null,
  },
  {
    id: "madelaine",
    name: "Madelaine",
    role: "Backoffice & Customer Support",
    bio: "Has called four continents home and made each one work. Adaptable by nature, meticulous by choice. If reliability had a name, it would be Madelaine.",
    photo: null,
  },
];

function Portrait({ name, photo }: { name: string; photo: string | null }) {
  const [errored, setErrored] = useState(false);
  if (!photo || errored) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#161B24] via-[#0F1318] to-[#080B10]">
        <span className="text-[40px] md:text-[48px] font-bold text-[#3A4150] select-none">
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
      className="w-full h-full object-cover"
    />
  );
}

function TeamCard({ member }: { member: Member }) {
  return (
    <article className="rounded-2xl border border-[#1E2530] bg-[#0F1318] overflow-hidden flex">
      <div className="w-32 sm:w-40 md:w-44 flex-shrink-0 aspect-square">
        <Portrait name={member.name} photo={member.photo} />
      </div>
      <div className="flex-1 p-5 md:p-6 flex flex-col">
        <h3 className="text-[16px] md:text-[17px] font-bold text-[#EEF2F7] leading-tight mb-0.5">
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
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
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
