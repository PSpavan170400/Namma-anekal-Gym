import React from 'react';
import { PageId, GalleryItem } from '../../types';
import { galleryItemsData } from '../../data/gymData';
import { ArrowRight, Maximize2 } from 'lucide-react';

interface GalleryPreviewProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (index: number) => void;
}

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  // Show first 6 images in an athletic bento arrangement
  const previewImages = galleryItemsData.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#111319] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
              Inside Our Facility
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
              SEE WHERE THE WORK GETS DONE
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
              Take a visual tour through our lifting bays, turf sprint track, recovery lounge, and executive facilities.
            </p>
          </div>

          <button
            id="view-full-gallery-btn"
            onClick={() => onNavigate('gallery')}
            className="self-start md:self-auto px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-amber-400 font-bold uppercase tracking-wider text-xs rounded-md border border-zinc-700 hover:border-amber-400/40 transition flex items-center shrink-0"
          >
            <span>Explore Full Gallery</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(index)}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden border border-zinc-800 cursor-pointer shadow-lg transition-all duration-300 hover:border-amber-400/50 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Badges & Content */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-sm text-amber-400 px-2.5 py-1 rounded border border-zinc-700">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 rounded-full bg-amber-400 text-black shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
