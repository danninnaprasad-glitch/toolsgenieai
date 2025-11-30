import React, { createContext, useContext, useState, useEffect } from 'react';
import { BlogPost, Product, SiteSettings, FaqItem } from '../types';
import { BLOG_POSTS, PRODUCTS, FAQS } from '../constants';

interface DataContextType {
  blogs: BlogPost[];
  products: Product[];
  faqs: FaqItem[];
  settings: SiteSettings;
  addBlog: (post: BlogPost) => void;
  updateBlog: (post: BlogPost) => void;
  deleteBlog: (id: string) => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  updateSettings: (settings: SiteSettings) => void;
}

const defaultSettings: SiteSettings = {
  heroTitle: "The Operating System for Digital Creators",
  heroSubtitle: "Stop switching between tabs. Access 100+ professional AI utilities, SEO analyzers, and developer tools in one privacy-focused dashboard.",
  googleConsoleId: "",
  googleAnalyticsId: "",
  googleAdSenseId: "",
  contactEmail: "sivasatyap9@gmail.com",
  socials: {
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  }
};

const DataContext = createContext<DataContextType | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from LocalStorage or Constants on mount
  useEffect(() => {
    const savedBlogs = localStorage.getItem('tg_blogs');
    const savedProducts = localStorage.getItem('tg_products');
    const savedFaqs = localStorage.getItem('tg_faqs');
    const savedSettings = localStorage.getItem('tg_settings');

    setBlogs(savedBlogs ? JSON.parse(savedBlogs) : BLOG_POSTS);
    setProducts(savedProducts ? JSON.parse(savedProducts) : PRODUCTS);
    setFaqs(savedFaqs ? JSON.parse(savedFaqs) : FAQS);
    setSettings(savedSettings ? JSON.parse(savedSettings) : defaultSettings);
    setIsLoaded(true);
  }, []);

  // Save to LocalStorage whenever data changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('tg_blogs', JSON.stringify(blogs));
      localStorage.setItem('tg_products', JSON.stringify(products));
      localStorage.setItem('tg_faqs', JSON.stringify(faqs));
      localStorage.setItem('tg_settings', JSON.stringify(settings));
    }
  }, [blogs, products, faqs, settings, isLoaded]);

  // Inject Meta/Script tags dynamically
  useEffect(() => {
    if (!settings) return;

    // 1. Google Verification (Console)
    if (settings.googleConsoleId) {
      let meta = document.querySelector('meta[name="google-site-verification"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'google-site-verification');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', settings.googleConsoleId);
    }

    // 2. Google AdSense Script Injection
    if (settings.googleAdSenseId) {
      const scriptId = 'google-adsense-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.async = true;
        // Use the proper AdSense URL format
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${settings.googleAdSenseId}`;
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
      }
    }
  }, [settings]);

  const addBlog = (post: BlogPost) => setBlogs(prev => [post, ...prev]);
  const updateBlog = (post: BlogPost) => setBlogs(prev => prev.map(p => p.id === post.id ? post : p));
  const deleteBlog = (id: string) => setBlogs(prev => prev.filter(p => p.id !== id));

  const addProduct = (product: Product) => setProducts(prev => [product, ...prev]);
  const updateProduct = (product: Product) => setProducts(prev => prev.map(p => p.id === product.id ? product : p));
  const deleteProduct = (id: string) => setProducts(prev => prev.filter(p => p.id !== id));

  const updateSettings = (newSettings: SiteSettings) => setSettings(newSettings);

  return (
    <DataContext.Provider value={{ 
      blogs, products, faqs, settings, 
      addBlog, updateBlog, deleteBlog, 
      addProduct, updateProduct, deleteProduct,
      updateSettings 
    }}>
      {children}
    </DataContext.Provider>
  );
};