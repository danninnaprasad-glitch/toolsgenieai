import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useData } from '../contexts/DataContext';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Tools Genie AI - Smart Hub for AI & Tech Utilities", 
  description = "Access 100+ free AI tools, SEO utilities, developer converters, and tech insights.",
  image = "",
  type = "website"
}) => {
  const { pathname } = useLocation();
  const { settings } = useData();

  useEffect(() => {
    document.title = title;
    
    // Helper to set meta tags
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

    setMeta('description', description);
    setOg('og:title', title);
    setOg('og:description', description);
    setOg('og:type', type);
    setOg('og:url', window.location.href);
    if (image) setOg('og:image', image);

    // Inject Google Analytics if ID present
    if (settings.googleAnalyticsId) {
       // Logic to inject GA script would go here
    }

  }, [title, description, image, type, pathname, settings]);

  return null;
};

export default SEO;