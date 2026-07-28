import React, { useState } from 'react';
import { X, Copy, Check, FileText, Sparkles } from 'lucide-react';
import { SAMPLE_PROMPT_PREVIEW } from '../data';

interface PromptPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptPreviewModal: React.FC<PromptPreviewModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(SAMPLE_PROMPT_PREVIEW);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-[#284871] border border-[#FFFDE0]/30 text-[#C5F2ED] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#C5F2ED]/10 mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#FFFDE0]" />
            <h3 className="font-serif-display text-xl font-bold text-[#FFFDE0]">
              Prévia da Estrutura do Prompt
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#C5F2ED]/10 text-[#C5F2ED] hover:text-[#FFFDE0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Box */}
        <p className="text-xs text-[#C5F2ED]/80 mb-3 font-light">
          Abaixo está um trecho demonstrativo do documento original que você recebe imediatamente após a compra:
        </p>

        <div className="bg-[#1b3250] rounded-2xl p-4 sm:p-5 border border-[#C5F2ED]/10 overflow-y-auto flex-1 font-mono text-xs sm:text-sm leading-relaxed text-[#C5F2ED]/90 whitespace-pre-wrap select-all">
          {SAMPLE_PROMPT_PREVIEW}
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-[#C5F2ED]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FFFDE0] text-[#284871] font-bold text-sm uppercase tracking-wide hover:bg-[#FFF8C9] transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#284871]" />
                <span>Copiado com Sucesso!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#284871]" />
                <span>Copiar Trecho de Demonstração</span>
              </>
            )}
          </button>

          <a
            href="#preco"
            onClick={onClose}
            className="text-xs text-[#FFF3A8] hover:underline font-semibold"
          >
            Adquirir o Prompt Completo por R$17 →
          </a>
        </div>
      </div>
    </div>
  );
};
