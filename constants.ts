import { Tool, BlogPost, Product, FaqItem } from './types';

export const CATEGORIES = [
  'AI & Content', 'SEO Tools', 'Web Dev', 'Performance', 'Privacy', 
  'Data', 'Marketing', 'Conversion', 'Design', 'System'
];

export const TOOLS: Tool[] = [
  // 1. AI & Content
  {
    id: 'ai-summarizer',
    name: 'AI Smart Summarizer',
    description: 'Transform lengthy reports, research papers, and articles into concise, actionable executive summaries in seconds. Uses advanced NLP to retain context while stripping away fluff.',
    category: 'AI & Content',
    icon: 'Brain',
    inputs: [{ name: 'text', label: 'Input Text', type: 'textarea', placeholder: 'Paste your long-form content here (up to 5000 words)...' }],
    actionLabel: 'Generate Summary',
    isAi: true
  },
  {
    id: 'ai-rewriter',
    name: 'Contextual Content Rewriter',
    description: 'Revitalize stale content for better engagement. Perfect for A/B testing ad copy, updating old blog posts, or paraphrasing complex technical documentation for a general audience.',
    category: 'AI & Content',
    icon: 'PenTool',
    inputs: [{ name: 'text', label: 'Original Content', type: 'textarea', placeholder: 'Text to rewrite...' }],
    actionLabel: 'Rewrite Text',
    isAi: true
  },
  {
    id: 'grammar-checker',
    name: 'Pro Grammar & Style Fixer',
    description: 'Go beyond basic spell-check. Our AI analyzes tone, clarity, and sentence structure to ensure your writing is professional, persuasive, and error-free.',
    category: 'AI & Content',
    icon: 'CheckCircle',
    inputs: [{ name: 'text', label: 'Text', type: 'textarea', placeholder: 'Check this text...' }],
    actionLabel: 'Fix Grammar',
    isAi: true
  },
  {
    id: 'headline-generator',
    name: 'Viral Headline Architect',
    description: 'Stop guessing what works. Generate high-CTR headlines for YouTube, Medium, and Landing Pages based on emotional analysis and power-word optimization.',
    category: 'AI & Content',
    icon: 'Type',
    inputs: [{ name: 'topic', label: 'Topic/Keyword', type: 'text', placeholder: 'e.g. SaaS Marketing Strategies' }],
    actionLabel: 'Generate Headlines',
    isAi: true
  },
   // 2. SEO Tools
  {
    id: 'meta-generator',
    name: 'SEO Meta Tag Optimizer',
    description: 'Create Google-friendly titles and meta descriptions that fit pixel width limits and incorporate primary keywords naturally for maximum click-through rates.',
    category: 'SEO Tools',
    icon: 'Search',
    inputs: [
      { name: 'title', label: 'Page Topic', type: 'text' },
      { name: 'keywords', label: 'Target Keywords', type: 'text' }
    ],
    actionLabel: 'Generate Tags',
    isAi: true
  },
  {
    id: 'keyword-density',
    name: 'Keyword Density Scanner',
    description: 'Avoid Google penalties. Visualize your keyword frequency distribution to ensure you are targeting terms effectively without "stuffing" your content.',
    category: 'SEO Tools',
    icon: 'BarChart',
    inputs: [
      { name: 'text', label: 'Content Body', type: 'textarea' },
      { name: 'keyword', label: 'Target Keyword', type: 'text' }
    ],
    actionLabel: 'Scan Content'
  },
  // 3. Web Dev
  {
    id: 'html-minifier',
    name: 'Production HTML Minifier',
    description: 'Strip unnecessary whitespace, comments, and formatting to reduce file size and improve Time to First Byte (TTFB). Essential for high-performance production builds.',
    category: 'Web Dev',
    icon: 'Code',
    inputs: [{ name: 'code', label: 'HTML Source', type: 'textarea' }],
    actionLabel: 'Minify HTML'
  },
  {
    id: 'css-minifier',
    name: 'Ultra CSS Compressor',
    description: 'Optimize your stylesheets. Removes redundancy and shortens color codes to ensure your website renders as fast as possible on mobile networks.',
    category: 'Web Dev',
    icon: 'FileCode',
    inputs: [{ name: 'code', label: 'CSS Source', type: 'textarea' }],
    actionLabel: 'Compress CSS'
  },
  {
    id: 'json-formatter',
    name: 'JSON Beautifier & Validator',
    description: 'Turn unreadable API responses into structured, indented JSON. Includes syntax validation to instantly spot missing commas or brackets.',
    category: 'Web Dev',
    icon: 'Database',
    inputs: [{ name: 'json', label: 'Raw JSON', type: 'textarea' }],
    actionLabel: 'Format JSON'
  },
  // 4. Performance
  {
    id: 'speed-checker',
    name: 'Global Latency Estimator',
    description: 'Simulate how your page size impacts users on different networks (3G, 4G, 5G). Helps prioritize asset optimization for global audiences.',
    category: 'Performance',
    icon: 'Zap',
    inputs: [{ name: 'size', label: 'Total Page Size (MB)', type: 'number' }],
    actionLabel: 'Calculate Estimates'
  },
  // 5. Privacy
  {
    id: 'password-generator',
    name: 'Entropy Password Generator',
    description: 'Generate cryptographically strong passwords with customizable complexity rules. Uses browser-side entropy to ensure passwords never touch a server.',
    category: 'Privacy',
    icon: 'Lock',
    inputs: [{ name: 'length', label: 'Character Length', type: 'number', placeholder: '24' }],
    actionLabel: 'Generate Secure Key'
  },
  // 6. Data
  {
    id: 'uuid-gen',
    name: 'UUID v4 Generator',
    description: 'Instantly generate RFC-compliant Universally Unique Identifiers (UUIDs) for database primary keys, session IDs, and testing.',
    category: 'Data',
    icon: 'Hash',
    inputs: [],
    actionLabel: 'Generate UUIDs'
  },
  // 8. Conversion
  {
    id: 'word-counter',
    name: 'Smart Text Analyzer',
    description: 'More than just a count. Get read-time estimates, speaking time, and detailed character breakdowns for social media limits (Twitter/X, LinkedIn).',
    category: 'Conversion',
    icon: 'AlignLeft',
    inputs: [{ name: 'text', label: 'Input Text', type: 'textarea' }],
    actionLabel: 'Analyze Metrics'
  },
  {
    id: 'case-converter',
    name: 'Universal Case Converter',
    description: 'The ultimate text cleaner. Switch between UPPERCASE, lowercase, Title Case, camelCase, and snake_case for coding or content formatting.',
    category: 'Conversion',
    icon: 'Type',
    inputs: [
      { name: 'text', label: 'Text', type: 'textarea' },
      { name: 'mode', label: 'Format Mode', type: 'select', options: ['UPPERCASE', 'lowercase', 'Title Case', 'camelCase'] }
    ],
    actionLabel: 'Convert Format'
  },
  // 9. Design
  {
    id: 'color-palette',
    name: 'AI Color Palette Generator',
    description: 'Overcome creative block. Describe a brand vibe (e.g., "Eco-friendly fintech") and receive hex codes for primary, secondary, and accent colors.',
    category: 'Design',
    icon: 'Palette',
    inputs: [{ name: 'mood', label: 'Brand Mood / Theme', type: 'text', placeholder: 'e.g., Minimalist Japanese Cafe' }],
    actionLabel: 'Generate Palette',
    isAi: true
  }
];

