import React from 'react';
import SEO from '../components/SEO';

const LegalLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-white mb-8 border-b border-slate-700 pb-4">{title}</h1>
    <div className="prose prose-invert prose-slate max-w-none text-slate-300">
      {children}
    </div>
  </div>
);

export const PrivacyPage: React.FC = () => (
  <>
    <SEO title="Privacy Policy" description="Privacy Policy for ToolsGenieAI." />
    <LegalLayout title="Privacy Policy">
      <p className="lead">Last updated: October 2023</p>
      <h3>1. Introduction</h3>
      <p>Welcome to ToolsGenieAI. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
      
      <h3>2. Data We Collect</h3>
      <p>We do not collect personal data for the usage of client-side utility tools. Input data for these tools is processed entirely within your browser memory and is not transmitted to our servers.</p>
      <p>For AI-powered tools, the text prompts you enter are transmitted to Google's Gemini API for processing. We do not store these prompts.</p>
      
      <h3>3. Advertising (AdSense)</h3>
      <p>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</p>
    </LegalLayout>
  </>
);

export const TermsPage: React.FC = () => (
  <>
    <SEO title="Terms of Service" description="Terms and conditions for using ToolsGenieAI." />
    <LegalLayout title="Terms of Service">
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing and using ToolsGenieAI, you accept and agree to be bound by the terms and provision of this agreement.</p>
      
      <h3>2. Use of Tools</h3>
      <p>Our tools are provided "as is" without warranty of any kind. You agree to use these tools for lawful purposes only.</p>
      <p>We are not responsible for any data loss resulting from the use of our generators or formatters.</p>

      <h3>3. Intellectual Property</h3>
      <p>The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws.</p>
    </LegalLayout>
  </>
);

export const CookiePolicyPage: React.FC = () => (
  <>
    <SEO title="Cookie Policy" description="Information about how ToolsGenieAI uses cookies." />
    <LegalLayout title="Cookie Policy">
      <h3>1. What are cookies?</h3>
      <p>Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
      
      <h3>2. How we use cookies</h3>
      <ul>
         <li><strong>Essential Cookies:</strong> Necessary for the website to function.</li>
         <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the website.</li>
         <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements to you.</li>
      </ul>
    </LegalLayout>
  </>
);
