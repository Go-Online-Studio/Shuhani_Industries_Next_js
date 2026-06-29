"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { withBasePath } from "@/lib/basePath";

const servicesList = [
  { id: "3d-carving", name: "3D Wood Carving" },
  { id: "2d-carving", name: "2D CNC Cutting" },
  { id: "wave-board", name: "Wave Board Panels" },
  { id: "metal-cnc", name: "Metal CNC Work" },
  { id: "wooden-legs", name: "Wooden Legs" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on pathname change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ease-crafter ${
          isScrolled
            ? "bg-white/97 shadow-md backdrop-blur-md py-3 border-b border-border"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center h-[52px]">
            <Image
              src={withBasePath("/images/BrandLogo.webp")}
              alt="Suhani Industries"
              width={160}
              height={52}
              priority
              className="h-full w-auto object-contain"
              style={{ width: "auto" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {/* Home */}
              <li>
                <Link
                  href="/"
                  className={`text-[13px] py-3 font-semibold tracking-wider uppercase transition-colors duration-350 ${
                    pathname === "/"
                      ? "text-primary font-bold"
                      : isScrolled
                      ? "text-text-dark hover:text-primary"
                      : "text-white hover:text-accent"
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`py-3 text-[13px] font-semibold tracking-wider uppercase transition-colors duration-350 flex items-center gap-1 cursor-pointer ${
                    pathname.startsWith("/products") || pathname === "/services"
                      ? "text-primary font-bold"
                      : isScrolled
                      ? "text-text-dark hover:text-primary"
                      : "text-white hover:text-accent"
                  }`}
                >
                  Services
                </button>
                {isDropdownOpen && (
                  <ul className="absolute top-full left-0 mt-0 w-[220px] bg-white border border-border rounded-md shadow-lg p-2 flex flex-col gap-1">
                    <li>
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-xs font-semibold text-text-dark rounded-sm hover:bg-primary/8 hover:text-primary transition-colors duration-350"
                      >
                        All Services
                      </Link>
                    </li>
                    {servicesList.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`/products/${service.id}`}
                          className="block px-4 py-2 text-xs font-medium text-text-dark rounded-sm hover:bg-primary/8 hover:text-primary transition-colors duration-350"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Other Links */}
              {navLinks.slice(1).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-[13px] py-3 font-semibold tracking-wider uppercase transition-colors duration-350 ${
                      isActive(link.href)
                        ? "text-primary font-bold"
                        : isScrolled
                        ? "text-text-dark hover:text-primary"
                        : "text-white hover:text-accent"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+919898011309"
                className={`flex items-center gap-2 text-xs font-semibold tracking-wider uppercase ${
                  isScrolled ? "text-text-muted hover:text-primary" : "text-white/80 hover:text-accent"
                }`}
              >
                <FaPhoneAlt className="text-[10px]" /> +91 98980 11309
              </a>
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white text-[11px] font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-350 hover:-translate-y-0.5 hover:shadow-md"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className={isScrolled ? "text-text-dark" : "text-white"} />
            ) : (
              <HiMenu className={isScrolled ? "text-text-dark" : "text-white"} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-white border-l border-border shadow-2xl p-6 flex flex-col justify-between transition-transform duration-350 ease-crafter lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
            <Image
              src={withBasePath("/images/BrandLogo.webp")}
              alt="Suhani Industries"
              width={140}
              height={45}
              className="h-auto w-[130px] object-contain"
              style={{ height: "auto" }}
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-2xl text-text-dark focus:outline-none"
            >
              <HiX />
            </button>
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className={`block py-3 px-4 rounded-sm font-semibold uppercase tracking-wide text-sm transition-colors ${
                  pathname === "/"
                    ? "bg-primary/6 text-primary"
                    : "text-text-dark hover:bg-primary/4 hover:text-primary"
                }`}
              >
                Home
              </Link>
            </li>
            
            {/* Mobile Services Collapse */}
            <li>
              <div className="flex flex-col">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center justify-between w-full py-3 px-4 rounded-sm font-semibold uppercase tracking-wide text-sm transition-colors text-left ${
                    pathname.startsWith("/products") || pathname === "/services"
                      ? "bg-primary/6 text-primary"
                      : "text-text-dark hover:bg-primary/4 hover:text-primary"
                  }`}
                >
                  <span>Services</span>
                  <span className="text-xs">{isDropdownOpen ? "▲" : "▼"}</span>
                </button>
                {isDropdownOpen && (
                  <ul className="pl-6 mt-1 flex flex-col gap-1 border-l-2 border-primary/20 ml-4">
                    <li>
                      <Link
                        href="/services"
                        className="block py-2 px-4 text-xs font-semibold text-text-dark rounded-sm hover:text-primary"
                      >
                        All Services
                      </Link>
                    </li>
                    {servicesList.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`/products/${service.id}`}
                          className="block py-2 px-4 text-xs font-medium text-text-muted rounded-sm hover:text-primary"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>

            {navLinks.slice(1).map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block py-3 px-4 rounded-sm font-semibold uppercase tracking-wide text-sm transition-colors ${
                    isActive(link.href)
                      ? "bg-primary/6 text-primary"
                      : "text-text-dark hover:bg-primary/4 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer info in Mobile menu */}
        <div className="border-t border-border pt-6 mt-6 flex flex-col gap-4">
          <Link
            href="/contact"
            className="w-full bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full text-center transition-all duration-350 flex justify-center items-center"
          >
            Get Quote
          </Link>
          <a
            href="tel:+919898011309"
            className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full text-center transition-all duration-350 flex justify-center items-center gap-2"
          >
            <FaPhoneAlt /> +91 98980 11309
          </a>
        </div>
      </div>
    </>
  );
}
