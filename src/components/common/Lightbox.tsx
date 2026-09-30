import React, { useEffect } from 'react';
import { GalleryItem } from '../../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Image Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
        <div className="pointer-events-auto bg-black/60 px-3.5 py-1.5 rounded-full border border-zinc-800 text-xs text-zinc-400 font-medium">
          <span className="text-white font-semibold">{currentIndex + 1}</span> / {items.length}
        </div>

        <button
          id="close-lightbox-btn"
          onClick={onClose}
          className="pointer-events-auto p-2.5 rounded-full bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700 transition"
          aria-label="Close image viewer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        id="lightbox-prev-btn"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-amber-400 hover:text-black text-white border border-zinc-700 transition shadow-xl z-20 active:scale-95"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        id="lightbox-next-btn"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-amber-400 hover:text-black text-white border border-zinc-700 transition shadow-xl z-20 active:scale-95"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image & Info Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-lg overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[70vh] w-auto object-contain select-none"
          />
        </div>

        {/* Caption & Title Card */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="inline-block px-2.5 py-0.5 mb-1.5 rounded text-[11px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-400 border border-amber-400/30">
            {currentItem.categoryLabel}
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
