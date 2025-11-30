import React from 'react';
import { useData } from '../contexts/DataContext';
import { Button } from '../components/Button';
import { ShoppingBag, Laptop, Smartphone, Watch, Headphones, HardDrive } from 'lucide-react';
import SEO from '../components/SEO';

const Essentials: React.FC = () => {
  const { products } = useData();

  const getIcon = (index: number) => {
      const icons = [Laptop, Smartphone, Watch, Headphones, HardDrive, ShoppingBag];
      const Icon = icons[index % icons.length];
      return <Icon size={48} className="text-indigo-300/80 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" />;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO title="Tech Essentials - Best Hardware & Software | Tools Genie AI" description="Explore our curated selection of essential tech gear, software, and hardware for AI developers and content creators." />
      <div className="text-center mb-16 pt-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-fuchsia-400">
            Tech Essentials
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Curated collection of top-tier hardware and software ecosystems. 
          Optimized for performance, durability, and developer productivity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
        {products.map((product, i) => (
          <div key={product.id} className="group bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-all duration-300 flex flex-col h-full hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/10">
            {/* Visual Header */}
            <div className={`h-48 w-full bg-gradient-to-br ${i % 2 === 0 ? 'from-indigo-900/40 via-darker to-slate-900' : 'from-fuchsia-900/40 via-darker to-slate-900'} flex items-center justify-center border-b border-white/5 relative overflow-hidden`}>
                {/* Decorative Glow */}
                <div className={`absolute w-32 h-32 rounded-full blur-3xl opacity-20 ${i % 2 === 0 ? 'bg-indigo-500' : 'bg-fuchsia-500'}`} />
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {getIcon(i)}
                </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-3">
                 <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-2 py-1 rounded">
                    {product.category}
                 </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">
                {product.name}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {product.description}
              </p>
              
              {product.price && (
                  <div className="text-lg font-bold text-white mb-4">{product.price}</div>
              )}

              <Button variant="outline" className="w-full mt-auto border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/10 text-slate-300 hover:text-white">
                View Specs
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Essentials;