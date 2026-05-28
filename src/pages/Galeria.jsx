import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AIChatWidget from "../components/AIChatWidget";
import { albums } from "../data/gallery";

function LightBox({ album, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const photo = album.photos[idx];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        <img
          src={photo.url}
          alt={photo.caption}
          className="w-full max-h-[75vh] object-contain rounded-xl"
        />
        <p className="text-white/60 text-sm text-center mt-3">{photo.caption}</p>

        {/* Prev */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-12">
          <button
            onClick={() =>
              setIdx((i) => (i - 1 + album.photos.length) % album.photos.length)
            }
            className="text-white/70 hover:text-white p-2 transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        </div>

        {/* Next */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-12">
          <button
            onClick={() => setIdx((i) => (i + 1) % album.photos.length)}
            className="text-white/70 hover:text-white p-2 transition-colors"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        <p className="text-white/40 text-xs text-center mt-2">
          {idx + 1} / {album.photos.length}
        </p>
      </div>
    </div>
  );
}

function AlbumDetail({ album, onBack }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-primary font-medium mb-6 hover:underline text-sm transition-colors"
      >
        <ChevronLeft className="w-4 h-4" /> Voltar aos Álbuns
      </button>

      <h2 className="font-display text-2xl font-bold text-foreground mb-1">{album.title}</h2>
      <p className="text-muted-foreground text-sm mb-6">
        {new Date(album.date).toLocaleDateString("pt-MZ", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        · {album.photos.length} fotos
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {album.photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setLightbox(i)}
            className="aspect-square overflow-hidden rounded-xl border border-border hover:shadow-lg transition-all duration-300 group"
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
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
    <div className="min-h-screen bg-background font-inter">
      <Navbar />

      {/* Page header */}
      <div className="py-10 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-1">Media</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">Galeria</h1>
          <p className="text-white/60 mt-2">Álbuns de eventos e actividades da Autoridade Tributária</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {selectedAlbum ? (
          <AlbumDetail album={selectedAlbum} onBack={() => setSelectedAlbum(null)} />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {albums.map((album) => (
              <button
                key={album.id}
                onClick={() => setSelectedAlbum(album)}
                className="group text-left bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium">
                    <Images className="w-3.5 h-3.5" /> {album.photos.length} fotos
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-1">
                    {new Date(album.date).toLocaleDateString("pt-MZ", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {album.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <AIChatWidget />
    </div>
  );
}