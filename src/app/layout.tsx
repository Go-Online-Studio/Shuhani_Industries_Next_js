import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

// Configure premium typography using Google Fonts via next/font (Zero CLS)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://suhaniindustries.in"),
  title: "Suhani Industries | Precision CNC Wood & Metal Products",
  description:
    "Leading manufacturer of high-quality CNC 3D wood carvings, 2D cutting, wave board wall panels, metal CNC machining, and premium wooden legs in Vadodara, Gujarat.",
  keywords: [
    "Suhani Industries",
    "CNC wood carving",
    "3D wood carving",
    "2D CNC cutting",
    "Wave board panels",
    "Metal CNC Vadodara",
    "Wooden legs",
    "Vadodara CNC manufacturer",
  ],
  authors: [{ name: "Suhani Industries" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-body bg-background-custom text-text-dark" suppressHydrationWarning>
        {/* Navigation Bar */}
        <Navbar />

        {/* Global JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Suhani Industries",
              "image": "https://www.suhaniindustries.in/images/BrandLogo.webp",
              "@id": "https://www.suhaniindustries.in",
              "url": "https://www.suhaniindustries.in",
              "telephone": "+919898011309",
              "email": "suhaniindustries09@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C 26, Anur Estate, opp MM Vora Show Room, Soma Talav Cross Road",
                "addressLocality": "Vadodara",
                "addressRegion": "GJ",
                "postalCode": "390025",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 22.2694,
                "longitude": 73.2307
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/suhaniindustries",
                "https://www.linkedin.com/company/suhani-industries"
              ]
            })
          }}
        />

        {/* Main Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Interactive Elements */}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
