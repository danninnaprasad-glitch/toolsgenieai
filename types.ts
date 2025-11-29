import { LucideIcon } from 'lucide-react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  path: string;
  icon?: LucideIcon;
  isNew?: boolean;
  type: 'ai' | 'utility' | 'generator';
}

export enum ToolCategory {
  AI = 'AI & Writing',
  SEO = 'SEO & Web',
  DEV = 'Developer Tools',
  TEXT = 'Text Analysis',
  IMAGE = 'Image Tools',
  MATH = 'Calculators',
  SOCIAL = 'Social Media',
  SECURITY = 'Security',
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  image: string; // Added image property
}

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  rating: number;
  features: string[];
  link: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}