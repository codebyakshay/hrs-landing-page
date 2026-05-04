import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { RoomStatus } from "@/components/sections/RoomStatus";
import { CheckInFlow } from "@/components/sections/CheckInFlow";
import { OCRSection } from "@/components/sections/OCRSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Hotel Room Service",
    "operatingSystem": "iOS, Android, Web",
    "applicationCategory": "BusinessApplication",
    "description": "Smart Hotel Management System for small hotels. Track rooms, check guests in, and maintain clean records.",
    "offers": {
      "@type": "Offer",
      "price": "10",
      "priceCurrency": "INR",
      "description": "One-time onboarding fee"
    },
    "featureList": [
      "ID Scanner with OCR",
      "Real-time Room Status Tracking",
      "Fast 3-Step Check-in",
      "Guest Record Management"
    ]
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Features />
      <RoomStatus />
      <CheckInFlow />
      <OCRSection />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
