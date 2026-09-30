import React from 'react';
import { PageId } from '../../types';
import { gymInfo, programsData } from '../../data/gymData';
import { 
  Shield, Phone, Mail, MapPin, Clock, 
  Instagram, Facebook, Youtube, Twitter, 
  MessageSquare, ArrowUpRight, CheckCircle2 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenTrialModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTrialModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${gymInfo.contact.whatsapp}?text=${encodeURIComponent(gymInfo.contact.whatsappMessage)}`;

  return (
    <footer className="bg-[#090a0d] border-t border-zinc-800/80 text-zinc-300">
      {/* Top Banner Callout */}
      <div className="border-b border-zinc-800/60 bg-gradient-to-r from-zinc-950 via-[#12141a] to-zinc-950 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">
              Ready to elevate your training?
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase">
              CLAIM YOUR 1-DAY VIP PASS & FACILITY TOUR
            </h3>
            <p className="text-sm text-zinc-400 mt-1 max-w-xl">
              Experience the equipment, culture, and amenities without commitment. Zero sales pressure.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              id="footer-trial-cta-btn"
              onClick={onOpenTrialModal}
              className="w-full sm:w-auto px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded-md shadow-lg shadow-amber-400/20 transition-all duration-150 active:scale-95 text-center"
            >
              Book Free Trial Now
            </button>
            <a
              id="footer-whatsapp-cta-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 bg-emerald-700/80 hover:bg-emerald-600 text-white font-bold uppercase tracking-wider text-xs rounded-md border border-emerald-500/40 transition-all duration-150 active:scale-95 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center text-black">
                <Shield className="w-6 h-6 fill-black" />
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-wider text-white uppercase block leading-none">
                  IRONSTONE
                </span>
                <span className="text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-semibold block mt-1">
                  ATHLETIC CLUB
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed pr-4">
              An independent, community-driven athletic club engineered for dedicated trainees, powerlifters, and everyday athletes. We invest in competition-grade iron, pristine recovery, and real coaching.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mr-2 shrink-0" />
                <span>Locally owned & independent since {gymInfo.establishedYear}</span>
              </div>
              <div className="flex items-center text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mr-2 shrink-0" />
                <span>No hidden fees, no hard-sell contracts</span>
              </div>
              <div className="flex items-center text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mr-2 shrink-0" />
                <span>18,000 sq. ft. of calibrated equipment</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-3 flex items-center space-x-3">
              <a
                href={gymInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-400/40 transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={gymInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-400/40 transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={gymInfo.socials.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-400/40 transition"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={gymInfo.socials.x}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-400/40 transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-sm uppercase tracking-wider text-white font-bold border-l-2 border-amber-400 pl-2.5">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-zinc-400 hover:text-white transition flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-zinc-400 hover:text-white transition flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">About Our Gym</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programs')}
                  className="text-zinc-400 hover:text-white transition flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Training Programs</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('trainers')}
                  className="text-zinc-400 hover:text-white transition flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Our Coaches</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('membership')}
                  className="text-zinc-400 hover:text-white transition flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Memberships</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="text-zinc-400 hover:text-white transition flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Facility Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-zinc-400 hover:text-white transition flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Location & Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Training Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm uppercase tracking-wider text-white font-bold border-l-2 border-amber-400 pl-2.5">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-sm">
              {programsData.map((prog) => (
                <li key={prog.id}>
                  <button
                    onClick={() => handleNav('programs')}
                    className="text-zinc-400 hover:text-white text-left transition flex items-center justify-between w-full group py-0.5"
                  >
                    <span className="group-hover:text-amber-400 transition-colors">
                      {prog.title}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hours & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm uppercase tracking-wider text-white font-bold border-l-2 border-amber-400 pl-2.5">
              Hours & Access
            </h4>

            <div className="space-y-2 text-xs text-zinc-400">
              {gymInfo.hours.map((h, i) => (
                <div key={i} className="border-b border-zinc-800/80 pb-2">
                  <div className="flex justify-between font-semibold text-zinc-200">
                    <span>{h.days}</span>
                    <span className="text-amber-400">{h.time}</span>
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{h.notes}</div>
                </div>
              ))}
            </div>

            <div className="pt-2 space-y-2 text-xs text-zinc-300">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-amber-500 mr-2 shrink-0 mt-0.5" />
                <span>{gymInfo.address.full}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-amber-500 mr-2 shrink-0" />
                <a href={`tel:${gymInfo.contact.phone}`} className="hover:text-amber-400 transition">
                  {gymInfo.contact.displayPhone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-amber-500 mr-2 shrink-0" />
                <a href={`mailto:${gymInfo.contact.email}`} className="hover:text-amber-400 transition">
                  {gymInfo.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800/80 bg-black/60 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} {gymInfo.name}. All rights reserved. Independent athletic facility.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => handleNav('contact')} className="hover:text-zinc-400 transition">
              Privacy Policy
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-zinc-400 transition">
              Terms & Safety Waiver
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-zinc-400 transition">
              Staff & Careers
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
