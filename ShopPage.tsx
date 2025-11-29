import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { PRODUCTS } from '../constants';
import SEO from '../components/SEO';

const ShopPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SEO 
        title="Tech Essentials & Developer Gear"
        description="Curated list of professional hardware, software, and courses for developers. Top-rated mechanical keyboards, monitors, and coding books."
        keywords="developer hardware, mechanical keyboards, coding courses, best monitors for programming, software deals"
      />
      <div className="mb-12 border-b border-slate-800 pb-8">
        <h1 className="text-3xl font-bold text-white">Tech Essentials</h1>
        <p className="mt-2 text-slate-400">
          Professional grade hardware, software, and resources for developers. Curated list.
        </p>
      </div>

      {/* Text-Only Data Grid Design */}
      <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-xl">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-800 text-left">
            <thead>
              <tr className="bg-slate-950/50">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Product Name</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Category</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Key Features</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Rating</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400 text-right">Price</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {PRODUCTS.map((product) => (
                <tr key={product.id} className="group hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-bold text-white group-hover:text-genie-400 transition-colors">
                      {product.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-300 border border-slate-700">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs text-slate-400 max-w-xs">
                      {product.features.slice(0, 2).join(', ')}...
                    </div>
                  </td>
                  <td className="px-6 py-4">
                     <div className="flex text-yellow-500 text-xs">
                        {'★'.repeat(product.rating)}
                        <span className="text-slate-700">{'★'.repeat(5-product.rating)}</span>
                     </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="text-sm font-mono text-white">{product.price}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a 
                      href={product.link}
                      className="inline-flex items-center text-xs font-semibold text-genie-400 hover:text-white transition-colors"
                    >
                      View <ExternalLink size={12} className="ml-1" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-slate-500">
        * Prices and availability subject to change. Some links may be affiliate links.
      </div>
    </div>
  );
};

export default ShopPage;
