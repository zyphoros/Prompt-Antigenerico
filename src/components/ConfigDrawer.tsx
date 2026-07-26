import React from 'react';
import { X, Link2, MessageSquare, Code, Check, ExternalLink } from 'lucide-react';
import { SiteConfig } from '../types';

interface ConfigDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
  onChangeConfig: (newConfig: Partial<SiteConfig>) => void;
}

export const ConfigDrawer: React.FC<ConfigDrawerProps> = ({
  isOpen,
  onClose,
  config,
  onChangeConfig,
}) => {
  const [copiedCode, setCopiedCode] = React.useState(false);

  if (!isOpen) return null;

  const codeSnippet = `/* NO SEU CÓDIGO (src/data.ts) */
export const DEFAULT_CHECKOUT_LINK = "${config.checkoutLink}";
export const DEFAULT_WHATSAPP_LINK = "${config.whatsappLink}";
export const DEFAULT_WORDMARK = "${config.wordmark}";`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      <div 
        className="bg-[#284871] border-l border-[#FFDD55]/30 text-[#C5F2ED] w-full max-w-md h-full p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#C5F2ED]/10 mb-6">
            <h3 className="font-serif-display text-xl font-bold text-[#FFDD55] flex items-center gap-2">
              <Link2 className="w-5 h-5 text-[#FFDD55]" />
              <span>Configuração de Links</span>
            </h3>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#C5F2ED]/10 text-[#C5F2ED] hover:text-[#FFDD55]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-[#C5F2ED]/80 mb-6 font-light">
            Altere os links abaixo para testar o direcionamento dos botões em tempo real nesta demonstração:
          </p>

          {/* Form Controls */}
          <div className="space-y-5">
            {/* Wordmark */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#FFDD55] mb-1.5">
                Nome da Marca / Wordmark
              </label>
              <input
                type="text"
                value={config.wordmark}
                onChange={(e) => onChangeConfig({ wordmark: e.target.value })}
                className="w-full bg-[#1b3250] border border-[#C5F2ED]/20 rounded-xl px-3.5 py-2.5 text-sm text-[#FAF8F3] focus:outline-none focus:border-[#FFDD55]"
              />
            </div>

            {/* Checkout Link */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#FFDD55] mb-1.5 flex items-center justify-between">
                <span>Link de Checkout (Hotmart / Kiwify)</span>
                <span className="text-[10px] text-[#FFDD55]/80 font-mono">CHECKOUT_LINK_AQUI</span>
              </label>
              <input
                type="url"
                value={config.checkoutLink}
                onChange={(e) => onChangeConfig({ checkoutLink: e.target.value })}
                placeholder="https://pay.kiwify.com.br/..."
                className="w-full bg-[#1b3250] border border-[#C5F2ED]/20 rounded-xl px-3.5 py-2.5 text-sm text-[#FAF8F3] focus:outline-none focus:border-[#FFDD55]"
              />
              <div className="mt-1 text-right">
                <a 
                  href={config.checkoutLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#C5F2ED] hover:text-[#FFDD55] inline-flex items-center gap-1"
                >
                  <span>Testar link no navegador</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* WhatsApp Link */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#FFDD55] mb-1.5 flex items-center justify-between">
                <span>Link do WhatsApp (Bloco 3)</span>
                <span className="text-[10px] text-[#FFDD55]/80 font-mono">WHATSAPP_LINK_AQUI</span>
              </label>
              <input
                type="url"
                value={config.whatsappLink}
                onChange={(e) => onChangeConfig({ whatsappLink: e.target.value })}
                placeholder="https://wa.me/5511999999999"
                className="w-full bg-[#1b3250] border border-[#C5F2ED]/20 rounded-xl px-3.5 py-2.5 text-sm text-[#FAF8F3] focus:outline-none focus:border-[#FFDD55]"
              />
              <div className="mt-1 text-right">
                <a 
                  href={config.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#C5F2ED] hover:text-[#FFDD55] inline-flex items-center gap-1"
                >
                  <span>Testar link no navegador</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Code Snippet Info */}
          <div className="mt-8 p-4 rounded-2xl bg-[#1b3250] border border-[#C5F2ED]/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#FFDD55] flex items-center gap-1.5">
                <Code className="w-4 h-4" />
                <span>Para Alteração Permanente:</span>
              </span>
              <button
                onClick={copyCode}
                className="text-[11px] text-[#C5F2ED] hover:text-[#FFDD55] flex items-center gap-1 font-medium"
              >
                {copiedCode ? <Check className="w-3 h-3 text-[#FFDD55]" /> : null}
                <span>{copiedCode ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>
            <pre className="font-mono text-[11px] text-[#C5F2ED]/80 overflow-x-auto p-2 bg-black/20 rounded-lg">
              {codeSnippet}
            </pre>
          </div>
        </div>

        {/* Footer Button */}
        <div className="pt-6 border-t border-[#C5F2ED]/10 mt-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full bg-[#FFDD55] text-[#284871] font-bold text-sm uppercase tracking-wider hover:bg-[#ffe580]"
          >
            Salvar e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
