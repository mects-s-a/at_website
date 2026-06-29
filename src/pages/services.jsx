import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AIChatWidget from "../components/aichatwidget";
import Servicos from "./servicos/servicos";

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] font-inter">
      <Navbar />
      <Servicos />
      <Footer />
      <AIChatWidget />
    </div>
  );
}