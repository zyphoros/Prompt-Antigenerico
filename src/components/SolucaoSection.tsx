import React from 'react';
import { FileX, ShieldAlert, Cpu, HelpCircle, Video, Sparkles, CheckCircle2 } from 'lucide-react';
import { SOLUTION_CARDS } from '../data';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileX': return <FileX className="w-6 h-6 text-[#284871]" />;
    case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-[#284871]" />;
    case 'Cpu': return <Cpu className="w-6 h-6 text-[#284871]" />;
    case 'HelpCircle': return <HelpCircle className="w-6 h-6 text-[#284871]" />;
    case 'Video': return <Video className="w-6 h-6 text-[#284871]" />;
    case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#284871]" />;
    default: return <CheckCircle2 className="w-6 h-6 text-[#284871]" />;
  }
};

export const SolucaoSection: React.FC = () => {
  return (
    <section id="solucao" className="bg-[#FAF8F3] text-[#284871] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#284871]/10">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="text-center mb-3">
          <p className="text-[#5E7897] text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase bg-[#284871]/5 px-4 py-1.5 rounded-full inline-block border border-[#284871]/10">
            COMO FUNCIONA
          </p>
        </div>

        {/* Title */}
        <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#284871] text-center tracking-tight mb-6 leading-[1.05] max-w-3xl mx-auto">
          Um documento anti-genérico, pronto pra usar.
        </h2>

        {/* Opening text */}
        <p className="font-sans-body text-base sm:text-xl text-[#5E7897] text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Você cola esse documento antes de pedir qualquer roteiro — pra <span className="text-[#284871] font-semibold bg-[#C5F2ED]/60 px-1.5 py-0.5 rounded">ChatGPT, Claude, ou qualquer outra IA</span> que usar. Ele já vem com:
        </p>

        {/* Grid of Cards (3 columns on large screens for 6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SOLUTION_CARDS.map((card) => (
            <div 
              key={card.number}
              className="bg-[#284871]/5 hover:bg-[#C5F2ED]/30 border border-[#284871]/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif-display text-2xl font-bold text-[#284871]">
                    {card.number}.
                  </span>
                  <div className="p-2.5 bg-[#FAF8F3] rounded-xl border border-[#284871]/10 shadow-xs group-hover:scale-110 transition-transform">
                    {getIcon(card.iconName)}
                  </div>
                </div>

                <h3 className="font-sans-body text-xs font-bold text-[#284871] uppercase tracking-wider mb-2">
                  {card.title}
                </h3>

                <p className="font-sans-body text-xs sm:text-sm text-[#5E7897] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing text */}
        <div className="bg-[#284871] text-[#FAF8F3] rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-md">
          <p className="font-serif-display text-lg sm:text-2xl font-normal text-[#FFFDE0] leading-relaxed">
            "Não é um curso. Não é um passo a passo pra decorar. É um comando que já resolve o problema por você, sempre que você for criar conteúdo."
          </p>
        </div>
      </div>
    </section>
  );
};
