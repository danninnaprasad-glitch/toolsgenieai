import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Search, Sparkles, Zap, ArrowLeft, Check, Copy } from 'lucide-react';
import { FULL_TOOLS_LIST } from '../constants';
import { Tool, ToolCategory } from '../types';
import { generateContent } from '../services/gemini';
import SEO from '../components/SEO';

// --- THE LOGIC ENGINE ---
// This handles the functionality for all 100+ tools dynamically
const processUtility = (toolId: string, input: string): string => {
  if (!input && !toolId.includes('gen') && !toolId.includes('time') && !toolId.includes('web')) return '';
  
  try {
    const num = parseFloat(input);

    // 1. UNIT CONVERTERS
    if (toolId.startsWith('len-') || toolId.startsWith('wgt-')) {
      const parts = toolId.split('-');
      const from = parts[1];
      const to = parts[2];
      
      const factors: Record<string, number> = {
        'm-ft': 3.28084, 'ft-m': 0.3048,
        'km-mi': 0.621371, 'mi-km': 1.60934,
        'cm-in': 0.393701, 'in-cm': 2.54,
        'kg-lb': 2.20462, 'lb-kg': 0.453592,
        'g-oz': 0.035274, 'oz-g': 28.3495
      };
      
      const key = `${from}-${to}`;
      if (factors[key] && !isNaN(num)) return (num * factors[key]).toFixed(4);
    }
    
    // 2. TEMP CONVERTERS
    if (toolId === 'tmp-c-f' && !isNaN(num)) return ((num * 9/5) + 32).toFixed(2);
    if (toolId === 'tmp-f-c' && !isNaN(num)) return ((num - 32) * 5/9).toFixed(2);

    // 3. TEXT TOOLS
    switch (toolId) {
      case 'word-count': return `Words: ${input.trim().split(/\s+/).length}\nCharacters: ${input.length}\nLines: ${input.split('\n').length}`;
      case 'case-upper': return input.toUpperCase();
      case 'case-lower': return input.toLowerCase();
      case 'case-title': return input.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
      case 'case-alt': return input.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');
      case 'case-inv': return input.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
      case 'text-rev': return input.split('').reverse().join('');
      case 'rem-dup': return [...new Set(input.split('\n'))].join('\n');
      case 'rem-space': return input.replace(/\s+/g, ' ').trim();
      case 'text-bin': return input.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
      case 'bin-text': return input.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
      case 'morse-enc': 
        const morse: Record<string, string> = {'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----'};
        return input.toLowerCase().split('').map(c => morse[c] || c).join(' ');
      case 'morse-dec': return "Text decoding from Morse coming soon.";
      case 'str-camel': return input.replace(/(?:^\w|[A-Z]|\b\w)/g, (w, i) => i === 0 ? w.toLowerCase() : w.toUpperCase()).replace(/\s+/g, '');
      case 'str-snake': return input.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)?.map(x => x.toLowerCase()).join('_') || input;
      case 'str-kebab': return input.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)?.map(x => x.toLowerCase()).join('-') || input;
      case 'str-pascal': return input.replace(/\w\S*/g, m => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()).replace(/\s+/g, '');
      case 'str-slug': return input.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
    }

    // 4. DEV TOOLS
    switch (toolId) {
      case 'json-fmt': return JSON.stringify(JSON.parse(input), null, 2);
      case 'json-min': return JSON.stringify(JSON.parse(input));
      case 'html-enc': return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      case 'html-dec': return input.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#039;/g, "'").replace(/&amp;/g, "&");
      case 'url-enc': return encodeURIComponent(input);
      case 'url-dec': return decodeURIComponent(input);
      case 'b64-enc': return btoa(input);
      case 'b64-dec': return atob(input);
      case 'csv-json': 
        const rows = input.split('\n');
        const headers = rows[0].split(',');
        return JSON.stringify(rows.slice(1).map(row => {
          const values = row.split(',');
          return headers.reduce((obj, header, i) => { (obj as any)[header] = values[i]; return obj; }, {});
        }), null, 2);
      case 'uuid-gen': return crypto.randomUUID();
      case 'pass-gen': return Array(16).fill(0).map(() => String.fromCharCode(33 + Math.random() * 94)).join('');
      case 'lorem-gen': return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
      
      // New specific dev tools
      case 'col-hex-rgb': 
         const hex = input.replace('#', '');
         const r = parseInt(hex.substring(0,2), 16);
         const g = parseInt(hex.substring(2,4), 16);
         const b = parseInt(hex.substring(4,6), 16);
         return isNaN(r) ? 'Invalid Hex' : `rgb(${r}, ${g}, ${b})`;
      case 'col-rgb-hex':
         const [r2,g2,b2] = input.split(',').map(n => parseInt(n.trim()));
         return "#" + ((1 << 24) + (r2 << 16) + (g2 << 8) + b2).toString(16).slice(1);
      case 'time-unix': return Math.floor(Date.now() / 1000).toString();
      case 'time-now': return new Date().toISOString();
    }

    // 5. SEO TOOLS
    if (toolId === 'meta-gen') return `<meta name="description" content="${input.substring(0, 160)}" />\n<meta name="keywords" content="${input.split(' ').join(', ')}" />`;
    if (toolId === 'robots-gen') return "User-agent: *\nDisallow: /admin\nAllow: /";
    if (toolId === 'slug-gen') return input.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
    if (toolId === 'sitemap-gen') return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${input || 'https://example.com'}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n  </url>\n</urlset>`;
    
    // New Web Mock
    if (toolId === 'web-ua') return navigator.userAgent;
    if (toolId === 'web-ip') return "127.0.0.1 (Local Simulation)";

    // 6. HASHING (Simulated for frontend)
    if (toolId.includes('hash') || toolId.includes('md5') || toolId.includes('sha')) {
       return `${toolId.toUpperCase()}-HASH-${input.split('').reduce((a,b)=>a+b.charCodeAt(0),0)}-(Client-simulated)`;
    }
    
    // 7. MATH
    if (toolId === 'bin-dec') return parseInt(input, 2).toString();
    if (toolId === 'dec-bin') return parseInt(input).toString(2);
    if (toolId === 'age-calc') {
       const birth = new Date(input);
       const diff = Date.now() - birth.getTime();
       const ageDate = new Date(diff); 
       return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
    }
    if (toolId === 'math-sqrt') return Math.sqrt(num).toString();
    if (toolId === 'math-pow') {
       const [base, exp] = input.split(',').map(n => parseFloat(n));
       return Math.pow(base, exp).toString();
    }
    if (toolId === 'math-fact') {
       let f = 1; for(let i=1; i<=num; i++) f*=i; return f.toString();
    }
    if (toolId === 'math-prime') {
       for(let i = 2, s = Math.sqrt(num); i <= s; i++) if(num % i === 0) return 'False'; 
       return num > 1 ? 'True' : 'False';
    }
    if (toolId === 'math-pi') return Math.PI.toFixed(num || 10);

    return "Result will appear here.";

  } catch (e) {
    return "Error: Invalid input for this tool.";
  }
};

const ToolInterface: React.FC<{ tool: Tool }> = ({ tool }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setInput('');
    setOutput('');
    setLoading(false);
    setCopied(false);
  }, [tool.id]);

  const handleAction = async () => {
    setLoading(true);
    if (tool.type === 'ai') {
      const res = await generateContent(input, tool.id.includes('caption') ? 'caption' : 'blog');
      setOutput(res);
    } else {
      // Simulate tiny delay for UX
      setTimeout(() => {
        const res = processUtility(tool.id, input);
        setOutput(res);
        setLoading(false);
      }, 300);
      return;
    }
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-fadeIn">
      <SEO 
        title={`${tool.name} - Free Online Tool`}
        description={`Use the ${tool.name} to ${tool.description.toLowerCase()} Free, fast, and privacy-focused online utility tool.`}
        keywords={`${tool.name}, free tool, online utility, ${tool.category.toLowerCase()}`}
      />
      <div className="mb-6 border-b border-slate-700 pb-4">
        <h1 className="text-3xl font-bold text-white mb-2">{tool.name}</h1>
        <p className="text-slate-400">{tool.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
           <label className="block text-sm font-medium text-slate-300">
             {(tool.id.includes('gen') || tool.id.includes('time') || tool.id.includes('web')) && !tool.id.includes('meta') ? 'Configuration / Input' : 'Input Data'}
           </label>
           <textarea
             className="w-full h-64 p-4 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-genie-500 outline-none text-slate-200 font-mono resize-none"
             placeholder={tool.type === 'ai' ? "Enter your prompt here..." : (tool.id === 'age-calc' ? "YYYY-MM-DD" : (tool.id.includes('col') ? "Hex or RGB..." : "Paste content or enter value..."))}
             value={input}
             onChange={(e) => setInput(e.target.value)}
           />
           <button
             onClick={handleAction}
             disabled={loading}
             className="w-full py-4 bg-gradient-to-r from-genie-600 to-cyan-500 rounded-xl font-bold text-white hover:opacity-90 disabled:opacity-50 flex justify-center items-center shadow-lg shadow-genie-900/20 transition-all hover:scale-[1.01]"
           >
             {loading ? <span className="animate-spin mr-2">⏳</span> : <Sparkles className="mr-2 h-5 w-5" />}
             {loading ? 'Processing...' : `Run ${tool.name}`}
           </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
             <label className="block text-sm font-medium text-slate-300">Result</label>
             {output && (
               <button onClick={copyToClipboard} className="text-xs flex items-center text-genie-400 hover:text-white">
                 {copied ? <Check size={14} className="mr-1"/> : <Copy size={14} className="mr-1"/>}
                 {copied ? 'Copied!' : 'Copy Result'}
               </button>
             )}
          </div>
          <div className="w-full h-64 p-4 bg-slate-950 border border-slate-800 rounded-xl text-green-400 font-mono overflow-auto whitespace-pre-wrap">
            {output || <span className="text-slate-600 italic">Results will appear here...</span>}
          </div>
          
          <div className="w-full h-24 bg-slate-800/50 rounded-lg border border-slate-700 border-dashed flex items-center justify-center text-slate-500 text-sm">
            AdSense Ad Unit
          </div>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-slate-800/30 rounded-xl border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-2">About {tool.name}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          The <strong>{tool.name}</strong> is a specialized utility in the ToolsGenieAI suite designed to help you <strong>{tool.description.toLowerCase()}</strong> efficiently.
          <br /><br />
          Whether you are a developer, writer, or student, this tool processes data instantly in your browser. 
          We prioritize privacy: your input data never leaves your device (except for AI tools which use secure Google APIs).
          Enjoy unlimited, free access to this and 100+ other professional tools without sign-ups or delays.
        </p>
      </div>
    </div>
  );
};

// --- Main Page Component ---
const ToolsPage: React.FC = () => {
  const { toolId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const navigate = useNavigate();

  const activeTool = FULL_TOOLS_LIST.find(t => t.path === toolId);

  const filteredTools = FULL_TOOLS_LIST.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) || t.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || t.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...Object.values(ToolCategory)];

  if (activeTool) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/tools')} className="mb-8 flex items-center text-sm text-slate-400 hover:text-white transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Tool Library
        </button>
        <ToolInterface tool={activeTool} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SEO 
        title="100+ Free Online Tools: AI, SEO, Developer & Math Utilities"
        description="Access over 100 free online tools for developers and creators. Generate content with AI, analyze SEO, format code, convert units, and calculate math instantly. No sign-up required."
        keywords="free online tools, ai content generator, seo tools, developer utilities, math calculators, unit converters, json formatter, text analysis, web tools"
      />
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-genie-400 to-cyan-400 bg-clip-text text-transparent">100+ Free</span> Developer & AI Tools
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          A complete suite of utilities for SEO, coding, writing, and calculations. Fast, free, and privacy-focused.
        </p>
        
        <div className="mt-10 max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-3.5 text-slate-500" size={20} />
          <input 
            type="text" 
            placeholder="Search 100+ tools..." 
            className="w-full pl-12 pr-4 py-3.5 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl focus:ring-2 focus:ring-genie-500 outline-none text-white placeholder-slate-500 shadow-xl"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-genie-600 text-white shadow-lg shadow-genie-500/25' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredTools.slice(0, 100).map((tool) => ( // Show first 100 for grid cleanliness
          <Link 
            key={tool.id} 
            to={`/tools/${tool.path}`}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-800/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-genie-500/10 border border-slate-700/50 hover:border-genie-500/30"
          >
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700/50 text-genie-400 group-hover:bg-genie-500 group-hover:text-white transition-colors">
                  <Zap size={20} />
                </div>
                {tool.category === ToolCategory.AI && (
                  <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-cyan-400">
                    AI
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-genie-300 transition-colors">{tool.name}</h3>
              <p className="mt-2 text-sm text-slate-400 line-clamp-2">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;