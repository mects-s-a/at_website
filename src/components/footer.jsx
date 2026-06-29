import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-at-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                <img
                  src="https://media.base44.com/images/public/6a10556912996cfabed12a84/4501ecebc_logo-da-at.png"
                  alt="Logótipo AT"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-2.5 text-[12.5px] text-white/60 leading-relaxed">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-at-light/70" />
                Av. 25 de Setembro, Nº 1235, Maputo
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 shrink-0 text-at-light/70" />
                +258 21 344 200
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 shrink-0 text-at-light/70" />
                linhadocontribuinte@at.gov.mz
              </p>
            </div>
          </div>

          {/* Direcções */}
          <div>
            <h4 className="text-[13px] font-semibold mb-4 text-white">Direcções Gerais</h4>
            <ul className="space-y-2.5 text-[12.5px] text-white/55">
              <li>Direcção Geral das Alfândegas</li>
              <li>Direcção Geral de Impostos</li>
              <li>Direcção dos Serviços Comuns</li>
              <li>Gabinete de Controlo Interno</li>
              <li>Gabinete de Estudos e Cooperação Internacional</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[13px] font-semibold mb-4 text-white">Links Úteis</h4>
            <ul className="space-y-2.5 text-[12.5px] text-white/55">
              <li>
                <a href="https://jue.mcnet.co.mz/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1.5 group">
                  Janela Única <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                </a>
              </li>
              <li>
                <a href="https://edeclaracao.at.gov.mz/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1.5 group">
                  e-Declaração <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                </a>
              </li>
              <li>
                <a href="https://e-viajante.at.gov.mz/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1.5 group">
                  E-Viajante <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                </a>
              </li>
              <li>
                <a href="https://denuncias.at.gov.mz/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1.5 group">
                  Denúncias <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                </a>
              </li>
              <li>
                <Link to="/atendimento-presencial" className="hover:text-white transition flex items-center gap-1.5 group">
                  Atendimento Presencial <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Call center + social */}
          <div>
            <h4 className="text-[13px] font-semibold mb-4 text-white">Contacto Rápido</h4>
            <div className="bg-white/[0.08] rounded-xl p-4 text-center mb-4">
              <p className="text-3xl font-bold text-white leading-none">1266</p>
              <p className="text-[11px] text-white/50 mt-1">Call Center — Gratuito</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-xs text-white/90">Siga-nos nas Redes</h4>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://web.facebook.com/at.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-white text-black p-1.5 rounded-xl transition-all duration-300 hover:bg-[#1877F2] hover:text-white group"
                >
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                    <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="w-4 h-4 object-contain" />
                  </div>
                  <span className="text-xs font-bold transition-colors duration-300">Facebook</span>
                </a>
                <a
                  href="https://www.whatsapp.com/channel/0029VbAKtBqDp2Q28J46y30s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-white text-black p-1.5 rounded-xl transition-all duration-300 hover:bg-[#25D366] hover:text-white group"
                >
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                  </div>
                  <span className="text-xs font-bold transition-colors duration-300">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-between items-center gap-2">
          <span className="text-[11.5px] text-white/40">
            © {new Date().getFullYear()} Autoridade Tributária de Moçambique. Todos os direitos reservados.
          </span>
          <span className="text-[11.5px] text-white/40">
            Av. 25 de Setembro, Nº 1235, Maputo · 1266
          </span>
        </div>
      </div>
    </footer>
  );
}