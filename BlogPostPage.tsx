import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import SEO from '../components/SEO';

const BlogPostPage: React.FC = () => {
  const { postId } = useParams();
  const post = BLOG_POSTS.find(p => p.id === postId);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 animate-fadeIn">
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={`tech blog, ${post.category.toLowerCase()}, technology insights, developer guide`}
        image={post.image}
      />
      <Link to="/blog" className="inline-flex items-center text-sm text-slate-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Back to Blog
      </Link>
      
      <article>
        <header className="mb-10 text-center">
          <span className="inline-block rounded-full bg-genie-900/50 px-3 py-1 text-xs font-semibold text-genie-300 border border-genie-700/50 mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center space-x-6 text-slate-400 text-sm">
            <div className="flex items-center">
              <User size={14} className="mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar size={14} className="mr-2" />
              {post.date}
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
           <img 
             src={post.image} 
             alt={post.title} 
             loading="lazy" 
             width="896" 
             height="500"
             className="w-full h-auto object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative mb-12">
            <div className="absolute inset-0 bg-genie-600/20 blur-3xl rounded-full opacity-30"></div>
            <div className="relative bg-slate-800/50 p-8 rounded-2xl border border-white/5 shadow-2xl">
               <p className="text-xl text-slate-300 leading-relaxed font-light italic">
                 "{post.excerpt}"
               </p>
            </div>
        </div>

        {/* Content Render - using dangerouslySetInnerHTML because content is trusted static HTML from constants */}
        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-genie-400 prose-strong:text-white prose-code:text-cyan-300 prose-img:rounded-xl prose-img:shadow-xl"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <hr className="my-12 border-slate-800" />
        
        <div className="flex justify-between items-center">
           <p className="text-slate-400 text-sm">Thanks for reading ToolsGenieAI.</p>
           <button className="flex items-center space-x-2 text-sm text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors">
             <Share2 size={16} /> <span>Share Article</span>
           </button>
        </div>
      </article>
      
      {/* Related / Ad Area */}
      <div className="mt-16 bg-slate-900 border border-dashed border-slate-700 rounded-xl p-8 text-center">
         <p className="text-slate-500 font-medium">Want to write content like this automatically?</p>
         <Link to="/tools/ai-writer" className="mt-4 inline-block bg-genie-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-genie-500">
           Try AI Writer Tool
         </Link>
      </div>
    </div>
  );
};

export default BlogPostPage;