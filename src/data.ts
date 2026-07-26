import { FaqItem, SolutionCardItem, TargetAudienceCardItem } from './types';

/* 
  ========================================================================
  CONFIGURAÇÃO DE LINKS PRINCIPAIS DO SITE
  Altere estas variáveis abaixo para os seus links reais do Checkout e WhatsApp
  ========================================================================
*/

/* CHECKOUT_LINK_AQUI */
export const DEFAULT_CHECKOUT_LINK = "https://pay.kiwify.com.br/exemplo_prompt_antigenerico";

/* WHATSAPP_LINK_AQUI */
export const DEFAULT_WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento%20estrat%C3%A9gico.";

export const DEFAULT_WORDMARK = "PROMPT ANTI-GENÉRICO";

export const SOLUTION_CARDS: SolutionCardItem[] = [
  {
    number: "01",
    title: "Vocabulário Banido",
    description: "As palavras e estruturas de frase que fazem qualquer texto soar robótico (e que a IA insiste em repetir).",
    iconName: "FileX"
  },
  {
    number: "02",
    title: "Anti-Padrões de IA",
    description: "Os padrões de escrita que denunciam texto gerado por IA, prontos pra evitar antes mesmo de começar.",
    iconName: "ShieldAlert"
  },
  {
    number: "03",
    title: "Frameworks Autônomos",
    description: "Um banco de frameworks de copywriting, que a própria IA escolhe automaticamente de acordo com o que você pedir.",
    iconName: "Cpu"
  },
  {
    number: "04",
    title: "Inquérito Inteligente",
    description: "Instruções pra IA te perguntar o que faltar, em vez de inventar um conteúdo genérico \"no escuro\".",
    iconName: "HelpCircle"
  }
];

export const TARGET_AUDIENCE_CARDS: TargetAudienceCardItem[] = [
  {
    number: "01",
    title: "Donos de Negócio",
    description: "Que usam IA pra criar conteúdo, mas cansaram de quebrar a cabeça com roteiro saturado.",
    iconName: "Briefcase"
  },
  {
    number: "02",
    title: "Gestores de Redes Sociais",
    description: "Quem gerencia redes sociais própria ou de clientes e quer ganhar tempo sem perder qualidade.",
    iconName: "Users"
  },
  {
    number: "03",
    title: "Criadores de Conteúdo",
    description: "Quem já sentiu vergonha de postar algo e reconhecer instantaneamente que \"parece IA\".",
    iconName: "Sparkles"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Preciso saber usar IA pra usar isso?",
    answer: "Não. Você só copia o documento, cola na conversa com a IA (ChatGPT, Claude, etc.) e pede o que precisar. O documento faz todo o trabalho pesado por você."
  },
  {
    id: "faq-2",
    question: "Funciona pra qualquer tipo de conteúdo?",
    answer: "Sim. Posts, carrosséis, stories, roteiros de vídeo, legendas, e e-mails. O próprio documento orienta a IA a se adaptar instantaneamente ao formato que você pedir."
  },
  {
    id: "faq-3",
    question: "Isso substitui contratar alguém pra fazer meu conteúdo?",
    answer: "Resolve o problema mais comum, que é texto genérico. Se você quiser uma estratégia pensada especificamente pro seu negócio, isso é outro tipo de trabalho — tem mais informações sobre isso mais abaixo nessa página."
  }
];

export const SAMPLE_PROMPT_PREVIEW = `# PROMPT ANTI-GENÉRICO (PRÉ-COMANDO)
[INSTRUÇÕES PERMANENTES DE ESTILO E ESCRITA]

Antes de responder a qualquer pedido de conteúdo, você DEVE seguir rigorosamente as regras abaixo:

1. BANIMENTO ABSOLUTO DE CHAVÕES DE IA:
- NUNCA use frases como: "no mundo de hoje", "é fundamental ressaltar", "não é apenas X, é Y", "mergulhe fundo", "desvende os segredos", "no cenário atual".
- NUNCA use conclusões motivacionais genéricas como "E você, está esperando o que para transformar sua jornada?".

2. RITMO E TOM EDITORIAL:
- Escreva como uma pessoa real conversando com outra com clareza, personalidade e voz direta.
- Varie o tamanho das frases. Combine frases curtas e diretas com explicações pontuais.

3. REQUISITO DE CONTEXTO:
- Se o pedido do usuário estiver vago ou sem contexto essencial (público, tom de voz, objetivo), FAÇA até 3 perguntas direcionadas antes de gerar o texto final.

4. FRAMEWORKS AUTOMÁTICOS:
- Adapte a estrutura (PAS, AIDA, BAB, Storytelling Direto) de acordo com o formato solicitado.`;
