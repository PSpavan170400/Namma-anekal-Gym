import React from 'react';
import { testimonialsData } from '../../data/gymData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            Real Member Experiences
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
            PROVEN RESULTS ON THE FLOOR
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            From powerlifting personal records to lifetime health transformations, hear directly from the people who lift here.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#14161f] border border-zinc-800 rounded-xl p-7 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition shadow-xl relative"
            >
              <Quote className="w-8 h-8 text-amber-400/20 absolute top-6 right-6" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>

                {/* Milestone Badge */}
                <div className="bg-amber-400/10 border border-amber-400/20 rounded-lg px-3 py-2 text-xs text-amber-300 font-semibold mb-6 flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mr-2 shrink-0" />
                  <span>{item.achievement}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center space-x-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-zinc-700"
                />
                <div>
                  <h4 className="font-heading text-base font-bold uppercase text-white tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-400">{item.role}</p>
                  <p className="text-[10px] text-zinc-500">{item.memberSince}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
