import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormulariosContent from "./formularios/formularios";

export default function Formularios() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] font-inter">
      <Navbar />
      <FormulariosContent />
      <Footer />
    </div>
  );
}