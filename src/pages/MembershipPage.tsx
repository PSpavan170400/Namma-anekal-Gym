import React, { useState } from 'react';
import { PageId } from '../types';
import { membershipPlansData } from '../data/gymData';
import { Check, X, Sparkles, Shield, ArrowRight, HelpCircle } from 'lucide-react';

interface MembershipPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTrialModal: (planName?: string) => void;
}

export const MembershipPage: React.FC<MembershipPageProps> = ({
  onNavigate,
  onOpenTrialModal,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const comparisonFeatures = [
    { name: "Unrestricted Free Weights & Power Racks", basic: true, standard: true, premium: true },
    { name: "Cardio & Metabolic Floor Access", basic: true, standard: true, premium: true },
    { name: "Locker Rooms & Rain Showers", basic: true, standard: true, premium: true },
    { name: "Initial InBody 770 Body Scan", basic: true, standard: true, premium: true },
    { name: "Indoor Turf & Sled Track Privileges", basic: false, standard: true, premium: true },
    { name: "Unlimited Group & Squad Classes", basic: false, standard: true, premium: true },
    { name: "Infrared Cedar Saunas", basic: false, standard: true, premium: true },
    { name: "Cold Plunge Immersion Therapy", basic: false, standard: false, premium: true },
    { name: "24/7 Biometric Keyfob Access", basic: false, standard: false, premium: true },
    { name: "Free Monthly Guest Passes", basic: "None", standard: "2 passes/mo", premium: "4 passes/mo" },
    { name: "Private Reserved Executive Locker", basic: false, standard: false, premium: true },
    { name: "Monthly 1-on-1 Coaching Check-in", basic: false, standard: false, premium: true },
  ];

  return (
    <div className="bg-[#0c0d10] text-zinc-300 min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-28 bg-[#111319] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Shield className="w-4 h-4" />
            <span>Independent Club Memberships</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white max-w-3xl mx-auto leading-tight">
            NO CONTRACTS. NO HIDDEN FEES. JUST SERIOUS TRAINING.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Choose the level of access that aligns with your athletic goals. All memberships operate on straightforward month-to-month terms with zero cancellation penalties.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition ${
                billingCycle === 'monthly'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Month-to-Month
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition flex items-center space-x-2 ${
                billingCycle === 'annual'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Annual Paid Upfront</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                } p-8`}
              >
                {/* Recommended Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-black font-extrabold text-[11px] uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-white">
                    {plan.name}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mt-1 mb-6 min-h-[36px]">
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

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                      Plan Inclusions:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-amber-400 mr-2.5 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {plan.excludedFeatures?.map((ex, i) => (
                      <div key={`ex-${i}`} className="flex items-start text-xs text-zinc-600">
                        <X className="w-4 h-4 text-zinc-700 mr-2.5 shrink-0 mt-0.5" />
                        <span className="line-through">{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <button
                    onClick={() => onOpenTrialModal(`Sign up for ${plan.name} Plan`)}
                    className={`w-full py-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 active:scale-98 flex items-center justify-center ${
                      plan.isRecommended
                        ? 'bg-amber-400 hover:bg-amber-300 text-black shadow-lg shadow-amber-400/20'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center mt-2.5">
                    Placeholder rate • Finalizes at club desk
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-[#111319] border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
              Side-by-Side Comparison
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
              COMPARE MEMBERSHIP TIERS
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-[#14161f] shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/60">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-zinc-400 w-2/5">
                    Feature / Privilege
                  </th>
                  <th className="py-4 px-4 text-center text-xs font-bold uppercase tracking-wider text-white w-1/5">
                    Basic
                  </th>
                  <th className="py-4 px-4 text-center text-xs font-bold uppercase tracking-wider text-amber-400 w-1/5 bg-amber-400/10 border-x border-amber-400/20">
                    Standard (Recommended)
                  </th>
                  <th className="py-4 px-4 text-center text-xs font-bold uppercase tracking-wider text-white w-1/5">
                    Premium VIP
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-xs">
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="py-4 px-6 font-medium text-zinc-200">
                      {row.name}
                    </td>

                    {/* Basic */}
                    <td className="py-4 px-4 text-center">
                      {typeof row.basic === 'boolean' ? (
                        row.basic ? (
                          <Check className="w-4 h-4 text-amber-400 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-zinc-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-zinc-400">{row.basic}</span>
                      )}
                    </td>

                    {/* Standard */}
                    <td className="py-4 px-4 text-center bg-amber-400/5 border-x border-amber-400/20">
                      {typeof row.standard === 'boolean' ? (
                        row.standard ? (
                          <Check className="w-4 h-4 text-amber-400 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-zinc-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-amber-300 font-semibold">{row.standard}</span>
                      )}
                    </td>

                    {/* Premium */}
                    <td className="py-4 px-4 text-center">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? (
                          <Check className="w-4 h-4 text-amber-400 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-zinc-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-white font-semibold">{row.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Discounts & Free Trial Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block">
              Honoring Our Community
            </span>
            <h3 className="font-heading text-xl font-bold uppercase text-white">
              Military, First Responder & Student Discounts
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              We offer 15% ongoing monthly dues reductions for active duty military, veterans, first responders (police, fire, EMT), and local Austin students with valid ID.
            </p>
            <button
              onClick={() => onOpenTrialModal('Military / Student Rate Verification')}
              className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 underline underline-offset-4 pt-2"
            >
              Verify Eligibility at Front Desk →
            </button>
          </div>

          <div className="p-8 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block">
              Test Before Committing
            </span>
            <h3 className="font-heading text-xl font-bold uppercase text-white">
              Still Deciding? Experience A Free Day
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Every prospective athlete is invited to spend a full day testing the bars, turf, and recovery amenities. No sales pressure, ever.
            </p>
            <button
              onClick={() => onOpenTrialModal('General Free Trial Pass')}
              className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 underline underline-offset-4 pt-2"
            >
              Claim Your 1-Day Pass Now →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
