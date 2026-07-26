import React from 'react';
import { ArrowDown, Sparkles, Copy, Check } from 'lucide-react';

interface HeroSectionProps {
  checkoutLink: string;
  onOpenPreview?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ checkoutLink, onOpenPreview }) => {
  const [copied, setCopied] = React.useState(false);

  const handleQuickCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenPreview) {
      onOpenPreview();
    }
  };

  return (
    <section id="hero" className="relative bg-[#284871] text-[#FAF8F3] pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#FAF8F3]/10">
      {/* Editorial Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FFDD55_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 text-left">
            {/* Eyebrow */}
            <p className="text-[#C5F2ED] text-[10px] tracking-[0.3em] font-bold uppercase mb-4 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FFDD55]" />
              <span>POSICIONAMENTO EDITORIAL — PROMPT ANTI-GENÉRICO</span>
            </p>

            {/* Headline */}
            <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#FFDD55] tracking-tight leading-[0.98] mb-6">
              O prompt que faz sua IA parar de escrever igual todo mundo
            </h1>

            {/* Subheadline */}
            <p className="font-sans-body text-lg sm:text-xl text-[#C5F2ED] font-light leading-relaxed mb-8 opacity-90 max-w-2xl">
              Um documento único. Cole antes de pedir qualquer roteiro, carrossel ou legenda e pare de reconhecer texto de IA no seu próprio conteúdo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href="#preco"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#FFDD55] text-[#284871] font-bold text-xs sm:text-sm tracking-widest uppercase hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-lg transition-all duration-200 group"
              >
                <span>Garantir Prompt Anti-Genérico (R$17)</span>
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Hero Side Callout Card (Editorial Box) */}
          <div className="lg:col-span-4">
            <div className="bg-[#C5F2ED]/5 border border-[#C5F2ED]/20 p-6 sm:p-8 rounded-2xl relative shadow-sm">
              <span className="text-[#FFDD55] font-serif-display italic text-2xl block mb-3">
                A Ilusão da Velocidade
              </span>
              <p className="text-xs text-[#C5F2ED] leading-relaxed font-light opacity-90 mb-4">
                Pedir conteúdo pra IA sem direção gera textos que "parecem corretos", mas soam frios e robóticos. Aberturas com <span className="text-[#FFDD55] font-normal">"no mundo de hoje"</span> e fechamentos vazios afastam seu cliente.
              </p>
              <div className="pt-3 border-t border-[#C5F2ED]/15 text-[11px] text-[#FFDD55] font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFDD55] inline-block animate-ping"></span>
                <span>Resolvido com 1 único comando prévio</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex flex-col items-center justify-center text-[#C5F2ED]/60 text-[10px] tracking-[0.2em] font-bold uppercase">
          <span className="mb-2">Role para ver o problema</span>
          <a href="#problema" aria-label="Rolar para o problema" className="p-2 rounded-full border border-[#C5F2ED]/20 hover:border-[#FFDD55] text-[#C5F2ED] hover:text-[#FFDD55] animate-float transition-colors">
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
