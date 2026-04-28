"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/predict-logo.png"
            alt="PREDICT"
            width={148}
            height={38}
            priority
            className="h-[38px] w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {["Produkt", "Lösungen", "Kunden", "Ressourcen", "Preise"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[14px] text-[#8994A7] hover:text-[#EEF2F7] transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-[14px] text-[#8994A7] hover:text-[#EEF2F7] transition-colors duration-150 px-3 py-1.5"
          >
            Anmelden
          </a>
          <a
            href="#"
            className="text-[13px] font-medium bg-[#0201FF] hover:bg-[#0101D4] text-white rounded-lg px-4 py-2 transition-colors duration-150"
          >
            Demo ansehen
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#8994A7]"
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
            {["Produkt", "Lösungen", "Kunden", "Ressourcen", "Preise"].map((item) => (
              <a key={item} href="#" className="text-[15px] text-[#8994A7]">
                {item}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a href="#" className="text-[14px] text-[#8994A7]">Anmelden</a>
              <a href="#" className="text-[14px] font-medium bg-[#0201FF] text-white rounded-lg px-4 py-2.5 text-center">
                Demo ansehen
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
