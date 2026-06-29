import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import StatCounter from "@/components/ui/StatCounter";
import CTASection from "@/components/sections/CTASection";
import { withBasePath } from "@/lib/basePath";
import { TbTarget, TbBrush, TbClock, TbBulb, TbUsers, TbLeaf, TbArrowRight } from "react-icons/tb";

const values = [
  {
    icon: <TbTarget />,
    title: "Precision",
    description: "Sub-millimetre accuracy on every cut. Our CNC machines operate at tolerances of ±0.1mm for flawless results.",
  },
  {
    icon: <TbBrush />,
    title: "Craftsmanship",
    description: "Where technology meets artistry. Every piece is hand-inspected and finished by our skilled craftsmen.",
  },
  {
    icon: <TbClock />,
    title: "Reliability",
    description: "On-time delivery, every time. We honour commitments and keep you informed at every stage of production.",
  },
  {
    icon: <TbBulb />,
    title: "Innovation",
    description: "Constantly upgrading our machinery and techniques to offer the latest in CNC and fabrication technology.",
  },
  {
    icon: <TbUsers />,
    title: "Collaboration",
    description: "We work closely with designers, architects and businesses to bring their vision to reality.",
  },
  {
    icon: <TbLeaf />,
    title: "Sustainability",
    description: "Responsible material sourcing and minimal-waste CNC processes for an eco-conscious production line.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Hero */}
      <PageHero
        title="About Suhani Industries"
        subtitle="A decade of precision manufacturing, artistic craftsmanship and innovation — proudly based in Gujarat, India."
        badge="Who We Are"
        bgImage={withBasePath("/images/A_DECADE_OF_INNOVATION.webp")}
      />

      {/* 2. Breadcrumbs */}
      <BreadcrumbBar items={[{ name: "About Us" }]} />

      {/* 3. About Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Workshop Image */}
            <div className="relative rounded-lg overflow-hidden group shadow-sm border border-border/35 max-w-[100%] mx-auto lg:mx-0">
              <Image
                src={withBasePath("/images/HomeGallery/Intricate_wood_carving_panel.jpg")}
                alt="Suhani Industries Workshop"
                width={540}
                height={400}
                className="w-full h-auto object-cover rounded-lg transition-transform duration-500 group-hover:scale-101"
              />
              <div className="absolute bottom-6 right-6 bg-primary text-white p-5 rounded-md text-center shadow-md z-10 min-w-[140px]">
                <strong className="block font-heading font-extrabold text-3xl leading-none mb-1">
                  15+
                </strong>
                <span className="text-[10px] uppercase tracking-wider text-white/80 font-medium">
                  Years of Excellence
                </span>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div>
              <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-[18px] py-1.5 rounded-full mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-5 leading-tight">
                Engineering Precision Into Every Cut
              </h2>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4 font-light">
                Founded in 2010 in Vadodara, Gujarat, Suhani Industries started with a single CNC machine and a vision to bring world-class precision manufacturing to the Indian market.
              </p>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4 font-light">
                Today, we operate a state-of-the-art facility equipped with multi-axis CNC routers, laser cutters, and industrial-grade finishing stations. Our team of skilled craftsmen and engineers work hand-in-hand to transform raw materials into works of precision art.
              </p>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8 font-light">
                From intricate 3D wood sculptures and decorative wave boards to high-tolerance metal components — every piece that leaves our workshop carries our commitment to quality, accuracy, and on-time delivery.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all duration-350 hover:-translate-y-0.5 hover:shadow-md"
              >
                <TbArrowRight className="text-base" /> Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats Counters Strip */}
      <section className="py-16 bg-background-custom border-y border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="bg-white rounded-lg p-9 text-center shadow-sm border border-border/30">
              <StatCounter
                count={500}
                suffix="+"
                label="Projects Delivered"
                className="items-center"
                labelClassName="text-text-muted font-light"
              />
            </div>
            <div className="bg-white rounded-lg p-9 text-center shadow-sm border border-border/30">
              <StatCounter
                count={15}
                suffix="+"
                label="Years Experience"
                className="items-center"
                labelClassName="text-text-muted font-light"
              />
            </div>
            <div className="bg-white rounded-lg p-9 text-center shadow-sm border border-border/30">
              <StatCounter
                count={200}
                suffix="+"
                label="Happy Clients"
                className="items-center"
                labelClassName="text-text-muted font-light"
              />
            </div>
            <div className="bg-white rounded-lg p-9 text-center shadow-sm border border-border/30">
              <StatCounter
                count={98}
                suffix="%"
                label="Satisfaction Rate"
                className="items-center"
                labelClassName="text-text-muted font-light"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Values Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-[18px] py-1.5 rounded-full mb-3">
              Our Values
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-4 leading-tight">
              What Drives Us Forward
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed font-light">
              Our core principles guide every project — from initial design consultation to final delivery.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <div
                key={index}
                className="bg-bg-card rounded-lg p-9 text-center shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-350 border border-border/35"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl flex items-center justify-center mx-auto mb-5">
                  {val.icon}
                </div>
                <h4 className="font-heading font-bold text-base text-text-dark mb-2.5">
                  {val.title}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <CTASection />
    </div>
  );
}
