import HeroCarousel from "../components/sections/herocarousel";
import ServicesSection from "../components/sections/servicessection";
import ContactChannels from "../components/features/ai-chat/contactchannels";
import FiscalCalendar from "../components/features/fiscal-calendar/fiscalcalendar";
import ExchangeRates from "../components/features/exchange-rates/exchangerates";

// Modular feature folders
import TaxServicesBreakdown from "../components/features/tax/taxservicesbreakdown";
import NewsSection from "../components/features/news/newssection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Removido: Navbar (Agora gerenciada pelo Layout global) */}
      <HeroCarousel />
      <ServicesSection />
      <NewsSection />
      <ContactChannels />
      <TaxServicesBreakdown />

      {/* Seção do Calendário e Câmbio */}
      <section id="calendario" className="py-12 sm:py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <FiscalCalendar />
            <ExchangeRates />
          </div>
        </div>
      </section>
      
      {/* Removido: Footer (Agora gerenciado pelo Layout global) */}
    </div>
  );
}