// Generate additional tools
const GENERIC_TOOL_TEMPLATES = [
    { suffix: 'Analyzer', desc: 'Deep dive analysis tool for ' },
    { suffix: 'Converter', desc: 'Fast format conversion for ' },
    { suffix: 'Generator', desc: 'Automated generation utility for ' },
    { suffix: 'Validator', desc: 'Schema and syntax validation for ' },
    { suffix: 'Formatter', desc: 'Clean and beautify code for ' },
];

const EXTRA_TOOLS: Tool[] = [];
CATEGORIES.forEach((cat, idx) => {
  for(let i=0; i<10; i++) {
     const template = GENERIC_TOOL_TEMPLATES[i % GENERIC_TOOL_TEMPLATES.length];
     const id = `tool-${cat.toLowerCase().replace(/\s|&/g,'-')}-${i}`;
     
     if(!TOOLS.find(t => t.id === id)){
        EXTRA_TOOLS.push({
            id,
            name: `${cat} ${template.suffix} Pro`,
            description: `A professional-grade ${template.suffix.toLowerCase()} designed for ${cat} tasks. Optimized for high-throughput workflows and instant results.`,
            category: cat as any,
            icon: 'Settings',
            inputs: [{name: 'input', label: 'Input Data', type: 'textarea'}],
            actionLabel: `Run ${template.suffix}`
        })
     }
  }
});

