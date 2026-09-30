import React, { useState } from 'react';
import { PageId } from '../../types';
import { membershipPlansData } from '../../data/gymData';
import { Check, X, ArrowRight, Sparkles, Shield } from 'lucide-react';

interface MembershipPreviewProps {
  onNavigate: (page: PageId) => void;
  onOpenTrialModal: (planName?: string) => void;
}

export const MembershipPreview: React.FC<MembershipPreviewProps> = ({
  onNavigate,
  onOpenTrialModal,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            Transparent Pricing • No Traps
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
            INVEST IN YOUR ATHLETIC POTENTIAL
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            Month-to-month flexibility. No surprise annual enhancement fees. No cancellation penalties.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition ${
                billingCycle === 'monthly'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition flex items-center space-x-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Annual Paid Upfront</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30">
                Save ~20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {membershipPlansData.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-200 ${
                  plan.isRecommended
                    ? 'bg-[#151824] border-2 border-amber-400 shadow-2xl shadow-amber-400/10 lg:-translate-y-2'
                    : 'bg-[#13151d] border border-zinc-800 hover:border-zinc-700'
                } p-7 sm:p-8`}
              >
                {/* Recommended Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-black font-extrabold text-[11px] uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center space-x-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-zinc-800 flex items-baseline">
                    <span className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      ${price}
                    </span>
                    <span className="text-zinc-400 text-xs sm:text-sm font-medium ml-2">
                      / month {billingCycle === 'annual' ? '(billed annually)' : ''}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                      What's Included:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-amber-400 mr-2.5 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {/* Excluded features for lower plans */}
                    {plan.excludedFeatures?.map((ex, i) => (
                      <div key={`ex-${i}`} className="flex items-start text-xs text-zinc-600">
                        <X className="w-4 h-4 text-zinc-700 mr-2.5 shrink-0 mt-0.5" />
                        <span className="line-through">{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <button
                    id={`membership-cta-${plan.id}`}
                    onClick={() => onOpenTrialModal(plan.name)}
                    className={`w-full py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 active:scale-98 flex items-center justify-center ${
                      plan.isRecommended
                        ? 'bg-amber-400 hover:bg-amber-300 text-black shadow-lg shadow-amber-400/20'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center mt-2.5">
                    Includes 30-day money-back satisfaction guarantee
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Page Link */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onNavigate('membership')}
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 underline decoration-amber-500/40 underline-offset-4"
          >
            <span>View Full Membership Comparison, Perks & Corporate Rates →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
