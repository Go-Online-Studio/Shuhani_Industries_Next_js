/**
 * Generates a WhatsApp direct chat link with a custom message for a specific service.
 * @param service The name of the service the user is inquiring about
 */
export function getWhatsAppLink(service = "CNC Machining"): string {
  const phone = "919898011309";
  const message = `Hi! I'm interested in your ${service} services. Please share more details.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
