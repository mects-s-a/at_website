import Navbar from "../components/layout/navbar";
import HeroCarousel from "../components/sections/herocarousel";
import ServicesSection from "../components/sections/servicessection";
import ContactChannels from "../components/features/ai-chat/contactchannels";
import FiscalCalendar from "../components/features/fiscal-calendar/fiscalcalendar";
import ExchangeRates from "../components/features/exchange-rates/exchangerates";
import Footer from "../components/layout/footer";

// FIX: Pointing to the new modular feature folders
import TaxServicesBreakdown from "../components/features/tax/taxservicesbreakdown";
import NewsSection from "../components/features/news/newssection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <HeroCarousel />
      <ServicesSection />
      <NewsSection />
      <ContactChannels />
      <TaxServicesBreakdown />

      {/* id="calendario" lets the nav anchor "#calendario" scroll here directly */}
      {/* REDUZIDO: de py-20 sm:py-28 para py-12 sm:py-16 */}
      <section id="calendario" className="py-12 sm:py-16 bg-muted/50">
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