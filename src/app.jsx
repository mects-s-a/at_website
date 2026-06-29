import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/pagenotfound';
import { AuthProvider } from '@/lib/authcontext';
import Home from './pages/home';
import Ferramentas from './pages/ferramentas';
import TaxaCambio from './pages/taxacambio';
import Contacto from './pages/contacto';
import Noticias from './pages/noticias';
import Galeria from './pages/galeria';
import AtendimentoPresencial from './pages/atendimento_presencial';
import NoticiaArtigo from './pages/noticia_artigo';
import Institucional from './pages/institucional';
import Formularios from './pages/formularios';
import ServicosPage from './pages/services';
import LegislacaoPage from './pages/legislacao';
import Informacoes from './pages/informacoes';

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ferramentas" element={<Ferramentas />} />
            <Route path="/taxa-de-cambio" element={<TaxaCambio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/atendimento-presencial" element={<AtendimentoPresencial />} />
            <Route path="/noticia/:id" element={<NoticiaArtigo />} />
            <Route path="/institucional" element={<Institucional />} />
            <Route path="/formularios" element={<Formularios />} />
            <Route path="/servicos/:slug" element={<ServicosPage />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/legislacao/:slug" element={<LegislacaoPage />} />
            <Route path="/legislacao" element={<LegislacaoPage />} />
            <Route path="/informacoes/:slug" element={<Informacoes />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App