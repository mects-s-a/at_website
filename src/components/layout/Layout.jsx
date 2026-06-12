import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Layout
 * ──────
 * Wraps every route with the persistent Navbar (top) and Footer (bottom).
 * The <main> area grows to fill available vertical space so the footer
 * always stays at the bottom even on short pages.
 */
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}