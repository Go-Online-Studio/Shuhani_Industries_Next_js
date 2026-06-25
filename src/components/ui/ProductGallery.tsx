"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HiArrowsPointingOut } from "react-icons/hi2";
import Lightbox from "@/components/ui/Lightbox";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const handleOpenLightbox = () => {
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handlePrev = () => {
    setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveImgIndex((prev) => (prev + 1) % images.length);
  };

  const lightboxImages = images.map((img) => ({
    url: img,
    caption: `${productName} Gallery Showcase`,
  }));

  return (
    <div className="flex flex-col gap-4">
      {/* Active Main Image */}
      <div
        onClick={handleOpenLightbox}
        className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-border/30 bg-[#251e18] shadow-sm cursor-pointer group"
      >
        <Image
          src={images[activeImgIndex]}
          alt={`${productName} Main Preview`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-crafter group-hover:scale-101"
        />
        
        {/* Fullscreen Icon */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white text-lg transition-all duration-350 hover:bg-black/80 hover:scale-105">
          <HiArrowsPointingOut />
        </div>
      </div>

      {/* Thumbnails Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImgIndex(index)}
              className={`relative aspect-[4/3] rounded-md overflow-hidden border-2 transition-all duration-350 cursor-pointer ${
                activeImgIndex === index
                  ? "border-primary opacity-100 scale-98 shadow-sm"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                sizes="100px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Custom Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={isLightboxOpen ? activeImgIndex : null}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
