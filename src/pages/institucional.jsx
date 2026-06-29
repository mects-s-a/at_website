import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AIChatWidget from "../components/aichatwidget";
import SobreAT from "./institucional/sobre-at";

export default function Institucional() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] font-inter">
      <Navbar />
      <SobreAT />
      <Footer />
      <AIChatWidget />
    </div>
  );
}