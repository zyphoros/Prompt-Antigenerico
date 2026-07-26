import React from 'react';
import { Briefcase, Users, Sparkles, Check } from 'lucide-react';
import { TARGET_AUDIENCE_CARDS } from '../data';

const getAudienceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#284871]" />;
    case 'Users': return <Users className="w-6 h-6 text-[#284871]" />;
    case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#284871]" />;
    default: return <Check className="w-6 h-6 text-[#284871]" />;
  }
};

export const PraQuemSection: React.FC = () => {
  return (
    <section id="pra-quem" className="bg-[#FAF8F3] text-[#284871] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#284871]/10">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="text-center mb-3">
          <p className="text-[#5E7897] text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase bg-[#284871]/5 px-4 py-1.5 rounded-full inline-block border border-[#284871]/10">
            PARA QUEM É
          </p>
        </div>

        {/* Title */}
        <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#284871] text-center tracking-tight mb-16 leading-[1.05] max-w-3xl mx-auto">
          Para quem quer agilidade na criação sem abrir mão da autenticidade.
        </h2>

        {/* Grid of 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {TARGET_AUDIENCE_CARDS.map((card) => (
            <div 
              key={card.number}
              className="bg-[#FAF8F3] border border-[#284871]/15 rounded-2xl p-6 sm:p-8 hover:bg-[#C5F2ED]/20 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C5F2ED] flex items-center justify-center mb-6 border border-[#284871]/10">
                  {getAudienceIcon(card.iconName)}
                </div>

                <h3 className="font-sans-body text-xs sm:text-sm font-bold text-[#284871] uppercase tracking-wider mb-3">
                  {card.title}
                </h3>

                <p className="font-sans-body text-base text-[#5E7897] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="text-center max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#C5F2ED]/40 border border-[#284871]/15">
          <p className="font-sans-body text-base sm:text-lg text-[#284871] font-medium leading-relaxed">
            Não precisa entender de marketing. Não precisa saber o nome de nenhum framework. Você só <span className="bg-[#FFDD55] px-1.5 py-0.5 rounded text-[#284871] font-bold">cola o documento</span> e pede o que precisa.
          </p>
        </div>
      </div>
    </section>
  );
};
