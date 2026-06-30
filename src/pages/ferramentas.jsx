import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import FiscalCalendar from "../components/FiscalCalendar";
import ExchangeRates from "../components/ExchangeRates";
import { Wrench } from "lucide-react";

export default function Ferramentas() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <PageHero
          eyebrow="Ferramentas"
          title="Ferramentas & Recursos"
          description="Recursos adicionais para contribuintes e empresas. Consulte prazos fiscais e taxas de câmbio de referência."
          icon={Wrench}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <FiscalCalendar />
          <ExchangeRates />
        </div>
      </div>
      <Footer />
    </div>
  );
}