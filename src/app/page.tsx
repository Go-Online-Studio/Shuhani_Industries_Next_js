import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import BentoSection from "@/components/sections/BentoSection";
import HomeGallery from "@/components/sections/HomeGallery";
import FeatureBanner from "@/components/sections/FeatureBanner";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Suhani Industries | Precision CNC Wood & Metal Products",
  description: "Leading manufacturer of high-quality CNC 3D wood carvings, 2D cutting, wave board wall panels, metal CNC machining, and premium wooden legs in Vadodara, Gujarat.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background-custom text-text-dark">
      {/* 1. Hero Section with Stats Counters */}
      <HeroSection />

      {/* 2. Services Grid Section */}
      <ServicesGrid />

      {/* 3. Bento Grid - Why Choose Us Section */}
      <BentoSection />

      {/* 4. Swiper Testimonials Slider Carousel */}
      <HomeGallery />

      {/* 5. Feature Banner - Why Suhani Stands Apart */}
      <FeatureBanner />

      {/* 6. Tailored Services Process Timeline */}
      <ProcessSection />

      {/* 7. Bottom Call To Action Banner */}
      <CTASection />
    </div>
  );
}
