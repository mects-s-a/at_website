import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AIChatWidget from "../components/aichatwidget";
import Legislacao from "./legislacao/legislacao";

export default function LegislacaoPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] font-inter">
      <Navbar />
      <Legislacao />
      <Footer />
      <AIChatWidget />
    </div>
  );
}