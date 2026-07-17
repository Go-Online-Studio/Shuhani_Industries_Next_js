/**
 * Generates a WhatsApp direct chat link with a custom message for a specific service.
 * @param service The name of the service the user is inquiring about
 */
export function getWhatsAppLink(service = "CNC Machining"): string {
  const phone = "919898011309";
  const message = `Hi! I'm interested in your ${service} services. Please share more details.`;
  const encodedText = encodeURIComponent(message);
  
  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth <= 767.98;
    if (isMobile) {
      const isAndroid = /android/i.test(navigator.userAgent || navigator.vendor || (window as any).opera);
      if (isAndroid) {
        return `intent://send?phone=${phone}&text=${encodedText}#Intent;scheme=whatsapp;package=com.whatsapp;end`;
      }
      return `https://wa.me/${phone}?text=${encodedText}`;
    }
    return `https://web.whatsapp.com/send?phone=${phone}&text=${encodedText}`;
  }

  // Fallback for SSR or if window is not available
  return `https://wa.me/${phone}?text=${encodedText}`;
}
