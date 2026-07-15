"use client";

import React, { useState } from "react";
import { TbSend } from "react-icons/tb";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `Hi! I'm ${name.trim()}.`;
    if (service) text += `\nService: ${service}`;
    if (email.trim()) text += `\nEmail: ${email.trim()}`;
    if (phone.trim()) text += `\nPhone: ${phone.trim()}`;
    if (message.trim()) text += `\nDetails: ${message.trim()}`;

    const waNumber = "919898011309";
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${waNumber}?text=${encoded}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-bg-card rounded-lg p-10 shadow-sm border border-border/30 w-full max-w-[560px] mx-auto lg:mx-0">
      <h3 className="font-heading font-bold text-xl text-text-dark mb-2">
        Send Us a Message
      </h3>
      <p className="text-xs text-text-muted mb-8 leading-relaxed">
        Fill in the details below and we&apos;ll get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name and Phone Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="contactName" className="text-[10px] font-bold uppercase tracking-wider text-text-dark">
              Your Name
            </label>
            <input
              type="text"
              id="contactName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-[18px] py-3.5 border-2 border-border bg-background-custom rounded-sm text-sm text-text-dark outline-none focus:border-primary transition-colors"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contactPhone" className="text-[10px] font-bold uppercase tracking-wider text-text-dark">
              Phone Number
            </label>
            <input
              type="tel"
              id="contactPhone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-[18px] py-3.5 border-2 border-border bg-background-custom rounded-sm text-sm text-text-dark outline-none focus:border-primary transition-colors"
              placeholder="+91 98765 43210"
              required
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-2">
          <label htmlFor="contactEmail" className="text-[10px] font-bold uppercase tracking-wider text-text-dark">
            Email Address
          </label>
          <input
            type="email"
            id="contactEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-[18px] py-3.5 border-2 border-border bg-background-custom rounded-sm text-sm text-text-dark outline-none focus:border-primary transition-colors"
            placeholder="you@example.com"
          />
        </div>

        {/* Service Dropdown */}
        <div className="flex flex-col gap-2">
          <label htmlFor="contactService" className="text-[10px] font-bold uppercase tracking-wider text-text-dark">
            Service Interested In
          </label>
          <select
            id="contactService"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-[18px] py-3.5 border-2 border-border bg-background-custom rounded-sm text-sm text-text-dark outline-none focus:border-primary transition-colors cursor-pointer"
          >
            <option value="">Select a service</option>
            <option value="3D Wood Carving">3D Wood Carving</option>
            <option value="2D CNC Carving">2D CNC Carving</option>
            <option value="Wave Board">Wave Board Design</option>
            <option value="Metal CNC">Metal CNC Work</option>
            <option value="Wooden Legs">Wooden Legs &amp; Turnings</option>
            <option value="Custom Fabrication">Custom Fabrication</option>
          </select>
        </div>

        {/* Project Details */}
        <div className="flex flex-col gap-2">
          <label htmlFor="contactMessage" className="text-[10px] font-bold uppercase tracking-wider text-text-dark">
            Project Details
          </label>
          <textarea
            id="contactMessage"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-[18px] py-3.5 border-2 border-border bg-background-custom rounded-sm text-sm text-text-dark outline-none focus:border-primary transition-colors resize-none"
            placeholder="Describe your project requirements, dimensions, materials, quantity..."
            rows={5}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider py-4 rounded-full text-center transition-all duration-350 hover:-translate-y-0.5 hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
        >
          <TbSend className="text-base" /> Send via WhatsApp
        </button>
      </form>
    </div>
  );
}
