import React from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import { withBasePath } from "@/lib/basePath";

const services = [
  {
    id: "3d-carving",
    title: "3D Wood Carving",
    description: "Breathtaking three-dimensional relief work on any wood substrate — from decorative panels to full sculptures.",
    imageUrl: withBasePath("/images/3D_CARVING_ServiceImg.webp"),
    tag: "3D Carving",
  },
  {
    id: "2d-carving",
    title: "2D CNC Carving",
    description: "Precision flat-cut patterns, logos and detailed engravings on wood, MDF, acrylic and more.",
    imageUrl: withBasePath("/images/2D_CARVING_ServiceImg.webp"),
    tag: "2D Carving",
  },
  {
    id: "wave-board",
    title: "Wave Board Design",
    description: "Signature wave-texture boards for feature walls, ceilings and bespoke interior design applications.",
    imageUrl: withBasePath("/images/WAVE_BOARD_ServiceImg.webp"),
    tag: "Wave Board",
  },
  {
    id: "metal-cnc",
    title: "Metal CNC Works",
    description: "High-accuracy CNC cutting and milling of steel, aluminium and brass components for industrial applications.",
    imageUrl: withBasePath("/images/METAL_CNC _ServiceImg.webp"),
    tag: "Metal CNC",
  },
  {
    id: "wooden-legs",
    title: "Wooden Legs & Turnings",
    description: "Custom-turned and shaped wooden legs for furniture — classic, tapered, carved or contemporary styles.",
    imageUrl: withBasePath("/images/WOODEN_LEGS_ServiceImg.webp"),
    tag: "Wooden Legs",
  },
  {
    id: "custom-fabrication",
    title: "Custom Fabrication",
    description: "End-to-end bespoke fabrication — from concept and design to finished product delivery.",
    imageUrl: withBasePath("/images/waveBoardAbout.webp"),
    tag: "Fabrication",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-background-custom">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-[18px] py-1.5 rounded-full mb-3">
            Our Work
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Premium Craft &amp; Fabrication
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed font-light">
            We blend technology and artistry to deliver outstanding results across wood, metal and custom materials.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              tag={service.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
