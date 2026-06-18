import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate, useNavigate } from 'react-router-dom';

// Layout
import Layout from './components/layout/layout';

// Page Component Imports (lowercase filenames, preserved folder casing)
import Home from './pages/home';
import TaxaCambio from './pages/taxacambio';
import Ferramentas from './pages/ferramentas';
import Contacto from './pages/contacto';
import Noticias from './pages/noticias';
import Galeria from './pages/galeria';
import Servicos from './pages/Seg/Servicos/servicos';
import Legislacao from './pages/Seg/Legislation/legislacao'; 

// Tabbed Institutional Navigation Component
import Navigation from './components/layout/navigation';

// Global UI Widget Imports
import AIChatWidget from './components/features/ai-chat/aichatwidget';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 1 },
  },
});

function LayoutRoute() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

function AppRoutes() {
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

        {/* 🏛️ Institucional - Agora padronizado com Slugs de rota */}
        <Route path="/sobre-at"       element={<Navigate to="/sobre-at/sobre" replace />} />
        <Route path="/sobre-at/:slug" element={<Navigation />} />

        {/* Serviços */}
        <Route path="/servicos"       element={<Navigate to="/servicos/procedimentos-aduaneiros" replace />} />
        <Route path="/servicos/:slug" element={<Servicos />} />

        {/* ⚖️ Legislação */}
        <Route path="/legislacao"       element={<Navigate to="/legislacao/geral" replace />} />
        <Route path="/legislacao/:slug" element={<Legislacao />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

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
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppRoutes />
        <AIChatWidget />
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}