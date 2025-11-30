import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ToolsHub from './pages/ToolsHub';
import ToolRunner from './pages/ToolRunner';
import BlogHub from './pages/BlogHub';
import BlogPost from './pages/BlogPost';
import Essentials from './pages/Essentials';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Faq from './pages/Faq';

// Admin Imports
import Login from './pages/admin/Login';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import BlogManager from './pages/admin/BlogManager';
import EssentialsManager from './pages/admin/EssentialsManager';

// Contexts
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import SEO from './components/SEO';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <SEO />
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={<Login />} />
            <Route path="/admin/*" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="blogs" element={<BlogManager />} />
              <Route path="essentials" element={<EssentialsManager />} />
            </Route>

            {/* Public Routes */}
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/tools" element={<Layout><ToolsHub /></Layout>} />
            <Route path="/tool/:id" element={<Layout><ToolRunner /></Layout>} />
            <Route path="/blog" element={<Layout><BlogHub /></Layout>} />
            <Route path="/blog/:id" element={<Layout><BlogPost /></Layout>} />
            <Route path="/essentials" element={<Layout><Essentials /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/faq" element={<Layout><Faq /></Layout>} />
            <Route path="/privacy" element={<Layout><Legal /></Layout>} />
            <Route path="/terms" element={<Layout><Legal /></Layout>} />
            <Route path="/disclaimer" element={<Layout><Legal /></Layout>} />
          </Routes>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;