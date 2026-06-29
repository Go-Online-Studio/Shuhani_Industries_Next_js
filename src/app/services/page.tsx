import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import CTASection from "@/components/sections/CTASection";
import { FaArrowRight } from "react-icons/fa6";
import { withBasePath } from "@/lib/basePath";

const servicesList = [
  {
    num: "01",
    id: "3d-carving",
    title: "3D Wood Carving",
    description:
      "Experience the depth of artistry with our 3D carving services. We transform wood and other substrates into intricate, high-relief sculptures, decorative panels, and custom interior components.",
    imageUrl: withBasePath("/images/3D_CARVING_ServiceImg.webp"),
  },
  {
    num: "02",
    id: "2d-carving",
    title: "2D CNC Carving & Cutting",
    description:
      "Precision flat cutting, engraving, and profiling for signage, architectural jaali screens, and wooden panels. Perfect for reproducing complex, intricate vector patterns on flat sheets.",
    imageUrl: withBasePath("/images/2D_CARVING_ServiceImg.webp"),
  },
  {
    num: "03",
    id: "wave-board",
    title: "Wave Board Wall Panels",
    description:
      "Add texture, movement, and a sense of luxury to your spaces with our custom wave boards. Ideal for modern feature walls, ceiling panels, reception desks, and visual highlights.",
    imageUrl: withBasePath("/images/WAVE_BOARD_ServiceImg.webp"),
  },
  {
    num: "04",
    id: "metal-cnc",
    title: "Metal CNC Machining",
    description:
      "High-accuracy CNC cutting, milling, and engraving of steel, aluminium, brass, and copper components. Delivering industrial-strength durability coupled with micron-level tolerances.",
    imageUrl: withBasePath("/images/METAL_CNC _ServiceImg.webp"),
  },
  {
    num: "05",
    id: "wooden-legs",
    title: "Wooden Legs & Furniture Turnings",
    description:
      "Custom-turned, carved, or contemporary shaped wooden legs for tables, sofas, chairs, and cabinets. Consistent craftsmanship ensuring matching sets with premium finishes.",
    imageUrl: withBasePath("/images/WOODEN_LEGS_ServiceImg.webp"),
  },
  {
    num: "06",
    id: "custom-fabrication",
    title: "Bespoke Custom Fabrication",
    description:
      "End-to-end custom fabrication solutions. Bring us your CAD files, hand sketches, or concepts, and our designers and engineers will handle everything from prototyping to final delivery.",
    imageUrl: withBasePath("/images/waveBoardAbout.webp"),
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Hero */}
      <PageHero
        title="Our Services"
        subtitle="Offering a comprehensive range of precision manufacturing solutions, from intricate 3D wood carving to industrial-grade metal CNC machining."
        badge="What We Do"
        bgImage={withBasePath("/images/bannerImage.webp")}
      />

      {/* 2. Breadcrumbs */}
      <BreadcrumbBar items={[{ name: "Services" }]} />

      {/* 3. Services Grid Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {servicesList.map((svc) => (
              <div
                key={svc.id}
                className="group bg-bg-card rounded-lg overflow-hidden border border-border/30 shadow-sm hover:shadow-md transition-all duration-350 ease-crafter flex flex-col h-full"
              >
                {/* Card Image */}
                <div className="relative h-[280px] w-full overflow-hidden">
                  <Image
                    src={svc.imageUrl}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-600 ease-crafter group-hover:scale-105"
                  />
                  {/* Scanline overlay effect */}
                  <div className="absolute inset-0 bg-linear-gradient(0deg,rgba(0,0,0,0.15),transparent) pointer-events-none" />
                  
                  {/* Floating Number Badge */}
                  <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-heading font-extrabold text-sm shadow-md">
                    {svc.num}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-text-dark mb-3.5 group-hover:text-primary transition-colors duration-350">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed font-light mb-8">
                      {svc.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-border/30">
                    <Link
                      href={`/products/${svc.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-dark transition-colors duration-350"
                    >
                      Explore {svc.title} <FaArrowRight className="text-[10px] transform group-hover:translate-x-1 transition-transform duration-350" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Call to Action */}
      <CTASection />
    </div>
  );
}
