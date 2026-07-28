import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Lock } from 'lucide-react';

interface PrecoSectionProps {
  checkoutLink: string;
}

export const PrecoSection: React.FC<PrecoSectionProps> = ({ checkoutLink }) => {
  return (
    <section id="preco" className="bg-[#FAF8F3] text-[#284871] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#284871]/10 relative">
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="mb-3">
          <p className="text-[#5E7897] text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase bg-[#284871]/5 px-4 py-1.5 rounded-full inline-block border border-[#284871]/10">
            ACESSO IMEDIATO POR R$17,00
          </p>
        </div>

        {/* Title */}
        <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#284871] tracking-tight mb-4 leading-tight">
          Quanto custa parar de soar genérico?
        </h2>

        <p className="font-sans-body text-base sm:text-lg text-[#5E7897] mb-10 max-w-xl mx-auto">
          Um investimento acessível para transformar permanentemente a qualidade do conteúdo que você gera com IA.
        </p>

        {/* Pricing Card */}
        <div className="bg-[#FAF8F3] border-2 border-[#284871] rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 bg-[#FFFDE0] text-[#284871] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl border-l border-b border-[#284871]">
            OFERTA ESPECIAL
          </div>

          <div className="text-xs uppercase tracking-widest text-[#5E7897] font-semibold mb-2">
            PAGUE UMA VEZ, USE PARA SEMPRE
          </div>

          {/* Price Tag */}
          <div className="flex items-baseline justify-center gap-1 my-6">
            <span className="font-serif-display text-2xl font-bold text-[#284871]">R$</span>
            <span className="font-serif-display text-6xl sm:text-7xl font-bold text-[#284871] tracking-tight">17</span>
            <span className="font-serif-display text-2xl font-bold text-[#284871]">,00</span>
          </div>

          <p className="font-sans-body text-sm font-semibold text-[#284871] flex items-center justify-center gap-2 mb-8 bg-[#C5F2ED]/50 py-2.5 px-4 rounded-full max-w-xs mx-auto border border-[#284871]/10">
            <Zap className="w-4 h-4 text-[#284871]" />
            <span>Acesso imediato após a compra.</span>
          </p>

          {/* CTA Button */}
          {/* 
            ===================================================================
            LINK DE CHECKOUT (HOTMART, KIWIFY, STRIPE, ETC.)
            Substitua a variável `checkoutLink` ou o atributo `href` abaixo pelo
            seu link real de pagamento.
            ===================================================================
          */}
          <a
            href={checkoutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-8 py-5 rounded-full bg-[#284871] text-[#FFFDE0] font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-[#1f3859] hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <span>Quero parar de soar genérico</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Guarantees */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#5E7897] pt-6 border-t border-[#284871]/10">
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#284871]" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Zap className="w-4 h-4 text-[#284871]" />
              <span>Entrega Automática</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Lock className="w-4 h-4 text-[#284871]" />
              <span>Documento Copia e Cola</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
