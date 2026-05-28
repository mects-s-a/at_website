import { useState } from "react";
import { ArrowLeft, Image, Calendar, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fallbackAlbums = [
  {
    id: 1,
    title: "Seminário de Modernização Aduaneira",
    date: "14 Mar 2026",
    description: "Sessões de debate sobre a implementação de selos eletrónicos e rastreamento de carga.",
    coverImg: "https://at-mocambique.tributo670.workers.dev/Imagens/logo-at.png",
    images: [
      "https://at-mocambique.tributo670.workers.dev/Imagens/logo-at.png",
      "https://at-mocambique.tributo670.workers.dev/Imagens/logo-at.png"
    ]
  }
];

let externalAlbums = [];
try {
  const module = await import("../data/gallery");
  externalAlbums = module.galleryAlbums;
} catch (e) {
  externalAlbums = fallbackAlbums;
}

export default function Galeria() {
  const [activeAlbum, setActiveAlbum] = useState(null);

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 flex-1 w-full">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar para a Página Inicial
        </Link>

        <div className="mb-10">
          <h1 className="font-display text-4xl font-bold text-foreground mb-3">Galeria de Eventos</h1>
          <p className="text-muted-foreground max-w-2xl">Registos fotográficos das atividades institucionais, seminários aduaneiros e fóruns promovidos pela AT.</p>
        </div>

        {/* GRELHA DE ÁLBUNS */}
        <div className="grid md:grid-cols-2 gap-8">
          {externalAlbums.map((album) => (
            <div 
              key={album.id}
              onClick={() => setActiveAlbum(album)}
              className="group bg-card border border-border rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden relative bg-muted flex items-center justify-center p-6">
                <img src={album.coverImg} alt={album.title} className="max-h-full max-w-full object-contain group-hover:scale-102 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
                <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-md flex items-center gap-1.5">
                  <Image className="w-3.5 h-3.5" /> {album.images.length} Fotos
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {album.date}
                </div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                  {album.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {album.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {activeAlbum && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-card w-full max-w-4xl rounded-2xl max-h-[85vh] overflow-y-auto flex flex-col border border-border">
            <div className="p-5 border-b border-border flex justify-between items-center bg-muted/30 sticky top-0 backdrop-blur-md z-10">
              <div>
                <h2 className="font-bold text-foreground text-lg">{activeAlbum.title}</h2>
                <p className="text-xs text-muted-foreground">{activeAlbum.date}</p>
              </div>
              <button onClick={() => setActiveAlbum(null)} className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeAlbum.images.map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden border border-border aspect-video bg-muted group relative flex items-center justify-center p-2">
                  <img src={img} alt={`Foto ${idx + 1}`} className="max-h-full max-w-full object-contain" />
                  <a href={img} target="_blank" rel="noreferrer" className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium rounded-lg">
                    Expandir Imagem Original
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}