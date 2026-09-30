import React, { useState } from 'react';
import { faqData, gymInfo } from '../../data/gymData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { PageId } from '../../types';

interface FAQSectionProps {
  onNavigate: (page: PageId) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onNavigate }) => {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] border-t border-zinc-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
            EVERYTHING YOU NEED TO KNOW
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            Have questions about training with us? Here are answers to the most common inquiries.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#14161f] border border-zinc-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-xl"
                >
                  <span className="font-heading text-base sm:text-lg font-bold uppercase tracking-wide text-white pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className="px-6 pb-6 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-xl bg-zinc-900/80 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Still have a question?
              </h4>
              <p className="text-xs text-zinc-400">
                Our team is happy to discuss your training history or specific equipment requirements.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-wider rounded-md border border-zinc-700 transition shrink-0"
          >
            Contact Team
          </button>
        </div>
      </div>
    </section>
  );
};
