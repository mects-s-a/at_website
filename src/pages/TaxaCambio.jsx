import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const rates = [
  { code: "USD", name: "Dólar Americano", country: "Estados Unidos da América", rate: 64.65, iso: "us" },
  { code: "ZAR", name: "Rand", country: "África do Sul", rate: 4.06, iso: "za" },
  { code: "GBP", name: "Libra", country: "Reino Unido", rate: 86.31, iso: "gb" },
  { code: "EUR", name: "Euro", country: "União Europeia", rate: 74.64, iso: "eu" },
  { code: "CNY", name: "Yuan Renminbi", country: "China", rate: 9.05, iso: "cn" },
  { code: "BRL", name: "Real Brasileiro", country: "Brasil", rate: 12.13, iso: "br" },
  { code: "SZL", name: "Lilangeni", country: "Eswatini", rate: 3.72, iso: "sz" },
  { code: "CHF", name: "Franco Suíço", country: "Suíça", rate: 82.17, iso: "ch" },
  { code: "JPY", name: "Yen", country: "Japão", rate: 0.41, iso: "jp" },
  { code: "AED", name: "Dirham Aed", country: "Emirados Árabes Unidos", rate: 17.6, iso: "ae" },
  { code: "AUD", name: "Dólar Australiano", country: "Austrália", rate: 42.53, iso: "au" },
  { code: "BWP", name: "Pula", country: "Botswana", rate: 4.6, iso: "bw" },
  { code: "NZD", name: "Dólar Nova Zelândia", country: "Nova Zelândia", rate: 37.5, iso: "nz" },
  { code: "DKK", name: "Coroa Dinamarquesa", country: "Dinamarca", rate: 10.18, iso: "dk" },
  { code: "CAD", name: "Dólar Canadiano", country: "Canadá", rate: 46.26, iso: "ca" },
  { code: "SEK", name: "Coroa Sueca", country: "Suécia", rate: 6.87, iso: "se" },
  { code: "TZS", name: "Shilling Tanzaniano", country: "Tanzânia", rate: 0.03, iso: "tz" },
  { code: "ZMW", name: "Kwacha", country: "Zâmbia", rate: 2.72, iso: "zm" },
  { code: "SGD", name: "Dólar de Singapura", country: "Singapura", rate: 49.94, iso: "sg" },
  { code: "NAD", name: "Dólar Namibiano", country: "Namíbia", rate: 3.75, iso: "na" },
  { code: "MUR", name: "Rupia Mauriciana", country: "Maurícia", rate: 1.42, iso: "mu" },
  { code: "HKD", name: "Dólar de Hong Kong", country: "Hong Kong", rate: 8.29, iso: "hk" },
  { code: "IDR", name: "Rupiah", country: "Indonésia", rate: 0, iso: "id" },
  { code: "NGN", name: "Naira", country: "Nigéria", rate: 0.04, iso: "ng" },
  { code: "THB", name: "Baht", country: "Tailândia", rate: 1.99, iso: "th" },
  { code: "HUF", name: "Forint", country: "Hungria", rate: 0.19, iso: "hu" },
  { code: "KRW", name: "Won", country: "República da Coreia", rate: 0.05, iso: "kr" },
  { code: "CZK", name: "Koruna", country: "República Checa", rate: 3.09, iso: "cz" },
  { code: "EGP", name: "Libra Egípcia", country: "Egipto", rate: 1.36, iso: "eg" },
  { code: "KES", name: "Shilling Queniano", country: "Quénia", rate: 0.5, iso: "ke" },
  { code: "MAD", name: "Dirham Marroquino", country: "Marrocos", rate: 7.08, iso: "ma" },
  { code: "PKR", name: "Rupia Paquistanesa", country: "Paquistão", rate: 0.23, iso: "pk" },
  { code: "QAR", name: "Rial do Qatar", country: "Qatar", rate: 17.64, iso: "qa" },
  { code: "RUB", name: "Rublo Russo", country: "Federação Russa", rate: 0.78, iso: "ru" },
  { code: "SAR", name: "Saudi Riyal", country: "Arábia Saudita", rate: 17.67, iso: "sa" },
  { code: "TRY", name: "Lira Turca", country: "Türkiye", rate: 1.57, iso: "tr" },
  { code: "TWD", name: "Dólar Taiwanês", country: "Taiwan", rate: 2.14, iso: "tw" },
  { code: "VND", name: "Dong", country: "Vietname", rate: 0, iso: "vn" },
  { code: "AOA", name: "Kwanza", country: "Angola", rate: 0.08, iso: "ao" },
];

export default function TaxaCambio() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      
      <div className="py-10 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-1">
            Ferramentas
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">Taxa de Câmbio</h1>
          <p className="text-white/60 mt-2">Valores de referência em Metical (MZN)</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
          <div className="hidden sm:grid grid-cols-4 gap-4 px-6 py-3 bg-muted text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <span>País</span>
            <span>Código</span>
            <span>Descrição</span>
            <span className="text-right">Câmbio (MZN)</span>
          </div>
          
          <div className="divide-y divide-border">
            {rates.map((r) => (
              <div 
                key={r.code} 
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 py-3.5 hover:bg-muted/40 transition-colors items-center"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={`https://flagcdn.com/w20/${r.iso}.png`}
                    alt={r.country}
                    className="w-6 h-4 object-cover rounded-sm shadow-sm"
                  />
                  <span className="text-sm text-foreground truncate max-w-[150px] sm:max-w-none">
                    {r.country}
                  </span>
                </div>
                <span className="font-mono font-bold text-sm text-primary">{r.code}</span>
                <span className="text-sm text-muted-foreground hidden sm:block">{r.name}</span>
                <span className="font-mono font-bold text-sm text-foreground text-right">
                  {r.rate.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Valores indicativos. Fonte: Autoridade Tributária de Moçambique.
        </p>
      </div>
      
      <Footer />
    </div>
  );
}