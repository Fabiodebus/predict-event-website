"use client";

import { PopupButton } from "@typeform/embed-react";

const TYPEFORM_ID = "m5mMGqEM";

export function CaseStudyCTA() {
  return (
    <section className="py-20 px-6 border-t border-[#1E2530]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-[-0.02em] text-[#EEF2F7] mb-4">
          Was wäre Ihr nächster Event-Fall?
        </h2>
        <p className="text-[16px] md:text-[17px] text-[#8994A7] mb-8 max-w-xl mx-auto leading-relaxed">
          Senden Sie uns Ihr nächstes Event und wir prüfen kostenlos das Pipeline-Potenzial — Break-even, ICP-Volumen, realistische Termine.
        </p>
        <PopupButton
          id={TYPEFORM_ID}
          className="group inline-flex items-center gap-2 bg-[#0201FF] hover:bg-[#0101D4] text-white font-semibold text-[15px] rounded-xl px-7 py-4 transition-all duration-150 active:scale-[0.98] shadow-lg shadow-[#0201FF]/25"
        >
          Event kostenlos prüfen
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16">
            <path
              d="M3 8H13M9 4L13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </PopupButton>
      </div>
    </section>
  );
}
