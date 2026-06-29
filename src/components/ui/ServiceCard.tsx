"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { withBasePath } from "@/lib/basePath";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
  delay?: number;
}

export default function ServiceCard({
  id,
  title,
  description,
  imageUrl,
  tag,
}: ServiceCardProps) {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(getWhatsAppLink(title), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="group bg-bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-350 ease-crafter flex flex-col h-full border border-border/40">
      {/* Image Container */}
      <Link href={`/products/${id}`} className="relative h-[240px] overflow-hidden block">
        <Image
          src={withBasePath(imageUrl)}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-600 ease-crafter group-hover:scale-107"
        />
      </Link>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/products/${id}`} className="hover:text-primary transition-colors duration-350">
          <h3 className="font-heading text-lg font-bold mb-2.5 text-text-dark">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-text-muted leading-relaxed flex-grow">
          {description}
        </p>

        {/* Card Footer */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/30">
          <span className="text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-3.5 py-1.25 rounded-full">
            {tag}
          </span>
          <button
            onClick={handleWhatsAppClick}
            className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center transition-all duration-350 hover:bg-primary-dark hover:scale-[1.1] flex-shrink-0 cursor-pointer" 
            aria-label={`Enquire about ${title} on WhatsApp`}
          >
            <TbArrowUpRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
