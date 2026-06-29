"use client";

import React, { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import GalleryItem from "@/components/ui/GalleryItem";
import Lightbox from "@/components/ui/Lightbox";
import CTASection from "@/components/sections/CTASection";
import { withBasePath } from "@/lib/basePath";

interface PortfolioItem {
  url: string;
  caption: string;
  category: "3d" | "2d" | "wave" | "metal";
  categoryLabel: string;
}

const portfolioItems: PortfolioItem[] = [
  // 3D Carving
  {
    url: withBasePath("/images/ServicesPageImage/3DWoodCarving1.jpg"),
    caption: "Decorative Panel",
    category: "3d",
    categoryLabel: "3D Carving",
  },
  {
    url: withBasePath("/images/ServicesPageImage/3DWoodCarving2.jpg"),
    caption: "Relief Sculpture",
    category: "3d",
    categoryLabel: "3D Carving",
  },
  {
    url: withBasePath("/images/ServicesPageImage/3DWoodCarving3.jpg"),
    caption: "Custom Art Piece",
    category: "3d",
    categoryLabel: "3D Carving",
  },
  {
    url: withBasePath("/images/ServicesPageImage/3DWoodCarving4.jpg"),
    caption: "Architectural Detail",
    category: "3d",
    categoryLabel: "3D Carving",
  },
  // 2D Carving
  {
    url: withBasePath("/images/ServicesPageImage/2D_Carving1.jpg"),
    caption: "Jali Pattern",
    category: "2d",
    categoryLabel: "2D Carving",
  },
  {
    url: withBasePath("/images/ServicesPageImage/2D_Carving2.jpg"),
    caption: "Custom Signage",
    category: "2d",
    categoryLabel: "2D Carving",
  },
  {
    url: withBasePath("/images/ServicesPageImage/2D_Carving3.jpg"),
    caption: "Engraved Panel",
    category: "2d",
    categoryLabel: "2D Carving",
  },
  // Wave Board
  {
    url: withBasePath("/images/ServicesPageImage/WaveBoard1.jpg"),
    caption: "Feature Wall",
    category: "wave",
    categoryLabel: "Wave Board",
  },
  {
    url: withBasePath("/images/ServicesPageImage/WaveBoard2.jpg"),
    caption: "Interior Design",
    category: "wave",
    categoryLabel: "Wave Board",
  },
  {
    url: withBasePath("/images/ServicesPageImage/WaveBoard3.jpg"),
    caption: "Ceiling Panel",
    category: "wave",
    categoryLabel: "Wave Board",
  },
  // Metal CNC
  {
    url: withBasePath("/images/ServicesPageImage/MetalCNC1.jpg"),
    caption: "Industrial Parts",
    category: "metal",
    categoryLabel: "Metal CNC",
  },
  {
    url: withBasePath("/images/ServicesPageImage/MetalCNC2.jpg"),
    caption: "Precision Parts",
    category: "metal",
    categoryLabel: "Metal CNC",
  },
  // Additional
  {
    url: withBasePath("/images/gallery/GalleryImages1.jpg"),
    caption: "Workshop Project",
    category: "3d",
    categoryLabel: "CNC Craft",
  },
  {
    url: withBasePath("/images/gallery/GalleryImages5.jpg"),
    caption: "Finished Product",
    category: "2d",
    categoryLabel: "Precision Work",
  },
  {
    url: withBasePath("/images/gallery/GalleryImages8.jpg"),
    caption: "Custom Fabrication",
    category: "metal",
    categoryLabel: "Metal Work",
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "3d" | "2d" | "wave" | "metal">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);

  // Mapping items for Lightbox format
  const lightboxImages = filteredItems.map((item) => ({
    url: item.url,
    caption: item.caption,
    category: item.categoryLabel,
  }));

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
  };

  const filterButtons = [
    { label: "All Work", filter: "all" as const },
    { label: "3D Carving", filter: "3d" as const },
    { label: "2D Carving", filter: "2d" as const },
    { label: "Wave Board", filter: "wave" as const },
    { label: "Metal CNC", filter: "metal" as const },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Hero */}
      <PageHero
        title="Project Gallery"
        subtitle="Browse our finest work across CNC machining, wood carving, wave boards and metal fabrication."
        badge="Our Portfolio"
        bgImage={withBasePath("/images/HomeGallery/wave_border_design.jpg")}
      />

      {/* 2. Breadcrumbs */}
      <BreadcrumbBar items={[{ name: "Gallery" }]} />

      {/* 3. Portfolio Grid Section */}
      <section className="py-24 bg-background-custom border-b border-border/30">
        <div className="container mx-auto px-6">
          
          {/* Filters Bar */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-16">
            {filterButtons.map((btn) => (
              <button
                key={btn.filter}
                onClick={() => {
                  setActiveFilter(btn.filter);
                  setLightboxIndex(null);
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-350 cursor-pointer border-2 ${
                  activeFilter === btn.filter
                    ? "bg-primary border-primary text-white shadow-sm"
                    : "bg-transparent border-border text-text-muted hover:border-primary hover:text-primary"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <GalleryItem
                  key={`${item.url}-${index}`}
                  url={item.url}
                  caption={item.caption}
                  category={item.categoryLabel}
                  onClick={() => handleOpenLightbox(index)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-bg-card rounded-lg border border-border/30 p-10">
              <p className="text-text-muted text-sm">No portfolio items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Lightbox Viewport */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* 5. Bottom Call to Action */}
      <CTASection />
    </div>
  );
}
