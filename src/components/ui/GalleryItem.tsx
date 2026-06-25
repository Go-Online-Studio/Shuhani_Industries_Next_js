"use client";

import React from "react";
import Image from "next/image";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

interface GalleryItemProps {
  url: string;
  thumbnailUrl?: string;
  caption: string;
  category: string;
  onClick: () => void;
}

export default function GalleryItem({
  thumbnailUrl,
  url,
  caption,
  category,
  onClick,
}: GalleryItemProps) {
  // Use the larger URL if thumbnail isn't provided
  const displayImage = thumbnailUrl || url;

  return (
    <div
      onClick={onClick}
      className="group relative rounded-lg overflow-hidden cursor-pointer aspect-[4/3] shadow-sm hover:shadow-md transition-all duration-350 border border-border/25 bg-bg-card select-none"
    >
      {/* Background Image */}
      <Image
        src={displayImage}
        alt={caption}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-crafter group-hover:scale-106"
      />

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-5 z-10">
        <h4 className="text-white font-heading font-bold text-[15px] mb-0.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-350 ease-crafter">
          {caption}
        </h4>
        <span className="text-white/70 text-xs tracking-wider uppercase transform translate-y-2 group-hover:translate-y-0 transition-transform duration-350 ease-crafter delay-[40ms]">
          {category}
        </span>
      </div>

      {/* Hover Floating Zoom Button */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white text-lg opacity-0 scale-80 group-hover:opacity-100 group-hover:scale-100 transition-all duration-350 ease-crafter z-20 hover:bg-white/35">
        <HiMagnifyingGlassPlus />
      </div>
    </div>
  );
}
