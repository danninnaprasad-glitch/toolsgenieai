import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link, Outlet } from 'react-router-dom';
import { Menu, X, Home, Cpu, ShoppingBag, HelpCircle, Mail, Zap, BookOpen, Twitter, Facebook, Linkedin, Github, Moon, Sun, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../contexts/DataContext';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [showCookie, setShowCookie] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const { settings } = useData();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      setShowCookie(true);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookie(false);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'AI Tools', path: '/tools', icon: <Cpu size={18} /> },
    { name: 'Tech Blog', path: '/blog', icon: <BookOpen size={18} /> },
    { name: 'Essentials', path: '/essentials', icon: <ShoppingBag size={18} /> },
    { name: 'FAQ', path: '/faq', icon: <HelpCircle size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-darker text-slate-900 dark:text-slate-200 flex flex-col transition-colors duration-300 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-darker/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white font-bold group-hover:animate-glow">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-fuchsia-500 dark:from-indigo-400 dark:to-fuchsia-400">
              Tools Genie AI
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white'
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-400"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 top-16 z-40 bg-white/95 dark:bg-darker/95 backdrop-blur-xl p-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg text-lg ${
                      isActive ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'
                    }`
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Rendered Here via Outlet */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-dark border-t border-slate-200 dark:border-white/5 pt-12 pb-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-slate-900 dark:text-white font-bold mb-4">Tools Genie AI</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Your premier destination for AI-powered utilities, SEO tools, and developer resources. Built for the modern web.
              </p>
              <div className="flex gap-4">
                {settings.socials.twitter && <a href={settings.socials.twitter} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400"><Twitter size={18}/></a>}
                {settings.socials.facebook && <a href={settings.socials.facebook} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-500 dark:hover:text-blue-500"><Facebook size={18}/></a>}
                {settings.socials.linkedin && <a href={settings.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-500 dark:hover:text-blue-400"><Linkedin size={18}/></a>}
                {settings.socials.github && <a href={settings.socials.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-500 dark:hover:text-white"><Github size={18}/></a>}
              </div>
            </div>
            <div>
              <h4 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">Tools</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><NavLink to="/tools?cat=AI & Content" className="hover:text-indigo-600 dark:hover:text-white">AI Writers</NavLink></li>
                <li><NavLink to="/tools?cat=SEO Tools" className="hover:text-indigo-600 dark:hover:text-white">SEO Checkers</NavLink></li>
                <li><NavLink to="/tools?cat=Web Dev" className="hover:text-indigo-600 dark:hover:text-white">Converters</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><NavLink to="/blog" className="hover:text-indigo-600 dark:hover:text-white">Tech Blog</NavLink></li>
                <li><NavLink to="/essentials" className="hover:text-indigo-600 dark:hover:text-white">Tech Essentials</NavLink></li>
                <li><NavLink to="/faq" className="hover:text-indigo-600 dark:hover:text-white">FAQs</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><NavLink to="/privacy" className="hover:text-indigo-600 dark:hover:text-white">Privacy Policy</NavLink></li>
                <li><NavLink to="/terms" className="hover:text-indigo-600 dark:hover:text-white">Terms of Service</NavLink></li>
                <li><NavLink to="/disclaimer" className="hover:text-indigo-600 dark:hover:text-white">Disclaimer</NavLink></li>
                <li>
                  <NavLink to="/admin" className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 mt-2 font-medium">
                     Admin Panel
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-white/5 pt-6 text-center text-slate-600 dark:text-slate-600 text-sm flex items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} Tools Genie AI. All Rights Reserved.</span>
            <Link to="/admin" className="text-slate-400 hover:text-indigo-500 transition-colors p-1" title="Admin Login">
               <Lock size={14} />
            </Link>
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      <AnimatePresence>
        {showCookie && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-white dark:bg-surface border-t border-indigo-500/20 p-4 z-50 shadow-2xl"
          >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                We use cookies to enhance your experience and analyze traffic. By using our tools, you agree to our Privacy Policy.
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={acceptCookies}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-sm font-medium transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;