import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageHero from "../components/pagehero";
import ContactForm from "../components/contactform";
import { Mail } from "lucide-react";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <PageHero
          eyebrow="Comunicações"
          title="Fale Connosco"
          description="Entre em contacto com a Autoridade Tributária de Moçambique. Estamos ao seu serviço."
          icon={Mail}
        />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}