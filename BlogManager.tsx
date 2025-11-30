import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { Button } from '../../components/Button';
import { Trash, Edit, Plus, X } from 'lucide-react';
import { BlogPost } from '../../types';

const BlogManager: React.FC = () => {
  const { blogs, addBlog, updateBlog, deleteBlog } = useData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<BlogPost>>({});
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEdit = (blog: BlogPost) => {
    setFormData(blog);
    setEditingId(blog.id);
    setIsFormOpen(true);
  };

  const handleCreate = () => {
    setFormData({
      id: `post-${Date.now()}`,
      title: '',
      excerpt: '',
      content: '',
      category: 'Tech',
      author: 'Admin',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80',
      tags: []
    });
    setEditingId(null);
    setIsFormOpen(true);
  };

  const handleSave = () => {
    if (editingId) {
      updateBlog(formData as BlogPost);
    } else {
      addBlog(formData as BlogPost);
    }
    setIsFormOpen(false);
  };

  if (isFormOpen) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{editingId ? 'Edit Post' : 'New Post'}</h2>
          <Button variant="secondary" onClick={() => setIsFormOpen(false)}><X size={18} /> Cancel</Button>
        </div>
        <div className="bg-surface p-6 rounded-xl space-y-4">
          <input className="w-full bg-dark p-3 rounded border border-slate-700 text-white font-bold text-xl" placeholder="Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
          <div className="grid md:grid-cols-2 gap-4">
            <input className="bg-dark p-3 rounded border border-slate-700 text-white" placeholder="Category" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
            <input className="bg-dark p-3 rounded border border-slate-700 text-white" placeholder="Image URL" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} />
          </div>
           <input className="w-full bg-dark p-3 rounded border border-slate-700 text-white" placeholder="Excerpt (Short description)" value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} />
           <textarea className="w-full h-96 bg-dark p-3 rounded border border-slate-700 text-white font-mono" placeholder="HTML Content..." value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} />
           <Button onClick={handleSave} className="w-full">Save Post</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Manager</h1>
        <Button onClick={handleCreate}><Plus size={18} /> Add New Post</Button>
      </div>
      <div className="bg-surface rounded-xl border border-white/5 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5 text-slate-400">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Date</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog.id} className="border-t border-white/5 hover:bg-white/5">
                <td className="p-4 font-medium">{blog.title}</td>
                <td className="p-4"><span className="text-xs bg-indigo-500/10 text-indigo-400 px-2 py-1 rounded">{blog.category}</span></td>
                <td className="p-4 text-slate-400 text-sm">{blog.date}</td>
                <td className="p-4 text-right space-x-2">
                  <button onClick={() => handleEdit(blog)} className="p-2 hover:text-indigo-400 transition-colors"><Edit size={16} /></button>
                  <button onClick={() => { if(confirm('Delete this post?')) deleteBlog(blog.id) }} className="p-2 hover:text-red-400 transition-colors"><Trash size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogManager;