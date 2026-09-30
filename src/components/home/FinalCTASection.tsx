import React from 'react';
import { PageId } from '../../types';
import { gymInfo } from '../../data/gymData';
import { Shield, ChevronRight, Phone, MessageSquare, Flame } from 'lucide-react';

interface FinalCTASectionProps {
  onNavigate: (page: PageId) => void;
  onOpenTrialModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onNavigate,
  onOpenTrialModal,
}) => {
  const whatsappUrl = `https://wa.me/${gymInfo.contact.whatsapp}?text=${encodeURIComponent(gymInfo.contact.whatsappMessage)}`;

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0a0c10] border-t border-zinc-800">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=80"
          alt="Ironstone Athletic Club"
          className="w-full h-full object-cover filter brightness-30 contrast-120"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Flame className="w-3.5 h-3.5 fill-amber-400" />
          <span>Take The First Step</span>
        </div>

        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
          STOP WASTING TIME IN GENERIC GYMS. <br />
          <span className="text-amber-400">BUILD REAL STRENGTH WITH US.</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Claim your 1-day complimentary VIP pass. Experience competition-grade equipment, an uncrowded floor, and a community dedicated to genuine progress.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-cta-trial-btn"
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-sm rounded-md shadow-2xl shadow-amber-400/30 transition-all duration-150 active:scale-95"
          >
            Claim Your Free VIP Pass
          </button>

          <button
            id="final-cta-join-btn"
            onClick={() => onNavigate('membership')}
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900/90 hover:bg-zinc-800 text-white hover:text-amber-400 font-bold uppercase tracking-wider text-sm rounded-md border border-zinc-700 hover:border-amber-400/50 transition-all duration-150 active:scale-95 flex items-center justify-center"
          >
            <span>View Membership Tiers</span>
            <ChevronRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>

        {/* Direct Connect Pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <a
            href={`tel:${gymInfo.contact.phone}`}
            className="flex items-center hover:text-white transition"
          >
            <Phone className="w-4 h-4 mr-2 text-amber-400" />
            <span>Call us directly: {gymInfo.contact.displayPhone}</span>
          </a>

          <span className="hidden sm:inline text-zinc-700">•</span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-emerald-400 hover:text-emerald-300 transition"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            <span>Chat directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
