import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">AT</div>
              <div>
                <p className="font-display font-bold">Autoridade Tributária</p>
                <p className="text-xs text-white/60">de Moçambique</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" /> Av. 25 de Setembro, Nº 1235, Maputo</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +258 21 344 200</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> linhadocontribuinte@at.gov.mz</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Direcções Gerais</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Direcção Geral das Alfândegas</li>
              <li>Direcção Geral de Impostos</li>
              <li>Direcção dos Serviços Comuns</li>
              <li>Gabinete de Controlo Interno</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="https://jue.mcnet.co.mz/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Janela Única</a></li>
              <li><a href="https://edeclaracao.at.gov.mz/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">e-Declaração</a></li>
              <li><a href="https://e-viajante.at.gov.mz/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">E-Viajante</a></li>
              <li><a href="https://denuncias.at.gov.mz/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Denúncias</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto Rápido</h4>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-accent mb-1">1266</p>
              <p className="text-sm text-white/70">Call Center</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © 2026 Autoridade Tributária de Moçambique. Todos os direitos reservados.
      </div>
    </footer>
  );
}