export const ALL_TOOLS = [...TOOLS, ...EXTRA_TOOLS];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 'ai-web-dev-2025',
        title: 'The State of AI in Web Development: 2025 Report',
        excerpt: 'We analyzed 500+ tech stacks. The results are in: AI is not replacing developers, it is turning them into architects. Here is the new roadmap for modern engineering teams.',
        category: 'Tech Trends',
        author: 'Sarah Jenkins',
        date: 'Oct 24, 2025',
        imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        content: `
            <p class="lead text-xl text-indigo-300 font-light mb-8">The landscape of web development has shifted dramatically. Gone are the days when writing boilerplate code was a rite of passage. In 2025, the role of the developer has evolved from a builder to an architect.</p>

            <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Shift from Syntax to Semantics</h2>
            <p class="text-slate-300 mb-6">Our analysis of over 500 tech stacks reveals a startling trend: manual coding volume has dropped by 40%, yet feature delivery speed has increased by 200%. Why? Because AI copilots handle the "how" while developers focus on the "what".</p>
            
            <p class="text-slate-300 mb-6">Consider the task of creating a responsive grid layout. Previously, this took 30 minutes of CSS tweaking. Now?</p>

            <div class="bg-slate-900 rounded-lg p-6 mb-8 border border-slate-700 font-mono text-sm shadow-lg">
                <div class="text-indigo-400 mb-2">// Prompt: Create a responsive product grid with Tailwind CSS</div>
                <div class="text-green-400">// AI Output:</div>
                <div class="text-slate-300">
&lt;div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-4"&gt;
  {products.map(p => (
    &lt;Card key={p.id} className="hover:shadow-xl transition-all"&gt;...&lt;/Card&gt;
  ))}
&lt;/div&gt;
                </div>
            </div>

            <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Rise of the AI Architect</h2>
            <p class="text-slate-300 mb-6">Developers are no longer judged by their WPM (Words Per Minute) but by their decision-making. The critical skills for 2025 are:</p>
            <ul class="list-disc pl-6 space-y-2 text-slate-300 mb-8">
                <li><strong>System Design:</strong> Understanding how microservices interact.</li>
                <li><strong>Security auditing:</strong> Ensuring AI-generated code doesn't introduce vulnerabilities.</li>
                <li><strong>Context Management:</strong> Feeding the right context to LLMs to get the best output.</li>
            </ul>

            <h2 class="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
            <p class="text-slate-300">AI isn't coming for your job—it's coming for the boring parts of your job. Embrace the shift and start building higher up the abstraction ladder.</p>
        `,
        readTime: '8 min read',
        tags: ['AI', 'Development', 'Career']
    },
    {
        id: 'seo-is-dead-long-live-sge',
        title: 'SEO is Dead. Long Live SGE (Search Generative Experience)',
        excerpt: 'Google\'s new AI search results have changed the game. Traditional keyword stuffing is over. Learn how to optimize for "Answer Engine Optimization" and keep your traffic.',
        category: 'SEO Strategy',
        author: 'Mike Ross',
        date: 'Oct 22, 2025',
        imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
        content: `
            <p class="lead text-xl text-fuchsia-300 font-light mb-8">For two decades, SEO was about convincing a machine that your page was relevant. In the era of Search Generative Experience (SGE), the goal is different: you must convince the AI that your answer is the <em>best</em> answer.</p>

            <h2 class="text-2xl font-bold text-white mt-8 mb-4">From SEO to AEO</h2>
            <p class="text-slate-300 mb-6">"Answer Engine Optimization" is the new paradigm. SGE summarizes results directly on the search page. If your content is fluff, it gets ignored. If it is structured data, it gets featured.</p>

            <h3 class="text-xl font-bold text-white mt-6 mb-3">Structured Data is King</h3>
            <p class="text-slate-300 mb-4">LLMs love JSON-LD. It is the language they speak natively. To survive SGE, every page on your site must have rich schema markup.</p>

            <div class="bg-slate-900 rounded-lg p-6 mb-8 border border-slate-700 font-mono text-sm shadow-lg overflow-x-auto">
<span class="text-indigo-400">&lt;script type="application/ld+json"&gt;</span>
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How does SGE impact organic traffic?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "SGE reduces click-through rates for simple queries but increases intent-driven traffic for complex ones."
    }
  }]
}
<span class="text-indigo-400">&lt;/script&gt;</span>
            </div>

            <h2 class="text-2xl font-bold text-white mt-8 mb-4">The "Experience" Factor</h2>
            <p class="text-slate-300 mb-6">Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is more vital than ever. AI can generate facts, but it cannot generate <em>experience</em>. Personal anecdotes, case studies, and contrarian opinions are your moat.</p>

            <p class="text-slate-300 font-bold">Action Item: Audit your top 10 pages today. If the content can be fully summarized by an AI in one sentence, rewrite it to add unique value.</p>
        `,
        readTime: '12 min read',
        tags: ['SEO', 'Google', 'SGE']
    },
    {
        id: 'react-server-components',
        title: 'Mastering React Server Components in Next.js',
        excerpt: 'Reduce your bundle size by 40%. A comprehensive guide to moving logic to the server, streaming UI, and achieving that perfect 100 Lighthouse score.',
        category: 'Engineering',
        author: 'David Chen',
        date: 'Oct 20, 2025',
        imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
        content: `
            <p class="lead text-xl text-cyan-300 font-light mb-8">The boundary between client and server has blurred. React Server Components (RSC) represent the biggest paradigm shift in the React ecosystem since hooks. It is not just about performance; it is about simplicity.</p>

            <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Problem with Client-Side Fetching</h2>
            <p class="text-slate-300 mb-6">We've all written the <code>useEffect</code> waterfall. Fetch user, then fetch dashboard, then fetch settings. It is slow, causes layout shift, and requires massive client-side JavaScript bundles.</p>

            <h2 class="text-2xl font-bold text-white mt-8 mb-4">The RSC Solution</h2>
            <p class="text-slate-300 mb-6">With RSC, your component <em>is</em> the backend. You can query your database directly inside your UI component. No API routes, no serialization overhead.</p>

            <div class="bg-slate-900 rounded-lg p-6 mb-8 border border-slate-700 font-mono text-sm shadow-lg">
                <div class="text-slate-500 mb-2">// UserProfile.tsx (Server Component)</div>
                <div class="text-fuchsia-400">import { db } from '@/lib/db';</div>
                <div class="text-fuchsia-400 mb-4">import { currentUser } from '@clerk/nextjs';</div>
                
                <div class="text-indigo-300">export default async function UserProfile() {</div>
                <div class="pl-4 text-white">const user = await currentUser();</div>
                <div class="pl-4 text-white">const posts = <span class="text-amber-300">await db.post.findMany({ where: { userId: user.id } })</span>;</div>
                <br>
                <div class="pl-4 text-white">return (</div>
                <div class="pl-8 text-white">&lt;div&gt;</div>
                <div class="pl-12 text-white">&lt;h1&gt;Welcome, {user.firstName}&lt;/h1&gt;</div>
                <div class="pl-12 text-white">&lt;PostList posts={posts} /&gt;</div>
                <div class="pl-8 text-white">&lt;/div&gt;</div>
                <div class="pl-4 text-white">);</div>
                <div class="text-indigo-300">}</div>
            </div>

            <h2 class="text-2xl font-bold text-white mt-8 mb-4">When to use Client Components?</h2>
            <p class="text-slate-300 mb-6">RSC doesn't replace Client Components. It augments them. Use Client Components (<code>'use client'</code>) only for:</p>
            <ul class="list-disc pl-6 space-y-2 text-slate-300">
                <li>Interactivity (onClick, onChange)</li>
                <li>State (useState, useReducer)</li>
                <li>Lifecycle effects (useEffect)</li>
                <li>Browser APIs (localStorage, geolocation)</li>
            </ul>
        `,
        readTime: '15 min read',
        tags: ['React', 'Next.js', 'Performance']
    },
    {
        id: 'prompt-engineering-guide',
        title: 'The Executive Guide to Prompt Engineering',
        excerpt: 'You are using ChatGPT wrong. Learn the "Chain of Thought" and "Tree of Thoughts" frameworks to extract business-grade outputs from Large Language Models.',
        category: 'AI Skills',
        author: 'Jessica Lee',
        date: 'Oct 18, 2025',
        imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
        content: `
            <p class="lead text-xl text-amber-300 font-light mb-8">Context is the currency of the AI age. If you are getting generic results, you are giving generic prompts. Mastering prompt engineering is the difference between a toy and a business tool.</p>

            <h2 class="text-2xl font-bold text-white mt-8 mb-4">Strategy 1: Chain of Thought (CoT)</h2>
            <p class="text-slate-300 mb-6">LLMs are bad at jumping straight to complex conclusions. They need to "show their work." By forcing the model to think step-by-step, accuracy improves by over 40% on logic tasks.</p>

            <div class="bg-slate-900 rounded-lg p-6 mb-8 border border-slate-700 font-mono text-sm shadow-lg">
                <div class="text-red-400 mb-2">// Bad Prompt</div>
                <div class="text-slate-400 mb-4">"Calculate the lifetime value of a customer who spends $50/month and stays for 2 years."</div>
                
                <div class="text-green-400 mb-2">// Good Prompt (CoT)</div>
                <div class="text-slate-300">"Calculate the lifetime value of a customer.
<br>Step 1: Identify monthly spend.
<br>Step 2: Identify retention period in months.
<br>Step 3: Multiply spend by duration.
<br>Step 4: Output the final number only."</div>
            </div>

            <h2 class="text-2xl font-bold text-white mt-8 mb-4">Strategy 2: Few-Shot Prompting</h2>
            <p class="text-slate-300 mb-6">Don't just tell the AI what to do—show it. Providing 2-3 examples of the desired input/output format drastically reduces hallucinations.</p>

            <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Role of System Instructions</h2>
            <p class="text-slate-300">Always define a persona. "You are a senior Javascript engineer" produces vastly different code than "You are a helpful assistant." Persona sets the latency and vocabulary of the response.</p>
        `,
        readTime: '6 min read',
        tags: ['AI', 'Productivity', 'Guides']
    },
    {
        id: 'zero-trust-security',
        title: 'Implementing Zero Trust Architecture for SaaS',
        excerpt: 'Perimeter defense is obsolete. How to implement identity-based security, mutual TLS, and least-privilege access in your cloud infrastructure.',
        category: 'Security',
        author: 'Alex Thorne',
        date: 'Oct 15, 2025',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        content: `
            <p class="lead text-xl text-emerald-300 font-light mb-8">"Trust nothing, verify everything." In a world of remote work and distributed clouds, the castle-and-moat security model is dead. Zero Trust is the only path forward.</p>

            <h2 class="text-2xl font-bold text-white mt-8 mb-4">The 3 Pillars of Zero Trust</h2>
            
            <h3 class="text-xl font-bold text-white mt-6 mb-3">1. Verify Explicitly</h3>
            <p class="text-slate-300 mb-4">Every access request must be fully authenticated, authorized, and encrypted. No exceptions. It doesn't matter if the request comes from inside the office WiFi or a coffee shop in Bali.</p>

            <h3 class="text-xl font-bold text-white mt-6 mb-3">2. Use Least Privilege Access</h3>
            <p class="text-slate-300 mb-4">Users should only have access to the specific data they need for the specific task at hand. JIT (Just-in-Time) access allows you to grant admin rights for 1 hour, not forever.</p>

            <h3 class="text-xl font-bold text-white mt-6 mb-3">3. Assume Breach</h3>
            <p class="text-slate-300 mb-6">Design your network as if an attacker is already inside. Segment networks to prevent lateral movement. If one container is compromised, the blast radius should be contained.</p>

            <div class="bg-slate-900 rounded-lg p-6 mb-8 border border-slate-700 font-mono text-sm shadow-lg">
                <div class="text-slate-500 mb-2">// Example Policy Configuration (YAML)</div>
                <div class="text-white">allow:</div>
                <div class="pl-4 text-white">- user: <span class="text-green-400">"dev_team"</span></div>
                <div class="pl-4 text-white">  resource: <span class="text-green-400">"staging_db"</span></div>
                <div class="pl-4 text-white">  action: <span class="text-green-400">"read"</span></div>
                <div class="pl-4 text-white">  condition:</div>
                <div class="pl-8 text-amber-300">mfa_verified: true</div>
                <div class="pl-8 text-amber-300">device_compliant: true</div>
            </div>

            <p class="text-slate-300">Implementing Zero Trust isn't a product you buy; it's a mindset you adopt. Start with identity management, and build outward from there.</p>
        `,
        readTime: '10 min read',
        tags: ['Security', 'Cloud', 'DevOps']
    }
];

export const PRODUCTS: Product[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `prod-${i}`,
  name: i % 2 === 0 ? "DevStation X1 Pro" : "Neural Link Headset",
  category: i % 2 === 0 ? "Hardware" : "Wearables",
  price: i % 2 === 0 ? "$2,499" : "$399",
  description: "Next-gen technology for professionals who demand the best.",
  image: `https://picsum.photos/400/400?random=${i + 100}`
}));

export const FAQS: FaqItem[] = [
  { 
    question: "How is Tools Genie AI different from other tool sites?", 
    answer: "We focus on 'Professional Grade' utilities. While others offer basic scripts, we integrate Gemini AI to provide context-aware results (like summarizing specifically for executives vs. students)." 
  },
  { 
    question: "Is it free for commercial use?", 
    answer: "Yes. All our web tools are free to use for personal and commercial projects. We support the platform via ethical advertising and our premium enterprise API." 
  },
  { 
    question: "Do you store the content I paste?", 
    answer: "Never. We operate on a 'Zero-Retention' policy. Your data is processed in real-time and immediately discarded. For local tools (converters), data never leaves your browser." 
  }
];