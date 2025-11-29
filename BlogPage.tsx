import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import SEO from '../components/SEO';

const BlogPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SEO 
        title="Tech Insights & Tutorials"
        description="Read the latest articles on AI technology, SEO strategies, web development trends, and software security. Expert insights for modern developers."
        keywords="tech blog, web development tutorials, ai news, seo tips, coding best practices"
      />
      <div className="mb-16 border-b border-slate-800 pb-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Tech Insights Blog</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Explore our complete library of {BLOG_POSTS.length} articles covering Artificial Intelligence, SEO strategies, and Web Development best practices.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <Link 
            to={`/blog/${post.id}`} 
            key={post.id} 
            className="group flex flex-col overflow-hidden rounded-2xl bg-slate-800 shadow-lg ring-1 ring-white/5 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-genie-500/10 h-full"
          >
            {/* Image Section with Lazy Loading */}
            <div className="aspect-video w-full overflow-hidden bg-slate-700 relative">
               <img 
                 src={post.image} 
                 alt={post.title}
                 loading="lazy"
                 width="800"
                 height="450"
                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-60"></div>
               <div className="absolute bottom-4 left-4 z-10">
                 <span className="inline-block rounded-md bg-genie-600/90 backdrop-blur-sm px-2 py-1 text-xs font-bold text-white shadow-sm">
                   {post.category}
                 </span>
               </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-x-4 text-xs text-slate-400 mb-3">
                <time dateTime={post.date} className="flex items-center">
                    <Calendar size={12} className="mr-1" /> {post.date}
                </time>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold leading-snug text-white group-hover:text-genie-300 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="mt-6 flex items-center justify-between border-t border-slate-700/50 pt-4">
                <div className="flex items-center gap-x-2">
                   <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-genie-600 to-cyan-500 flex items-center justify-center text-white text-[10px] font-bold">
                      TG
                   </div>
                   <div className="text-xs font-medium text-slate-300">
                     {post.author}
                   </div>
                </div>
                <div className="text-sm font-semibold text-genie-400 flex items-center group-hover:text-white transition-colors">
                  Read Article <ArrowRight size={14} className="ml-1"/>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Pagination / End Marker */}
      <div className="mt-16 text-center border-t border-slate-800 pt-8">
         <p className="text-slate-500 text-sm">You've reached the end of the list. Showing all {BLOG_POSTS.length} articles.</p>
      </div>
    </div>
  );
};

export default BlogPage;