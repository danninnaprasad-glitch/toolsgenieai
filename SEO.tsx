import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useData } from '../contexts/DataContext';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'application';
  schema?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description,
  image,
  type = "website",
  schema
}) => {
  const { pathname } = useLocation();
  const { settings } = useData();

  const siteTitle = title ? `${title} | Tools Genie AI` : settings.heroTitle;
  const metaDesc = description || settings.heroSubtitle;
  const currentUrl = `${window.location.origin}${pathname}`;
  const metaImage = image || "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200";

  useEffect(() => {
    // 1. Update Title
    document.title = siteTitle;
    
    // 2. Helper to set/update meta tags
    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const setOg = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Set Standard Meta Tags
    setMeta('description', metaDesc);
    setMeta('author', 'Tools Genie AI');
    
    // 4. Set Open Graph Tags (Facebook/LinkedIn)
    setOg('og:title', siteTitle);
    setOg('og:description', metaDesc);
    setOg('og:type', type);
    setOg('og:url', currentUrl);
    setOg('og:image', metaImage);
    setOg('og:site_name', 'Tools Genie AI');

    // 5. Set Twitter Cards
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', siteTitle);
    setMeta('twitter:description', metaDesc);
    setMeta('twitter:image', metaImage);

    // 6. Set Canonical URL (Crucial for SEO)
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // 7. Inject JSON-LD Schema (Crucial for Rich Snippets)
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }

    const baseSchema = {
      "@context": "https://schema.org",
      "@type": type === 'article' ? 'BlogPosting' : 'WebSite',
      "name": siteTitle,
      "url": currentUrl,
      "description": metaDesc,
      "image": metaImage,
      "author": {
        "@type": "Organization",
        "name": "Tools Genie AI"
      },
      ...schema
    };

    script.textContent = JSON.stringify(baseSchema);

  }, [siteTitle, metaDesc, metaImage, type, currentUrl, schema]);

  return null;
};

export default SEO;