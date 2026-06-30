import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SobreAT from "./institucional/sobre-at";

export default function Institucional() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] font-inter">
      <Navbar />
      <SobreAT />
      <Footer />
    </div>
  );
}