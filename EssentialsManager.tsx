import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { Button } from '../../components/Button';
import { Trash, Edit, Plus, X } from 'lucide-react';
import { Product } from '../../types';

const EssentialsManager: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({});
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEdit = (prod: Product) => {
    setFormData(prod);
    setEditingId(prod.id);
    setIsFormOpen(true);
  };

  const handleCreate = () => {
    setFormData({
      id: `prod-${Date.now()}`,
      name: '',
      category: 'Hardware',
      price: '',
      description: '',
      image: ''
    });
    setEditingId(null);
    setIsFormOpen(true);
  };

  const handleSave = () => {
    if (editingId) {
      updateProduct(formData as Product);
    } else {
      addProduct(formData as Product);
    }
    setIsFormOpen(false);
  };

  if (isFormOpen) {
    return (
      <div className="max-w-4xl mx-auto">
         <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{editingId ? 'Edit Product' : 'New Product'}</h2>
          <Button variant="secondary" onClick={() => setIsFormOpen(false)}><X size={18} /> Cancel</Button>
        </div>
        <div className="bg-surface p-6 rounded-xl space-y-4">
           <input className="w-full bg-dark p-3 rounded border border-slate-700 text-white" placeholder="Product Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
           <div className="grid md:grid-cols-2 gap-4">
            <select className="bg-dark p-3 rounded border border-slate-700 text-white" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                <option>Hardware</option>
                <option>Software</option>
                <option>Accessories</option>
                <option>AI Gadgets</option>
            </select>
            <input className="bg-dark p-3 rounded border border-slate-700 text-white" placeholder="Price (Optional display)" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} />
           </div>
           <textarea className="w-full h-32 bg-dark p-3 rounded border border-slate-700 text-white" placeholder="Description" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
           <Button onClick={handleSave} className="w-full">Save Product</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Essentials Manager</h1>
        <Button onClick={handleCreate}><Plus size={18} /> Add Product</Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map(prod => (
          <div key={prod.id} className="bg-surface p-4 rounded-xl border border-white/5">
            <h3 className="font-bold text-white mb-1">{prod.name}</h3>
            <p className="text-xs text-indigo-400 mb-2">{prod.category}</p>
            <p className="text-sm text-slate-400 mb-4 line-clamp-2">{prod.description}</p>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => handleEdit(prod)} className="flex-1 text-xs py-1"><Edit size={14}/> Edit</Button>
              <button onClick={() => deleteProduct(prod.id)} className="p-2 bg-red-500/10 text-red-400 rounded hover:bg-red-500/20"><Trash size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssentialsManager;