import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Copy, Check, AlertCircle } from 'lucide-react';
import { ALL_TOOLS } from '../constants';
import { Button } from '../components/Button';
import { generateAIContent } from '../services/geminiService';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';

const ToolRunner: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tool = ALL_TOOLS.find(t => t.id === id);
  
  const [inputs, setInputs] = useState<Record<string, any>>({});
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Reset state when tool changes
    setInputs({});
    setOutput('');
    setCopied(false);
  }, [id]);

  if (!tool) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Tool Not Found</h1>
        <Link to="/tools"><Button>Go Back</Button></Link>
      </div>
    );
  }

  const handleInputChange = (name: string, value: any) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleExecute = async () => {
    setIsLoading(true);
    setOutput('');
    
    // Validation Logic
    if (tool.id === 'ai-summarizer') {
      const textVal = inputs['text'] || '';
      const wordCount = textVal.trim().split(/\s+/).filter((w: string) => w.length > 0).length;
      
      if (wordCount > 5000) {
        setOutput(`⚠️ Limit Exceeded: Your input contains ${wordCount} words.\n\nThe AI Smart Summarizer has a maximum limit of 5000 words per request to ensure optimal performance. Please reduce your text length and try again.`);
        setIsLoading(false);
        return;
      }
    }

    // Simulate delay for feel
    await new Promise(r => setTimeout(r, 600));

    try {
      if (tool.isAi) {
        // AI Logic
        const prompt = `Task: ${tool.name}. ${tool.description}. \nInput: ${JSON.stringify(inputs)}. \nOutput format: Plain text only, concise.`;
        const result = await generateAIContent(prompt);
        setOutput(result);
      } else {
        // Static Logic Simulation
        const logicMap: Record<string, () => string> = {
            'word-counter': () => {
                const text = inputs['text'] || '';
                return `Words: ${text.trim().split(/\s+/).length}\nCharacters: ${text.length}\nSentences: ${text.split('.').length - 1}`;
            },
            'password-generator': () => {
                const len = parseInt(inputs['length']) || 16;
                const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
                return Array.from({length: len}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
            },
            'case-converter': () => {
                const text = inputs['text'] || '';
                const mode = inputs['mode'] || 'UPPERCASE';
                if(mode === 'UPPERCASE') return text.toUpperCase();
                if(mode === 'lowercase') return text.toLowerCase();
                return text.replace(/\b\w/g, c => c.toUpperCase());
            },
            'lorem-ipsum': () => {
                return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.".repeat(parseInt(inputs['paragraphs']) || 1);
            }
        };

        if (logicMap[tool.id]) {
            setOutput(logicMap[tool.id]());
        } else if (tool.id.startsWith('generic-')) {
            setOutput(`[Simulated Output for ${tool.name}]\nProcessed input: ${Object.values(inputs).join(', ')}\nSuccess!`);
        } else {
            // Default handler for tools not explicitly implemented in this demo
            setOutput(`Functionality for ${tool.name} is ready for implementation.\nReceived Input: ${JSON.stringify(inputs, null, 2)}`);
        }
      }
    } catch (e) {
      setOutput("Error processing request.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toolSchema = {
    "@type": "SoftwareApplication",
    "name": tool.name,
    "applicationCategory": tool.category,
    "operatingSystem": "Web",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <SEO 
        title={`${tool.name} - Free Online Tool`} 
        description={tool.description}
        type="application"
        schema={toolSchema}
      />
      <Link to="/tools" className="inline-flex items-center text-slate-400 hover:text-white mb-6">
        <ArrowLeft size={18} className="mr-2" /> Back to Tools
      </Link>

      <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-8 border-b border-white/5 bg-gradient-to-r from-indigo-900/20 to-fuchsia-900/20">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded text-xs font-bold uppercase">
              {tool.category}
            </span>
            {tool.isAi && (
                <span className="bg-fuchsia-500/20 text-fuchsia-300 px-2 py-1 rounded text-xs font-bold uppercase flex items-center gap-1">
                   <AlertCircle size={12}/> AI Powered
                </span>
            )}
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{tool.name}</h1>
          <p className="text-slate-300 max-w-2xl">{tool.description}</p>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white mb-4">Configuration</h2>
            {tool.inputs.map((input) => (
              <div key={input.name}>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  {input.label}
                </label>
                {input.type === 'textarea' ? (
                  <textarea
                    className="w-full h-40 bg-darker border border-slate-700 rounded-lg p-3 text-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                    placeholder={input.placeholder}
                    onChange={(e) => handleInputChange(input.name, e.target.value)}
                  />
                ) : input.type === 'select' ? (
                  <select
                    className="w-full bg-darker border border-slate-700 rounded-lg p-3 text-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                    onChange={(e) => handleInputChange(input.name, e.target.value)}
                  >
                    {input.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                ) : (
                  <input
                    type={input.type}
                    className="w-full bg-darker border border-slate-700 rounded-lg p-3 text-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder={input.placeholder}
                    onChange={(e) => handleInputChange(input.name, e.target.value)}
                  />
                )}
              </div>
            ))}
            <Button 
                onClick={handleExecute} 
                isLoading={isLoading} 
                className="w-full py-3 text-lg"
            >
              {tool.actionLabel}
            </Button>
          </div>

          {/* Output Section */}
          <div className="bg-darker rounded-xl border border-slate-700 p-6 flex flex-col min-h-[400px]">
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
              <h2 className="text-lg font-semibold text-white">Result</h2>
              {output && (
                <button
                  onClick={copyToClipboard}
                  className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center gap-1"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              )}
            </div>
            <div className="flex-grow font-mono text-sm text-slate-300 whitespace-pre-wrap overflow-y-auto max-h-[500px]">
              {isLoading ? (
                <div className="flex items-center justify-center h-full text-slate-500">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </div>
                </div>
              ) : output ? (
                output
              ) : (
                <span className="text-slate-600 italic">Results will appear here...</span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Result Ad */}
      <AdUnit slot="result-ad" className="mt-8" />
    </div>
  );
};

export default ToolRunner;