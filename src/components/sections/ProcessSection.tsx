"use client";

import React from "react";
import Image from "next/image";
import { TbMessageCircle, TbArrowUpRight } from "react-icons/tb";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { withBasePath } from "@/lib/basePath";

const processItems = [
  {
    num: "01",
    title: "Consultation & Design Brief",
    description: "We understand your vision and create a detailed design brief and quote.",
    imageUrl: withBasePath("/images/HomeGallery/3d_wooden_sculptures.jpg"),
  },
  {
    num: "02",
    title: "CAD Design & Prototyping",
    description: "Our designers produce detailed CAD files and prototypes for your approval.",
    imageUrl: withBasePath("/images/HomeGallery/precision_metal_parts.jpg"),
  },
  {
    num: "03",
    title: "CNC Production & Finishing",
    description: "Precision machining followed by expert hand-finishing and quality checks.",
    imageUrl: withBasePath("/images/HomeGallery/industrial_components.jpg"),
  },
  {
    num: "04",
    title: "Delivery & Installation Support",
    description: "Safe packaging and on-time delivery with optional installation assistance.",
    imageUrl: withBasePath("/images/A_DECADE_OF_INNOVATION.webp"),
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Info Text */}
          <div className="lg:col-span-5">
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-[18px] py-1.5 rounded-full mb-4 w-fit">
              How We Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-5 leading-tight">
              Our Tailored Services Process
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed font-light mb-8">
              From initial consultation to final delivery, we follow a streamlined process that ensures every project is completed to the highest standard — on time and within budget.
            </p>
            <a
              href={getWhatsAppLink("CNC Machining")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all duration-350 hover:-translate-y-0.5 hover:shadow-md cursor-pointer w-fit"
            >
              <TbMessageCircle className="text-base" /> Start a Project
            </a>
          </div>

          {/* Right Column: Process List */}
          <div className="lg:col-span-7 flex flex-col w-full">
            {processItems.map((item, index) => (
              <a
                key={item.num}
                href={getWhatsAppLink(item.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={`grid grid-cols-1 sm:grid-cols-[60px_90px_1fr_auto] items-center gap-5 py-6 border-b border-border hover:bg-primary/3 hover:rounded-md hover:px-2 cursor-pointer transition-all duration-350 group ${
                  index === 0 ? "border-t border-border" : ""
                }`}
              >
                {/* Step Number */}
                <div className="font-heading font-black text-4xl text-primary/12 leading-none">
                  {item.num}
                </div>

                {/* Step Image */}
                <div className="relative w-full h-[160px] sm:w-[90px] sm:h-[70px] rounded-sm overflow-hidden flex-shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Step Text Info */}
                <div className="flex-grow">
                  <h4 className="font-bold text-sm text-text-dark mb-1 group-hover:text-primary transition-colors duration-350">
                    {item.title}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Action Button */}
                <div
                  className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center transition-all duration-350 group-hover:bg-primary-dark group-hover:scale-[1.1] flex-shrink-0 cursor-pointer hidden sm:flex"
                  aria-label={`Inquire about ${item.title}`}
                >
                  <TbArrowUpRight className="text-sm" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
