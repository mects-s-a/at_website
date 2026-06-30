import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import ServicesSection from "../components/ServicesSection";
import NewsSection from "../components/NewsSection";
import ContactChannels from "../components/ContactChannels";
import CanalDoOuvinte from "../components/CanalDoOuvinte";
import FiscalCalendar from "../components/FiscalCalendar";
import ExchangeRates from "../components/ExchangeRates";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <HeroCarousel />
      <ServicesSection />
      <NewsSection />
      <ContactChannels />
      <CanalDoOuvinte />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-9">
            <h2 className="section-title">Ferramentas</h2>
          </div>
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