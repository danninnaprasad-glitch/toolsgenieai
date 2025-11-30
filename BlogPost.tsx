import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { ArrowLeft, User, Calendar, Tag, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Button } from '../components/Button';
import SEO from '../components/SEO';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { blogs } = useData();
  const post = blogs.find(p => p.id === id);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link to="/blog"><Button>Back to Blog</Button></Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto">
      <SEO title={`${post.title} - Tools Genie AI Blog`} description={post.excerpt} image={post.imageUrl} type="article" />
      <Link to="/blog" className="inline-flex items-center text-slate-400 hover:text-white mb-8 group">
        <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blog
      </Link>

      <header className="mb-12 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold mb-6">
          {post.category}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">{post.excerpt}</p>
        
        <div className="flex items-center justify-center gap-8 text-sm text-slate-400 border-y border-white/5 py-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span className="text-white font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{post.date}</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Tag size={18} />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      <div className="mb-12 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
        <img src={post.imageUrl} alt={post.title} className="w-full object-cover" />
      </div>

      <div className="grid md:grid-cols-[1fr_200px] gap-12">
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Content from Context */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <aside className="space-y-8 hidden md:block">
           <div className="sticky top-24">
             <div className="mb-8">
               <h4 className="font-bold text-white mb-4">Share this</h4>
               <div className="flex gap-2">
                 <button className="p-2 bg-surface hover:bg-indigo-600 rounded-lg transition-colors text-white"><Twitter size={20}/></button>
                 <button className="p-2 bg-surface hover:bg-blue-600 rounded-lg transition-colors text-white"><Facebook size={20}/></button>
                 <button className="p-2 bg-surface hover:bg-blue-700 rounded-lg transition-colors text-white"><Linkedin size={20}/></button>
               </div>
             </div>

             <div>
               <h4 className="font-bold text-white mb-4">Tags</h4>
               <div className="flex flex-wrap gap-2">
                 {post.tags.map(tag => (
                   <span key={tag} className="text-xs bg-surface border border-slate-700 px-2 py-1 rounded text-slate-300">
                     #{tag}
                   </span>
                 ))}
               </div>
             </div>
           </div>
        </aside>
      </div>

      <div className="mt-20 pt-12 border-t border-white/5">
        <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
           {blogs.filter(p => p.id !== post.id).slice(0, 2).map(related => (
             <Link key={related.id} to={`/blog/${related.id}`} className="flex gap-4 group">
               <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                 <img src={related.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
               </div>
               <div>
                 <h4 className="font-bold group-hover:text-indigo-400 transition-colors mb-2">{related.title}</h4>
                 <span className="text-xs text-slate-500">{related.date}</span>
               </div>
             </Link>
           ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;