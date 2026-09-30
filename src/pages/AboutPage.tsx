import React from 'react';
import { PageId } from '../types';
import { gymInfo } from '../data/gymData';
import { 
  Shield, Check, Dumbbell, Award, Flame, 
  ArrowRight, Users, Sparkles, Clock, MapPin 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrialModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenTrialModal,
}) => {
  return (
    <div className="bg-[#0c0d10] text-zinc-300 min-h-screen">
      {/* Page Hero Header */}
      <section className="relative py-20 lg:py-28 bg-[#111319] border-b border-zinc-800">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-25">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2000&q=80"
            alt="Ironstone gym facility"
            className="w-full h-full object-cover filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111319] via-[#111319]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Shield className="w-4 h-4" />
            <span>Independent Athletic Club • Est. {gymInfo.establishedYear}</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white max-w-3xl leading-tight">
            FORGED OUT OF RESPECT FOR THE CRAFT OF TRAINING
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            We built Ironstone because we were tired of sanitized corporate gyms where chalk is banned, racks are occupied by people scrolling phones, and equipment is chosen for marketing rather than biomechanics.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: 2-image collage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
                alt="Olympic Lifting Platform"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-zinc-800 h-48">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80"
                  alt="Recovery Suite"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-zinc-800 h-48 bg-[#161822] p-6 flex flex-col justify-center">
                <span className="font-heading text-3xl font-extrabold text-amber-400">18,000</span>
                <span className="text-xs uppercase font-bold text-white mt-1 tracking-wider">
                  Square Feet of Pure Athletic Focus
                </span>
              </div>
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block">
              Our Journey & Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white tracking-wide">
              NO CORPORATE GIMMICKS. NO BULLSHIT. JUST HEAVY METAL & HARD WORK.
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              When Ironstone opened its doors in {gymInfo.establishedYear} inside Austin's industrial warehouse district, our goal was uncomplicated: assemble the finest training implements on earth under one high-ceiling roof, install competition-grade sound and air quality systems, and welcome anyone who takes their health and strength seriously.
            </p>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Whether you are an Olympic weightlifter chasing a personal record, a collegiate athlete preparing for training camp, or a 45-year-old mother building bone density and cardiovascular grit, our floor is your sanctuary. There are no cameras in your face, no aggressive sales reps calling your cell phone, and no overcrowded lines for a squat rack.
            </p>

            <div className="pt-4 border-t border-zinc-800 flex items-center space-x-6">
              <div>
                <span className="font-heading text-xl font-bold text-white block">Marcus Sterling</span>
                <span className="text-xs text-zinc-400">Founder & Head Coach</span>
              </div>
              <div className="h-8 w-px bg-zinc-800" />
              <div>
                <span className="font-heading text-xl font-bold text-amber-400 block">Austin, Texas</span>
                <span className="text-xs text-zinc-400">Independent Since 2018</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-20 bg-[#12141a] border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
              Our Guiding Standards
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
              THE 4 IRONSTONE PILLARS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#161822] border border-zinc-800 p-6 rounded-xl space-y-3">
              <div className="w-12 h-12 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center font-heading text-xl font-bold">
                01
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                Hardware Over Hype
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We spend our capital on calibrated steel, Swedish Eleiko barbells, and custom-angled Arsenal strength machinery rather than superficial decor.
              </p>
            </div>

            <div className="bg-[#161822] border border-zinc-800 p-6 rounded-xl space-y-3">
              <div className="w-12 h-12 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center font-heading text-xl font-bold">
                02
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                Capped Membership
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We monitor our peak hourly floor density and cap active memberships. If you want to squat at 6:00 PM, you will have a rack.
              </p>
            </div>

            <div className="bg-[#161822] border border-zinc-800 p-6 rounded-xl space-y-3">
              <div className="w-12 h-12 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center font-heading text-xl font-bold">
                03
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                Credentials That Matter
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Every trainer holds collegiate strength certifications (CSCS), Olympic lifting credentials (USAW), or doctorate in physical therapy (DPT).
              </p>
            </div>

            <div className="bg-[#161822] border border-zinc-800 p-6 rounded-xl space-y-3">
              <div className="w-12 h-12 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center font-heading text-xl font-bold">
                04
              </div>
              <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                Respectful Culture
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Re-racking weights is mandatory. Excessive tripod photography that interferes with others is strictly banned. Focus is sacred.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour & Trial CTA Banner */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#161822] via-[#1a1e2b] to-[#161822] border border-zinc-800 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
              Experience It In Person
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
              COME SEE THE FACILITY WITH ZERO COMMITMENT
            </h3>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              We offer free facility orientations daily. Test the bars, check out the recovery lounge, and chat with a coach about your goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenTrialModal}
              className="w-full sm:w-auto px-7 py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded-md shadow-xl shadow-amber-400/20 transition active:scale-95 text-center"
            >
              Book Free Trial Pass
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold uppercase tracking-wider text-xs rounded-md border border-zinc-700 transition active:scale-95 text-center"
            >
              Get Directions & Hours
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
