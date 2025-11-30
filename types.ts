export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: string;
  inputs: ToolInput[];
  actionLabel: string;
  isAi?: boolean;
}

export type ToolCategory = 
  | 'AI & Content'
  | 'SEO Tools'
  | 'Web Dev'
  | 'Performance'
  | 'Privacy'
  | 'Data'
  | 'Marketing'
  | 'Conversion'
  | 'Design'
  | 'System';

export interface ToolInput {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'select' | 'file';
  placeholder?: string;
  options?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  content: string; 
  readTime: string;
  tags: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteSettings {
  heroTitle: string;
  heroSubtitle: string;
  googleConsoleId: string;
  googleAnalyticsId: string;
  googleAdSenseId: string;
  contactEmail: string;
  socials: {
    twitter: string;
    facebook: string;
    linkedin: string;
    github: string;
  }
}