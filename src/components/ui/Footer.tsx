import Image from "next/image";

export function Footer() {
  const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
    {
      title: "Produkt",
      links: [
        { label: "Event Forecast", href: "/#produkt" },
        { label: "Account Universe", href: "/#produkt" },
        { label: "Outreach", href: "/#produkt" },
        { label: "Meeting Calendar", href: "/#produkt" },
        { label: "ROI Report", href: "/#produkt" },
      ],
    },
    {
      title: "Ressourcen",
      links: [
        { label: "Referenzen", href: "/referenzen" },
        { label: "Event ROI Calculator", href: "#" },
        { label: "Messe Pipeline Checklist", href: "#" },
        { label: "Event Outreach Guide", href: "#" },
      ],
    },
    {
      title: "Unternehmen",
      links: [
        { label: "Team", href: "/team" },
        { label: "Referenzen", href: "/referenzen" },
        { label: "Datenschutz", href: "#" },
        { label: "Impressum", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-[#1E2530] bg-[#080B10] py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/predict-logo.png"
                alt="PREDICT"
                width={100}
                height={24}
                className="h-6 w-auto object-contain opacity-80"
              />
            </div>
            <p className="text-[13px] text-[#4D5666] leading-relaxed max-w-[200px]">
              Der Event Pipeline Operating Room für B2B-Teams.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {["LinkedIn", "Twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[12px] text-[#4D5666] hover:text-[#8994A7] transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4D5666] mb-4">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#8994A7] hover:text-[#EEF2F7] transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-7 border-t border-[#1E2530]">
          <p className="text-[12px] text-[#4D5666]">
            © 2026 PREDICT PA GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-5">
            {["Datenschutz", "Impressum", "AGB"].map((item) => (
              <a key={item} href="#" className="text-[12px] text-[#4D5666] hover:text-[#8994A7] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
