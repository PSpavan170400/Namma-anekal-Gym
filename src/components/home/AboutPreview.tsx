import React from 'react';
import { PageId } from '../../types';
import { gymInfo } from '../../data/gymData';
import { ArrowRight, Check, Award, ShieldCheck, Dumbbell } from 'lucide-react';

interface AboutPreviewProps {
  onNavigate: (page: PageId) => void;
  onOpenTrialModal: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({
  onNavigate,
  onOpenTrialModal,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Imagery (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80"
                alt="Ironstone Athletic Club Facility"
                className="w-full h-[460px] object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating Stat Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-[#14161d]/90 backdrop-blur-md border border-zinc-700/80 shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-amber-400 font-heading text-2xl font-bold">100% INDEPENDENT</div>
                  <div className="text-xs text-zinc-300">Zero corporate shareholders</div>
                </div>
                <div className="w-10 h-10 rounded-md bg-amber-400/20 text-amber-400 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Accent border backdrop */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border-2 border-amber-400/20 rounded-xl -z-10" />
          </div>

          {/* Right Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Dumbbell className="w-3.5 h-3.5" />
              <span>About Ironstone Athletic Club</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              BUILT BY LIFTERS FOR TRAINEES WHO REFUSE COMPROMISE
            </h2>

            <p className="text-base text-zinc-300 leading-relaxed">
              Founded in {gymInfo.establishedYear}, {gymInfo.name} was born out of frustration with crowded corporate gym chains that prioritize volume sign-ups over actual athletic results. We designed an unapologetic strength environment where barbells are straight, chalk is encouraged, and members genuinely support each other's gains.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <div className="p-1 rounded bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Competition Grade</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Eleiko IWF bars and calibrated powerlifting plates.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <div className="p-1 rounded bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Strict Capacity Cap</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Never wait in line for a power rack or bench press.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <div className="p-1 rounded bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Certified Masters</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">CSCS, USAW, and DPT staff on the floor every single day.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <div className="p-1 rounded bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">Full Recovery Suite</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Infrared saunas and cold immersion plunge tubs.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-preview-read-story-btn"
                onClick={() => onNavigate('about')}
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded-md shadow-lg shadow-amber-400/20 transition-all duration-150 active:scale-95 flex items-center"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </button>

              <button
                id="about-preview-tour-btn"
                onClick={onOpenTrialModal}
                className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold uppercase tracking-wider text-xs rounded-md border border-zinc-700 transition"
              >
                Schedule Free Facility Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
