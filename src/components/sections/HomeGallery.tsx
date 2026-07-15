"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Testimonial {
  stars: number;
  text: string;
  avatar: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    stars: 5,
    text: "The 3D wood carvings from Suhani Industries transformed our restaurant interior completely. Absolutely stunning work and delivered on time!",
    avatar: "https://i.pravatar.cc/80?img=11",
    name: "Rajesh Mehta",
    role: "Restaurant Owner, Ahmedabad",
  },
  {
    stars: 5,
    text: "We ordered custom metal CNC parts for our machinery and the precision was outstanding. Suhani Industries is our go-to vendor now.",
    avatar: "https://i.pravatar.cc/80?img=32",
    name: "Priya Shah",
    role: "Operations Manager, Surat",
  },
  {
    stars: 4.5,
    text: "Their wave board panels gave our showroom a completely unique look. The quality and craftsmanship is second to none. Highly recommended!",
    avatar: "https://i.pravatar.cc/80?img=47",
    name: "Amit Patel",
    role: "Interior Designer, Vadodara",
  },
  {
    stars: 5,
    text: "The wooden furniture legs they crafted for our range are beautifully finished. Every piece is consistent and our clients love them!",
    avatar: "https://i.pravatar.cc/80?img=53",
    name: "Nisha Verma",
    role: "Furniture Manufacturer, Mumbai",
  },
];

export default function HomeGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle resizing to determine how many slides to show
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  }, [handleNext, stopTimer]);

  // Autoplay functionality
  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Determine items per view
  const itemsPerView = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;

  // Render stars helper
  const renderStars = (rating: number) => {
    const starsList = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starsList.push(<FaStar key={i} className="text-accent text-[15px]" />);
      } else if (i === fullStars && hasHalf) {
        starsList.push(<FaStarHalfAlt key={i} className="text-accent text-[15px]" />);
      } else {
        starsList.push(<FaStar key={i} className="text-white/20 text-[15px]" />);
      }
    }
    return starsList;
  };

  // Calculate slide displacement
  const getVisibleTestimonials = () => {
    const list = [];
    for (let i = 0; i < itemsPerView; i++) {
      const idx = (activeIndex + i) % testimonials.length;
      list.push(testimonials[idx]);
    }
    return list;
  };

  return (
    <section id="testimonials" className="py-24 bg-background-custom relative overflow-hidden">
      {/* Decorative large quotation mark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[18rem] text-primary/5 font-serif leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-[18px] py-1.5 rounded-full mb-3">
            Client Reviews
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Viewport */}
        <div 
          className="relative overflow-hidden w-full pb-14"
          onMouseEnter={stopTimer}
          onMouseLeave={startTimer}
        >
          {/* Slides Track */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 transition-all duration-500 ease-in-out">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="bg-bg-card rounded-lg p-10 text-center shadow-sm border border-border/20 flex flex-col justify-between items-center h-full transform transition-transform duration-350 hover:scale-101"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {renderStars(testimonial.stars)}
                </div>

                {/* Feedback Text */}
                <p className="text-text-dark text-sm leading-relaxed font-medium italic flex-grow mb-8 max-w-[280px]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Client Profile */}
                <div className="flex flex-col items-center">
                  <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden border-3 border-primary mb-3 shadow-sm">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-sm text-text-dark mb-0.5">
                    {testimonial.name}
                  </h4>
                  <span className="text-[11px] text-text-muted">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Pagination */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-350 cursor-pointer ${
                  activeIndex === index
                    ? "w-7 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
