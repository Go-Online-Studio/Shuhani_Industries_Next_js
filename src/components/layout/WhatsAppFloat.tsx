"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaChevronUp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = "https://wa.me/919898011309?text=Hello%20Suhani%20Industries%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <>
      {/* WhatsApp Float */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white text-3xl shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-112 hover:shadow-[0_6px_30px_rgba(37,211,102,0.5)] transition-all duration-350 animate-pulse-wa"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-7 z-40 w-11 h-11 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center text-lg shadow-md transition-all duration-350 hover:-translate-y-1 ${
          showBackToTop ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-[10px]"
        }`}
        aria-label="Back to top"
      >
        <FaChevronUp />
      </button>
    </>
  );
}
