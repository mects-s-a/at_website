import HeroCarousel from "../components/sections/HeroCarousel";
import ServicesSection from "../components/sections/ServicesSection";
import ContactChannels from "../components/features/ai-chat/ContactChannels";
import FiscalCalendar from "../components/features/fiscal-calendar/FiscalCalendar";
import ExchangeRates from "../components/features/exchange-rates/ExchangeRates";
import TaxServicesBreakdown from "../components/features/tax/TaxServicesBreakdown";
import NewsSection from "../components/features/news/NewsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <HeroCarousel />
      <ServicesSection />
      <NewsSection />
      <ContactChannels />
      <TaxServicesBreakdown />

      {/* id="calendario" lets the nav anchor "#calendario" scroll here directly */}
      <section id="calendario" className="py-12 sm:py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <FiscalCalendar />
            <ExchangeRates />
          </div>
        </div>
      </section>
    </div>
  );
}