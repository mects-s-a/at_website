import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Legislacao from "./legislacao/legislacao";

export default function LegislacaoPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] font-inter">
      <Navbar />
      <Legislacao />
      <Footer />
    </div>
  );
}