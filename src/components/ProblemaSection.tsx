import React, { useState } from 'react';
import { AlertTriangle, Quote, ChevronDown, ChevronUp, AlertOctagon } from 'lucide-react';

export const ProblemaSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="problema" className="bg-[#284871] text-[#C5F2ED] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#FAF8F3]/10 relative">
      <div className="max-w-3xl mx-auto">
        {/* Single Clickable Tab */}
        <div className="bg-[#1e385a]/80 border border-[#C5F2ED]/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between bg-[#C5F2ED]/5 hover:bg-[#C5F2ED]/10 transition-colors text-left group"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#C5F2ED]/10 flex items-center justify-center border border-[#C5F2ED]/20 group-hover:scale-105 transition-transform">
                <AlertOctagon className="w-5 h-5 text-[#FFFDE0]" />
              </div>
              <div>
                <span className="text-[#C5F2ED]/80 text-[10px] font-bold tracking-[0.25em] uppercase block mb-0.5">
                  O PROBLEMA
                </span>
                <h3 className="font-serif-display text-lg sm:text-2xl font-bold text-[#FFFDE0] leading-tight">
                  O texto correto que ninguém lê <span className="text-[#C5F2ED]/70 font-normal text-xs sm:text-sm italic ml-1">(Clique para {isOpen ? 'ocultar' : 'expandir'})</span>
                </h3>
              </div>
            </div>

            <div className="w-9 h-9 rounded-full bg-[#C5F2ED]/10 flex items-center justify-center text-[#FFFDE0] group-hover:bg-[#FFFDE0] group-hover:text-[#284871] transition-colors ml-4 shrink-0">
              {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {/* Expanded Content */}
          {isOpen && (
            <div className="p-6 sm:p-8 bg-[#284871]/90 border-t border-[#C5F2ED]/15 animate-fadeIn space-y-6">
              {/* Paragraph 1 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#1e385a]/90 border border-[#C5F2ED]/15 shadow-sm relative">
                <Quote className="w-7 h-7 text-[#FFFDE0]/20 absolute top-4 right-4 pointer-events-none" />
                <p className="relative z-10 text-base sm:text-lg leading-relaxed font-light text-[#C5F2ED]">
                  Você já testou pedir conteúdo pra IA e recebeu de volta um texto correto, mas <span className="text-[#FFFDE0] font-semibold bg-[#FFFDE0]/10 px-1.5 py-0.5 rounded">sem graça</span>.
                </p>
              </div>

              {/* Paragraph 2 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#1e385a]/90 border border-[#C5F2ED]/15 shadow-sm">
                <p className="mb-3 text-base sm:text-lg leading-relaxed font-light text-[#C5F2ED]">
                  Frases que parecem ter saído do mesmo lugar que todo mundo usa. Aberturas com <span className="text-[#FFFDE0] font-medium bg-[#FFFDE0]/10 px-2 py-0.5 rounded border border-[#FFFDE0]/20">"no mundo de hoje"</span>. Fechamentos motivacionais que não dizem nada. Um <span className="text-[#FFFDE0] font-medium bg-[#FFFDE0]/10 px-2 py-0.5 rounded border border-[#FFFDE0]/20">"não é X, é Y"</span> toda hora.
                </p>
                <div className="flex items-center gap-2 text-xs text-[#FFFDE0] font-mono pt-3 border-t border-[#C5F2ED]/10">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-[#FFFDE0]" />
                  <span>Padrões saturados identificados em 90% dos textos gerados por IA</span>
                </div>
              </div>

              {/* Paragraph 3 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFDE0]/10 border border-[#FFFDE0]/30 text-center">
                <p className="text-lg sm:text-xl font-serif-display text-[#FFFDE0] font-normal italic">
                  "A IA só repete o padrão que você manda. Sem direção clara, ela cai no <span className="underline decoration-[#FFFDE0] underline-offset-4 font-bold not-italic">genérico</span>."
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

