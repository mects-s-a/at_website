import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InfoPage from "./informacoes/info-page";

export default function Informacoes() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] font-inter">
      <Navbar />
      <InfoPage />
      <Footer />
    </div>
  );
}