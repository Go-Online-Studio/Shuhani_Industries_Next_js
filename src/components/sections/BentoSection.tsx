"use client";

import React from "react";
import Image from "next/image";
import { TbCpu, TbUsers, TbClock, TbShieldCheck, TbAward, TbArrowRight } from "react-icons/tb";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function BentoSection() {
  const handleStartProject = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(getWhatsAppLink("Custom Fabrication"), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Bento Grid of Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full min-h-[520px]">
            {/* Left Big Image Card */}
            <div className="relative rounded-lg overflow-hidden h-[340px] sm:h-auto group shadow-sm border border-border/30">
              <Image
                src="/images/HomeGallery/Intricate_wood_carving_panel.jpg"
                alt="Intricate wood carving panel"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent flex flex-col justify-end p-6 z-10 text-white">
                <h3 className="font-heading font-bold text-lg text-white mb-1">
                  Intricate Wood Carving
                </h3>
                <p className="text-white/75 text-xs">
                  Hand-finished CNC relief panels
                </p>
              </div>
            </div>

            {/* Right Column Stack */}
            <div className="flex flex-col gap-5">
              {/* Top Right Small Image */}
              <div className="relative rounded-lg overflow-hidden h-[240px] group shadow-sm border border-border/30">
                <Image
                  src="/images/HomeGallery/Cnc_metal_components.jpg"
                  alt="CNC metal components"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>

              {/* Bottom Right Small Image with Badge */}
              <div className="relative rounded-lg overflow-hidden h-[260px] group shadow-sm border border-border/30">
                <Image
                  src="/images/HomeGallery/wave_border_design.jpg"
                  alt="Wave border design"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute bottom-5 left-5 bg-accent text-text-dark font-extrabold text-[11px] uppercase tracking-wider py-2.5 px-5 rounded-full flex items-center gap-2 shadow-md z-10">
                  <TbAward className="text-sm" /> Premium Grade
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Why Choose Us text & features */}
          <div className="flex flex-col justify-center">
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-[18px] py-1.5 rounded-full mb-4 w-fit">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-5 leading-tight">
              A Decade of Innovation &amp; Precision
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed font-light mb-8">
              Suhani Industries has been at the forefront of CNC technology and artisan woodcraft since 2010. Our state-of-the-art machinery paired with skilled craftsmen ensures every piece meets exacting standards.
            </p>

            {/* Feature List */}
            <div className="flex flex-col gap-4.5 mb-9">
              <div className="flex items-center gap-3.5">
                <div className="text-primary text-2xl flex-shrink-0">
                  <TbCpu />
                </div>
                <span className="text-sm font-medium text-text-dark">
                  Industry-grade CNC machines with sub-millimetre accuracy
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="text-primary text-2xl flex-shrink-0">
                  <TbUsers />
                </div>
                <span className="text-sm font-medium text-text-dark">
                  In-house design team for concept to completion
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="text-primary text-2xl flex-shrink-0">
                  <TbClock />
                </div>
                <span className="text-sm font-medium text-text-dark">
                  On-time delivery guaranteed on every order
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="text-primary text-2xl flex-shrink-0">
                  <TbShieldCheck />
                </div>
                <span className="text-sm font-medium text-text-dark">
                  Quality-assured finishing with post-production inspection
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              onClick={handleStartProject}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all duration-350 hover:-translate-y-0.5 hover:shadow-md cursor-pointer w-fit"
            >
              <TbArrowRight className="text-base" /> Start Your Project
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
