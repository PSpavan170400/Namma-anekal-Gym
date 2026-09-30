import React from 'react';
import { PageId } from '../../types';
import { programsData } from '../../data/gymData';
import { ArrowRight, CheckCircle2, Flame } from 'lucide-react';

interface ProgramsPreviewProps {
  onNavigate: (page: PageId) => void;
  onOpenTrialModal: (programTitle?: string) => void;
}

export const ProgramsPreview: React.FC<ProgramsPreviewProps> = ({
  onNavigate,
  onOpenTrialModal,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
              Structured Training Disciplines
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
              TRAIN WITH DELIBERATE PURPOSE
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
              Every program at Ironstone is periodized and grounded in exercise physiology. Whether lifting for raw numbers, sculpting physique, or building athletic endurance.
            </p>
          </div>

          <button
            id="view-all-programs-btn"
            onClick={() => onNavigate('programs')}
            className="self-start md:self-auto px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-amber-400 font-bold uppercase tracking-wider text-xs rounded-md border border-zinc-700 hover:border-amber-400/40 transition flex items-center shrink-0"
          >
            <span>View All Programs</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </button>
        </div>

        {/* 6 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program) => (
            <div
              key={program.id}
              className="bg-[#14161f] border border-zinc-800/90 rounded-xl overflow-hidden hover:border-amber-400/40 transition-all duration-200 group flex flex-col justify-between hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Image & Badges */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14161f] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-zinc-700 text-amber-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {program.intensity} Intensity
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide group-hover:text-amber-400 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed line-clamp-3">
                    {program.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 space-y-1.5 pt-3 border-t border-zinc-800/80">
                    {program.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-start text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mr-2 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500 font-medium uppercase">
                    {program.duration}
                  </span>
                  <button
                    onClick={() => onOpenTrialModal(program.title)}
                    className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center group/link"
                  >
                    <span>{program.ctaText}</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform" />
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
