import React from 'react';
import { ArrowDown, Sliders } from 'lucide-react';

interface HeaderNavProps {
  wordmark: string;
  onOpenConfig?: () => void;
  onOpenPreview?: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  wordmark,
  onOpenConfig,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#284871]/95 backdrop-blur-md border-b border-[#C5F2ED]/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Wordmark */}
        <a 
          href="#hero" 
          className="font-sans-body text-lg sm:text-xl md:text-2xl font-normal tracking-tight text-[#FFFDE0] hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFFDE0] inline-block animate-pulse"></span>
          <span className="font-sans-body font-normal">{wordmark}</span>
        </a>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onOpenConfig && (
            <button
              onClick={onOpenConfig}
              className="p-2 rounded-full text-[#C5F2ED] hover:text-[#FFFDE0] hover:bg-[#C5F2ED]/10 transition-all"
              title="Configurar Links de Checkout/WhatsApp"
            >
              <Sliders className="w-4 h-4" />
            </button>
          )}

          <a
            href="#acompanhamento"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 rounded-full bg-[#FFFDE0] text-[#284871] font-semibold text-xs sm:text-sm tracking-wide uppercase hover:bg-[#FFFFF0] hover:scale-105 active:scale-95 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <span>Entre em contato</span>
            <ArrowDown className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
