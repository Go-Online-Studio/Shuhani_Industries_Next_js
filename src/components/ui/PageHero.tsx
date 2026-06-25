import React from "react";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  bgImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  badge,
  bgImage = "/images/hero_bg.png",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[360px] flex items-center justify-center text-center bg-text-dark overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/82 to-black/60 z-10" />

      {/* Hero Background Image */}
      <Image
        src={bgImage}
        alt={title}
        fill
        priority
        className="object-cover opacity-50 z-0"
      />

      {/* Content */}
      <div className="relative z-20 px-6 py-15 max-w-[700px] flex flex-col items-center">
        {badge && (
          <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-accent bg-accent/18 px-[18px] py-1.5 rounded-full mb-3">
            {badge}
          </span>
        )}
        <h1 className="text-white text-4xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-sm sm:text-base max-w-[520px] leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
