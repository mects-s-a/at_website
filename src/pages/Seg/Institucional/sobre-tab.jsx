import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Target,
  Eye,
  Scale,
  ChevronDown,
  Building2,
  FileSpreadsheet,
  LineChart,
  GraduationCap,
  Briefcase
} from "lucide-react";

// Subcomponente isolado com dimensionamento equilibrado (nem muito pequeno, nem muito grande)
const TimelineItem = ({ year, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm/40 transition-all duration-200 overflow-hidden">
      {/* Barra Principal: Altura moderada com paddings equilibrados */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none"
      >
        <div className="flex items-center gap-4 w-full">
          {/* Ano: Destaque nítido sem ser massivo */}
          <span className="text-base md:text-lg font-extrabold text-blue-600 tracking-tight shrink-0">
            {year}
          </span>
          
          {/* Divisor Vertical Discreto */}
          <div className="h-4 w-px bg-slate-200 shrink-0" />
          
          {/* Título do Marco */}
          <h3 className="text-sm font-bold text-slate-900 tracking-tight line-clamp-1 md:line-clamp-none">
            {title}
          </h3>
        </div>

        {/* Ícone de Expansão */}
        <ChevronDown 
          className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-180 text-blue-600" : ""
          }`} 
        />
      </button>

      {/* Caixa de Texto: Altamente legível e sem espaço desperdiçado */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-slate-50/30 px-5 pb-4 pt-3 animate-fadeIn">
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal max-w-4xl">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default function SobreTab() {
  return (
    <div className="space-y-16 text-slate-700 py-2">
      
      {/* 1. Missão, Visão, Valores */}
      <section className="space-y-8">
        <div>
          <div className="section-label">Diretrizes Estratégicas</div>
          <h2 className="text-2xl font-bold text-slate-900 mt-3 tracking-tight">Missão, Visão & Princípios</h2>
          <p className="text-sm text-slate-500 mt-1.5 max-w-2xl">
            O nosso compromisso estratégico determina uma atuação sólida com foco na transparência e na integridade fiscal e aduaneira de Moçambique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Target className="w-5 h-5 text-blue-600" />,
              title: "Missão",
              body: "Arrecadar receitas de forma justa, transparente e eficiente, financiando a despesa pública, além de proteger a economia nacional e assegurar o controlo das fronteiras.",
            },
            {
              icon: <Eye className="w-5 h-5 text-blue-600" />,
              title: "Visão",
              body: "Ser reconhecida nacional e internacionalmente como uma administração célere, moderna, inovadora e de excelência na prestação de serviços tributários.",
            },
            {
              icon: <Scale className="w-5 h-5 text-blue-600" />,
              title: "Valores (LEI)",
              body: "Legalidade, Eficiência e Integridade. Estes três pilares fundamentais regem o comportamento profissional, a ética institucional e o respeito mútuo com o contribuinte.",
            },
          ].map((c, i) => (
            <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-6 transition-all duration-200 hover:bg-white hover:border-slate-200 hover:shadow-sm space-y-4" key={i}>
              <div className="p-2.5 bg-blue-50/60 rounded-lg w-fit">
                {c.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">{c.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Tarefas Fundamentais */}
      <section className="space-y-8">
        <div>
                    <div className="section-label">Competências Legais</div>

          <h2 className="text-2xl font-bold text-slate-900 mt-3 tracking-tight">Tarefas Fundamentais da AT</h2>
          <p className="text-sm text-slate-500 mt-1.5">
            Nos termos do Artigo 4.º da Lei n.º 1/2006, as atribuições basilares asseguram o controlo e a execução do ecossistema fiscal do país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Briefcase className="w-4.5 h-4.5 text-slate-500" />,
              title: "Execução de Políticas Fiscais",
              desc: "Executar a política tributária e aduaneira do Estado, dirigindo, orientando e controlando de forma centralizada o funcionamento dos seus serviços e fluxos comerciais.",
            },
            {
              icon: <FileSpreadsheet className="w-4.5 h-4.5 text-slate-500" />,
              title: "Planeamento e Gestão de Informação",
              desc: "Planificar e controlar rigorosamente as suas actividades operacionais, bem como gerir e modernizar os sistemas de informação e inteligência fiscal.",
            },
            {
              icon: <LineChart className="w-4.5 h-4.5 text-slate-500" />,
              title: "Estudos de Impacto Macroeconómico",
              desc: "Elaborar estudos macroeconómicos e fiscais especializados, apoiando activamente o Governo na formulação e desenho de novas políticas fiscais.",
            },
            {
              icon: <GraduationCap className="w-4.5 h-4.5 text-slate-500" />,
              title: "Qualificação de Recursos Humanos",
              desc: "Formar, capacitar e qualificar continuamente os recursos humanos integrados na administração aduaneira e fiscal para garantir a excelência pública.",
            },
          ].map((t, i) => (
            <div className="flex gap-4 p-5 bg-white border border-slate-200/80 rounded-xl shadow-sm/50" key={i}>
              <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg shrink-0 h-fit mt-0.5">
                {t.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">{t.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Órgãos da AT */}
      <section className="space-y-8">
        <div>
          
                    <div className="section-label">Estrutura de Governação</div>

          <h2 className="text-2xl font-bold text-slate-900 mt-3 tracking-tight">Órgãos Superiores de Gestão</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Conselho Superior Tributário",
            "Presidente da Autoridade Tributária",
            "Conselho Directivo",
            "Conselho de Fiscalidade",
          ].map((orgao, i) => (
            <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-5 flex items-center gap-4 transition-all duration-150 hover:bg-white hover:border-slate-200" key={i}>
              <div className="p-2 bg-white border border-slate-100 rounded-lg shrink-0 shadow-sm text-slate-400">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-semibold text-slate-800 leading-snug">{orgao}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Linha do Tempo (Escala Visual Equilibrada) */}
      <section className="space-y-8">
        <div>
          <div className="section-label">Histórico de Evolução</div>
          <h2 className="text-2xl font-bold text-slate-900 mt-3 tracking-tight">Duas Décadas de Modernização</h2>
        </div>
        
        {/* Espaçamento otimizado (space-y-3.5) para agrupar melhor os cartões independentes */}
        <div className="space-y-3.5">
          {[
            {
              year: "2006",
              title: "Criação e Entrada em Funcionamento",
              desc: "A AT foi officially instituída pela Lei n.º 1/2006 de 22 de Março, unificando as competências da Direcção Geral de Impostos e da Direcção Geral das Alfândegas. A instituição iniciou formalmente as suas actividades operacionais em todo o território nacional a 20 de Novembro de 2006.",
            },
            {
              year: "2009 - 2015",
              title: "Modernização Estrutural dos Sistemas",
              desc: "Introdução e implementação em larga escala do sistema integrado e-Tributação; desenvolvimento do cadastro único com o NUIT online; modernização das infraestruturas físicas e postos de fronteira para agilização aduaneira.",
            },
            {
              year: "2016 - 2020",
              title: "Expansão Global de Serviços Digitais",
              desc: "Lançamento oficial do Portal do Contribuinte, permitindo a submissão digital da e-Declaração e a interoperabilidade com sistemas avançados de desalfandegamento como a Janela Única Electrónica (JUE).",
            },
            {
              year: "2021 - 2026",
              title: "Era da Transformação Digital e Interconexão",
              desc: "Implementação da fatura eletrónica e guias de transporte digitais, expansão contínua do atendimento unificado ao contribuinte via central telefónica 1266, e forte consolidação dos processos corporativos modernos.",
            },
          ].map((it, i) => (
            <TimelineItem
              key={i}
              year={it.year}
              title={it.title}
              description={it.desc}
            />
          ))}
        </div>
      </section>

      {/* 5. Canais de Contacto */}
      <section className="space-y-8">
        <div>
          <div className="section-label">Suporte ao Cidadão</div>
          <h2 className="text-2xl font-bold text-slate-900 mt-3 tracking-tight">Atendimento Unificado</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Bloco 1: Sede Central */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm/50 flex items-start gap-4">
            <div className="p-2.5 rounded-lg shrink-0 mt-0.5 bg-slate-50 text-slate-500">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Sede Central</div>
              <div className="text-xs md:text-sm font-semibold text-slate-900 leading-relaxed">Avenida 25 de Setembro, Nº 1235, Maputo</div>
            </div>
          </div>

          {/* Bloco 2: Contactos Telefónicos Unificados */}
          <div className="bg-white border border-blue-200 bg-blue-50/10 rounded-xl p-5 shadow-sm/50 flex items-start gap-4">
            <div className="p-2.5 rounded-lg shrink-0 mt-0.5 bg-blue-50 text-blue-600">
              <Phone className="w-4 h-4" />
            </div>
            <div className="space-y-1 w-full">
              <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Contactos Telefónicos</div>
              <div className="flex flex-col gap-1 text-xs md:text-sm font-semibold text-slate-900">
                <div>
                  1266 <span className="text-[11px] font-normal text-slate-500">(Linha do Contribuinte - Gratuita)</span>
                </div>
                <div>
                  +258 21344200 <span className="text-[11px] font-normal text-slate-400">(Geral)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bloco 3: Correio Electrónico */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm/50 flex items-start gap-4">
            <div className="p-2.5 rounded-lg shrink-0 mt-0.5 bg-slate-50 text-slate-500">
              <Mail className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Correio Electrónico</div>
              <div className="text-xs md:text-sm font-semibold text-slate-900">linhadocontribuinte@at.gov.mz</div>
            </div>
          </div>

          {/* Bloco 4: Horário de Funcionamento */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm/50 flex items-start gap-4">
            <div className="p-2.5 rounded-lg shrink-0 mt-0.5 bg-slate-50 text-slate-500">
              <Clock className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Horário de Funcionamento</div>
              <div className="text-xs md:text-sm font-semibold text-slate-900">Segunda a Sexta: 07h30 – 15h30</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}