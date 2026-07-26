import React from 'react';
import { Sliders } from 'lucide-react';

interface FooterProps {
  wordmark: string;
  onOpenConfig: () => void;
  onOpenPreview?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ wordmark, onOpenConfig }) => {
  return (
    <footer className="bg-[#1e3655] text-[#C5F2ED] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#C5F2ED]/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand */}
        <div>
          <div className="font-serif-display text-xl font-bold text-[#FFDD55] mb-1">
            {wordmark}
          </div>
          <p className="text-xs text-[#C5F2ED]/60 font-light">
            Elimine textos robóticos e chavões de IA no seu conteúdo.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[#C5F2ED]/80">
          <a href="#hero" className="hover:text-[#FFDD55] transition-colors">Início</a>
          <span>•</span>
          <a href="#solucao" className="hover:text-[#FFDD55] transition-colors">Como Funciona</a>
          <span>•</span>
          <a href="#pra-quem" className="hover:text-[#FFDD55] transition-colors">Para Quem É</a>
          <span>•</span>
          <a href="#preco" className="hover:text-[#FFDD55] transition-colors">Preço</a>
          <span>•</span>
          <a href="#faq" className="hover:text-[#FFDD55] transition-colors">FAQ</a>
          <span>•</span>
          <a href="#acompanhamento" className="hover:text-[#FFDD55] transition-colors">Acompanhamento</a>
        </div>

        {/* Action Helpers */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConfig}
            className="inline-flex items-center gap-1.5 text-xs text-[#FFDD55] bg-[#FFDD55]/10 hover:bg-[#FFDD55]/20 px-3 py-1.5 rounded-full border border-[#FFDD55]/30 transition-all"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Editar Links</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#C5F2ED]/10 text-center text-[11px] text-[#C5F2ED]/40 font-light">
        © {new Date().getFullYear()} {wordmark}. Todos os direitos reservados. Produto digital de entrega imediata.
      </div>
    </footer>
  );
};
