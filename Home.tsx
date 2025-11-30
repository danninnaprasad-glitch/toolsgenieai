import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Zap, Shield, Brain, PenTool, BarChart, 
  Palette, CheckCircle, Terminal, Cpu, Code
} from 'lucide-react';
import { Button } from '../components/Button';
import { ALL_TOOLS } from '../constants';
import { useData } from '../contexts/DataContext';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const { blogs, settings } = useData();
  const featuredTools = ALL_TOOLS.slice(0, 6);
  const latestBlogs = blogs.slice(0, 3);

  const benefits = [
    {
      icon: <Shield size={32} className="text-emerald-400" />,
      title: "Privacy First Architecture",
      desc: "We utilize ephemeral processing and client-side logic. Your data never stays on our servers."
    },
    {
      icon: <Zap size={32} className="text-amber-400" />,
      title: "Zero-Latency Performance",
      desc: "Optimized WebAssembly and Edge computing ensure our tools load instantly, even on 4G."
    },
    {
      icon: <Brain size={32} className="text-fuchsia-400" />,
      title: "Powered by Gemini 2.5",
      desc: "Access the latest large language models for unparalleled accuracy in text and code generation."
    }
  ];

  const categories = [
    {
      title: "Content Creators",
      icon: <PenTool size={24} />,
      desc: "Summarizers, Rewriters & Title Generators",
      link: "/tools?cat=AI & Content",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Developers",
      icon: <Terminal size={24} />,
      desc: "Minifiers, Formatters & Converters",
      link: "/tools?cat=Web Dev",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "SEO Pros",
      icon: <BarChart size={24} />,
      desc: "Keyword Scanners & Meta Optimizers",
      link: "/tools?cat=SEO Tools",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Designers",
      icon: <Palette size={24} />,
      desc: "Color Palettes & Asset Optimizers",
      link: "/tools?cat=Design",
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <div className="space-y-24">
      <SEO />
      {/* 1. HERO SECTION */}
      <section className="relative py-24 lg:py-36 text-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-4"
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-surface border border-indigo-500/30 text-indigo-300 text-sm font-medium shadow-lg shadow-indigo-500/10">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-glow"></span>
            <span>v2.0 Now Live: Enhanced with Gemini 2.5 Flash</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-[1.1]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400">
               {settings.heroTitle}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {settings.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/tools">
              <Button className="h-14 px-8 text-lg rounded-full shadow-indigo-500/25 shadow-xl">
                <Cpu className="mr-2" size={20} /> Launch Dashboard
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant="secondary" className="h-14 px-8 text-lg rounded-full bg-surface/50 backdrop-blur border-slate-700">
                <Brain className="mr-2" size={20} /> Read Insights
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. BENEFITS SECTION */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-surface border border-white/5 hover:border-indigo-500/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-darker flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {b.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{b.title}</h3>
              <p className="text-slate-400 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ECOSYSTEMS SECTION */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore by Ecosystem</h2>
          <p className="text-slate-400">Curated toolkits designed for your specific workflow.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link key={i} to={cat.link} className="group relative overflow-hidden rounded-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/20 transition-colors" />
              <div className="p-8 relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-400 mb-6 min-h-[40px]">{cat.desc}</p>
                <div className="flex items-center text-sm font-bold text-white/70 group-hover:text-white transition-colors">
                  Open Toolkit <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. FEATURED TOOLS GRID */}
      <section className="bg-surface/30 border-y border-white/5 py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-indigo-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                <CheckCircle size={16} /> Verified Utilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Trending Tools</h2>
            </div>
            <Link to="/tools">
              <Button variant="outline">View All 100+ Tools</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <Link to={`/tool/${tool.id}`} key={tool.id} className="group">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-full p-6 rounded-2xl bg-darker border border-white/5 group-hover:border-indigo-500/50 transition-all shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${tool.isAi ? 'bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 text-indigo-400' : 'bg-surface text-slate-400'}`}>
                      {tool.isAi ? <Zap size={24} /> : <Code size={24} />}
                    </div>
                    {tool.isAi && <span className="text-[10px] font-bold bg-indigo-500 text-white px-2 py-0.5 rounded-full">AI</span>}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">{tool.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">{tool.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BLOG SECTION */}
      <section className="container mx-auto px-4 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
           <div>
             <span className="text-fuchsia-400 font-bold uppercase tracking-wider text-sm">Engineering Blog</span>
             <h2 className="text-3xl md:text-4xl font-bold mt-2">Latest Insights</h2>
           </div>
           <Link to="/blog">
             <Button variant="secondary">Browse Articles</Button>
           </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestBlogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id} className="group block h-full">
              <div className="rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-fuchsia-500/50 transition-all h-full flex flex-col">
                <div className="relative overflow-hidden h-52">
                  <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white">
                    {blog.category}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-fuchsia-300 transition-colors line-clamp-2">{blog.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">{blog.excerpt}</p>
                  
                  {/* Footer with Read More link */}
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{blog.date} • {blog.readTime}</span>
                    <span className="text-sm font-semibold text-fuchsia-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;