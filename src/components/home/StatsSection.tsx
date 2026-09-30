import React from 'react';
import { gymInfo } from '../../data/gymData';
import { Building2, Users2, Trophy, Target } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const statIcons = [
    <Building2 key="b" className="w-6 h-6 text-amber-400" />,
    <Users2 key="u" className="w-6 h-6 text-amber-400" />,
    <Trophy key="t" className="w-6 h-6 text-amber-400" />,
    <Target key="tg" className="w-6 h-6 text-amber-400" />,
  ];

  return (
    <section className="bg-[#12141a] border-y border-zinc-800/80 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80">
          {gymInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center md:items-start text-center md:text-left ${
                idx > 0 ? 'pt-6 md:pt-0 md:pl-8' : ''
              }`}
            >
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 mb-3">
                {statIcons[idx]}
              </div>
              <div className="flex items-baseline space-x-1">
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-amber-400 font-heading text-xl font-bold">
                    {stat.unit}
                  </span>
                )}
              </div>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide mt-1 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
