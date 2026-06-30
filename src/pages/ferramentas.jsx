import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageHero from "../components/pagehero";
import FiscalCalendar from "../components/fiscalcalendar";
import ExchangeRates from "../components/exchangerates";
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