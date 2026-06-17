import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate, useNavigate } from 'react-router-dom';

// Layout
import Layout from './components/layout/layout';

// Page Component Imports (lowercase filenames)
import Home from './pages/home';
import TaxaCambio from './pages/taxacambio';
import Ferramentas from './pages/ferramentas';
import Contacto from './pages/contacto';
import Noticias from './pages/noticias';
import Galeria from './pages/galeria';
import SobreAT from './pages/Seg/Institucional/sobre-at';
import Servicos from './pages/Seg/Servicos/servicos';

// Global UI Widget Imports
import AIChatWidget from './components/features/ai-chat/aichatwidget';

// 🔐 Auth mocks
const AuthProvider = ({ children }) => children;
const useAuth = () => ({
  isLoadingAuth: false,
  isLoadingPublicSettings: false,
  authError: null,
  navigateToLogin: () => console.log("Redirecionando para o login..."),
});

const UserNotRegisteredError = () => (
  <div className="p-12 text-center text-red-500 font-medium">
    Utilizador não registado no sistema.
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 1 },
  },
});

// Layout route — renders Navbar + Footer around every child via <Outlet />
function LayoutRoute() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin" />
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') return <UserNotRegisteredError />;
    if (authError.type === 'auth_required') { navigateToLogin(); return null; }
  }

  return (
    <Routes>
      <Route element={<LayoutRoute />}>
        {/* Core pages */}
        <Route path="/"               element={<Home />} />
        <Route path="/ferramentas"    element={<Ferramentas />} />
        <Route path="/taxa-de-cambio" element={<TaxaCambio />} />
        <Route path="/contacto"       element={<Contacto />} />
        <Route path="/noticias"       element={<Noticias />} />
        <Route path="/galeria"        element={<Galeria />} />

        {/* Institucional */}
        <Route path="/sobre-at"       element={<SobreAT />} />

        {/* Serviços — redirect bare /servicos to first page */}
        <Route path="/servicos"       element={<Navigate to="/servicos/procedimentos-aduaneiros" replace />} />
        <Route path="/servicos/:slug" element={<Servicos />} />
      </Route>

      {/* 404 — outside Layout for full-screen treatment */}
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
          {/* Persistent global overlays — intentionally outside Layout */}
          <AIChatWidget />
          <Toaster />
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
}