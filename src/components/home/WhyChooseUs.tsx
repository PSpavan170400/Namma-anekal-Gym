import React from 'react';
import { whyChooseUsData } from '../../data/gymData';
import { ShieldCheck, Dumbbell, Users, Flame, Zap } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-amber-400" />;
      case 'Dumbbell':
        return <Dumbbell className="w-7 h-7 text-amber-400" />;
      case 'Users':
        return <Users className="w-7 h-7 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-7 h-7 text-amber-400" />;
      default:
        return <Zap className="w-7 h-7 text-amber-400" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#111319] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            The Ironstone Advantage
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
            WHY DEDICATED ATHLETES CHOOSE OUR CLUB
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            We operate with one single mission: creating the ultimate training environment for human physical performance.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#161822] border border-zinc-800 hover:border-amber-400/40 p-6 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-lg bg-zinc-900/90 border border-zinc-700/80 flex items-center justify-center mb-5 group-hover:border-amber-400/40 group-hover:bg-amber-400/10 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-heading text-lg font-bold uppercase text-white tracking-wide mb-2 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-800/80 flex items-center text-[11px] font-bold uppercase tracking-wider text-zinc-500 group-hover:text-amber-400 transition-colors">
                <span>Standard #{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
