import React, { useState } from 'react';
import { Briefcase, Users, Sparkles, Check, ChevronDown, ChevronUp, UserCheck } from 'lucide-react';
import { TARGET_AUDIENCE_CARDS } from '../data';

const getAudienceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#284871]" />;
    case 'Users': return <Users className="w-5 h-5 text-[#284871]" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#284871]" />;
    default: return <Check className="w-5 h-5 text-[#284871]" />;
  }
};

export const PraQuemSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="pra-quem" className="bg-[#FAF8F3] text-[#284871] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#284871]/10">
      <div className="max-w-3xl mx-auto">
        {/* Single Clickable Tab */}
        <div className="bg-[#FAF8F3] border border-[#284871]/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between bg-[#284871]/5 hover:bg-[#C5F2ED]/30 transition-colors text-left group"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#C5F2ED] flex items-center justify-center border border-[#284871]/10 group-hover:scale-105 transition-transform">
                <UserCheck className="w-5 h-5 text-[#284871]" />
              </div>
              <div>
                <span className="text-[#5E7897] text-[10px] font-bold tracking-[0.25em] uppercase block mb-0.5">
                  PARA QUEM É
                </span>
                <h3 className="font-serif-display text-lg sm:text-2xl font-bold text-[#284871] leading-tight">
                  Para quem é este guia? <span className="text-[#5E7897] font-normal text-xs sm:text-sm italic ml-1">(Clique para {isOpen ? 'ocultar' : 'expandir'})</span>
                </h3>
              </div>
            </div>

            <div className="w-9 h-9 rounded-full bg-[#284871]/10 flex items-center justify-center text-[#284871] group-hover:bg-[#284871] group-hover:text-[#FFFDE0] transition-colors ml-4 shrink-0">
              {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {/* Expanded Content */}
          {isOpen && (
            <div className="p-6 sm:p-8 bg-[#FAF8F3] border-t border-[#284871]/10 animate-fadeIn">
              <p className="font-serif-display text-base sm:text-lg font-bold text-[#284871] mb-6 text-center">
                Para quem quer agilidade na criação sem abrir mão da autenticidade:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {TARGET_AUDIENCE_CARDS.map((card) => (
                  <div 
                    key={card.number}
                    className="p-4 rounded-xl bg-[#C5F2ED]/20 border border-[#284871]/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {getAudienceIcon(card.iconName)}
                        <h4 className="font-bold text-xs uppercase tracking-wider text-[#284871]">
                          {card.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#5E7897] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center p-4 rounded-xl bg-[#FFFDE0] border border-[#284871]/10">
                <p className="text-xs sm:text-sm text-[#284871] font-medium leading-relaxed">
                  Não precisa entender de marketing. Você só <span className="font-bold underline">cola o documento</span> e pede o que precisa.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

