import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LayoutDashboard, FileText, ShoppingBag, LogOut, ExternalLink } from 'lucide-react';

const AdminLayout: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) navigate('/admin');
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-darker text-slate-200 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-white/5 flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-xl font-bold text-white">Genie Admin</h2>
          <p className="text-xs text-slate-500">v2.4.0 Control Panel</p>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          <NavLink to="/admin/dashboard" className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
            <LayoutDashboard size={18} /> Settings
          </NavLink>
          <NavLink to="/admin/blogs" className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
            <FileText size={18} /> Blog Posts
          </NavLink>
          <NavLink to="/admin/essentials" className={({isActive}) => `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
            <ShoppingBag size={18} /> Essentials
          </NavLink>
        </nav>

        <div className="p-4 border-t border-white/5">
          <NavLink to="/" className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 mb-4 px-3">
             <ExternalLink size={14}/> View Live Site
          </NavLink>
          <button onClick={logout} className="w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors text-sm font-medium">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-grow ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;