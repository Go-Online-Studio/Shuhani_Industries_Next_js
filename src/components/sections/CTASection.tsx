"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function CTASection() {
  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(getWhatsAppLink("Custom Fabrication"), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cta" className="py-24 bg-background-custom">
      <div className="container mx-auto px-6">
        {/* Inner Card */}
        <div
          className="relative rounded-xl overflow-hidden min-h-[380px] flex items-center justify-center bg-center bg-cover bg-no-repeat shadow-lg border border-border/25"
          style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/cta_bg.png')` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/72 z-0" />

          {/* Content */}
          <div className="relative z-10 text-center px-6 py-15 max-w-[560px] flex flex-col items-center">
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-accent bg-accent/18 px-[18px] py-1.5 rounded-full mb-4">
              Get Started Today
            </span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Ready to Build?<br />Let&rsquo;s Begin.
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Tell us about your project and we&rsquo;ll get back to you with a custom quote within 24 hours.
            </p>
            <a
              href="#"
              onClick={handleQuoteClick}
              className="inline-flex items-center gap-2 bg-white hover:bg-background-custom text-primary text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-350 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
            >
              <FaWhatsapp className="text-base" /> Request a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
