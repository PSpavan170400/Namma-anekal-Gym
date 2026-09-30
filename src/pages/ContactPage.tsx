import React, { useState } from 'react';
import { PageId, ContactFormData, TrialFormData } from '../types';
import { gymInfo } from '../data/gymData';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  Send, CheckCircle2, Navigation, AlertCircle, 
  Instagram, Facebook, Youtube, Twitter, Sparkles, Car, Bike, Shield 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrialModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenTrialModal,
}) => {
  // Tabs for which form is shown (or side-by-side / toggled)
  const [activeFormTab, setActiveFormTab] = useState<'trial' | 'contact'>('trial');

  // Contact Form State
  const [contactData, setContactData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    subject: 'Membership Inquiry',
    message: '',
  });
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  // Free Trial Form State
  const today = new Date().toISOString().split('T')[0];
  const [trialData, setTrialData] = useState<TrialFormData>({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (7:30 AM – 10:30 AM)',
    fitnessGoal: 'Strength & Powerlifting',
    experienceLevel: 'Intermediate Lifter',
    notes: '',
  });
  const [trialErrors, setTrialErrors] = useState<Record<string, string>>({});
  const [trialSubmitting, setTrialSubmitting] = useState(false);
  const [trialSuccess, setTrialSuccess] = useState(false);

  const whatsappUrl = `https://wa.me/${gymInfo.contact.whatsapp}?text=${encodeURIComponent(gymInfo.contact.whatsappMessage)}`;

  // Validate Contact Form
  const validateContact = () => {
    const errs: Record<string, string> = {};
    if (!contactData.name.trim()) errs.name = 'Full name is required';
    if (!contactData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!contactData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    if (!contactData.message.trim()) errs.message = 'Please provide a brief message';
    setContactErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateContact()) return;

    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
    }, 600);
  };

  // Validate Free Trial Form
  const validateTrial = () => {
    const errs: Record<string, string> = {};
    if (!trialData.name.trim()) errs.name = 'Full name is required';
    if (!trialData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\-()\s]{7,20}$/.test(trialData.phone)) {
      errs.phone = 'Valid phone number is required';
    }
    if (!trialData.preferredDate) errs.preferredDate = 'Please select a trial date';
    if (!trialData.preferredTime) errs.preferredTime = 'Select preferred time slot';
    setTrialErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateTrial()) return;

    setTrialSubmitting(true);
    setTimeout(() => {
      setTrialSubmitting(false);
      setTrialSuccess(true);
    }, 600);
  };

  return (
    <div className="bg-[#0c0d10] text-zinc-300 min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 bg-[#111319] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4" />
            <span>Facility Location & Enquiries</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white max-w-3xl leading-tight">
            CONNECT WITH IRONSTONE ATHLETIC CLUB
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            Whether booking a 1-day free trial pass, requesting a facility walkthrough, or inquiring about memberships, our team responds promptly.
          </p>
        </div>
      </section>

      {/* Main Grid: Info Cards + Interactive Forms */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Quick CTAs (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact & WhatsApp Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#181a24] to-[#12141a] border border-zinc-800 shadow-xl space-y-4">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block">
                Instant Chat Assistance
              </span>
              <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide">
                CHAT DIRECTLY WITH OUR DESK
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Have a quick question about current capacity, barbell specs, or parking? Message us on WhatsApp for rapid responses during operational hours.
              </p>

              <a
                id="contact-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-wider text-xs rounded-lg shadow-lg shadow-emerald-600/20 transition active:scale-98 flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat (+1 512-555-IRON)</span>
              </a>
            </div>

            {/* Address & Hours Cards */}
            <div className="bg-[#14161f] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-1.5" />
                  Physical Location
                </h4>
                <p className="text-sm font-semibold text-white">
                  {gymInfo.name}
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {gymInfo.address.street}
                </p>
                <p className="text-xs text-zinc-400">
                  {gymInfo.address.district}, {gymInfo.address.city}, {gymInfo.address.state} {gymInfo.address.zip}
                </p>
                <div className="mt-3 flex items-center space-x-4 text-xs">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 flex items-center"
                  >
                    <Navigation className="w-3.5 h-3.5 mr-1" />
                    Open Google Maps Directions
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center">
                  <Clock className="w-4 h-4 mr-1.5" />
                  Operating Hours
                </h4>
                <div className="space-y-2.5 text-xs">
                  {gymInfo.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-start pb-1.5 border-b border-zinc-800/60 last:border-0">
                      <div>
                        <span className="font-semibold text-white block">{h.days}</span>
                        <span className="text-[11px] text-zinc-500">{h.notes}</span>
                      </div>
                      <span className="text-amber-400 font-mono font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800 space-y-2 text-xs">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-amber-400 mr-2 shrink-0" />
                  <span className="text-zinc-400 mr-1.5">Phone:</span>
                  <a href={`tel:${gymInfo.contact.phone}`} className="text-white hover:text-amber-400 font-semibold">
                    {gymInfo.contact.displayPhone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-amber-400 mr-2 shrink-0" />
                  <span className="text-zinc-400 mr-1.5">Email:</span>
                  <a href={`mailto:${gymInfo.contact.email}`} className="text-white hover:text-amber-400 font-semibold">
                    {gymInfo.contact.email}
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-zinc-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-3">
                  Follow Our Athletes & Events:
                </span>
                <div className="flex items-center space-x-3">
                  <a
                    href={gymInfo.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-400/40 transition"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={gymInfo.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-400/40 transition"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={gymInfo.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-400/40 transition"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href={gymInfo.socials.x}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-400/40 transition"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Forms with Tabs (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#14161f] border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
              {/* Form Mode Selector */}
              <div className="flex rounded-lg bg-zinc-900 border border-zinc-800 p-1 mb-8">
                <button
                  type="button"
                  id="tab-free-trial-form"
                  onClick={() => setActiveFormTab('trial')}
                  className={`flex-1 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition text-center ${
                    activeFormTab === 'trial'
                      ? 'bg-amber-400 text-black shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  ⚡ Book Free Trial Pass
                </button>
                <button
                  type="button"
                  id="tab-general-contact-form"
                  onClick={() => setActiveFormTab('contact')}
                  className={`flex-1 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition text-center ${
                    activeFormTab === 'contact'
                      ? 'bg-amber-400 text-black shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  General Message Form
                </button>
              </div>

              {/* TAB 1: FREE TRIAL FORM */}
              {activeFormTab === 'trial' && (
                <div>
                  {trialSuccess ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                        TRIAL PASS ACTIVATED!
                      </h3>
                      <p className="text-sm text-zinc-300 max-w-md mx-auto">
                        Thank you, <span className="text-white font-semibold">{trialData.name}</span>. Your complimentary pass is confirmed for{' '}
                        <span className="text-amber-400 font-semibold">{trialData.preferredDate}</span> ({trialData.preferredTime}).
                      </p>
                      <p className="text-xs text-zinc-500">
                        Check your phone ({trialData.phone}) for arrival confirmation and locker instructions.
                      </p>
                      <div className="pt-4">
                        <button
                          onClick={() => {
                            setTrialSuccess(false);
                            setTrialData({
                              name: '',
                              phone: '',
                              email: '',
                              preferredDate: '',
                              preferredTime: 'Morning (7:30 AM – 10:30 AM)',
                              fitnessGoal: 'Strength & Powerlifting',
                              experienceLevel: 'Intermediate Lifter',
                              notes: '',
                            });
                          }}
                          className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-xs font-bold uppercase tracking-wider text-white rounded-lg"
                        >
                          Book Another Date
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-6">
                        <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                          CLAIM YOUR 1-DAY COMPLIMENTARY TRIAL
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                          Test our bars, turf, and contrast recovery plunge with zero financial commitment.
                        </p>
                      </div>

                      <form onSubmit={handleTrialSubmit} className="space-y-4" noValidate>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                            Full Name <span className="text-amber-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Jordan Miller"
                            value={trialData.name}
                            onChange={(e) => setTrialData({ ...trialData, name: e.target.value })}
                            className={`w-full px-3.5 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
                              trialErrors.name ? 'border-red-500' : 'border-zinc-700'
                            }`}
                          />
                          {trialErrors.name && (
                            <p className="text-red-400 text-xs mt-1">{trialErrors.name}</p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                              Phone Number <span className="text-amber-400">*</span>
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="(512) 555-0188"
                              value={trialData.phone}
                              onChange={(e) => setTrialData({ ...trialData, phone: e.target.value })}
                              className={`w-full px-3.5 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
                                trialErrors.phone ? 'border-red-500' : 'border-zinc-700'
                              }`}
                            />
                            {trialErrors.phone && (
                              <p className="text-red-400 text-xs mt-1">{trialErrors.phone}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                              Preferred Date <span className="text-amber-400">*</span>
                            </label>
                            <input
                              type="date"
                              required
                              min={today}
                              value={trialData.preferredDate}
                              onChange={(e) => setTrialData({ ...trialData, preferredDate: e.target.value })}
                              className={`w-full px-3.5 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
                                trialErrors.preferredDate ? 'border-red-500' : 'border-zinc-700'
                              }`}
                            />
                            {trialErrors.preferredDate && (
                              <p className="text-red-400 text-xs mt-1">{trialErrors.preferredDate}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                              Preferred Time Slot
                            </label>
                            <select
                              value={trialData.preferredTime}
                              onChange={(e) => setTrialData({ ...trialData, preferredTime: e.target.value })}
                              className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                            >
                              <option value="Early Morning (5:00 AM – 7:30 AM)">Early Morning (5:00 AM – 7:30 AM)</option>
                              <option value="Morning (7:30 AM – 10:30 AM)">Morning (7:30 AM – 10:30 AM)</option>
                              <option value="Midday (11:00 AM – 2:00 PM)">Midday (11:00 AM – 2:00 PM)</option>
                              <option value="Afternoon Peak (4:00 PM – 7:00 PM)">Afternoon Peak (4:00 PM – 7:00 PM)</option>
                              <option value="Evening (7:00 PM – 10:00 PM)">Evening (7:00 PM – 10:00 PM)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                              Primary Fitness Goal
                            </label>
                            <select
                              value={trialData.fitnessGoal}
                              onChange={(e) => setTrialData({ ...trialData, fitnessGoal: e.target.value })}
                              className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                            >
                              <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                              <option value="Hypertrophy & Physique Building">Hypertrophy & Physique</option>
                              <option value="Metabolic Conditioning & Fat Loss">Metabolic Conditioning</option>
                              <option value="Functional Turf & Athletic Agility">Functional Turf & Agility</option>
                              <option value="Personal Training Coaching">1-on-1 Personal Training</option>
                              <option value="General Health & Wellness">General Health & Wellness</option>
                            </select>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={trialSubmitting}
                            className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded-lg transition shadow-lg shadow-amber-400/20 active:scale-98 disabled:opacity-50"
                          >
                            {trialSubmitting ? 'Reserving Trial Pass...' : 'Confirm Free Trial Pass'}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: GENERAL CONTACT FORM */}
              {activeFormTab === 'contact' && (
                <div>
                  {contactSuccess ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                        MESSAGE RECEIVED!
                      </h3>
                      <p className="text-sm text-zinc-300 max-w-md mx-auto">
                        Thank you, <span className="text-white font-semibold">{contactData.name}</span>. An Ironstone staff member will review your note and respond to{' '}
                        <span className="text-amber-400">{contactData.email}</span> within 4 business hours.
                      </p>
                      <div className="pt-4">
                        <button
                          onClick={() => {
                            setContactSuccess(false);
                            setContactData({
                              name: '',
                              phone: '',
                              email: '',
                              subject: 'Membership Inquiry',
                              message: '',
                            });
                          }}
                          className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-xs font-bold uppercase tracking-wider text-white rounded-lg"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-6">
                        <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                          SEND GENERAL ENQUIRY
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                          Have questions regarding group scheduling, corporate plans, or private personal training?
                        </p>
                      </div>

                      <form onSubmit={handleContactSubmit} className="space-y-4" noValidate>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                            Full Name <span className="text-amber-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Taylor Brooks"
                            value={contactData.name}
                            onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                            className={`w-full px-3.5 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
                              contactErrors.name ? 'border-red-500' : 'border-zinc-700'
                            }`}
                          />
                          {contactErrors.name && (
                            <p className="text-red-400 text-xs mt-1">{contactErrors.name}</p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                              Phone <span className="text-amber-400">*</span>
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="(512) 555-0144"
                              value={contactData.phone}
                              onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                              className={`w-full px-3.5 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
                                contactErrors.phone ? 'border-red-500' : 'border-zinc-700'
                              }`}
                            />
                            {contactErrors.phone && (
                              <p className="text-red-400 text-xs mt-1">{contactErrors.phone}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                              Email Address <span className="text-amber-400">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="taylor@example.com"
                              value={contactData.email}
                              onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                              className={`w-full px-3.5 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
                                contactErrors.email ? 'border-red-500' : 'border-zinc-700'
                              }`}
                            />
                            {contactErrors.email && (
                              <p className="text-red-400 text-xs mt-1">{contactErrors.email}</p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                            Subject
                          </label>
                          <input
                            type="text"
                            required
                            value={contactData.subject}
                            onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                            Message <span className="text-amber-400">*</span>
                          </label>
                          <textarea
                            rows={4}
                            required
                            placeholder="Tell us about your fitness background, equipment interests, or questions..."
                            value={contactData.message}
                            onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                            className={`w-full px-3.5 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
                              contactErrors.message ? 'border-red-500' : 'border-zinc-700'
                            }`}
                          />
                          {contactErrors.message && (
                            <p className="text-red-400 text-xs mt-1">{contactErrors.message}</p>
                          )}
                        </div>

                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={contactSubmitting}
                            className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded-lg transition shadow-lg shadow-amber-400/20 active:scale-98 disabled:opacity-50 flex items-center justify-center space-x-2"
                          >
                            <Send className="w-3.5 h-3.5" />
                            <span>{contactSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Styled Interactive Map & Directions Section */}
      <section className="py-16 bg-[#111319] border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
              Facility Access & Parking
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase text-white tracking-wide">
              FINDING THE GYM
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Located in the East Austin Warehouse Arts District with ample free on-site parking.
            </p>
          </div>

          {/* Map Graphic / Interactive Placeholder */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#0e1015] shadow-2xl h-80 sm:h-96">
            {/* Custom stylized map graphic */}
            <div className="absolute inset-0 bg-[#161824] flex items-center justify-center overflow-hidden">
              {/* Grid Lines representing streets */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />
              
              {/* Stylized roads */}
              <div className="absolute top-1/2 left-0 right-0 h-4 bg-zinc-800/80 -translate-y-1/2" />
              <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-zinc-800/80" />
              <div className="absolute top-0 bottom-0 left-2/3 w-4 bg-zinc-800/80" />
              
              {/* Road labels */}
              <div className="absolute top-[48%] left-8 -translate-y-full text-[10px] uppercase font-bold tracking-widest text-zinc-500">
                Ironworks Boulevard
              </div>
              <div className="absolute top-8 left-[34%] text-[10px] uppercase font-bold tracking-widest text-zinc-500 rotate-90 origin-left">
                East 5th Street
              </div>

              {/* Gym Location Pin Callout */}
              <div className="relative z-10 p-5 rounded-xl bg-zinc-950/95 border-2 border-amber-400 shadow-2xl max-w-sm text-center">
                <div className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center mx-auto mb-2 shadow-lg shadow-amber-400/30 animate-bounce">
                  <MapPin className="w-5 h-5 fill-black" />
                </div>
                <h4 className="font-heading text-base font-bold uppercase text-white tracking-wide">
                  {gymInfo.name}
                </h4>
                <p className="text-xs text-zinc-300 mt-1">
                  {gymInfo.address.full}
                </p>
                <div className="mt-3 pt-3 border-t border-zinc-800 flex justify-center space-x-3">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-amber-400 text-black font-bold uppercase text-[10px] rounded hover:bg-amber-300 transition"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Transit & Parking Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-5 rounded-xl bg-[#14161f] border border-zinc-800 flex items-start space-x-3">
              <Car className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase text-white tracking-wide">85 Free Parking Stalls</h4>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Dedicated private parking lot directly in front of club entrance. No meters or parking passes needed.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#14161f] border border-zinc-800 flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase text-white tracking-wide">EV Charging Available</h4>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  4 Level-2 EV charging stalls complimentary for active members during workout sessions.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#14161f] border border-zinc-800 flex items-start space-x-3">
              <Bike className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase text-white tracking-wide">Covered Bike Racks</h4>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Secure covered bicycle parking monitored 24/7 by club security cameras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
