"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface StatCounterProps {
  count: number;
  suffix?: string;
  label: string;
  className?: string;
  labelClassName?: string;
}

export default function StatCounter({
  count,
  suffix = "",
  label,
  className = "",
  labelClassName = "",
}: StatCounterProps) {
  const [displayCount, setDisplayCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  const startCountAnimation = useCallback(() => {
    let startTimestamp: number | null = null;
    const duration = 1800; // ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Cubic ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      setDisplayCount(Math.floor(easedProgress * count));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayCount(count);
      }
    };

    requestAnimationFrame(step);
  }, [count]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          startCountAnimation();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [count, startCountAnimation]);

  return (
    <div ref={elementRef} className={`flex flex-col ${className}`}>
      <span className="text-3xl sm:text-4xl font-extrabold font-heading text-primary leading-none">
        {displayCount}
        <span className="text-primary">{suffix}</span>
      </span>
      <span className={`text-[11px] sm:text-xs text-text-muted uppercase font-medium tracking-wider mt-2 ${labelClassName}`}>
        {label}
      </span>
    </div>
  );
}
