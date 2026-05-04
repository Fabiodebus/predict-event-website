export type CaseSummary = {
  slug: string;
  available: boolean;
  company: string;
  segment: string;
  event: string;
  /** Short pitch-line for cards. Treated as summary text, not as a real quote, when quoteIsPlaceholder is true. */
  quote: string;
  quoteIsPlaceholder?: boolean;
  author: string;
  results: { label: string; value: string }[];
};

export type CasePage = {
  variant: "pre" | "post";
  /** "Variante C" — only funnel + enlarged bookings (drop industry / seniority / timeline charts). */
  reduced?: boolean;
  headline: string;
  subhead: string;
  heroStats: { label: string; value: string }[];
  prose: { label: string; body: string }[];
  funnel: { label: string; value: number }[];
  industryChart?: { label: string; value: number }[];
  /** Used as the second-row chart instead of industry when firmographics are unknown. */
  jobFunctionChart?: { label: string; value: number }[];
  seniorityChart?: { label: string; value: number }[];
  timelineChart?: {
    dates: string[];
    values: number[];
    eventDayIndex: number; // -1 if event day is not in the visible window (post-event variant)
  };
  bookings: { name: string; role: string; meta: string; whyItCounts?: string }[];
  quoteBlock: { quote: string; attribution: string; isPlaceholder?: boolean };
  meta: { branche: string; standort: string; event: string; kampagnenfenster: string };
};

export type Case = CaseSummary & { page?: CasePage };

