"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaThLarge } from "react-icons/fa";
import StatCounter from "@/components/ui/StatCounter";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function HeroSection() {
  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(getWhatsAppLink("CNC Machining"), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-68px)] flex items-center bg-[url('/images/hero_bg.png')] bg-center bg-cover bg-no-repeat py-20 overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/55 to-black/20 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[700px]">
          {/* Label */}
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-accent mb-5">
            <span className="w-8 h-[2px] bg-accent rounded-sm" />
            Premium Manufacturing Since 2010
          </div>

          {/* Title */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-tight leading-tight mb-5">
            Expert CNC &amp; <br />
            <span className="text-accent">Carving Services</span> <br />
            Built to Perfection
          </h1>

          {/* Description */}
          <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-[560px] mb-9 font-light">
            From intricate 3D wood sculptures to precision metal components — Suhani Industries delivers craftsmanship that sets your space apart.
          </p>

          {/* Call-to-actions */}
          <div className="flex flex-wrap gap-4 mb-15">
            <a
              href="#"
              onClick={handleQuoteClick}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all duration-350 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
            >
              <FaWhatsapp className="text-sm" /> Get Free Quote
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all duration-350 hover:-translate-y-0.5"
            >
              <FaThLarge className="text-sm" /> View Services
            </Link>
          </div>

          {/* Stat Counter Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-white/10">
            <StatCounter count={500} suffix="+" label="Projects Delivered" />
            <StatCounter count={15} suffix="+" label="Years Experience" />
            <StatCounter count={200} suffix="+" label="Happy Clients" />
            <StatCounter count={98} suffix="%" label="Satisfaction Rate" />
          </div>
        </div>
      </div>
    </section>
  );
}
