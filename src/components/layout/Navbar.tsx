import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { gymInfo } from '../../data/gymData';
import { Menu, X, Phone, Clock, MapPin, ChevronRight, Shield } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenTrialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenTrialModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change or ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'trainers', label: 'Trainers' },
    { id: 'membership', label: 'Membership' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#14161d] border-b border-zinc-800 text-xs text-zinc-400 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center text-amber-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
              Open Today: 5:00 AM – 11:00 PM
            </span>
            <span className="hidden md:inline-flex items-center text-zinc-400">
              <MapPin className="w-3.5 h-3.5 mr-1 text-zinc-500" />
              {gymInfo.address.city}, {gymInfo.address.state}
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <a
              href={`tel:${gymInfo.contact.phone}`}
              className="hover:text-amber-400 transition-colors inline-flex items-center"
            >
              <Phone className="w-3 h-3 mr-1.5 text-amber-500" />
              {gymInfo.contact.displayPhone}
            </a>
            <button
              onClick={onOpenTrialModal}
              className="text-amber-400 hover:text-amber-300 font-semibold transition-colors underline decoration-amber-500/50 underline-offset-2"
            >
              Claim 1-Day Free Pass →
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-colors duration-200 border-b ${
          scrolled
            ? 'bg-[#0e1015]/95 backdrop-blur-md border-zinc-800/80 shadow-xl shadow-black/40'
            : 'bg-[#0e1015] border-zinc-800/60'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 text-left group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded-lg p-1"
            >
              <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                <Shield className="w-6 h-6 text-black fill-black" />
              </div>
              <div>
                <span className="font-heading text-2xl font-bold tracking-wider text-white uppercase block leading-none">
                  IRONSTONE
                </span>
                <span className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase font-semibold block mt-1">
                  ATHLETIC CLUB
                </span>
              </div>
            </button>

            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors relative rounded-md ${
                      isActive
                        ? 'text-amber-400'
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                id="header-free-trial-btn"
                onClick={onOpenTrialModal}
                className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white border border-zinc-700 hover:border-zinc-500 bg-zinc-900/80 hover:bg-zinc-800 rounded-md transition-all duration-150 active:scale-95"
              >
                Free Trial
              </button>
              <button
                id="header-join-now-btn"
                onClick={() => handleNavClick('membership')}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-md shadow-md shadow-amber-400/20 transition-all duration-150 active:scale-95 flex items-center group"
              >
                <span>Join Now</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={onOpenTrialModal}
                className="sm:hidden px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 rounded transition"
              >
                Free Pass
              </button>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-zinc-800 bg-[#0e1015] px-4 pt-3 pb-6 shadow-2xl transition-all">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold tracking-wide text-left ${
                      isActive
                        ? 'bg-amber-400/10 text-amber-400 border-l-4 border-amber-400 pl-3'
                        : 'text-zinc-200 hover:bg-zinc-800/60 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-500" />
                  </button>
                );
              })}
            </div>

            {/* Mobile CTAs */}
            <div className="mt-6 pt-4 border-t border-zinc-800/80 space-y-3">
              <button
                id="mobile-cta-trial"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-white border border-zinc-700 bg-zinc-800 rounded-lg active:scale-98 transition"
              >
                Book a Free Trial Pass
              </button>
              <button
                id="mobile-cta-join"
                onClick={() => handleNavClick('membership')}
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-400/20 active:scale-98 transition"
              >
                Join Now – View Plans
              </button>
            </div>

            {/* Mobile Contact Quick Links */}
            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs text-zinc-400 space-y-2">
              <div className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-2 text-zinc-500" />
                <span>Mon-Fri: 5am-11pm | Sat: 6am-9pm | Sun: 7am-8pm</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-2 text-zinc-500" />
                <a href={`tel:${gymInfo.contact.phone}`} className="hover:text-amber-400">
                  {gymInfo.contact.displayPhone}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
