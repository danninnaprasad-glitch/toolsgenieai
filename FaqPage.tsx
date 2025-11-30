import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';
import SEO from '../components/SEO';

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-700">
      <button
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-200">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-genie-400" /> : <ChevronDown className="h-5 w-5 text-slate-500" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-400 animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

const FaqPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to common questions about ToolsGenieAI's free developer tools, data privacy, and usage policies."
        keywords="faq, help, questions, toolsgenieai support, how to use"
      />
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white">Frequently Asked Questions</h1>
        <p className="mt-4 text-slate-400">Everything you need to know about ToolsGenieAI.</p>
      </div>
      <div className="space-y-1">
        {FAQS.map((faq, index) => (
          <AccordionItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
