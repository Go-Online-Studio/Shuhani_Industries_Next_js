import React from "react";
import Image from "next/image";
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMapPin, HiPhone, HiEnvelope } from "react-icons/hi2";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1410] text-white/70">
      {/* Top Footer Section */}
      <div className="py-20 border-b border-white/8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="h-[90px] flex items-center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/Suhani.svg`}
                  alt="Suhani Industries"
                  width={180}
                  height={90}
                  className="h-full w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-sm leading-relaxed text-white/60 max-w-sm">
                Leading manufacturer of precision CNC wood and metal products. Delivering craftsmanship and engineering excellence since 2010.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.suhaniindustries.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-white hover:bg-primary hover:-translate-y-0.75 transition-all duration-350"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="https://x.com/intent/post?text=Check%20out%20SUHANI%20INDUSTRIES&url=https%3A%2F%2Fwww.suhaniindustries.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-white hover:bg-primary hover:-translate-y-0.75 transition-all duration-350"
                  aria-label="Twitter/X"
                >
                  <FaXTwitter className="text-sm" />
                </a>
                <a
                  href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%3A%2F%2Fwww.suhaniindustries.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-white hover:bg-primary hover:-translate-y-0.75 transition-all duration-350"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a
                  href="https://www.pinterest.com/pin/create/button/?https://www.suhaniindustries.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-white hover:bg-primary hover:-translate-y-0.75 transition-all duration-350"
                  aria-label="Pinterest"
                >
                  <FaPinterestP className="text-sm" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-2 md:col-span-1 flex flex-col gap-6">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider font-body">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/`} className="text-sm text-white/60 hover:text-primary-light transition-colors duration-350">
                    Home
                  </a>
                </li>
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/services`} className="text-sm text-white/60 hover:text-primary-light transition-colors duration-350">
                    Services
                  </a>
                </li>
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/gallery`} className="text-sm text-white/60 hover:text-primary-light transition-colors duration-350">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/blog`} className="text-sm text-white/60 hover:text-primary-light transition-colors duration-350">
                    Blog
                  </a>
                </li>
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/contact`} className="text-sm text-white/60 hover:text-primary-light transition-colors duration-350">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-3 md:col-span-1 flex flex-col gap-6">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider font-body">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/3d-carving`} className="text-sm text-white/60 hover:text-primary-light transition-colors duration-350">
                    3D Wood Carving
                  </a>
                </li>
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/2d-carving`} className="text-sm text-white/60 hover:text-primary-light transition-colors duration-350">
                    2D CNC Cutting
                  </a>
                </li>
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/wave-board`} className="text-sm text-white/60 hover:text-primary-light transition-colors duration-350">
                    Wave Board Panels
                  </a>
                </li>
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/metal-cnc`} className="text-sm text-white/60 hover:text-primary-light transition-colors duration-350">
                    Metal CNC Work
                  </a>
                </li>
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/wooden-legs`} className="text-sm text-white/60 hover:text-primary-light transition-colors duration-350">
                    Wooden Legs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="lg:col-span-3 md:col-span-1 flex flex-col gap-6">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider font-body">
                Contact Info
              </h4>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-start">
                  <HiMapPin className="text-primary text-base mt-1 flex-shrink-0" />
                  <a
                    href="https://maps.app.goo.gl/8vjM2JHNBQABogpQ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-primary-light transition-colors duration-350 leading-relaxed"
                  >
                    C 26, Anur Estate, opp MM Vora Show Room, Soma Talav Cross Road, Vadodara
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <HiPhone className="text-primary text-base flex-shrink-0" />
                  <a
                    href="tel:+919898011309"
                    className="text-sm text-white/60 hover:text-primary-light transition-colors duration-350"
                  >
                    +91 98980 11309
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <HiEnvelope className="text-primary text-base flex-shrink-0" />
                  <a
                    href="mailto:suhaniindustries09@gmail.com"
                    className="text-sm text-white/60 hover:text-primary-light transition-colors duration-350"
                  >
                    suhaniindustries09@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="py-6 bg-[#150f0c]">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-center sm:text-left">
          <p className="text-xs text-white/50">&copy; {currentYear} All Rights Reserved By Suhani Industries. Developed and managed by <a href="https://shriiitrackingsolution.in/" className="text-primary font-semibold" target="_blank">
            <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
          </a></p>
        </div>
      </div>
    </footer>
  );
}
