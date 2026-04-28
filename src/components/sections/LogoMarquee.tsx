"use client";

const LOGOS_ROW1 = [
  "Siemens", "KION Group", "Bosch Rexroth", "SAP", "Continental",
  "Schaeffler", "Trumpf", "Hella", "Weidmüller", "Festo",
  "Siemens", "KION Group", "Bosch Rexroth", "SAP", "Continental",
  "Schaeffler", "Trumpf", "Hella", "Weidmüller", "Festo",
];

const LOGOS_ROW2 = [
  "Phoenix Contact", "Pilz", "Beckhoff", "Lenze", "Sick AG",
  "Balluff", "IFM Electronic", "Harting", "Wago", "Murrelektronik",
  "Phoenix Contact", "Pilz", "Beckhoff", "Lenze", "Sick AG",
  "Balluff", "IFM Electronic", "Harting", "Wago", "Murrelektronik",
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center h-10 px-6 mx-4 opacity-35 hover:opacity-60 transition-opacity duration-200 select-none">
      <span className="text-[13px] font-semibold tracking-tight text-[#8994A7] whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="py-16 border-y border-[#1E2530] overflow-hidden marquee-wrapper">
      <div className="text-center mb-10">
        <p className="text-[12px] font-semibold tracking-widest uppercase text-[#4D5666]">
          Vertraut von modernen B2B-Teams, die Events messbar machen wollen
        </p>
      </div>

      {/* Row 1 — moves left */}
      <div className="relative flex overflow-hidden mb-4">
        <div className="flex marquee-track-left">
          {LOGOS_ROW1.map((name, i) => (
            <LogoItem key={`r1-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Row 2 — moves right */}
      <div className="relative flex overflow-hidden">
        <div className="flex marquee-track-right">
          {LOGOS_ROW2.map((name, i) => (
            <LogoItem key={`r2-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
