import React, { useState } from 'react';
import { facilitiesData } from '../../data/gymData';
import { Check, Dumbbell, Sparkles } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(facilitiesData[0].id);

  const currentFacility = facilitiesData.find((f) => f.id === activeTab) || facilitiesData[0];

  return (
    <section className="py-20 lg:py-28 bg-[#0f1117] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            18,000 Sq. Ft. Facility Floor
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
            ENGINEERED FOR SERIOUS PERFORMANCE
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            Every square foot is thoughtfully laid out to prevent bottlenecks, provide acoustic isolation, and offer world-class equipment.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {facilitiesData.map((facility) => {
            const isActive = activeTab === facility.id;
            return (
              <button
                key={facility.id}
                onClick={() => setActiveTab(facility.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                  isActive
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20 scale-102'
                    : 'bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {facility.title}
              </button>
            );
          })}
        </div>

        {/* Selected Facility Spotlight Card */}
        <div className="bg-[#14161f] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image (7 cols) */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[380px]">
              <img
                src={currentFacility.image}
                alt={currentFacility.title}
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-transparent to-transparent" />
            </div>

            {/* Details (5 cols) */}
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 text-[11px] font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3 h-3" />
                  <span>Verified Club Standard</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                  {currentFacility.title}
                </h3>

                <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
                  {currentFacility.description}
                </p>

                {/* Equipment Specs */}
                <div className="mt-6 pt-6 border-t border-zinc-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Floor Specifications & Hardware:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentFacility.specs.map((spec, i) => (
                      <div key={i} className="flex items-center text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 mr-2 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span>Sanitized continuously throughout the day</span>
                <span className="text-amber-400 font-bold uppercase">Ready to Train</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
