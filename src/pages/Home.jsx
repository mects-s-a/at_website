import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CarouselSection from "../components/CarouselSection";
import ServicesSection from "../components/ServicesSection";
import TaxServicesBreakdown from "../components/TaxServicesBreakdown";
import TaxCalculator from "../components/TaxCalculator";
import NewsSection from "../components/NewsSection";
import ContactChannels from "../components/ContactChannels";
import FiscalCalendar from "../components/FiscalCalendar";
import ExchangeRates from "../components/ExchangeRates";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <HeroSection />
      <div className="py-8 bg-background" />
      <CarouselSection />
      <ServicesSection />
      <TaxServicesBreakdown />
      <TaxCalculator />
      <NewsSection />
      <ContactChannels />
      <section className="py-20 sm:py-28 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <FiscalCalendar />
            <ExchangeRates />
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
}