export const CASES: Case[] = [
  /* ─── 1. AMZ × Spielwarenmesse 2026 — Standard ─── */
  {
    slug: "amz-spielwarenmesse-2026",
    available: true,
    company: "AMZ Marketing",
    segment: "Amazon-Marketing-Agentur",
    event: "Spielwarenmesse 2026",
    quote: "Aus 742 ICP-Ausstellern wurden 16 Entscheider-Termine — gebucht, bevor die Messe startete.",
    quoteIsPlaceholder: true,
    author: "Spielwarenmesse Nürnberg 2026",
    results: [
      { label: "ICP-Accounts", value: "742" },
      { label: "Termine", value: "16" },
      { label: "Antwortrate", value: "9,0 %" },
      { label: "Anteil Entscheider", value: "75 %" },
    ],
    page: {
      variant: "pre",
      headline:
        "Wie AMZ Marketing 16 Entscheider-Termine zur Spielwarenmesse buchte — bevor die Messe startete",
      subhead:
        "Aus 742 ICP-relevanten Ausstellern wurden 16 vorqualifizierte Termine mit Geschäftsführung, C-Level und Marketing-Verantwortlichen — gebucht in den 14 Tagen vor Event-Beginn.",
      heroStats: [
        { label: "ICP-Accounts identifiziert", value: "742" },
        { label: "Qualifizierte Termine", value: "16" },
        { label: "Antwortrate", value: "9,0 %" },
        { label: "Anteil Entscheider", value: "75 %" },
      ],
      prose: [
        {
          label: "Über den Kunden",
          body: "AMZ Marketing ist eine spezialisierte Amazon-Marketing-Agentur aus Deutschland. Sie unterstützt Hersteller und D2C-Brands dabei, ihren Amazon-Channel skalierbar zum Wachstumsmotor auszubauen.",
        },
        {
          label: "Ausgangslage",
          body: "Spielwarenmesse hieß für AMZ bisher: vier Tage Stand-zu-Stand laufen, Visitenkarten sammeln, hoffen. Wer am richtigen Stand auf den richtigen Geschäftsführer trifft — Glück. Wer nur Marketing-Praktikanten erwischt — Pech. Der Outcome war unkalkulierbar.",
        },
        {
          label: "Ansatz",
          body: "Wir haben aus dem offiziellen Ausstellerverzeichnis die ICP-relevanten Marken extrahiert — Hersteller mit Amazon-Potenzial in passender Größenklasse — und pro Account die Geschäftsführung, E-Commerce-Verantwortlichen oder Marketing-Leitung identifiziert. Persönliche Outreach mit konkretem Bezug zum Messeauftritt der Marke. Start: zwei Wochen vor Event-Beginn.",
        },
      ],
      funnel: [
        { label: "Identifiziert", value: 742 },
        { label: "Kontaktiert", value: 679 },
        { label: "Geantwortet", value: 61 },
        { label: "Termine", value: 16 },
      ],
      industryChart: [
        { label: "Manufacturing", value: 3 },
        { label: "Textile Mfg.", value: 2 },
        { label: "Consumer Goods", value: 2 },
        { label: "Sporting Goods", value: 1 },
        { label: "Sonstige", value: 8 },
      ],
      seniorityChart: [
        { label: "Owner / GF", value: 7 },
        { label: "Manager", value: 4 },
        { label: "C-Level", value: 3 },
        { label: "Senior IC", value: 1 },
        { label: "Andere", value: 1 },
      ],
      timelineChart: {
        dates: ["15.01", "16.01", "17.01", "18.01", "19.01", "20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01", "27.01", "28.01"],
        values: [2, 4, 0, 0, 3, 0, 2, 2, 0, 0, 0, 2, 0, 1],
        eventDayIndex: 13,
      },
      bookings: [
        { name: "Markus Lüneburg", role: "CEO @ goki", meta: "Consumer Goods · 501–1.000 MA · DE" },
        { name: "Tyrone Winbush", role: "Managing Director @ TechniSat", meta: "Electronics · 1.001–5.000 MA · DE" },
        { name: "Britta Loick", role: "Geschäftsführerin @ Playmais", meta: "Manufacturing · DE" },
      ],
      quoteBlock: {
        quote: "[Zitat einholen — Geschäftsführung AMZ Marketing]",
        attribution: "Name, Position, AMZ Marketing",
        isPlaceholder: true,
      },
      meta: {
        branche: "Amazon-Marketing",
        standort: "Deutschland",
        event: "Spielwarenmesse Nürnberg 2026",
        kampagnenfenster: "14.–28. Januar 2026",
      },
    },
  },

  /* ─── 2. TRD Solutions × FIBO Köln 2026 — Variante B (Functions chart) ─── */
  {
    slug: "trd-fibo-2026",
    available: true,
    company: "TRD Solutions",
    segment: "Amazon-Marketing-Agentur",
    event: "FIBO Köln 2026",
    quote: "13,4 % Antwortrate auf der FIBO — 6 Owner-Termine bei Fitness-Marken vor Event-Beginn.",
    quoteIsPlaceholder: true,
    author: "FIBO Köln 2026",
    results: [
      { label: "ICP-Accounts", value: "314" },
      { label: "Termine", value: "6" },
      { label: "Antwortrate", value: "13,4 %" },
      { label: "Pre-Event gebucht", value: "100 %" },
    ],
    page: {
      variant: "pre",
      headline:
        "Wie TRD Solutions auf der FIBO 13,4 % Antwortrate erzielte — und 6 Owner-Termine bei Fitness-Marken bookte",
      subhead:
        "314 ICP-Aussteller angeschrieben. 42 Antworten. 6 qualifizierte Termine mit Geschäftsführung und Vertriebsleitung von Fitness-, Equipment- und Lifestyle-Marken — alle vor Event-Beginn in Köln.",
      heroStats: [
        { label: "ICP-Accounts identifiziert", value: "314" },
        { label: "Qualifizierte Termine", value: "6" },
        { label: "Antwortrate", value: "13,4 %" },
        { label: "Pre-Event gebucht", value: "100 %" },
      ],
      prose: [
        {
          label: "Über den Kunden",
          body: "TRD Solutions ist eine Amazon-Marketing-Agentur mit Spezialisierung auf Fitness, Sport und Lifestyle. Sie hilft Marken, ihren Amazon-Channel als profitablen Wachstumshebel zu führen — von der Listing-Strategie bis zur Marktplatz-Skalierung.",
        },
        {
          label: "Ausgangslage",
          body: "Die FIBO in Köln ist mit über 1.000 Ausstellern und 130.000 Fachbesuchern die weltgrößte Fitness-Messe. Für TRD: ein voller Pool relevanter Marken. Aber bei 1.000 Ständen und vier Tagen — wie filtert man die wirklich Amazon-bereiten Marken heraus, und wie erreicht man die Entscheidungsebene statt Praktikanten am Booth?",
        },
        {
          label: "Ansatz",
          body: "Wir haben aus dem FIBO-Ausstellerverzeichnis die Marken mit konkreter Amazon-Relevanz extrahiert — Sportbekleidung, Equipment, Supplements, Fitness-Lifestyle. Pro Marke wurde die Geschäftsführung oder Vertriebsleitung direkt identifiziert. Persönliche Outreach mit konkretem Bezug zum FIBO-Auftritt, gestartet drei Wochen vor Event-Beginn.",
        },
      ],
      funnel: [
        { label: "Identifiziert", value: 314 },
        { label: "Kontaktiert", value: 314 },
        { label: "Geantwortet", value: 42 },
        { label: "Termine", value: 6 },
      ],
      jobFunctionChart: [
        { label: "Executive / Leadership", value: 3 },
        { label: "Sales", value: 2 },
        { label: "Marketing", value: 1 },
      ],
      seniorityChart: [
        { label: "Owner / GF", value: 2 },
        { label: "Director / Head", value: 2 },
        { label: "C-Level", value: 1 },
        { label: "Manager", value: 1 },
      ],
      timelineChart: {
        dates: ["20.03", "23.03", "25.03", "02.04", "08.04", "09.04"],
        values: [2, 1, 1, 1, 1, 0],
        eventDayIndex: 5,
      },
      bookings: [
        { name: "Marcel Brink", role: "Managing Director @ Gorilla Wear", meta: "Fitness Apparel" },
        { name: "Kai-Nils Wollenschein", role: "Founder & CEO @ Raize Gym Wear", meta: "Activewear" },
        { name: "Iris Heininger", role: "Head of Sales @ hiPURE", meta: "Sports Nutrition" },
      ],
      quoteBlock: {
        quote: "[Zitat einholen — Geschäftsführung TRD Solutions]",
        attribution: "Name, Position, TRD Solutions",
        isPlaceholder: true,
      },
      meta: {
        branche: "Amazon-Marketing-Agentur",
        standort: "Deutschland",
        event: "FIBO Köln 2026",
        kampagnenfenster: "17.–26. März 2026",
      },
    },
  },

  /* ─── 3. KI & IT Dienstleister × IFAT München 2026 — Standard ─── */
  {
    slug: "ki-it-dienstleister-ifat-2026",
    available: true,
    company: "KI & IT Dienstleister",
    segment: "KI- & IT-Dienstleistung",
    event: "IFAT München 2026",
    quote: "12 Termine bei Industriekonzernen wie Dieffenbacher, Saubermacher und Palfinger — in 9 Tagen.",
    quoteIsPlaceholder: true,
    author: "IFAT München 2026",
    results: [
      { label: "ICP-Accounts", value: "461" },
      { label: "Termine", value: "12" },
      { label: "Antwortrate", value: "5,1 %" },
      { label: "Vorlaufzeit", value: "9 Tage" },
    ],
    page: {
      variant: "pre",
      headline:
        "12 Termine bei Industriekonzernen in 9 Tagen — vor dem ersten Messetag der IFAT",
      subhead:
        "453 Marketing-, Sales- und Business-Development-Verantwortliche der größten Anlagenbauer und Umweltdienstleister Europas direkt erreicht. 12 qualifizierte Termine — bei Dieffenbacher, Saubermacher, Palfinger und weiteren Industriegrößen.",
      heroStats: [
        { label: "ICP-Accounts identifiziert", value: "461" },
        { label: "Qualifizierte Termine", value: "12" },
        { label: "Antwortrate", value: "5,1 %" },
        { label: "Vorlaufzeit", value: "9 Tage" },
      ],
      prose: [
        {
          label: "Über den Kunden",
          body: "Der Kunde ist ein KI- und IT-Dienstleister, der mittelständische und Konzern-Industriebetriebe bei der Digitalisierung ihrer Marketing- und Vertriebsprozesse unterstützt. Spezialisierung: Maschinenbau, Anlagenbau und Umwelttechnik.",
        },
        {
          label: "Ausgangslage",
          body: "Die IFAT München ist die Weltleitmesse für Wasser-, Abwasser-, Abfall- und Rohstoffwirtschaft — über 3.000 Aussteller, 140.000 Fachbesucher. Die ICP-Personas: Marketing- und Sales-Manager in Industriekonzernen — Personen, die kaum auf LinkedIn aktiv sind und über klassische Outbound-Kanäle schwer zu erreichen.",
        },
        {
          label: "Ansatz",
          body: "Aus dem IFAT-Ausstellerverzeichnis haben wir die Konzern-Aussteller in passender Größenklasse extrahiert. Pro Account wurden gezielt Marketing-Manager, Communications-Specialists und Business-Development-Verantwortliche identifiziert — bewusst nicht die Geschäftsführung. Diese Persona kauft das Angebot. Outreach mit Bezug zum konkreten IFAT-Auftritt, gestartet zwei Wochen vor Event-Beginn.",
        },
      ],
      funnel: [
        { label: "Identifiziert", value: 461 },
        { label: "Kontaktiert", value: 453 },
        { label: "Geantwortet", value: 23 },
        { label: "Termine", value: 12 },
      ],
      industryChart: [
        { label: "Machinery Mfg.", value: 3 },
        { label: "Industrial Machinery", value: 2 },
        { label: "Environmental Services", value: 1 },
        { label: "Higher Education", value: 1 },
        { label: "Chemical Mfg.", value: 1 },
        { label: "Sonstige", value: 4 },
      ],
      seniorityChart: [
        { label: "Manager", value: 6 },
        { label: "Senior IC", value: 4 },
        { label: "C-Level", value: 1 },
        { label: "Andere", value: 1 },
      ],
      timelineChart: {
        dates: ["20.04", "23.04", "25.04", "27.04", "28.04", "04.05"],
        values: [1, 3, 1, 4, 3, 0],
        eventDayIndex: 5,
      },
      bookings: [
        { name: "Peter Koren", role: "Strategic Partner Development Manager @ Palfinger Marine", meta: "Industrial Machinery · 1.001–5.000 MA · AT" },
        { name: "Matthias Kraft", role: "Marketing Manager @ Dieffenbacher", meta: "Machinery Mfg. · 1.001–5.000 MA · DE" },
        { name: "Anita Windisch", role: "Assistant to MD Sales @ Saubermacher", meta: "Environmental Services · 1.001–5.000 MA · AT" },
      ],
      quoteBlock: {
        quote: "[Zitat einholen — Geschäftsführung des Kunden]",
        attribution: "Name, Position, KI & IT Dienstleister",
        isPlaceholder: true,
      },
      meta: {
        branche: "KI & IT-Dienstleistung",
        standort: "DACH",
        event: "IFAT München 2026",
        kampagnenfenster: "20.–29. April 2026",
      },
    },
  },

  /* ─── 4. TRD × Spielwarenmesse Post-Event — Variante A + B ─── */
  {
    slug: "trd-spielwarenmesse-2026-post-event",
    available: true,
    company: "TRD Solutions",
    segment: "Post-Event Lead Recovery",
    event: "Spielwarenmesse 2026 (Post)",
    quote: "Lead-Recovery 6 Wochen nach Spielwarenmesse-Schluss — 4 Geschäftsführer-Termine bei Spielwaren-Marken.",
    quoteIsPlaceholder: true,
    author: "Spielwarenmesse Nürnberg 2026 · Post-Event",
    results: [
      { label: "ICP-Accounts", value: "245" },
      { label: "Termine", value: "4" },
      { label: "Antwortrate", value: "10,6 %" },
      { label: "Anteil GF", value: "100 %" },
    ],
    page: {
      variant: "post",
      headline:
        "4 Geschäftsführer-Termine bei Spielwaren-Marken — sechs Wochen nach Messe-Schluss",
      subhead:
        "Während andere Aussteller ihre Visitenkarten ablegen, hat TRD Solutions 245 Aussteller der Spielwarenmesse systematisch nachverfolgt. 4 qualifizierte Termine mit Geschäftsführung — alle bei deutschen und österreichischen Spielwaren-Herstellern.",
      heroStats: [
        { label: "ICP-Accounts identifiziert", value: "245" },
        { label: "Qualifizierte Termine", value: "4" },
        { label: "Antwortrate", value: "10,6 %" },
        { label: "Anteil Geschäftsführer", value: "100 %" },
      ],
      prose: [
        {
          label: "Über den Kunden",
          body: "TRD Solutions ist eine Amazon-Marketing-Agentur mit Fokus auf Fitness, Sport und Lifestyle — hier zusätzlich aktiv im Spielwaren-Segment, wo viele Hersteller ihr Amazon-Channel-Potenzial unterschätzen.",
        },
        {
          label: "Ausgangslage",
          body: "Nach jeder großen Messe verschwinden tausende potenziell relevante Kontakte in Visitenkarten-Stapeln, Notiz-Apps und vergessenen LinkedIn-Anfragen. Das Standard-Schicksal: kein Follow-up, keine zweite Chance, keine Pipeline. Für TRD eine offensichtliche Chance — gerade weil andere die Hausaufgaben nicht machen.",
        },
        {
          label: "Ansatz",
          body: "Aus dem Spielwarenmesse-Ausstellerverzeichnis extrahierten wir 245 ICP-Accounts (Spielzeug- und Lifestyle-Hersteller mit Amazon-Potenzial). Sechs Wochen nach Event-Schluss starteten wir die Lead-Recovery-Kampagne mit konkretem Bezug zum jeweiligen Messeauftritt der Marke. Direkter Kontakt mit der Geschäftsführung statt Marketing-Praktikanten.",
        },
      ],
      funnel: [
        { label: "Identifiziert", value: 245 },
        { label: "Kontaktiert", value: 245 },
        { label: "Geantwortet", value: 26 },
        { label: "Termine", value: 4 },
      ],
      jobFunctionChart: [
        { label: "Executive / Leadership", value: 4 },
      ],
      seniorityChart: [
        { label: "Owner / GF", value: 3 },
        { label: "C-Level", value: 1 },
      ],
      timelineChart: {
        dates: ["18.03", "23.03", "24.03", "27.03"],
        values: [1, 1, 1, 1],
        eventDayIndex: -1,
      },
      bookings: [
        { name: "Mark Ludwig", role: "Managing Director (CEO) @ NZG Modelle", meta: "Premium-Modellauto-Hersteller · DE" },
        { name: "Luisa Schenk", role: "Geschäftsführerin @ alldoro", meta: "Spielwaren-Hersteller · DE" },
        { name: "Michael Leipold", role: "Geschäftsführer @ WoodHeroes", meta: "Nachhaltige Holzspielwaren · AT" },
      ],
      quoteBlock: {
        quote: "[Zitat einholen — Geschäftsführung TRD Solutions]",
        attribution: "Name, Position, TRD Solutions",
        isPlaceholder: true,
      },
      meta: {
        branche: "Amazon-Marketing-Agentur",
        standort: "Deutschland",
        event: "Spielwarenmesse Nürnberg 2026",
        kampagnenfenster: "17.–24. März 2026 (Post-Event)",
      },
    },
  },

  /* ─── 5. WunderStudios × Spielwarenmesse 2026 — Variante C (reduced) ─── */
  {
    slug: "wunderstudios-spielwarenmesse-2026",
    available: true,
    company: "WunderStudios",
    segment: "Influencer-Marketing",
    event: "Spielwarenmesse 2026",
    quote: "Aus 164 Spielwaren-Marken zu den zwei richtigen — TOPI GAMES und CHILLAFISH.",
    quoteIsPlaceholder: true,
    author: "Spielwarenmesse Nürnberg 2026",
    results: [
      { label: "ICP-Accounts", value: "164" },
      { label: "Termine", value: "2" },
      { label: "Antwortrate", value: "10,7 %" },
      { label: "ICP-Match", value: "100 %" },
    ],
    page: {
      variant: "pre",
      reduced: true,
      headline:
        "Aus 164 Spielwaren-Marken zu den zwei richtigen — TOPI GAMES und CHILLAFISH",
      subhead:
        "Wenn ein Influencer-Marketing-Deal mit einer Premium-Kindermarke fünfstellig wertschöpft, zählt nicht Volumen, sondern Passung. PREDICT hat aus 164 ICP-Ausstellern die zwei Marken identifiziert und gebucht, die WunderStudios' ICP exakt treffen.",
      heroStats: [
        { label: "ICP-Accounts identifiziert", value: "164" },
        { label: "Qualifizierte Termine", value: "2" },
        { label: "Antwortrate", value: "10,7 %" },
        { label: "ICP-Match", value: "100 %" },
      ],
      prose: [
        {
          label: "Über den Kunden",
          body: "WunderStudios ist eine Influencer-Marketing-Agentur mit Spezialisierung auf Familien- und Kinder-fokussierte D2C-Brands. Sie produziert content-getriebene Kampagnen, die genau dann funktionieren, wenn die Marke zur Audience passt.",
        },
        {
          label: "Ausgangslage",
          body: "Auf der Spielwarenmesse stehen tausende Marken — viele davon zu klein, zu B2B-orientiert oder mit der falschen Audience für Influencer-Marketing-Skalierung. Der Aufwand, manuell die wenigen passenden Premium-D2C-Brands zu identifizieren, ist enorm. Die Konsequenz für viele Agenturen: lieber gar nicht zur Messe — zu unklar, ob sich der Aufwand lohnt.",
        },
        {
          label: "Ansatz",
          body: "Wir haben den ICP geschärft: D2C-Familien- oder Kinder-Marken mit Eigenmarken-Status, ausreichender Größenklasse und internationaler Aufstellung. Systematisch durch die rund 2.500 Spielwarenmesse-Aussteller gefiltert — 164 Accounts blieben übrig. Pro Account direkter Kontakt mit Geschäftsführung. Outreach drei Wochen vor Event-Beginn.",
        },
      ],
      funnel: [
        { label: "Identifiziert", value: 164 },
        { label: "Kontaktiert", value: 159 },
        { label: "Geantwortet", value: 17 },
        { label: "Termine", value: 2 },
      ],
      bookings: [
        {
          name: "Jonathan Algaze",
          role: "CEO @ TOPI GAMES",
          meta: "Wholesale · 2–10 MA · Frankreich",
          whyItCounts:
            "Premium Family Board Games mit internationalem Vertrieb. Direkter CEO-Termin — die Persona, mit der eine Influencer-Kampagne in Stunden statt Wochen entschieden wird.",
        },
        {
          name: "Adrien Delvaux",
          role: "Product Designer & Marketing Specialist @ CHILLAFISH",
          meta: "Manufacturing · 2–10 MA · Belgien",
          whyItCounts:
            "Etablierte Kindermobilitäts-Marke, weltweiter Verkauf. Marketing-Sparringspartner direkt am Produkt — der Hebel, an dem Content-Kooperationen tatsächlich entstehen.",
        },
      ],
      quoteBlock: {
        quote: "[Zitat einholen — Geschäftsführung WunderStudios]",
        attribution: "Name, Position, WunderStudios",
        isPlaceholder: true,
      },
      meta: {
        branche: "Influencer-Marketing",
        standort: "Deutschland",
        event: "Spielwarenmesse Nürnberg 2026",
        kampagnenfenster: "7.–28. Januar 2026",
      },
    },
  },

  /* ─── 6. FeBoKo × LogiMAT Post-Event — Variante A ─── */
  {
    slug: "feboko-logimat-2026-post-event",
    available: true,
    company: "FeBoKo",
    segment: "Management-Beratung",
    event: "LogiMAT 2026 (Post)",
    quote: "6 Geschäftsführer-Termine nach LogiMAT — bei IGEPA, Steute und Logopak.",
    quoteIsPlaceholder: true,
    author: "LogiMAT Stuttgart 2026 · Post-Event",
    results: [
      { label: "ICP-Accounts", value: "990" },
      { label: "Termine", value: "6" },
      { label: "Antwortrate", value: "5,0 %" },
      { label: "GF / Director", value: "100 %" },
    ],
    page: {
      variant: "post",
      headline:
        "6 Geschäftsführer-Termine nach der LogiMAT — 5 davon bei deutschen Industriekonzernen",
      subhead:
        "990 ICP-Aussteller der LogiMAT systematisch nachverfolgt. 6 qualifizierte Termine — fünf davon Geschäftsführung, einer Head of Operations. IGEPA, Steute, Logopak und weitere.",
      heroStats: [
        { label: "ICP-Accounts identifiziert", value: "990" },
        { label: "Qualifizierte Termine", value: "6" },
        { label: "Antwortrate", value: "5,0 %" },
        { label: "GF- / Director-Termine", value: "100 %" },
      ],
      prose: [
        {
          label: "Über den Kunden",
          body: "FeBoKo ist eine Management-Beratung für mittelständische und industrielle Unternehmen — Fokus auf Operations-Excellence, Lieferkette und Prozessoptimierung. Ihre Kunden sind Geschäftsführer, die operative Themen direkt verantworten.",
        },
        {
          label: "Ausgangslage",
          body: "Die LogiMAT in Stuttgart ist Europas Leitmesse für Intralogistik — 1.500+ Aussteller, fast 70.000 Fachbesucher. Praktisch jeder relevante Mittelständler im DACH-Raum ist hier. Aber: Die Geschäftsführer haben den Nachmessen-Wahnsinn — überfüllte Inboxen, hunderte Aussteller- und Standpartner-Anfragen, kaum Zeit für unstrukturierte Follow-ups.",
        },
        {
          label: "Ansatz",
          body: "Wir haben aus dem LogiMAT-Ausstellerverzeichnis 990 mittelständische Industriebetriebe identifiziert (Maschinenbau, Logistik, Verpackung, Fertigung — passende Größenklasse). Pro Account: Direkter Kontakt mit Geschäftsführung mit konkretem Bezug zum LogiMAT-Auftritt. Outreach gestartet ab Tag 0 (Event-Schluss), 18 Tage Laufzeit.",
        },
      ],
      funnel: [
        { label: "Identifiziert", value: 990 },
        { label: "Kontaktiert", value: 986 },
        { label: "Geantwortet", value: 49 },
        { label: "Termine", value: 6 },
      ],
      industryChart: [
        { label: "Industrial Machinery", value: 2 },
        { label: "Wholesale", value: 1 },
        { label: "Manufacturing", value: 1 },
        { label: "Appliances Mfg.", value: 1 },
        { label: "Machinery Mfg.", value: 1 },
      ],
      seniorityChart: [
        { label: "Owner / GF", value: 5 },
        { label: "Director / Head", value: 1 },
      ],
      timelineChart: {
        dates: ["20.04", "23.04", "28.04"],
        values: [2, 3, 1],
        eventDayIndex: -1,
      },
      bookings: [
        { name: "Amir Besic", role: "Managing Director @ IGEPA", meta: "Wholesale · 1.001–5.000 MA · DE — Großhändler für Papier und Verpackung" },
        { name: "Stephan Kiesner", role: "Managing Director / CFO @ Steute", meta: "Electronics Mfg. · 201–500 MA · DE" },
        { name: "Aljoscha Fladung", role: "Head of Operations @ Logopak", meta: "Machinery Mfg. · 201–500 MA · DE" },
      ],
      quoteBlock: {
        quote: "[Zitat einholen — Geschäftsführung FeBoKo]",
        attribution: "Name, Position, FeBoKo",
        isPlaceholder: true,
      },
      meta: {
        branche: "Management-Beratung",
        standort: "Deutschland",
        event: "LogiMAT Stuttgart 2026",
        kampagnenfenster: "30. März – 17. April 2026 (Post-Event)",
      },
    },
  },

  /* ─── 7. Papair × EuroShop 2026 — Standard ─── */
  {
    slug: "papair-euroshop-2026",
    available: true,
    company: "Papair",
    segment: "Verpackung / Physical Goods",
    event: "EuroShop 2026",
    quote: "6 Termine zur EuroShop — bei Pixlip, KL Druck und weiteren Verpackungsmarken.",
    quoteIsPlaceholder: true,
    author: "EuroShop Düsseldorf 2026",
    results: [
      { label: "ICP-Accounts", value: "248" },
      { label: "Termine", value: "6" },
      { label: "Antwortrate", value: "8,9 %" },
      { label: "Anteil GF / COO", value: "67 %" },
    ],
    page: {
      variant: "pre",
      headline:
        "6 Geschäftsführer- und C-Level-Termine zur EuroShop — bei Verpackungs-, Display- und Print-Marken",
      subhead:
        "248 ICP-Aussteller systematisch erreicht. 6 qualifizierte Termine — vier Geschäftsführer / COOs, zwei Manager. Bei Pixlip, KL Druck, Carpe und weiteren Verpackungs- und Architektur-Marken.",
      heroStats: [
        { label: "ICP-Accounts identifiziert", value: "248" },
        { label: "Qualifizierte Termine", value: "6" },
        { label: "Antwortrate", value: "8,9 %" },
        { label: "Anteil GF / COO", value: "67 %" },
      ],
      prose: [
        {
          label: "Über den Kunden",
          body: "Papair ist ein Hersteller physischer Produkte mit Spezialisierung auf nachhaltige Verpackung — eine Alternative zu Luftpolsterfolie und Kunststoff-Füllmaterial. Zielmärkte: Versand, Ladenbau, Architektur, Druckerei.",
        },
        {
          label: "Ausgangslage",
          body: "Die EuroShop ist die globale Leitmesse für den Handelsbereich — über 1.700 Aussteller in 16 Hallen, mehr als 90.000 Fachbesucher aus 140 Ländern. Für Papair: Ein voller Pool potenzieller Kunden in Print, Ladenbau, Display und Verpackung — aber ohne strukturierte Vorab-Termine kaum zu durchdringen.",
        },
        {
          label: "Ansatz",
          body: "Aus dem EuroShop-Ausstellerverzeichnis haben wir die ICP-passenden Aussteller extrahiert: Verpackung, Print, Display, Architektur, Eventservice. Pro Account direkter Kontakt mit Geschäftsführung oder Operations-Leitung mit konkretem Bezug zu Verpackungs-Themen am Stand. Outreach drei Wochen vor Event-Beginn.",
        },
      ],
      funnel: [
        { label: "Identifiziert", value: 248 },
        { label: "Kontaktiert", value: 248 },
        { label: "Geantwortet", value: 22 },
        { label: "Termine", value: 6 },
      ],
      industryChart: [
        { label: "Events Services", value: 2 },
        { label: "Computer Hardware", value: 1 },
        { label: "Printing Services", value: 1 },
        { label: "Architecture", value: 1 },
        { label: "Internet Marketplace", value: 1 },
      ],
      seniorityChart: [
        { label: "Owner / GF", value: 3 },
        { label: "Manager", value: 2 },
        { label: "C-Level", value: 1 },
      ],
      timelineChart: {
        dates: ["07.02", "10.02", "12.02", "16.02", "26.02"],
        values: [1, 3, 1, 1, 0],
        eventDayIndex: 4,
      },
      bookings: [
        { name: "Daniel Liba", role: "Chief Operating Officer @ Pixlip", meta: "Architecture & Display Systems · 11–50 MA · DE" },
        { name: "Stefan Gemünd", role: "Geschäftsführer @ Optimal", meta: "Events Services · 11–50 MA · DE" },
        { name: "Ulli Fischer", role: "Leiter Konfektion & Verpackung @ KL Druck", meta: "Printing Services · 201–500 MA · DE" },
      ],
      quoteBlock: {
        quote: "[Zitat einholen — Geschäftsführung Papair]",
        attribution: "Name, Position, Papair",
        isPlaceholder: true,
      },
      meta: {
        branche: "Verpackung / Physical Goods",
        standort: "Deutschland",
        event: "EuroShop Düsseldorf 2026",
        kampagnenfenster: "5.–11. Februar 2026",
      },
    },
  },

  /* ─── 8. Dr. Maier & Partner × Hannover Messe 2026 — Standard ─── */
  {
    slug: "dr-maier-hannover-messe-2026",
    available: true,
    company: "Dr. Maier & Partner",
    segment: "Executive Search",
    event: "Hannover Messe 2026",
    quote: "4 Sales- und HR-Director-Termine zur Hannover Messe — bei Pilz, Viscom und M&M Software.",
    quoteIsPlaceholder: true,
    author: "Hannover Messe 2026",
    results: [
      { label: "ICP-Accounts", value: "556" },
      { label: "Termine", value: "4" },
      { label: "Antwortrate", value: "5,5 %" },
      { label: "Director- / Head-Level", value: "100 %" },
    ],
    page: {
      variant: "pre",
      headline:
        "4 Sales- und HR-Director-Termine zur Hannover Messe — bei Pilz, Viscom und M&M Software",
      subhead:
        "475 Sales-, HR- und Geschäftsführungs-Verantwortliche bei Industriekonzernen direkt angeschrieben. 4 qualifizierte Termine — alle auf Director- / Head-Level. Pilz Automation, Viscom Industrial X-Ray, Firecell Telecommunications, M&M Software Development.",
      heroStats: [
        { label: "ICP-Accounts identifiziert", value: "556" },
        { label: "Qualifizierte Termine", value: "4" },
        { label: "Antwortrate", value: "5,5 %" },
        { label: "Director- / Head-Level", value: "100 %" },
      ],
      prose: [
        {
          label: "Über den Kunden",
          body: "Dr. Maier & Partner ist eine Executive-Search-Boutique mit Fokus auf den industriellen Mittelstand. Spezialisierung: Vertriebsleitung, HR-Leitung und C-Level-Mandate bei Maschinenbau, Automation und Software.",
        },
        {
          label: "Ausgangslage",
          body: "Hannover Messe ist die weltgrößte Industriemesse — über 4.000 Aussteller, rund 130.000 Fachbesucher. Für eine Personalberatung mit klarem ICP: zugleich Goldmine und Volumen-Falle. Die richtigen Vertriebsleitungen und HR-Heads zu finden, ist möglich. Sie auf der Messe zufällig anzutreffen — Glückssache.",
        },
        {
          label: "Ansatz",
          body: "Wir haben aus dem Hannover-Messe-Ausstellerverzeichnis 556 Industrieaussteller mit passender Größenklasse extrahiert. Pro Account die Sales-Leitung, HR-Leitung oder Geschäftsführung gezielt identifiziert. Persönliche Outreach mit konkretem Bezug zum Hannover-Messe-Auftritt, gestartet vier Wochen vor Event-Beginn.",
        },
      ],
      funnel: [
        { label: "Identifiziert", value: 556 },
        { label: "Kontaktiert", value: 475 },
        { label: "Geantwortet", value: 26 },
        { label: "Termine", value: 4 },
      ],
      industryChart: [
        { label: "Telecommunications", value: 1 },
        { label: "Automation Mfg.", value: 1 },
        { label: "Industrial Machinery", value: 1 },
        { label: "Software Dev.", value: 1 },
      ],
      seniorityChart: [
        { label: "Director / Head", value: 2 },
        { label: "Manager", value: 2 },
      ],
      timelineChart: {
        dates: ["19.03", "20.03", "25.03", "27.03", "20.04"],
        values: [1, 1, 1, 1, 0],
        eventDayIndex: 4,
      },
      bookings: [
        { name: "Martin Günther", role: "Key Account Manager @ Pilz", meta: "Automation Machinery · 1.001–5.000 MA" },
        { name: "Fotios Dritsos", role: "Sales Manager Industrial X-Ray Inspection @ Viscom", meta: "Industrial Machinery · 501–1.000 MA" },
        { name: "Nicole Jezabek", role: "Head of Sales Germany @ Firecell", meta: "Telecommunications · 11–50 MA" },
      ],
      quoteBlock: {
        quote: "[Zitat einholen — Dr. Maier & Partner]",
        attribution: "Name, Position, Dr. Maier & Partner",
        isPlaceholder: true,
      },
      meta: {
        branche: "Executive Search",
        standort: "Deutschland",
        event: "Hannover Messe 2026",
        kampagnenfenster: "18.–25. März 2026",
      },
    },
  },
];

export function getCase(slug: string): Case | undefined {
  return CASES.find((c) => c.slug === slug);
}

export function getRelatedCases(currentSlug: string, count = 3): Case[] {
  return CASES.filter((c) => c.slug !== currentSlug && c.available).slice(0, count);
}
