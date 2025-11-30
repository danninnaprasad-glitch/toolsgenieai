import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Layers } from 'lucide-react';
import { ALL_TOOLS, CATEGORIES } from '../constants';

const ToolsHub: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'All';
  const [selectedCat, setSelectedCat] = useState(initialCat);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setSelectedCat(searchParams.get('cat') || 'All');
  }, [searchParams]);

  const filteredTools = ALL_TOOLS.filter(tool => {
    const matchesCat = selectedCat === 'All' || tool.category === selectedCat;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCatChange = (cat: string) => {
    setSelectedCat(cat);
    if (cat === 'All') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat });
    }
  };

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Layers className="text-indigo-400" /> 
          Tools Dashboard
        </h1>
        <p className="text-slate-400 max-w-2xl">
          Browse our complete library of {ALL_TOOLS.length} utilities. 
          From AI content generation to developers tools, everything runs instantly in your browser.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 min-h-[80vh]">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24 bg-surface rounded-xl p-4 border border-white/5">
            <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Filter size={18} /> Filter Categories
            </h2>
            <div className="space-y-1">
              <button
                onClick={() => handleCatChange('All')}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                  selectedCat === 'All' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-white/5'
                }`}
              >
                All Tools
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCatChange(cat)}
                  className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                    selectedCat === cat ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input
                type="text"
                placeholder="Search tools (e.g., 'PDF', 'Summarizer')..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-surface border border-slate-700 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-shadow text-white"
              />
            </div>
            <div className="bg-surface px-4 py-3 rounded-xl border border-slate-700 text-slate-400 text-sm flex items-center whitespace-nowrap">
              {filteredTools.length} Utilities Available
            </div>
          </div>

          {filteredTools.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-surface border border-white/5 rounded-xl p-6 hover:border-indigo-500/50 transition-colors flex flex-col group"
                >
                  <div className="mb-4 flex justify-between items-start">
                    <span className="text-xs font-bold text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded">
                      {tool.category}
                    </span>
                    {tool.isAi && <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" title="AI Powered"></span>}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-300 transition-colors">{tool.name}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
                    {tool.description}
                  </p>
                  <Link to={`/tool/${tool.id}`}>
                    <button className="w-full py-2 rounded-lg bg-darker border border-slate-700 hover:bg-slate-700 text-sm font-medium transition-colors flex items-center justify-center gap-2 group-hover:border-indigo-500/30">
                      Open Tool <ArrowRight size={14} />
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-surface/50 rounded-xl border border-dashed border-slate-700">
              <h3 className="text-xl font-bold text-slate-300">No tools found</h3>
              <p className="text-slate-500 mt-2">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolsHub;