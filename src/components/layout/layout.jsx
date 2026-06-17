import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    // Adicionada a font-inter e min-h-screen para consistência global
    <div className="flex flex-col min-h-screen bg-background font-inter">
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}