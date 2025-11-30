import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import SEO from './components/SEO';

// Lazy Load Pages for Performance (Code Splitting)
const Home = React.lazy(() => import('./pages/Home'));
const ToolsHub = React.lazy(() => import('./pages/ToolsHub'));
const ToolRunner = React.lazy(() => import('./pages/ToolRunner'));
const BlogHub = React.lazy(() => import('./pages/BlogHub'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Essentials = React.lazy(() => import('./pages/Essentials'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Legal = React.lazy(() => import('./pages/Legal'));
const Faq = React.lazy(() => import('./pages/Faq'));

// Admin Pages
const Login = React.lazy(() => import('./pages/admin/Login'));
const AdminLayout = React.lazy(() => import('./pages/admin/AdminLayout'));
const Dashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const BlogManager = React.lazy(() => import('./pages/admin/BlogManager'));
const EssentialsManager = React.lazy(() => import('./pages/admin/EssentialsManager'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-darker text-slate-400">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-sm font-medium animate-pulse">Loading Tools Genie...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <SEO />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
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

              {/* Admin Routes */}
              <Route path="/admin" element={<Login />} />
              <Route path="/admin/dashboard" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
              </Route>
              <Route path="/admin/blogs" element={<AdminLayout />}>
                 <Route index element={<BlogManager />} />
              </Route>
              <Route path="/admin/essentials" element={<AdminLayout />}>
                 <Route index element={<EssentialsManager />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;