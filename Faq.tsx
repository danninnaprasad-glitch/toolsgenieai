import React, { useState } from 'react';
import { FAQS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SEO from '../components/SEO';

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto py-12">
      <SEO title="FAQ - Tools Genie AI" description="Frequently Asked Questions about our AI tools and privacy." />
      <h1 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-surface border border-slate-200 dark:border-white/5 rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
            >
              <span className="font-semibold text-lg text-slate-800 dark:text-slate-200">{faq.question}</span>
              {activeIndex === index ? <Minus size={20} className="text-indigo-500 dark:text-indigo-400" /> : <Plus size={20} className="text-slate-400" />}
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-white/5 mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;