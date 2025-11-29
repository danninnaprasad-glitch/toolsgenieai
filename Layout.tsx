import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Cpu, ShoppingBag, HelpCircle, Mail, Github, Book } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consented = localStorage.getItem('cookie-consent');
    if (!consented) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-slate-900 border-t border-genie-500/30 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-300">
          We use cookies to enhance your experience, serve personalized ads, and analyze traffic. By using our site, you agree to our <Link to="/cookies" className="text-genie-400 underline">Cookie Policy</Link>.
        </p>
        <div className="flex gap-4">
           <button onClick={accept} className="whitespace-nowrap rounded-lg bg-genie-600 px-6 py-2 text-sm font-bold text-white hover:bg-genie-500">
             Accept All
           </button>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navs = [
    { name: 'Home', path: '/', icon: <Zap size={18} /> },
    { name: 'AI Tools', path: '/tools', icon: <Cpu size={18} /> },
    { name: 'Blog', path: '/blog', icon: <Book size={18} /> },
    { name: 'Essentials', path: '/shop', icon: <ShoppingBag size={18} /> },
    { name: 'FAQ', path: '/faq', icon: <HelpCircle size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ];

  const isActive = (path: string) => {
    if (path === '/tools' && location.pathname.startsWith('/tools')) return true;
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-900/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-genie-600 to-cyan-400 shadow-lg shadow-genie-500/20">
                <Zap className="text-white" size={20} fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                ToolsGenie<span className="text-genie-400">AI</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1">
              {navs.map((nav) => (
                <Link
                  key={nav.name}
                  to={nav.path}
                  className={`group relative flex items-center space-x-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive(nav.path)
                      ? 'bg-white/10 text-white'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {nav.icon}
                  <span>{nav.name}</span>
                  {isActive(nav.path) && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-genie-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navs.map((nav) => (
              <Link
                key={nav.name}
                to={nav.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 rounded-md px-3 py-3 text-base font-medium ${
                  isActive(nav.path)
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {nav.icon}
                <span>{nav.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="mt-auto border-t border-white/5 bg-slate-950 pt-16 text-slate-400">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-2 text-white mb-4">
            <Zap className="text-genie-500" />
            <span className="text-xl font-bold">ToolsGenieAI</span>
          </div>
          <p className="text-sm leading-6 text-slate-500">
            Empowering creators and developers with next-gen AI tools, SEO utilities, and tech insights. 100% Free & Private.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Top Tools</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/tools/ai-writer" className="hover:text-genie-400 transition-colors">AI Blog Writer</Link></li>
            <li><Link to="/tools/meta-gen" className="hover:text-genie-400 transition-colors">Meta Tag Generator</Link></li>
            <li><Link to="/tools/robots-gen" className="hover:text-genie-400 transition-colors">Robots.txt Builder</Link></li>
            <li><Link to="/tools/json-fmt" className="hover:text-genie-400 transition-colors">JSON Formatter</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Legal</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/contact" className="hover:text-genie-400 transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-genie-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-genie-400 transition-colors">Terms of Service</Link></li>
            <li><Link to="/cookies" className="hover:text-genie-400 transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Stay Updated</h3>
          <p className="mt-4 text-sm text-slate-500">Get the latest tools and tech news.</p>
          <div className="mt-4 flex">
            <input type="email" placeholder="Enter your email" className="w-full rounded-l-lg bg-slate-900 border border-slate-800 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-genie-500" />
            <button className="rounded-r-lg bg-genie-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-genie-500 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-white/5 py-8 text-center text-xs text-slate-600">
        &copy; {new Date().getFullYear()} ToolsGenieAI. All rights reserved. Built with React & Gemini.
      </div>
    </div>
  </footer>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-slate-50 selection:bg-genie-500 selection:text-white">
      <Header />
      <main className="flex-grow relative z-0">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
