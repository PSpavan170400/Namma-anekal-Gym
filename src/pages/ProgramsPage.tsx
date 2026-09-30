import React, { useState } from 'react';
import { PageId, Program } from '../types';
import { programsData } from '../data/gymData';
import { Check, ArrowRight, Sparkles, Clock, Target, Dumbbell, Flame } from 'lucide-react';

interface ProgramsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrialModal: (programTitle?: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  onNavigate,
  onOpenTrialModal,
}) => {
  const [filter, setFilter] = useState<'all' | 'strength' | 'conditioning' | 'coaching'>('all');

  const filteredPrograms = programsData.filter((prog) => {
    if (filter === 'all') return true;
    if (filter === 'strength') return ['strength-training', 'weight-training'].includes(prog.id);
    if (filter === 'conditioning') return ['cardio-conditioning', 'functional-training', 'group-training'].includes(prog.id);
    if (filter === 'coaching') return ['personal-training', 'group-training'].includes(prog.id);
    return true;
  });

  return (
    <div className="bg-[#0c0d10] text-zinc-300 min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 bg-[#111319] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Dumbbell className="w-4 h-4" />
            <span>Athletic Programming</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white max-w-3xl leading-tight">
            PERIODIZED TRAINING FOR MEASURABLE RESULTS
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            Our training pathways are designed by collegiate strength coaches and exercise physiologists. No random workouts. Everything is built around progressive overload, joint longevity, and sustainable strength.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                filter === 'all'
                  ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              All 6 Programs
            </button>
            <button
              onClick={() => setFilter('strength')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                filter === 'strength'
                  ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Strength & Weight Training
            </button>
            <button
              onClick={() => setFilter('conditioning')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                filter === 'conditioning'
                  ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Cardio, Functional & Turf
            </button>
            <button
              onClick={() => setFilter('coaching')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                filter === 'coaching'
                  ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              1-on-1 Coaching & Squads
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Program Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredPrograms.map((prog, idx) => (
          <div
            key={prog.id}
            id={prog.id}
            className="bg-[#14161f] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl transition hover:border-amber-400/30"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Program Photo (5 cols) */}
              <div className={`lg:col-span-5 relative h-80 lg:h-auto min-h-[380px] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-amber-400 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded border border-zinc-700">
                  {prog.intensity} Intensity
                </div>
              </div>

              {/* Program Content (7 cols) */}
              <div className={`lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mb-3">
                    <span className="flex items-center text-amber-400 font-semibold">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {prog.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center text-zinc-300">
                      <Target className="w-3.5 h-3.5 mr-1 text-zinc-400" />
                      {prog.targetAudience}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-white tracking-wide">
                    {prog.title}
                  </h2>

                  <p className="text-sm sm:text-base text-zinc-300 mt-4 leading-relaxed">
                    {prog.description}
                  </p>

                  {/* Key Benefits List */}
                  <div className="mt-6 pt-6 border-t border-zinc-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                      Core Program Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {prog.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start text-xs sm:text-sm text-zinc-300">
                          <Check className="w-4 h-4 text-amber-400 mr-2 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400">
                    All programs include full facility & recovery lounge privileges.
                  </div>

                  <button
                    onClick={() => onOpenTrialModal(prog.title)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded-lg shadow-lg shadow-amber-400/20 transition active:scale-95 flex items-center justify-center shrink-0"
                  >
                    <span>{prog.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Consultation Banner */}
      <section className="py-16 bg-[#111319] border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
            UNSURE WHICH PROGRAM SUITS YOUR GOALS?
          </h3>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Book a complimentary 20-minute movement screening and fitness consultation with one of our master coaches.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenTrialModal('General Movement Screening')}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded-md shadow-xl transition active:scale-95"
            >
              Book Complimentary Movement Screening
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
