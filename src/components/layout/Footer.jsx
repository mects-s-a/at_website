import { MapPin, Phone, Mail } from "lucide-react";
// 1. Importa corretamente a imagem a partir da pasta utils
import logoAT from "../../utils/Logo-da-AT.png"; 

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* 2. Utiliza a variável importada diretamente no src (sem aspas) */}
              <img 
                src={logoAT} 
                alt="Logótipo AT" 
                className="w-12 h-12 object-contain mix-blend-screen"
              />
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
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-4">Contacto Rápido</h4>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-accent mb-1">1266</p>
                <p className="text-sm text-white/70">Call Center</p>
              </div>
            </div>

            {/* Secção de Redes Sociais com efeitos de transição dinâmicos */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-white/90">Siga-nos nas Redes</h4>
              <div className="grid grid-cols-2 gap-2">
                
                {/* Botão Facebook */}
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white text-black p-2 rounded-xl transition-all duration-300 hover:bg-[#1877F2] hover:text-white group"
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/124/124010.png" 
                      alt="Facebook" 
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold transition-colors duration-300">Facebook</span>
                </a>

                {/* Botão WhatsApp */}
                <a 
                  href="https://wa.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white text-black p-2 rounded-xl transition-all duration-300 hover:bg-[#25D366] hover:text-white group"
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
                      alt="WhatsApp" 
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold transition-colors duration-300">WhatsApp</span>
                </a>

              </div>
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