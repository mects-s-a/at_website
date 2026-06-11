import Navbar from "./Navbar";
import Footer from "./Footer"; 

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Persistent Top Navigation Bar */}
      <Navbar />
      
      {/* Main Page Area */}
      <main className="flex-grow w-full">
        {children}
      </main>
      
      {/* Persistent Global Footer */}
      <Footer />
    </div>
  );
}