import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#FAF8F3] text-[#284871] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#284871]/10">
      <div className="max-w-3xl mx-auto">
        {/* Eyebrow */}
        <div className="text-center mb-4">
          <span className="text-[#284871] text-xs sm:text-sm font-semibold tracking-widest uppercase bg-[#C5F2ED]/60 px-3.5 py-1 rounded-full inline-block border border-[#284871]/10">
            DÚVIDAS FREQUENTES
          </span>
        </div>

        {/* Title */}
        <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#284871] text-center tracking-tight mb-12 leading-tight">
          Perguntas Frequentes
        </h2>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#C5F2ED]/40 border-[#284871]/30 shadow-xs' 
                    : 'bg-[#FAF8F3] border-[#284871]/15 hover:border-[#284871]/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#284871]/20"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans-body font-semibold text-base sm:text-lg text-[#284871]">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#284871]/5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#284871] text-[#FFDD55]' : 'text-[#284871]'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0 text-base text-[#5E7897] font-sans-body leading-relaxed border-t border-[#284871]/10 mt-2 pt-4">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
