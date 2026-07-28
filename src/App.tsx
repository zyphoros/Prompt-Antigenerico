import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { ProblemaSection } from './components/ProblemaSection';
import { SolucaoSection } from './components/SolucaoSection';
import { PraQuemSection } from './components/PraQuemSection';
import { PrecoSection } from './components/PrecoSection';
import { FaqSection } from './components/FaqSection';
import { AcompanhamentoSection } from './components/AcompanhamentoSection';
import { Footer } from './components/Footer';
import { PromptPreviewModal } from './components/PromptPreviewModal';
import { ConfigDrawer } from './components/ConfigDrawer';
import { DEFAULT_CHECKOUT_LINK, DEFAULT_WHATSAPP_LINK, DEFAULT_WORDMARK } from './data';
import { SiteConfig } from './types';

export default function App() {
  const [config, setConfig] = useState<SiteConfig>({
    wordmark: DEFAULT_WORDMARK,
    checkoutLink: DEFAULT_CHECKOUT_LINK,
    whatsappLink: DEFAULT_WHATSAPP_LINK,
  });

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const handleUpdateConfig = (newConfig: Partial<SiteConfig>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  return (
    <div className="min-h-screen font-sans-body antialiased flex flex-col selection:bg-[#FFF3A8] selection:text-[#284871]">
      {/* Sticky Navigation */}
      <HeaderNav
        wordmark={config.wordmark}
        onOpenConfig={() => setIsConfigOpen(true)}
        onOpenPreview={() => setIsPreviewOpen(true)}
      />

      {/* MAIN CONTENT CONTAINING 3 DISTINCT COLOR BLOCKS */}
      <main className="flex-1">
        {/* =========================================================================
            BLOCO 1 — FUNDO #284871 (NAVY ESCURO)
            - Hero + O Problema
            ========================================================================= */}
        <div className="bg-[#284871]">
          <HeroSection
            checkoutLink={config.checkoutLink}
            onOpenPreview={() => setIsPreviewOpen(true)}
          />
          <ProblemaSection />
        </div>

        {/* =========================================================================
            BLOCO 2 — FUNDO #FAF8F3 (WARM WHITE)
            - A Solução + Pra Quem É + Preço + FAQ
            ========================================================================= */}
        <div className="bg-[#FAF8F3]">
          <SolucaoSection />
          <PraQuemSection />
          <PrecoSection checkoutLink={config.checkoutLink} />
          <FaqSection />
        </div>

        {/* =========================================================================
            BLOCO 3 — FUNDO #D6C5B0 (CAMEL / AREIA EDITORIAL)
            - Acompanhamento Estratégico (Serviço Personalizado)
            ========================================================================= */}
        <div className="bg-[#D6C5B0]">
          <AcompanhamentoSection whatsappLink={config.whatsappLink} />
        </div>
      </main>

      {/* Footer */}
      <Footer
        wordmark={config.wordmark}
        onOpenConfig={() => setIsConfigOpen(true)}
        onOpenPreview={() => setIsPreviewOpen(true)}
      />

      {/* Interactive Modals */}
      <PromptPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />

      <ConfigDrawer
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        config={config}
        onChangeConfig={handleUpdateConfig}
      />
    </div>
  );
}
