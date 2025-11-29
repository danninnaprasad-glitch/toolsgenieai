import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = "AI tools, developer tools, free online tools, SEO generator, web utilities, tech blog",
  image = "https://toolsgenieai.com/og-image.jpg"
}) => {
  const location = useLocation();
  const canonicalUrl = `https://toolsgenieai.com/#${location.pathname}`;

  useEffect(() => {
    // Update Title
    document.title = `${title} | ToolsGenieAI`;

    // Helper function to update or create meta tags
    const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper for Links (Canonical)
    const updateLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Standard Meta
    updateMeta('description', description);
    updateMeta('keywords', keywords);

    // Open Graph / Facebook
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:url', canonicalUrl, 'property');
    updateMeta('og:image', image, 'property');
    updateMeta('og:type', 'website', 'property');

    // Twitter
    updateMeta('twitter:card', 'summary_large_image', 'name'); // twitter uses 'name' usually
    updateMeta('twitter:title', title, 'name'); // Some parsers look for name
    updateMeta('twitter:description', description, 'name');
    updateMeta('twitter:image', image, 'name');

    // Canonical
    updateLink('canonical', canonicalUrl);

  }, [title, description, keywords, image, canonicalUrl]);

  return null;
};

export default SEO;
