import React from "react";
import Image from "next/image";
import { TbWood, TbTarget, TbShieldCheck } from "react-icons/tb";

export default function FeatureBanner() {
  return (
    <section className="relative py-24 pb-48 bg-[url('/images/feature_banner_bg.png')] bg-center bg-cover bg-no-repeat bg-fixed">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/68 z-0" />

      <div className="container mx-auto px-6 relative z-10 text-center text-white mb-16">
        <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-accent bg-accent/15 px-[18px] py-1.5 rounded-full mb-3">
          Precision &amp; Quality
        </span>
        <h2 className="font-heading text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Custom Woodwork &amp; CNC Fabrication
        </h2>
        <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-[560px] mx-auto font-light">
          State-of-the-art machinery paired with passionate craftsmen — delivering results that exceed expectations every time.
        </p>
      </div>

      {/* Floating Card Container */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="bg-white rounded-xl p-10 sm:p-14 shadow-lg max-w-[1000px] mx-auto relative mt-15 text-text-dark">
          {/* Circular floating image on top center */}
          <div className="absolute -top-11 left-1/2 -translate-x-1/2 w-[90px] h-[90px] rounded-md overflow-hidden border-4 border-white shadow-md">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ENGINEERING_PRECISION.webp`}
              alt="Engineering precision"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-center font-heading font-bold text-xl mb-10 mt-4">
            Why Suhani Industries Stands Apart
          </h3>

          {/* 3 Column Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center gap-3.5 p-6 rounded-md bg-background-custom transition-all duration-350 hover:bg-primary/8 group">
              <TbWood className="text-primary text-4xl group-hover:scale-108 transition-transform duration-350" />
              <strong className="text-sm font-bold text-text-dark">
                Premium Materials
              </strong>
              <span className="text-xs text-text-muted leading-relaxed">
                Only the finest wood grades, metals and composites
              </span>
            </div>

            <div className="flex flex-col items-center text-center gap-3.5 p-6 rounded-md bg-background-custom transition-all duration-350 hover:bg-primary/8 group">
              <TbTarget className="text-primary text-4xl group-hover:scale-108 transition-transform duration-350" />
              <strong className="text-sm font-bold text-text-dark">
                Sub-mm Accuracy
              </strong>
              <span className="text-xs text-text-muted leading-relaxed">
                CNC precision down to 0.1mm on every job
              </span>
            </div>

            <div className="flex flex-col items-center text-center gap-3.5 p-6 rounded-md bg-background-custom transition-all duration-350 hover:bg-primary/8 group">
              <TbShieldCheck className="text-primary text-4xl group-hover:scale-108 transition-transform duration-350" />
              <strong className="text-sm font-bold text-text-dark">
                Quality Warranty
              </strong>
              <span className="text-xs text-text-muted leading-relaxed">
                All products backed by our satisfaction guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
