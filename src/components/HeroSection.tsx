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
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FFFDE0_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 text-left">
            {/* Eyebrow */}
            <p className="text-[#C5F2ED] text-[10px] tracking-[0.3em] font-bold uppercase mb-4 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FFFDE0]" />
              <span>POSICIONAMENTO EDITORIAL — PROMPT ANTI-GENÉRICO</span>
            </p>

            {/* Headline */}
            <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#FFFDE0] tracking-tight leading-[0.98] mb-6">
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
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#FFFDE0] text-[#284871] font-bold text-xs sm:text-sm tracking-widest uppercase hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-lg transition-all duration-200 group"
              >
                <span>Garantir Prompt Anti-Genérico (R$17)</span>
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Hero Side Callout Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#C5F2ED]/5 border border-[#FFFDE0]/30 p-8 sm:p-10 rounded-2xl relative shadow-sm text-center flex items-center justify-center min-h-[160px] sm:min-h-[200px]">
              <p className="font-serif-display text-2xl sm:text-3xl font-bold text-[#FFFDE0] leading-snug italic text-center">
                Use IA sem abrir mão de quem você é!
              </p>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex flex-col items-center justify-center text-[#C5F2ED]/60 text-[10px] tracking-[0.2em] font-bold uppercase">
          <span className="mb-2">Role para ver o problema</span>
          <a href="#problema" aria-label="Rolar para o problema" className="p-2 rounded-full border border-[#C5F2ED]/20 hover:border-[#FFFDE0] text-[#C5F2ED] hover:text-[#FFFDE0] animate-float transition-colors">
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
