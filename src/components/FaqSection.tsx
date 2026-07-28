import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export const FaqSection: React.FC = () => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#FAF8F3] text-[#284871] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#284871]/10">
      <div className="max-w-3xl mx-auto">
        {/* Single Clickable Tab */}
        <div className="bg-[#FAF8F3] border border-[#284871]/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <button
            onClick={() => setIsSectionOpen(!isSectionOpen)}
            className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between bg-[#284871]/5 hover:bg-[#C5F2ED]/30 transition-colors text-left group"
            aria-expanded={isSectionOpen}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#C5F2ED] flex items-center justify-center border border-[#284871]/10 group-hover:scale-105 transition-transform">
                <HelpCircle className="w-5 h-5 text-[#284871]" />
              </div>
              <div>
                <span className="text-[#5E7897] text-[10px] font-bold tracking-[0.25em] uppercase block mb-0.5">
                  DÚVIDAS FREQUENTES
                </span>
                <h3 className="font-serif-display text-lg sm:text-2xl font-bold text-[#284871] leading-tight">
                  Perguntas Frequentes <span className="text-[#5E7897] font-normal text-xs sm:text-sm italic ml-1">(Clique para {isSectionOpen ? 'ocultar' : 'expandir'})</span>
                </h3>
              </div>
            </div>

            <div className="w-9 h-9 rounded-full bg-[#284871]/10 flex items-center justify-center text-[#284871] group-hover:bg-[#284871] group-hover:text-[#FFFDE0] transition-colors ml-4 shrink-0">
              {isSectionOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {/* Expanded Content */}
          {isSectionOpen && (
            <div className="p-6 sm:p-8 bg-[#FAF8F3] border-t border-[#284871]/10 animate-fadeIn">
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
                        className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="font-sans-body font-semibold text-sm sm:text-base text-[#284871]">
                          {item.question}
                        </span>
                        <div className={`p-1.5 rounded-full bg-[#284871]/5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#284871] text-[#FFFDE0]' : 'text-[#284871]'}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-[#5E7897] font-sans-body leading-relaxed border-t border-[#284871]/10 pt-3">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

