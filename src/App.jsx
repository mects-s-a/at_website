import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import TaxaCambio from './pages/TaxaCambio'; 
import Noticias from './pages/Noticias';
import Galeria from './pages/Galeria';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 🔐 MOCKS TEMPORÁRIOS DE AUTENTICAÇÃO PRESERVADOS
const AuthProvider = ({ children }) => children;
const useAuth = () => ({
  isLoadingAuth: false,
  isLoadingPublicSettings: false,
  authError: null,
  navigateToLogin: () => console.log("Redirecionando para o login..."),
});

const UserNotRegisteredError = () => (
  <div className="p-12 text-center text-red-500 font-medium">Utilizador não registado no sistema.</div>
);

// 📂 PLACEHOLDERS ELEGANTES COM NAV/FOOTER PARA EVITAR QUEBRAS
const Ferramentas = () => (
  <div className="min-h-screen bg-background flex flex-col justify-between">
    <Navbar />
    <div className="p-24 text-center text-slate-500 font-medium">Página de Calculadora Fiscal (Brevemente)</div>
    <Footer />
  </div>
);

const Contacto = () => (
  <div className="min-h-screen bg-background flex flex-col justify-between">
    <Navbar />
    <div className="p-24 text-center text-slate-500 font-medium">Página de Contactos e Suporte (Brevemente)</div>
    <Footer />
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 1 },
  },
});

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ferramentas" element={<Ferramentas />} />
      <Route path="/taxa-de-cambio" element={<TaxaCambio />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-7xl font-light text-slate-300">404</h1>
        <h2 className="text-2xl font-medium text-slate-800">Página não encontrada</h2>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
        >
          Voltar ao início
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AuthenticatedApp />
          <Toaster />
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
}