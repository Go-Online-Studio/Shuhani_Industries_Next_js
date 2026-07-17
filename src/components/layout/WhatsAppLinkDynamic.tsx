"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: NodeJS.Timeout;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export default function WhatsAppLinkDynamic() {
  const pathname = usePathname();

  useEffect(() => {
    const updateWhatsAppLinks = () => {
      const isMobile = window.innerWidth <= 767.98;
      
      const links = document.querySelectorAll<HTMLAnchorElement>('a[href*="whatsapp.com/send"], a[href*="wa.me"]');
      
      links.forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) return;
        
        let text = "";
        let phone = "919898011309"; // Default project phone

        try {
          const urlObj = new URL(href, window.location.origin);
          
          if (href.includes("wa.me/")) {
            const match = href.match(/wa\.me\/([0-9]+)/);
            if (match) phone = match[1];
          } else if (urlObj.searchParams.has("phone")) {
            phone = urlObj.searchParams.get("phone") || phone;
          }
          
          text = urlObj.searchParams.get("text") || "";
        } catch (e) {
          const textMatch = href.match(/[?&]text=([^&#]*)/);
          if (textMatch) text = decodeURIComponent(textMatch[1]);
          
          const phoneMatch = href.match(/phone=([0-9]+)/);
          if (phoneMatch) phone = phoneMatch[1];
        }

        const encodedText = text ? encodeURIComponent(text) : "";
        let newHref = "";

        if (isMobile) {
          const isAndroid = /android/i.test(navigator.userAgent || navigator.vendor || (window as any).opera);
          if (isAndroid) {
             newHref = `intent://send?phone=${phone}&text=${encodedText}#Intent;scheme=whatsapp;package=com.whatsapp;end`;
          } else {
             newHref = `https://wa.me/${phone}?text=${encodedText}`;
          }
        } else {
          newHref = `https://web.whatsapp.com/send?phone=${phone}${encodedText ? "&text=" + encodedText : ""}`;
        }

        if (href !== newHref) {
           link.setAttribute("href", newHref);
        }
      });
    };

    // Initial run
    updateWhatsAppLinks();

    // Resize event with debounce
    const debouncedUpdate = debounce(updateWhatsAppLinks, 200);
    window.addEventListener("resize", debouncedUpdate);
    
    // MutationObserver to watch for new links added dynamically
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
           shouldUpdate = true;
           break;
        }
      }
      if (shouldUpdate) {
         updateWhatsAppLinks();
      }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", debouncedUpdate);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
