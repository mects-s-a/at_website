import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AIChatWidget from "../components/aichatwidget";
import FormulariosContent from "./formularios/formularios";

export default function Formularios() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] font-inter">
      <Navbar />
      <FormulariosContent />
      <Footer />
      <AIChatWidget />
    </div>
  );
}