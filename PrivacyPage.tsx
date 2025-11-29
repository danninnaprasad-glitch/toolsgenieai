import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 text-slate-300">
      <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p>Last updated: October 2023</p>
        <h3>1. Introduction</h3>
        <p>Welcome to ToolsGenieAI. We respect your privacy and are committed to protecting your personal data.</p>
        
        <h3>2. Data We Collect</h3>
        <p>We do not collect personal data for the usage of client-side tools (like Meta Tag Generator). For AI tools, prompts are sent to the API provider (Google) but are not stored by us.</p>
        
        <h3>3. Cookies</h3>
        <p>We use cookies to improve user experience and analyze website traffic.</p>
        
        <h3>4. Third-Party Links</h3>
        <p>This website may include links to third-party websites. Clicking on those links may allow third parties to collect or share data about you.</p>
      </div>
    </div>
  );
};

export default PrivacyPage;
