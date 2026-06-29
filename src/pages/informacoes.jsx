import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AIChatWidget from "../components/aichatwidget";
import InfoPage from "./informacoes/info-page";

export default function Informacoes() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] font-inter">
      <Navbar />
      <InfoPage />
      <Footer />
      <AIChatWidget />
    </div>
  );
}