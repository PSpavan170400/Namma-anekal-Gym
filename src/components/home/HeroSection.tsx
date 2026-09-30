import React from 'react';
import { PageId } from '../../types';
import { gymInfo } from '../../data/gymData';
import { Shield, ChevronRight, Star, Award, Flame, Play } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenTrialModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenTrialModal,
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0c10]">
      {/* High Quality Fitness Background with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="Ironstone Athletic Club weight room floor"
          className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-[#0c0d10]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d10]/90 via-[#0c0d10]/60 to-[#0c0d10]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-start">
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-400/40 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-black/60">
          <Flame className="w-3.5 h-3.5 fill-amber-400" />
          <span>Independent Athletic Facility • Austin, Texas</span>
        </div>

        {/* Strong Athletic Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.05] max-w-4xl">
          THE INDEPENDENT STANDARD IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">STRENGTH & PERFORMANCE</span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed">
          {gymInfo.heroSubheadline}
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <button
            id="hero-join-now-btn"
            onClick={() => onNavigate('membership')}
            className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-sm rounded-md shadow-xl shadow-amber-400/25 transition-all duration-150 active:scale-95 flex items-center justify-center group"
          >
            <span>Join Now – View Plans</span>
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-free-trial-btn"
            onClick={onOpenTrialModal}
            className="px-8 py-4 bg-zinc-900/90 hover:bg-zinc-800 text-white hover:text-amber-400 font-bold uppercase tracking-wider text-sm rounded-md border border-zinc-700 hover:border-amber-400/50 shadow-xl transition-all duration-150 active:scale-95 flex items-center justify-center"
          >
            <span>Book a Free Trial Pass</span>
          </button>
        </div>

        {/* Social Proof Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800/80 w-full flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                alt="Member"
                className="w-10 h-10 rounded-full border-2 border-zinc-900 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt="Member"
                className="w-10 h-10 rounded-full border-2 border-zinc-900 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                alt="Member"
                className="w-10 h-10 rounded-full border-2 border-zinc-900 object-cover"
              />
            </div>
            <div>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs text-white font-bold ml-2">4.9 / 5.0</span>
              </div>
              <p className="text-xs text-zinc-400">Over 500+ active dedicated members</p>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-xs text-zinc-300">
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-amber-400 mr-2" />
              <span>No Annual Commitments</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 text-amber-400 mr-2" />
              <span>Certified CSCS Coaches</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
