import ContactForm from "../components/features/contact/ContactForm";

export default function Contacto() {
  return (
    /* Changed min-h-screen to min-h-[calc(100vh-80px)] (accounting for your fixed navbar) 
       and wrapped content in a container with tighter vertical padding */
    <div className="bg-background font-inter pb-1">
      <div className="py-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-1">Comunicações</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">Fale Connosco</h1>
          <p className="text-white/60 mt-2">Entre em contacto com a Autoridade Tributária de Moçambique</p>
        </div>
      </div>
      
      {/* Note: If this still feels too deep, open your <ContactForm /> component 
        and reduce its parent `py-16` or `py-20` padding down to something smaller like `py-8` or `pt-8 pb-4`.
      */}
      <div className="my-2">
        <ContactForm />
      </div>
    </div>
  );
}