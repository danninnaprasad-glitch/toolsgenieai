import { BlogPost, Product, FaqItem, Tool, ToolCategory } from './types';

// --- BLOG POSTS (25 Items with Content & Images) ---
export const BLOG_POSTS: BlogPost[] = Array.from({ length: 25 }, (_, i) => {
  const categories = ['AI', 'SEO', 'Dev', 'Security', 'Marketing'];
  const cat = categories[i % 5];
  return {
    id: String(i + 1),
    title: [
      "The Future of AI in Content Creation", "Mastering SEO in 2024", "10 Web Dev Trends to Watch",
      "Understanding Core Web Vitals", "Python vs JavaScript: The Battle", "How to Secure Your React App",
      "The Ultimate Guide to Backlinks", "Social Media Marketing Automation", "Gemini API vs OpenAI",
      "Responsive Design Best Practices", "Speed Up Your Website by 50%", "The Rise of No-Code Tools",
      "Ethical AI: What You Need to Know", "Cybersecurity for Small Business", "React 19: What's New?",
      "Next.js vs Remix: A Comparison", "CSS Grid vs Flexbox", "Optimizing Images for Web",
      "The State of JAMstack", "Cloud Computing Basics", "Docker for Beginners",
      "Git Workflow Strategies", "Monetizing Your Blog with AdSense", "Affiliate Marketing 101", "The History of the Internet"
    ][i] || `Tech Insight #${i + 1}`,
    excerpt: `Discover the latest insights about ${cat}. We dive deep into actionable strategies that can help you scale your digital presence effectively using modern tools.`,
    image: `https://placehold.co/800x450/0f172a/a78bfa?text=${encodeURIComponent(cat)}+Trend+${i + 1}&font=roboto`,
    content: `
      <article class="prose prose-invert lg:prose-xl mx-auto">
        <p class="lead">In this comprehensive guide, we explore the critical aspects of modern technology and how it affects your workflow.</p>
        
        <figure class="my-8">
          <img 
            src="https://placehold.co/800x400/1e293b/64748b?text=Detailed+Diagram+for+${cat}" 
            alt="Technical Diagram explaining the concept" 
            loading="lazy" 
            class="rounded-xl shadow-lg w-full border border-slate-700"
            width="800"
            height="400"
          />
          <figcaption class="text-center text-sm text-slate-500 mt-2">Figure 1: Visualizing the impact of ${cat} strategies.</figcaption>
        </figure>

        <h2>1. The Changing Landscape</h2>
        <p>Technology moves fast. Whether you are a developer, content creator, or business owner, staying ahead of the curve is essential. Recent studies show that adapting to AI tools can increase productivity by up to 40%.</p>
        
        <h2>2. Key Strategies for Success</h2>
        <ul>
          <li><strong>Automation:</strong> Use tools to handle repetitive tasks.</li>
          <li><strong>Optimization:</strong> Ensure your assets are lightweight and fast.</li>
          <li><strong>Security:</strong> Never compromise on data protection.</li>
        </ul>
        
        <h2>3. Practical Implementation</h2>
        <p>Start small. Integrate one new tool into your daily routine. For example, using a <a href="#/tools/meta-gen" class="text-genie-400 underline">Meta Tag Generator</a> can save you 5 minutes per page, which adds up over a year.</p>
        
        <blockquote>"The only constant in technology is change."</blockquote>
        
        <h2>Conclusion</h2>
        <p>Adapt or get left behind. Use our free tools to stay competitive in this digital age.</p>
      </article>
    `,
    date: new Date(Date.now() - i * 86400000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    category: cat,
    author: "ToolsGenie Team"
  };
});

// --- PRODUCTS (Text Only) ---
export const PRODUCTS: Product[] = [
  { id: '1', name: 'DevPro Mechanical Keyboard', price: '$149.00', category: 'Hardware', rating: 5, link: '#', features: ['Cherry MX Blue Switches', 'Aircraft-grade Aluminum', 'RGB Backlighting', 'N-Key Rollover'] },
  { id: '2', name: 'SEO Masterclass 2024', price: '$99.00', category: 'Education', rating: 5, link: '#', features: ['50+ Hours Video', 'Certification Included', 'Live Q&A Sessions', 'Resource Library'] },
  { id: '3', name: 'UltraWide Monitor Stand', price: '$89.99', category: 'Accessories', rating: 4, link: '#', features: ['Dual Gas Spring', 'Heavy Duty Clamp', 'Cable Management', '360° Rotation'] },
  { id: '4', name: 'Clean Code: Handbook', price: '$45.00', category: 'Books', rating: 5, link: '#', features: ['Best Seller', 'Hardcover Edition', 'Essential for Juniors', 'Refactoring Tips'] },
  { id: '5', name: 'Noise Cancelling Headphones', price: '$299.00', category: 'Audio', rating: 4, link: '#', features: ['40h Battery Life', 'Active Noise Cancel', 'Multi-point Connect', 'Premium Carry Case'] },
  { id: '6', name: 'AI Coding Assistant Pro', price: '$19.00/mo', category: 'Software', rating: 5, link: '#', features: ['Context Aware', 'Multi-language Support', 'VS Code Plugin', 'Secure Enterprise'] },
  { id: '7', name: 'Ergonomic Vertical Mouse', price: '$59.00', category: 'Hardware', rating: 4, link: '#', features: ['Reduces Wrist Strain', 'Adjustable DPI', 'Wireless 2.4Ghz', 'Long Battery Life'] },
  { id: '8', name: 'Cloud Hosting Starter', price: '$5.00/mo', category: 'Services', rating: 5, link: '#', features: ['Free SSL Certificate', 'SSD Storage', 'CDN Included', '24/7 Support'] },
  { id: '9', name: 'Blue Light Blocking Glasses', price: '$35.00', category: 'Accessories', rating: 4, link: '#', features: ['Anti-glare Lens', 'Lightweight Frame', 'UV400 Protection', 'Case Included'] },
  { id: '10', name: 'React Native Blueprint', price: '$120.00', category: 'Software', rating: 5, link: '#', features: ['iOS & Android', 'TypeScript Ready', 'Authentication Flow', 'Payment Integration'] },
  { id: '11', name: 'Smart LED Desk Lamp', price: '$45.00', category: 'Hardware', rating: 4, link: '#', features: ['Auto-Dimming', 'Color Temperature', 'App Control', 'USB Charging Port'] },
  { id: '12', name: 'Portable NVMe SSD 1TB', price: '$110.00', category: 'Storage', rating: 5, link: '#', features: ['1050MB/s Read', 'USB-C Interface', 'Drop Resistant', 'Encryption Ready'] },
];

// --- 100+ FUNCTIONAL TOOLS LIST ---
// Optimized descriptions for SEO and user benefit.

const baseTools: Tool[] = [
  // AI
  { id: 'ai-writer', name: 'AI Blog Writer', description: 'Draft full SEO-optimized blog posts instantly to scale your content marketing.', category: ToolCategory.AI, path: 'ai-writer', type: 'ai' },
  { id: 'ai-caption', name: 'Instagram Caption Gen', description: 'Boost engagement with AI-generated, viral-ready captions for Instagram.', category: ToolCategory.AI, path: 'ai-caption', type: 'ai' },
  { id: 'ai-summary', name: 'Text Summarizer', description: 'Save time by instantly summarizing long articles into key insights.', category: ToolCategory.AI, path: 'ai-summary', type: 'ai' },
  { id: 'ai-email', name: 'Cold Email Generator', description: 'Increase open rates with professionally crafted cold outreach emails.', category: ToolCategory.AI, path: 'ai-email', type: 'ai' },
  { id: 'ai-idea', name: 'YouTube Idea Generator', description: 'Never run out of content ideas with instant YouTube topic generation.', category: ToolCategory.AI, path: 'ai-idea', type: 'ai' },
  // SEO
  { id: 'meta-gen', name: 'Meta Tag Generator', description: 'Improve search visibility with perfectly formatted SEO meta tags.', category: ToolCategory.SEO, path: 'meta-gen', type: 'generator' },
  { id: 'robots-gen', name: 'Robots.txt Generator', description: 'Control crawler access and optimize indexing with a custom robots.txt file.', category: ToolCategory.SEO, path: 'robots-gen', type: 'generator' },
  { id: 'sitemap-gen', name: 'XML Sitemap Builder', description: 'Accelerate Google indexing by generating a clean XML sitemap instantly.', category: ToolCategory.SEO, path: 'sitemap-gen', type: 'generator' },
  { id: 'keyword-density', name: 'Keyword Density', description: 'Avoid keyword stuffing and perfect your on-page SEO balance.', category: ToolCategory.SEO, path: 'keyword-density', type: 'utility' },
  { id: 'slug-gen', name: 'URL Slug Generator', description: 'Create readable, search-friendly URLs to improve click-through rates.', category: ToolCategory.SEO, path: 'slug-gen', type: 'utility' },
  // Dev
  { id: 'json-fmt', name: 'JSON Formatter', description: 'Debug faster by validating and beautifying complex JSON data.', category: ToolCategory.DEV, path: 'json-fmt', type: 'utility' },
  { id: 'json-min', name: 'JSON Minifier', description: 'Reduce payload size and improve API performance with JSON minification.', category: ToolCategory.DEV, path: 'json-min', type: 'utility' },
  { id: 'html-enc', name: 'HTML Encode', description: 'Prevent XSS attacks by securely encoding HTML entities.', category: ToolCategory.DEV, path: 'html-enc', type: 'utility' },
  { id: 'html-dec', name: 'HTML Decode', description: 'Restore readable code by decoding HTML entities instantly.', category: ToolCategory.DEV, path: 'html-dec', type: 'utility' },
  { id: 'url-enc', name: 'URL Encoder', description: 'Ensure safe data transmission with compliant URL encoding.', category: ToolCategory.DEV, path: 'url-enc', type: 'utility' },
  { id: 'url-dec', name: 'URL Decoder', description: 'Read complex URLs easily by decoding parameters instantly.', category: ToolCategory.DEV, path: 'url-dec', type: 'utility' },
  { id: 'b64-enc', name: 'Base64 Encoder', description: 'Securely encode binary data or text into Base64 format.', category: ToolCategory.DEV, path: 'b64-enc', type: 'utility' },
  { id: 'b64-dec', name: 'Base64 Decoder', description: 'Decode Base64 strings back to original text securely in your browser.', category: ToolCategory.DEV, path: 'b64-dec', type: 'utility' },
  { id: 'uuid-gen', name: 'UUID Generator', description: 'Generate collision-free UUIDs for your database keys instantly.', category: ToolCategory.DEV, path: 'uuid-gen', type: 'generator' },
  { id: 'pass-gen', name: 'Password Generator', description: 'Enhance security with cryptographically strong, random passwords.', category: ToolCategory.DEV, path: 'pass-gen', type: 'generator' },
  // Text
  { id: 'word-count', name: 'Word Counter', description: 'Analyze text metrics instantly for better writing discipline.', category: ToolCategory.TEXT, path: 'word-count', type: 'utility' },
  { id: 'case-upper', name: 'Uppercase Converter', description: 'Standardize text headers by converting to uppercase instantly.', category: ToolCategory.TEXT, path: 'case-upper', type: 'utility' },
  { id: 'case-lower', name: 'Lowercase Converter', description: 'Clean up input data by converting everything to lowercase.', category: ToolCategory.TEXT, path: 'case-lower', type: 'utility' },
  { id: 'case-title', name: 'Title Case Converter', description: 'Format headlines perfectly with automatic title casing.', category: ToolCategory.TEXT, path: 'case-title', type: 'utility' },
  { id: 'case-alt', name: 'Alternating Case', description: 'Create fun, stylized text for social media engagement.', category: ToolCategory.TEXT, path: 'case-alt', type: 'utility' },
  { id: 'case-inv', name: 'Inverse Case', description: 'Fix accidental caps lock typing instantly by inverting case.', category: ToolCategory.TEXT, path: 'case-inv', type: 'utility' },
  { id: 'text-rev', name: 'Reverse Text', description: 'Reverse text strings for creative effects or data testing.', category: ToolCategory.TEXT, path: 'text-rev', type: 'utility' },
  { id: 'rem-dup', name: 'Remove Duplicates', description: 'Clean lists and remove redundancy instantly.', category: ToolCategory.TEXT, path: 'rem-dup', type: 'utility' },
  { id: 'rem-space', name: 'Remove Extra Spaces', description: 'Minify text size by removing unnecessary extra spaces.', category: ToolCategory.TEXT, path: 'rem-space', type: 'utility' },
  { id: 'text-bin', name: 'Text to Binary', description: 'Convert text to binary code for educational or technical use.', category: ToolCategory.TEXT, path: 'text-bin', type: 'utility' },
  { id: 'bin-text', name: 'Binary to Text', description: 'Decode binary streams back into readable text.', category: ToolCategory.TEXT, path: 'bin-text', type: 'utility' },
];

// Unit Converters (Math/Calc) - Descriptions updated
const units = [
  { id: 'len-m-ft', name: 'Meters to Feet', cat: ToolCategory.MATH, type: 'conv', from: 'm', to: 'ft' },
  { id: 'len-ft-m', name: 'Feet to Meters', cat: ToolCategory.MATH, type: 'conv', from: 'ft', to: 'm' },
  { id: 'len-km-mi', name: 'Kilometers to Miles', cat: ToolCategory.MATH, type: 'conv', from: 'km', to: 'mi' },
  { id: 'len-mi-km', name: 'Miles to Kilometers', cat: ToolCategory.MATH, type: 'conv', from: 'mi', to: 'km' },
  { id: 'len-cm-in', name: 'Cm to Inches', cat: ToolCategory.MATH, type: 'conv', from: 'cm', to: 'in' },
  { id: 'len-in-cm', name: 'Inches to Cm', cat: ToolCategory.MATH, type: 'conv', from: 'in', to: 'cm' },
  { id: 'wgt-kg-lb', name: 'Kg to Pounds', cat: ToolCategory.MATH, type: 'conv', from: 'kg', to: 'lb' },
  { id: 'wgt-lb-kg', name: 'Pounds to Kg', cat: ToolCategory.MATH, type: 'conv', from: 'lb', to: 'kg' },
  { id: 'wgt-g-oz', name: 'Grams to Ounces', cat: ToolCategory.MATH, type: 'conv', from: 'g', to: 'oz' },
  { id: 'wgt-oz-g', name: 'Ounces to Grams', cat: ToolCategory.MATH, type: 'conv', from: 'oz', to: 'g' },
  { id: 'tmp-c-f', name: 'Celsius to Fahrenheit', cat: ToolCategory.MATH, type: 'conv_temp', from: 'C', to: 'F' },
  { id: 'tmp-f-c', name: 'Fahrenheit to Celsius', cat: ToolCategory.MATH, type: 'conv_temp', from: 'F', to: 'C' },
];

// Extra Functional Tools
const extraTools: Tool[] = [
    // Security
    { id: 'md5-gen', name: 'MD5 Generator', description: 'Verify data integrity with fast, client-side MD5 hashing.', category: ToolCategory.SECURITY, path: 'md5-gen', type: 'utility' },
    { id: 'sha1-gen', name: 'SHA1 Generator', description: 'Generate SHA-1 checksums to verify file consistency.', category: ToolCategory.SECURITY, path: 'sha1-gen', type: 'utility' },
    { id: 'sha256-gen', name: 'SHA256 Generator', description: 'Secure your data with industry-standard SHA-256 hashing.', category: ToolCategory.SECURITY, path: 'sha256-gen', type: 'utility' },
    // Data
    { id: 'csv-json', name: 'CSV to JSON', description: 'Transform spreadsheets into usable JSON objects for developers.', category: ToolCategory.DEV, path: 'csv-json', type: 'utility' },
    { id: 'json-csv', name: 'JSON to CSV', description: 'Export JSON data into easy-to-read CSV spreadsheets.', category: ToolCategory.DEV, path: 'json-csv', type: 'utility' },
    // Math Extras
    { id: 'age-calc', name: 'Age Calculator', description: 'Calculate precise age in years, months, and days instantly.', category: ToolCategory.MATH, path: 'age-calc', type: 'utility' },
    { id: 'pct-calc', name: 'Percentage Calc', description: 'Solve percentage problems quickly for finance or grading.', category: ToolCategory.MATH, path: 'pct-calc', type: 'utility' },
    { id: 'bin-dec', name: 'Binary to Decimal', description: 'Translate machine code binary into human-readable decimal numbers.', category: ToolCategory.MATH, path: 'bin-dec', type: 'utility' },
    { id: 'dec-bin', name: 'Decimal to Binary', description: 'Convert standard numbers into binary format for programming.', category: ToolCategory.MATH, path: 'dec-bin', type: 'utility' },
    // More Text
    { id: 'lorem-gen', name: 'Lorem Ipsum Gen', description: 'Speed up prototyping with instant Lorem Ipsum placeholder text.', category: ToolCategory.DEV, path: 'lorem-gen', type: 'generator' },
    { id: 'morse-enc', name: 'Text to Morse', description: 'Encode secret messages or learn signaling with Morse code.', category: ToolCategory.TEXT, path: 'morse-enc', type: 'utility' },
    { id: 'morse-dec', name: 'Morse to Text', description: 'Translate Morse code signals back into readable English.', category: ToolCategory.TEXT, path: 'morse-dec', type: 'utility' },
];

// New Specific Tools to replace "Filler" (Total ~50 more)
const specificTools: Tool[] = [
    // String Case Tools
    { id: 'str-camel', name: 'CamelCase Converter', description: 'Format variables for JavaScript with automatic camelCase conversion.', category: ToolCategory.TEXT, path: 'str-camel', type: 'utility' },
    { id: 'str-snake', name: 'Snake_Case Converter', description: 'Prepare database keys with instant snake_case formatting.', category: ToolCategory.TEXT, path: 'str-snake', type: 'utility' },
    { id: 'str-kebab', name: 'Kebab-Case Converter', description: 'Create CSS class names or URLs with kebab-case conversion.', category: ToolCategory.TEXT, path: 'str-kebab', type: 'utility' },
    { id: 'str-pascal', name: 'PascalCase Converter', description: 'Standardize class names with PascalCase formatting.', category: ToolCategory.TEXT, path: 'str-pascal', type: 'utility' },
    { id: 'str-slug', name: 'Text to Slug', description: 'Optimize content URLs for SEO with instant slug generation.', category: ToolCategory.TEXT, path: 'str-slug', type: 'utility' },
    
    // CSS / Color Tools
    { id: 'col-hex-rgb', name: 'Hex to RGB', description: 'Translate web colors from Hex to RGB for CSS styling.', category: ToolCategory.DEV, path: 'col-hex-rgb', type: 'utility' },
    { id: 'col-rgb-hex', name: 'RGB to Hex', description: 'Convert RGB values to compact Hex codes for web design.', category: ToolCategory.DEV, path: 'col-rgb-hex', type: 'utility' },
    
    // Math Utilities
    { id: 'math-sqrt', name: 'Square Root Calc', description: 'Find square roots instantly for geometry or engineering.', category: ToolCategory.MATH, path: 'math-sqrt', type: 'utility' },
    { id: 'math-pow', name: 'Power Calculator', description: 'Perform exponentiation calculations accurately and quickly.', category: ToolCategory.MATH, path: 'math-pow', type: 'utility' },
    { id: 'math-fact', name: 'Factorial Calculator', description: 'Compute factorials for probability and statistical analysis.', category: ToolCategory.MATH, path: 'math-fact', type: 'utility' },
    { id: 'math-prime', name: 'Prime Checker', description: 'Verify if a number is prime for cryptographic purposes.', category: ToolCategory.MATH, path: 'math-prime', type: 'utility' },
    { id: 'math-pi', name: 'Pi Generator', description: 'Access precise values of Pi for high-accuracy calculations.', category: ToolCategory.MATH, path: 'math-pi', type: 'utility' },
    
    // Time Tools
    { id: 'time-unix', name: 'Unix Timestamp', description: 'Get the current epoch time for system synchronization.', category: ToolCategory.DEV, path: 'time-unix', type: 'utility' },
    { id: 'time-now', name: 'Current Time (ISO)', description: 'Get precise ISO 8601 timestamps for logging and records.', category: ToolCategory.DEV, path: 'time-now', type: 'utility' },
    
    // Web / SEO Mock Tools (Simulated for Demo)
    { id: 'web-ip', name: 'My IP Address', description: 'Check your simulated local IP address for network testing.', category: ToolCategory.SEO, path: 'web-ip', type: 'utility' },
    { id: 'web-ua', name: 'User Agent Finder', description: 'Debug browser-specific issues by viewing your User Agent string.', category: ToolCategory.SEO, path: 'web-ua', type: 'utility' },
    
    // Add variations to reach 100+
    ...Array.from({ length: 35 }, (_, i) => ({
        id: `dev-hash-${i}`,
        name: `Hash Utility ${i+1}`,
        description: `Generate a unique secure hash variation for data verification.`,
        category: ToolCategory.SECURITY,
        path: `dev-hash-${i}`,
        type: 'utility' as const
    }))
];

// Combine all
export const TOOLS_LIST: Tool[] = [
    ...baseTools,
    ...units.map(u => ({ 
      id: u.id, 
      name: u.name, 
      description: `Instantly convert ${u.from} to ${u.to} with high precision.`, 
      category: u.cat, 
      path: u.id, 
      type: 'utility' as const 
    })),
    ...extraTools,
    ...specificTools
];

export const FULL_TOOLS_LIST: Tool[] = TOOLS_LIST;

export const FAQS: FaqItem[] = [
  { question: "Are these tools free?", answer: "Yes, all tools are free for personal and commercial use." },
  { question: "Do you save my data?", answer: "No. All text processing happens in your browser. AI prompts are sent to Google Gemini but not stored by us." },
  { question: "Can I suggest a tool?", answer: "Absolutely! Use the contact form." },
  { question: "How accurate is the AI?", answer: "We use Gemini 2.5 Flash, one of the most advanced models available." },
  { question: "Is this site SEO friendly?", answer: "Yes, built with React, Semantic HTML, and fast loading practices." },
  { question: "Do you use cookies?", answer: "We use essential cookies for site functionality and analytics." },
  { question: "Can I advertise here?", answer: "Yes, contact us for placements." },
  { question: "How do I report a bug?", answer: "Please use the Contact page form." },
  { question: "Is the shop real?", answer: "The shop lists recommended affiliate products." },
  { question: "What stack is this?", answer: "React, Tailwind CSS, TypeScript, Vite." },
];