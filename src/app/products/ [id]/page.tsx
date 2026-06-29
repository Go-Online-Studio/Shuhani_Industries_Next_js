import React from "react";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import ProductGallery from "@/components/ui/ProductGallery";
import CTASection from "@/components/sections/CTASection";
import { productsList, getProductById } from "@/lib/products";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { FaWhatsapp, FaEnvelope, FaCheck } from "react-icons/fa";
import { withBasePath } from "@/lib/basePath";

interface Props {
  params: Promise<{ id: string }>;
}

// Generate static routes for all products at build time
export async function generateStaticParams() {
  return productsList.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const whatsappUrl = getWhatsAppLink(product.name);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Hero */}
      <PageHero
        title={product.name}
        subtitle={product.shortDesc}
        badge="Product Details"
        bgImage={withBasePath("/images/HomeGallery/wave_border_design.jpg")}
      />

      {/* 2. Breadcrumbs */}
      <BreadcrumbBar
        items={[
          { name: "Services", href: "/services" },
          { name: product.name },
        ]}
      />

      {/* 3. Product Info Grid */}
      <section className="py-20 bg-background-custom border-b border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Image Gallery Switcher */}
            <div className="lg:col-span-6 lg:sticky lg:top-28">
              <ProductGallery images={product.images} productName={product.name} />
            </div>

            {/* Right Column: Detailed Specifications and Narrative */}
            <div className="lg:col-span-6 flex flex-col">
              {/* Category Badge */}
              <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-[18px] py-1.5 rounded-full mb-4 w-fit">
                {product.category}
              </span>

              {/* Title */}
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Short Description */}
              <p className="text-text-muted text-sm sm:text-base leading-relaxed font-light mb-8">
                {product.shortDesc}
              </p>

              {/* Lead Capture Buttons */}
              <div className="flex flex-wrap gap-4.5 mb-12">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-350 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
                >
                  <FaWhatsapp className="text-base" /> Get Free Quote
                </a>
                <a
                  href={withBasePath("/contact")}
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-350 hover:-translate-y-0.5"
                >
                  <FaEnvelope className="text-sm" /> Contact Us
                </a>
              </div>

              {/* Technical Specifications Table */}
              <div className="mb-12">
                <h4 className="font-heading font-bold text-sm text-primary tracking-wide uppercase border-b border-border pb-2.5 mb-4">
                  Technical Specs
                </h4>
                <div className="border border-border/40 rounded-lg overflow-hidden shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {Object.entries(product.specs).map(([key, val], index) => (
                        <tr
                          key={key}
                          className={`border-b border-border/20 last:border-0 ${
                            index % 2 === 1 ? "bg-background-custom/40" : ""
                          }`}
                        >
                          <td className="px-5 py-3.5 text-xs font-bold text-text-dark w-1/3 border-r border-border/20">
                            {key}
                          </td>
                          <td className="px-5 py-3.5 text-xs text-text-muted">
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Deep Narrative Description */}
              <div className="mb-12">
                <h4 className="font-heading font-bold text-sm text-primary tracking-wide uppercase border-b border-border pb-2.5 mb-4">
                  Description
                </h4>
                <p className="text-sm text-text-muted leading-relaxed font-light">
                  {product.fullDesc}
                </p>
              </div>

              {/* Key Features List Box */}
              <div className="p-6 sm:p-8 bg-white border border-border/40 rounded-lg shadow-sm">
                <h5 className="font-heading font-bold text-sm text-text-dark tracking-wide uppercase mb-4">
                  Key Features
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] mt-0.5 flex-shrink-0">
                        <FaCheck />
                      </div>
                      <span className="text-xs font-medium text-text-dark">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Bottom CTA banner */}
      <CTASection />
    </div>
  );
}
