import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageHero from "../components/pagehero";
import MediaSidebar from "../components/mediasidebar";
import AIChatWidget from "../components/aichatwidget";
import { albums } from "../data/gallery";

function LightBox({ album, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const photo = album.photos[idx];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white/70 hover:text-white">
          <X className="w-6 h-6" />
        </button>
        <img src={photo.url} alt={photo.caption} className="w-full max-h-[75vh] object-contain rounded-xl" />
        <p className="text-white/60 text-sm text-center mt-3">{photo.caption}</p>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-12">
          <button
            onClick={() => setIdx((i) => (i - 1 + album.photos.length) % album.photos.length)}
            className="text-white/70 hover:text-white p-2"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-12">
          <button
            onClick={() => setIdx((i) => (i + 1) % album.photos.length)}
            className="text-white/70 hover:text-white p-2"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
        <p className="text-white/40 text-xs text-center mt-2">{idx + 1} / {album.photos.length}</p>
      </div>
    </div>
  );
}

function AlbumDetail({ album, onBack }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-2 text-at-mid font-medium mb-6 hover:underline text-sm">
        <ChevronLeft className="w-4 h-4" /> Voltar aos Álbuns
      </button>
      <h2 className="font-display text-2xl font-bold text-at-ink mb-1">{album.title}</h2>
      <p className="text-at-muted text-sm mb-6">
        {new Date(album.date).toLocaleDateString("pt-MZ", { day: "numeric", month: "long", year: "numeric" })} · {album.photos.length} fotos
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {album.photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setLightbox(i)}
            className="aspect-square overflow-hidden rounded-xl border border-at-border hover:shadow-at-md transition-all duration-300 group"
          >
            <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </button>
        ))}
      </div>
      {lightbox !== null && (
        <LightBox album={album} startIndex={lightbox} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}

export default function Galeria() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <PageHero
          eyebrow="Média"
          title="Galeria"
          description="Álbuns de eventos e actividades da Autoridade Tributária de Moçambique."
          icon={Images}
        />

        <div className="flex gap-6">
          <MediaSidebar activeKey="galeria" />

          <div className="flex-1 min-w-0">
            {selectedAlbum ? (
              <AlbumDetail album={selectedAlbum} onBack={() => setSelectedAlbum(null)} />
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {albums.map((album) => (
                  <button
                    key={album.id}
                    onClick={() => setSelectedAlbum(album)}
                    className="group text-left bg-white rounded-xl overflow-hidden border border-at-border shadow-at-sm hover:shadow-at-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img src={album.cover} alt={album.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-at-deep/80 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium">
                        <Images className="w-3.5 h-3.5" /> {album.photos.length} fotos
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-[11.5px] text-at-muted mb-1">
                        {new Date(album.date).toLocaleDateString("pt-MZ", { day: "numeric", month: "short", year: "numeric" })}
                      </p>
                      <h3 className="font-semibold text-sm text-at-ink group-hover:text-at-mid transition-colors line-clamp-2">{album.title}</h3>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <AIChatWidget />
    </div>
  );
}