import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ToolsPage from './pages/ToolsPage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import { PrivacyPage, TermsPage, CookiePolicyPage } from './pages/LegalPages';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/tools/:toolId" element={<ToolsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;