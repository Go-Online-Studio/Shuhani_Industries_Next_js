"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface LightboxImage {
  url: string;
  caption?: string;
  category?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const isOpen = currentIndex !== null;

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || currentIndex === null) return null;
  if (typeof document === "undefined") return null;

  const currentImage = images[currentIndex];

  return createPortal(
    <div className="fixed inset-0 z-[99999] bg-black/95 flex flex-col items-center justify-center p-4 select-none animate-fade-in overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[110] p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-350 cursor-pointer"
        aria-label="Close lightbox"
      >
        <HiX className="text-3xl" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 z-[110] p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-350 cursor-pointer md:left-6"
        aria-label="Previous image"
      >
        <HiChevronLeft className="text-4xl" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 z-[110] p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-350 cursor-pointer md:right-6"
        aria-label="Next image"
      >
        <HiChevronRight className="text-4xl" />
      </button>

      {/* Image Display Area */}
      <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full h-full">
          <Image
            src={currentImage.url}
            alt={currentImage.caption || "Gallery item"}
            fill
            sizes="100vw"
            className="object-contain transition-all duration-500 ease-in-out"
            priority
          />
        </div>
      </div>

      {/* Caption & Category metadata */}
      <div className="mt-6 text-center max-w-xl px-4 z-[110]" onClick={(e) => e.stopPropagation()}>
        {currentImage.category && (
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-accent bg-accent/15 px-3 py-1 rounded-full mb-2">
            {currentImage.category}
          </span>
        )}
        <h3 className="text-white text-lg font-semibold leading-relaxed">
          {currentImage.caption || "Premium Craftsmanship"}
        </h3>
        <p className="text-white/40 text-xs mt-2">
          Image {currentIndex + 1} of {images.length}
        </p>
      </div>
    </div>,
    document.body
  );
}
