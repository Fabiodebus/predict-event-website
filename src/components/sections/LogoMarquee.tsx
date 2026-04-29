"use client";

const LOGO_FILES = [
  "Vector.svg",
  "Vector (1).svg",
  "Vector (2).svg",
  "Vector (3).svg",
  "Vector (4).svg",
  "Vector (5).svg",
  "Vector (6).svg",
  "Vector (7).svg",
  "Vector (8).svg",
  "Vector (9).svg",
  "Vector (10).svg",
  "Vector (11).svg",
  "Vector (12).svg",
  "Vector (13).svg",
  "Vector (14).svg",
  "Vector (15).svg",
  "Vector (16).svg",
  "Vector (17).svg",
  "Vector (18).svg",
  "Vector (19).svg",
  "Vector (20).svg",
  "Vector (21).svg",
  "Vector (22).svg",
  "Vector (23).svg",
  "Vector (24).svg",
];

const ROW1 = LOGO_FILES.slice(0, 13);
const ROW2 = LOGO_FILES.slice(13);

function LogoItem({ file }: { file: string }) {
  return (
    <div className="flex items-center justify-center h-16 px-7 mx-3 opacity-55 hover:opacity-95 transition-opacity duration-200 select-none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logos/${encodeURIComponent(file)}`}
        alt=""
        className="h-11 w-auto max-w-[200px]"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="py-12 border-y border-[#1E2530] overflow-hidden marquee-wrapper">
      <div className="text-center mb-10">
        <p className="text-[12px] font-semibold tracking-widest uppercase text-[#4D5666]">
          Vertraut von modernen B2B-Teams, die Events messbar machen wollen
        </p>
      </div>

      {/* Row 1 — moves left */}
      <div className="relative flex overflow-hidden mb-4">
        <div className="flex marquee-track-left">
          {[...ROW1, ...ROW1].map((file, i) => (
            <LogoItem key={`r1-${i}`} file={file} />
          ))}
        </div>
      </div>

      {/* Row 2 — moves right */}
      <div className="relative flex overflow-hidden">
        <div className="flex marquee-track-right">
          {[...ROW2, ...ROW2].map((file, i) => (
            <LogoItem key={`r2-${i}`} file={file} />
          ))}
        </div>
      </div>
    </section>
  );
}
