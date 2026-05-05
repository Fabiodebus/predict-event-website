"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PopupButton } from "@typeform/embed-react";

const TYPEFORM_ID = "m5mMGqEM";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080B10]/95 backdrop-blur-md border-b border-[#1E2530]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-[1fr_auto_1fr] items-center gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center justify-self-start">
          <Image
            src="/predict-logo.png"
            alt="PREDICT"
            width={148}
            height={38}
            priority
            style={{ height: 38, width: "auto" }}
            className="object-contain"
          />
        </a>

        {/* Desktop nav (truly centered) */}
        <nav className="hidden md:flex items-center gap-7 justify-self-center">
          {[
            { label: "Produkt", href: "/#produkt" },
            { label: "Referenzen", href: "/referenzen" },
            { label: "Ressourcen", href: "#" },
            { label: "Team", href: "/team" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] text-[#8994A7] hover:text-[#EEF2F7] transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3 justify-self-end">
          <PopupButton
            id={TYPEFORM_ID}
            className="text-[13px] font-medium bg-[#0201FF] hover:bg-[#0101D4] text-white rounded-lg px-4 py-2 transition-colors duration-150"
          >
            Demo buchen
          </PopupButton>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#8994A7] justify-self-end col-start-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu öffnen"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <>
                <path d="M3 6H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#080B10] border-b border-[#1E2530] px-6 pb-6"
        >
          <nav className="flex flex-col gap-4 pt-4">
            {[
              { label: "Produkt", href: "/#produkt" },
              { label: "Referenzen", href: "/referenzen" },
              { label: "Ressourcen", href: "#" },
              { label: "Team", href: "/team" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-[15px] text-[#8994A7]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <PopupButton
                id={TYPEFORM_ID}
                onReady={() => setMenuOpen(false)}
                className="text-[14px] font-medium bg-[#0201FF] text-white rounded-lg px-4 py-2.5 text-center w-full"
              >
                Demo buchen
              </PopupButton>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
