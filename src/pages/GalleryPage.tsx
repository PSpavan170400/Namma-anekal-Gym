import React, { useState } from 'react';
import { PageId, GalleryItem } from '../types';
import { galleryItemsData } from '../data/gymData';
import { Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (index: number) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'strength', label: 'Strength & Free Weights' },
    { id: 'functional', label: 'Functional & Turf' },
    { id: 'group', label: 'Group Sessions' },
    { id: 'recovery', label: 'Recovery & Amenities' },
    { id: 'facility', label: 'Facility Architecture' },
  ];

  const filteredItems = galleryItemsData.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="bg-[#0c0d10] text-zinc-300 min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 bg-[#111319] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <ImageIcon className="w-4 h-4" />
            <span>Visual Tour</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white max-w-3xl leading-tight">
            INSIDE IRONSTONE ATHLETIC CLUB
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            Explore our competition lifting platforms, 40-yard turf track, cold plunge tubs, and high-energy squad training floor. Click any photograph to expand in high-definition.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Gallery Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            // Find global index in galleryItemsData for lightbox navigation
            const globalIndex = galleryItemsData.findIndex((g) => g.id === item.id);

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(globalIndex)}
                className="group relative h-80 rounded-xl overflow-hidden border border-zinc-800 cursor-pointer shadow-lg transition-all duration-300 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-black/60 bg-zinc-950"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 px-2.5 py-1 rounded border border-zinc-700">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 rounded-full bg-amber-400 text-black shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Information */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center text-zinc-500">
            No images in this category yet.
          </div>
        )}
      </section>

      {/* In-Person Tour CTA */}
      <section className="py-16 bg-[#111319] border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
            PICTURES ONLY TELL HALF THE STORY
          </h3>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Step onto the floor, feel the knurling on the barbells, test the cold plunge, and experience the culture firsthand.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded-md shadow-xl transition active:scale-95"
            >
              Get Directions & Visit Our Austin Club
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
