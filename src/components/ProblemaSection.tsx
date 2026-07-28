import React from 'react';
import { AlertTriangle, Quote } from 'lucide-react';

export const ProblemaSection: React.FC = () => {
  return (
    <section id="problema" className="bg-[#284871] text-[#C5F2ED] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#FAF8F3]/10 relative">
      <div className="max-w-3xl mx-auto">
        {/* Eyebrow Label */}
        <div className="text-center mb-4">
          <span className="text-[#C5F2ED] text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase bg-[#C5F2ED]/10 px-4 py-1.5 rounded-full inline-block border border-[#C5F2ED]/20">
            O PROBLEMA
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#FFFDE0] text-center tracking-tight mb-12 leading-[1.05]">
          O texto correto que ninguém consegue ler até o final.
        </h2>

        {/* Editorial Body Content */}
        <div className="space-y-8 text-lg sm:text-xl text-[#C5F2ED] leading-relaxed font-light">
          {/* Paragraph 1 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#1e385a]/60 border border-[#C5F2ED]/15 backdrop-blur-sm shadow-sm relative">
            <Quote className="w-8 h-8 text-[#FFFDE0]/20 absolute top-4 right-4 pointer-events-none" />
            <p className="relative z-10">
              Você já testou pedir conteúdo pra IA e recebeu de volta um texto correto, mas <span className="text-[#FFFDE0] font-semibold bg-[#FFFDE0]/10 px-1.5 py-0.5 rounded">sem graça</span>.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#1e385a]/60 border border-[#C5F2ED]/15 backdrop-blur-sm shadow-sm">
            <p className="mb-4">
              Frases que parecem ter saído do mesmo lugar que todo mundo usa. Aberturas com <span className="text-[#FFFDE0] font-medium bg-[#FFFDE0]/10 px-2 py-0.5 rounded border border-[#FFFDE0]/20">"no mundo de hoje"</span>. Fechamentos motivacionais que não dizem nada. Um <span className="text-[#FFFDE0] font-medium bg-[#FFFDE0]/10 px-2 py-0.5 rounded border border-[#FFFDE0]/20">"não é X, é Y"</span> toda hora.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#FFFDE0] font-mono pt-2 border-t border-[#C5F2ED]/10">
              <AlertTriangle className="w-4 h-4 shrink-0 text-[#FFFDE0]" />
              <span>Padrões saturados identificados em 90% dos textos gerados por IA</span>
            </div>
          </div>

          {/* Paragraph 3 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFDE0]/10 border border-[#FFFDE0]/30 text-center">
            <p className="text-xl sm:text-2xl font-serif-display text-[#FFFDE0] font-normal italic">
              "A IA só repete o padrão que você manda. Sem direção clara, ela cai no <span className="underline decoration-[#FFFDE0] underline-offset-4 font-bold not-italic">genérico</span>."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
