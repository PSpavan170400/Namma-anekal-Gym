import React, { useState } from 'react';
import { PageId, Trainer } from '../types';
import { trainersData } from '../data/gymData';
import { Award, Clock, Sparkles, ChevronRight, MessageSquare, Quote } from 'lucide-react';

interface TrainersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrialModal: (trainerIntro?: string) => void;
}

export const TrainersPage: React.FC<TrainersPageProps> = ({
  onNavigate,
  onOpenTrialModal,
}) => {
  const [activeSpecialty, setActiveSpecialty] = useState<string>('all');

  const filteredTrainers = trainersData.filter((t) => {
    if (activeSpecialty === 'all') return true;
    if (activeSpecialty === 'strength') return t.id === 'marcus-sterling' || t.id === 'david-chen';
    if (activeSpecialty === 'olympic') return t.id === 'elena-rostova';
    if (activeSpecialty === 'functional') return t.id === 'maya-almansoor' || t.id === 'jordan-blake';
    if (activeSpecialty === 'rehab') return t.id === 'sarah-jenkins';
    return true;
  });

  return (
    <div className="bg-[#0c0d10] text-zinc-300 min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 bg-[#111319] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-4 h-4" />
            <span>Master Coaching Roster</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white max-w-3xl leading-tight">
            MEET THE COACHES DEDICATED TO YOUR PROGRESS
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            Every coach at Ironstone is career-focused, insured, and verified. They don't stand around staring at clipboards—they actively cue barbell path, balance, and muscular engagement.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSpecialty('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                activeSpecialty === 'all'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              All Coaches ({trainersData.length})
            </button>
            <button
              onClick={() => setActiveSpecialty('strength')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                activeSpecialty === 'strength'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Barbell & Hypertrophy
            </button>
            <button
              onClick={() => setActiveSpecialty('olympic')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                activeSpecialty === 'olympic'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Olympic Weightlifting & Mobility
            </button>
            <button
              onClick={() => setActiveSpecialty('functional')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                activeSpecialty === 'functional'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Turf, Combat & Conditioning
            </button>
            <button
              onClick={() => setActiveSpecialty('rehab')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                activeSpecialty === 'rehab'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Physical Therapy & Return-to-Sport
            </button>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-[#14161f] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo & Overlay Header */}
              <div className="relative h-96 overflow-hidden bg-zinc-950">
                <img
                  src={trainer.photo}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14161f] via-[#14161f]/30 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-amber-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded border border-zinc-700">
                  {trainer.experience}
                </div>

                {/* Name & Role Banner */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">
                    {trainer.specialization}
                  </span>
                  <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-zinc-400">{trainer.role}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* Quote */}
                  {trainer.quote && (
                    <div className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800/80 mb-4 text-xs italic text-zinc-300 flex items-start">
                      <Quote className="w-4 h-4 text-amber-400 mr-2 shrink-0 opacity-80" />
                      <span>"{trainer.quote}"</span>
                    </div>
                  )}

                  {/* Biography */}
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Biography & Background:
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {trainer.biography}
                  </p>

                  {/* Certifications List */}
                  <div className="mt-4 pt-4 border-t border-zinc-800">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Verified Credentials:
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.certifications.map((cert, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-zinc-900 text-amber-400/90 border border-zinc-800 px-2.5 py-1 rounded font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Focus Specialties */}
                  <div className="mt-4 pt-3 border-t border-zinc-800/60">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Specialized Focus Areas:
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-zinc-800/60 text-zinc-300 px-2 py-0.5 rounded"
                        >
                          • {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-zinc-800">
                  <button
                    id={`book-coach-${trainer.id}`}
                    onClick={() => onOpenTrialModal(`Intro Coaching Session with ${trainer.name}`)}
                    className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded-lg transition shadow-md shadow-amber-400/20 active:scale-98 flex items-center justify-center"
                  >
                    <span>Request Intro with {trainer.name.split(' ')[0]}</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Joining CTA */}
      <section className="py-16 bg-[#111319] border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
            LOOKING FOR A COMPREHENSIVE 12-WEEK COACHING PLAN?
          </h3>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Our coaching intake includes a thorough movement evaluation, macronutrient prescription, and biometric body scan before your first session.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenTrialModal('Comprehensive 12-Week Coaching Intake')}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded-md shadow-xl transition active:scale-95"
            >
              Inquire About Private Coaching Packages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
