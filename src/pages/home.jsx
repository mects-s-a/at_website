import Navbar from "../components/navbar";
import HeroCarousel from "../components/herocarousel";
import ServicesSection from "../components/servicessection";
import NewsSection from "../components/newssection";
import ContactChannels from "../components/contactchannels";
import CanalDoOuvinte from "../components/canaldoouvinte";
import FiscalCalendar from "../components/fiscalcalendar";
import ExchangeRates from "../components/exchangerates";
import Footer from "../components/footer";
import AIChatWidget from "../components/aichatwidget";

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
      <AIChatWidget />
    </div>
  );
}