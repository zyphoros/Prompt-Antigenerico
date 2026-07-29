import React from 'react';
import { MessageCircle, ArrowUpRight, Compass, Layers, Palette, CheckCircle } from 'lucide-react';

interface AcompanhamentoSectionProps {
  whatsappLink: string;
}

export const AcompanhamentoSection: React.FC<AcompanhamentoSectionProps> = ({ whatsappLink }) => {
  return (
    <section id="acompanhamento" className="bg-[#D6C5B0] text-[#284871] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Editorial Container */}
        <div className="bg-[#FAF8F3]/60 backdrop-blur-md rounded-3xl p-8 sm:p-14 border border-[#284871]/20 shadow-xl">
          {/* Eyebrow / Tag */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase bg-[#284871] text-[#FFFDE0] px-4 py-1.5 rounded-full inline-block">
              ALÉM DO PROMPT — ACOMPANHAMENTO ESTRATÉGICO
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#284871]/80 border border-[#284871]/30 px-3 py-1 rounded-full bg-[#FAF8F3]/80">
              SERVIÇO PERSONALIZADO
            </span>
          </div>

          {/* Title */}
          <h2 
            style={{ fontFamily: "'Advercase', 'Advercase Font', 'Advercase-Regular', 'Playfair Display', Georgia, serif" }}
            className="font-advercase text-3xl sm:text-5xl font-bold text-[#284871] tracking-tight mb-8 leading-tight"
          >
            Quer alguém cuidando disso de perto?
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-base sm:text-xl text-[#284871] leading-relaxed font-light mb-10">
            <p>
              Se você busca algo mais preciso, aqui te entrego uma estratégia pensada pro seu negócio. Alguém acompanhando de perto, criando junto com você.
            </p>
            <p className="font-normal border-l-2 border-[#284871] pl-4 sm:pl-6 py-1">
              Trabalho com estratégia de conteúdo, planejamento, roteirização de postagens e criação de designs, tudo pensado com o cuidado necessário.
            </p>
          </div>

          {/* Key Deliverables Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12 text-sm text-[#284871] font-medium">
            <div className="flex items-center gap-2 bg-[#284871]/5 p-3 rounded-xl border border-[#284871]/10">
              <Compass className="w-4 h-4 text-[#284871] shrink-0" />
              <span>Estratégia de Conteúdo Sob Medida</span>
            </div>
            <div className="flex items-center gap-2 bg-[#284871]/5 p-3 rounded-xl border border-[#284871]/10">
              <Layers className="w-4 h-4 text-[#284871] shrink-0" />
              <span>Planejamento e Roteirização</span>
            </div>
            <div className="flex items-center gap-2 bg-[#284871]/5 p-3 rounded-xl border border-[#284871]/10">
              <Palette className="w-4 h-4 text-[#284871] shrink-0" />
              <span>Criação de Designs e Identidade</span>
            </div>
            <div className="flex items-center gap-2 bg-[#284871]/5 p-3 rounded-xl border border-[#284871]/10">
              <CheckCircle className="w-4 h-4 text-[#284871] shrink-0" />
              <span>Acompanhamento e Co-criação</span>
            </div>
          </div>

          {/* 
            ===================================================================
            LINK DO WHATSAPP
            Substitua a variável `whatsappLink` ou o atributo `href` abaixo pelo
            seu link real de WhatsApp no formato `https://wa.me/55NUMERO`.
            ===================================================================
          */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#284871] text-[#FFFDE0] font-bold text-base uppercase tracking-wider hover:bg-[#1f3859] hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <MessageCircle className="w-5 h-5 mr-2 text-[#FFFDE0]" />
            <span>Fala comigo</span>
            <ArrowUpRight className="w-5 h-5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
