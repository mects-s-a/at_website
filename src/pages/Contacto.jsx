import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/features/contact/ContactForm";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      <div className="py-10 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-1">
            Comunicações
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">
            Fale Connosco
          </h1>
          <p className="text-white/60 mt-2">
            Entre em contacto com a Autoridade Tributária de Moçambique
          </p>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}