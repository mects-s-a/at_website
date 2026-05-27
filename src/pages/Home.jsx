import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import ServicesSection from "../components/ServicesSection";
import TaxServicesBreakdown from "../components/TaxServicesBreakdown";

import NewsSection from "../components/NewsSection";
import ContactChannels from "../components/ContactChannels";
import FiscalCalendar from "../components/FiscalCalendar";
import ExchangeRates from "../components/ExchangeRates";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <HeroCarousel />
      <ServicesSection />

      <NewsSection />
      <ContactChannels />
      <TaxServicesBreakdown />

      <section className="py-20 sm:py-28 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <FiscalCalendar />
            <ExchangeRates />
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}