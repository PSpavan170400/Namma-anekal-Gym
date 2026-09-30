import React from 'react';
import { PageId } from '../../types';
import { trainersData } from '../../data/gymData';
import { ArrowRight, Award, ChevronRight } from 'lucide-react';

interface TrainersPreviewProps {
  onNavigate: (page: PageId) => void;
  onOpenTrialModal: (trainerName?: string) => void;
}

export const TrainersPreview: React.FC<TrainersPreviewProps> = ({
  onNavigate,
  onOpenTrialModal,
}) => {
  // Preview first 3 coaches
  const previewTrainers = trainersData.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#111319] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
              Coaching Pedigree
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
              COACHED BY INDUSTRY MASTERS
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
              No weekend certified influencers. Our coaching roster holds collegiate strength backgrounds, Olympic weightlifting credentials, and degrees in biomechanics.
            </p>
          </div>

          <button
            id="view-all-trainers-btn"
            onClick={() => onNavigate('trainers')}
            className="self-start md:self-auto px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-amber-400 font-bold uppercase tracking-wider text-xs rounded-md border border-zinc-700 hover:border-amber-400/40 transition flex items-center shrink-0"
          >
            <span>Meet All 6 Head Coaches</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </button>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-[#161822] border border-zinc-800 rounded-xl overflow-hidden group hover:border-amber-400/40 transition-all duration-200 flex flex-col justify-between hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden bg-zinc-900">
                <img
                  src={trainer.photo}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161822] via-[#161822]/40 to-transparent" />

                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-zinc-700 text-amber-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {trainer.experience}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block mb-1">
                    {trainer.specialization}
                  </span>
                  <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-zinc-400">{trainer.role}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
                    {trainer.biography}
                  </p>

                  <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                    {trainer.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-zinc-900 border border-zinc-700/80 text-zinc-400 px-2 py-0.5 rounded"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('trainers')}
                    className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition"
                  >
                    Full Bio
                  </button>

                  <button
                    onClick={() => onOpenTrialModal(`Coaching Consultation with ${trainer.name}`)}
                    className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center"
                  >
                    <span>Book Intro</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
