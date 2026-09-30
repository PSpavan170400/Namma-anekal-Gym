import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Target, CheckCircle2, Dumbbell, Sparkles } from 'lucide-react';
import { gymInfo } from '../../data/gymData';
import { TrialFormData } from '../../types';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  preselectedProgram,
}) => {
  const [formData, setFormData] = useState<TrialFormData>({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (6:00 AM – 9:00 AM)',
    fitnessGoal: preselectedProgram || 'Strength & Muscle Building',
    experienceLevel: 'Intermediate Lifter',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync preselected program if provided
  useEffect(() => {
    if (preselectedProgram) {
      setFormData((prev) => ({ ...prev, fitnessGoal: preselectedProgram }));
    }
  }, [preselectedProgram]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\-()\s]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a trial date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: 'Morning (6:00 AM – 9:00 AM)',
      fitnessGoal: 'Strength & Muscle Building',
      experienceLevel: 'Intermediate Lifter',
      notes: '',
    });
    setErrors({});
    onClose();
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="trial-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-[#12141a] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 py-2 px-6 flex items-center justify-between text-black font-bold text-xs uppercase tracking-widest">
          <span className="flex items-center">
            <Sparkles className="w-4 h-4 mr-1.5" />
            1-Day VIP Pass + InBody Body Composition Scan
          </span>
          <span className="bg-black text-amber-400 px-2 py-0.5 rounded text-[10px] font-extrabold">
            $0 NO COMMITMENT
          </span>
        </div>

        {/* Close Button */}
        <button
          id="close-trial-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                YOUR VIP PASS IS CONFIRMED!
              </h3>
              <p className="text-sm text-zinc-300 mt-2 max-w-md mx-auto">
                Welcome, <span className="font-semibold text-white">{formData.name}</span>. We've reserved your pass for{' '}
                <span className="text-amber-400 font-semibold">{formData.preferredDate}</span> ({formData.preferredTime}).
              </p>
            </div>

            <div className="bg-zinc-900/90 border border-zinc-800 rounded-lg p-4 text-left text-xs text-zinc-300 space-y-2">
              <div className="flex items-center text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                <Dumbbell className="w-4 h-4 mr-1.5" />
                What to bring on your trial day:
              </div>
              <ul className="list-disc list-inside space-y-1 text-zinc-400 pl-1">
                <li>Valid government photo ID for security check-in</li>
                <li>Clean athletic shoes and workout attire</li>
                <li>Locker room towel & chilled water provided complimentary</li>
                <li>Front desk check-in: 410 Ironworks Blvd, Austin</li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                id="trial-success-done-btn"
                onClick={handleReset}
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded-lg transition shadow-lg shadow-amber-400/20"
              >
                Done – See You On The Turf
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h2
                id="trial-modal-title"
                className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white"
              >
                CLAIM YOUR FREE TRIAL PASS
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Train on our floor, test the equipment, and meet our coaches. No hard sales, guaranteed.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  id="trial-name-input"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3.5 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
                    errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-zinc-700'
                  }`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="trial-phone-input"
                    required
                    placeholder="(512) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
                      errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-zinc-700'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="trial-email-input"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
                      errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-zinc-700'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Preferred Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Preferred Date <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="trial-date-input"
                      required
                      min={today}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-zinc-900 border rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
                        errors.preferredDate ? 'border-red-500 ring-1 ring-red-500' : 'border-zinc-700'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-red-400 text-xs mt-1">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    id="trial-time-select"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Early Morning (5:00 AM – 7:30 AM)">Early Morning (5:00 AM – 7:30 AM)</option>
                    <option value="Morning (7:30 AM – 10:30 AM)">Morning (7:30 AM – 10:30 AM)</option>
                    <option value="Mid-Day (11:00 AM – 2:00 PM)">Mid-Day (11:00 AM – 2:00 PM)</option>
                    <option value="Afternoon Peak (4:00 PM – 7:00 PM)">Afternoon Peak (4:00 PM – 7:00 PM)</option>
                    <option value="Evening (7:00 PM – 10:00 PM)">Evening (7:00 PM – 10:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Fitness Goal */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Primary Fitness Goal
                </label>
                <select
                  id="trial-goal-select"
                  value={formData.fitnessGoal}
                  onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="Strength & Powerlifting">Strength & Powerlifting (Compound Lifts)</option>
                  <option value="Hypertrophy & Physique Building">Hypertrophy & Physique Building</option>
                  <option value="Metabolic Conditioning & Fat Loss">Metabolic Conditioning & Fat Loss</option>
                  <option value="Functional Turf & Athletic Performance">Functional Turf & Athletic Agility</option>
                  <option value="Personal Training Coaching">1-on-1 Personal Training Coaching</option>
                  <option value="General Health, Wellness & Longevity">General Health, Wellness & Longevity</option>
                </select>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-trial-form-btn"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded-lg transition-all duration-150 shadow-lg shadow-amber-400/20 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                      Reserving Your Pass...
                    </span>
                  ) : (
                    'Confirm & Activate Free Trial Pass'
                  )}
                </button>
                <p className="text-[11px] text-zinc-500 text-center mt-2">
                  No credit card required. Pass valid for 1 day within 14 days of booking.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
