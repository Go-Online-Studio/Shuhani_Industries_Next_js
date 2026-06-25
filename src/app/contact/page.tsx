import React from "react";
import PageHero from "@/components/ui/PageHero";
import BreadcrumbBar from "@/components/ui/BreadcrumbBar";
import ContactCard from "@/components/ui/ContactCard";
import ContactForm from "@/components/sections/ContactForm";
import { TbMapPin, TbPhone, TbMail, TbClock } from "react-icons/tb";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Hero */}
      <PageHero
        title="Contact Us"
        subtitle="Have a project in mind? Reach out for a free consultation and custom quote — we typically respond within 24 hours."
        badge="Get In Touch"
        bgImage="/images/HomeGallery/precision_metal_parts.jpg"
      />

      {/* 2. Breadcrumbs */}
      <BreadcrumbBar items={[{ name: "Contact" }]} />

      {/* 3. Contact Info and Form Grid */}
      <section className="py-24 bg-background-custom border-b border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Info and Cards */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-[18px] py-1.5 rounded-full mb-4 w-fit">
                Reach Out
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mb-5 leading-tight">
                Let's Discuss Your Project
              </h2>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed font-light mb-10">
                Whether you need a single prototype or a bulk production run — we're here to help. Choose any channel below or fill out the form.
              </p>

              {/* Grid of Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2  gap-5">
                <ContactCard
                  icon={<TbMapPin />}
                  title="Visit Our Workshop"
                  description="C 26, Anur Estate, opp MM Vora Show Room, Soma Talav Cross Road, Vadodara, Gujarat"
                  href="https://maps.app.goo.gl/8vjM2JHNBQABogpQ7"
                  isLinkExternal
                />
                <ContactCard
                  icon={<TbPhone />}
                  title="Call Us"
                  description="+91 98980 11309"
                  href="tel:+919898011309"
                />
                <ContactCard
                  icon={<TbMail />}
                  title="Email Us"
                  description="suhaniindustries09@gmail.com"
                  href="mailto:suhaniindustries09@gmail.com"
                />
                <ContactCard
                  icon={<TbClock />}
                  title="Working Hours"
                  description="Mon – Sat: 9:00 AM – 6:00 PM; Sunday: Closed"
                />
              </div>
            </div>

            {/* Right Column: Form Form */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Google Maps Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-[18px] py-1.5 rounded-full mb-3">
              Find Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark leading-tight">
              Our Location
            </h2>
          </div>

          {/* Map Container */}
          <div className="rounded-lg overflow-hidden shadow-sm border border-border/35">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3!2d73.1815!3d22.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5e7!2sSuhani+Industries!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-[400px] border-0 block"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Suhani Industries Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
