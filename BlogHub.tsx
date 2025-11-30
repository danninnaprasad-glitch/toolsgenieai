import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { Button } from '../components/Button';
import { Calendar, Clock, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';

const BlogHub: React.FC = () => {
  const { blogs } = useData();
  const featuredPost = blogs[0];
  const otherPosts = blogs.slice(1);

  return (
    <div>
      <SEO title="Tech Blog - Tools Genie AI" description="Insights on AI, Web Development, and SEO." />
      <div className="text-center max-w-4xl mx-auto mb-16 pt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-400 text-sm font-bold mb-4">
           <BookOpen size={16} /> Engineering & Tech Blog
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-indigo-400">
          Future-Proof Your Workflow
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Deep dives into artificial intelligence, modern web architecture, and SEO strategies. 
          Written by engineers, for engineers.
        </p>
      </div>

      {featuredPost && (
      /* Featured Post */
      <section className="mb-20">
        <div className="bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-colors group shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="relative h-[300px] md:h-auto overflow-hidden">
               <img 
                 src={featuredPost.imageUrl} 
                 alt={featuredPost.title} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent opacity-60 md:hidden"></div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
               <div className="flex items-center gap-3 mb-4">
                 <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">{featuredPost.category}</span>
                 <span className="text-slate-400 text-sm flex items-center gap-1"><Clock size={14}/> {featuredPost.readTime}</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-indigo-300 transition-colors leading-tight">
                 <Link to={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
               </h2>
               <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                 {featuredPost.excerpt}
               </p>
               <div className="flex items-center justify-between mt-auto">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold border border-white/10">
                     {featuredPost.author.charAt(0)}
                   </div>
                   <div>
                     <p className="text-sm font-bold text-white">{featuredPost.author}</p>
                     <p className="text-xs text-slate-500">{featuredPost.date}</p>
                   </div>
                 </div>
                 <Link to={`/blog/${featuredPost.id}`}>
                    <Button>Read Full Story</Button>
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherPosts.map((post) => (
          <article key={post.id} className="flex flex-col bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 group">
            <Link to={`/blog/${post.id}`} className="relative h-56 overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                {post.category}
              </div>
            </Link>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                 <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                 <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-fuchsia-400 transition-colors leading-snug">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-white">
                        {post.author.charAt(0)}
                    </div>
                    <span className="text-xs font-medium text-slate-500">{post.author}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="text-indigo-400 text-sm font-semibold hover:underline">
                  Read Article &rarr;
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogHub;