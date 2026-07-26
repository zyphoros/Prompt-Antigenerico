export interface SiteConfig {
  wordmark: string;
  checkoutLink: string;
  whatsappLink: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SolutionCardItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TargetAudienceCardItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}
