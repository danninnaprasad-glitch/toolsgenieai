import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Globe, Lock, Wand2, Star, CheckCircle, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const Hero = () => (
  <div className="relative overflow-hidden bg-slate-900 pt-16 sm:pt-24 lg:pt-32 pb-16 isolate">
    {/* Tech Grid Background Animation */}
    <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      {/* Floating Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-20 animate-pulse">
         <Cpu size={200} className="text-genie-500/20 rotate-12" />
      </div>
      <div className="absolute bottom-10 left-10 -z-10 opacity-20 animate-bounce delay-700 duration-[3000ms]">
         <Globe size={120} className="text-cyan-500/20 -rotate-12" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center animate-fadeIn">
          <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-full bg-slate-950 px-4 py-1.5 text-sm font-medium text-genie-300 backdrop-blur-3xl">
              ✨ Over 100+ Free Developer Tools Available
            </span>
          </span>
        </div>
        <h1 className="bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl drop-shadow-sm animate-slideUp">
          Your Ultimate <br />
          <span className="bg-gradient-to-r from-genie-400 to-cyan-400 bg-clip-text text-transparent">AI & Tech Ecosystem</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto animate-slideUp delay-100">
          ToolsGenieAI empowers developers, writers, and SEO experts with free, high-performance utilities. 
          Generate content with AI, analyze SEO, and format code instantly.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 animate-slideUp delay-200">
          <Link
            to="/tools"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-genie-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-genie-500/25 transition-all hover:bg-genie-500 hover:shadow-genie-500/40 hover:-translate-y-1 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
            Explore 100+ Tools
            <Zap size={18} className="group-hover:text-yellow-300 transition-colors" />
          </Link>
          <Link to="/blog" className="group flex items-center text-sm font-semibold leading-6 text-white hover:text-genie-300 transition-colors">
            Read Latest Tech Insights <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
    
    {/* Deep Background Glows */}
    <div className="absolute top-0 -z-10 h-full w-full opacity-40 blur-[100px] overflow-hidden pointer-events-none">
      <div className="absolute left-[20%] top-[20%] h-[400px] w-[400px] rounded-full bg-genie-600/20 mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute right-[20%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 mix-blend-screen animate-pulse-slow delay-75"></div>
    </div>
  </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="glass-panel group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-genie-500/20 border border-slate-800 hover:border-genie-500/50">
    <div className="absolute inset-0 bg-gradient-to-br from-genie-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-800/80 text-genie-400 shadow-inner ring-1 ring-white/10 group-hover:bg-genie-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-white group-hover:text-genie-300 transition-colors">{title}</h3>
      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{description}</p>
    </div>
    {/* Decorative corner accent */}
    <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-genie-500/20 blur-xl group-hover:bg-genie-500/40 transition-all duration-300"></div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Home"
        description="ToolsGenieAI is your free resource for 100+ developer tools, SEO generators, AI content writers, and tech insights. 100% free and privacy-focused."
        keywords="free tools, developer toolkit, ai writer, seo analysis, online utilities, web dev tools, tech blog"
      />
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 bg-slate-900 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-white sm:text-4xl bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent inline-block">
               Why Choose ToolsGenieAI?
             </h2>
             <p className="mt-4 text-slate-400">Everything you need to optimize your workflow in one place.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              icon={<Wand2 size={28} />} 
              title="Powered by Gemini 2.5" 
              description="Leverage Google's latest AI model for superior content generation, code explanations, and creative writing assistance." 
            />
            <FeatureCard 
              icon={<Globe size={28} />} 
              title="Advanced SEO Suite" 
              description="Dominate search rankings with our meta tag generators, robot.txt builders, and keyword density analyzers." 
            />
            <FeatureCard 
              icon={<Lock size={28} />} 
              title="Privacy Focused" 
              description="We respect your data. All utility tools like JSON formatters and Base64 converters run locally in your browser." 
            />
             <FeatureCard 
              icon={<Cpu size={28} />} 
              title="Developer Utilities" 
              description="A massive collection of formatters, minifiers, encoders, and converters for web developers." 
            />
             <FeatureCard 
              icon={<CheckCircle size={28} />} 
              title="100% Free Forever" 
              description="No hidden subscriptions or paywalls. Access professional-grade tools without spending a dime." 
            />
             <FeatureCard 
              icon={<Star size={28} />} 
              title="Tech Essentials Shop" 
              description="Curated recommendations for the best hardware and software deals in the market." 
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-slate-950/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              <div className="group hover:bg-white/5 p-4 rounded-xl transition-colors">
                 <div className="text-4xl font-bold text-white group-hover:text-genie-400 transition-colors">100+</div>
                 <div className="mt-2 text-sm text-slate-500">Free Tools</div>
              </div>
              <div className="group hover:bg-white/5 p-4 rounded-xl transition-colors">
                 <div className="text-4xl font-bold text-white group-hover:text-genie-400 transition-colors">25+</div>
                 <div className="mt-2 text-sm text-slate-500">Blog Articles</div>
              </div>
              <div className="group hover:bg-white/5 p-4 rounded-xl transition-colors">
                 <div className="text-4xl font-bold text-white group-hover:text-genie-400 transition-colors">99.9%</div>
                 <div className="mt-2 text-sm text-slate-500">Uptime</div>
              </div>
              <div className="group hover:bg-white/5 p-4 rounded-xl transition-colors">
                 <div className="text-4xl font-bold text-white group-hover:text-genie-400 transition-colors">0s</div>
                 <div className="mt-2 text-sm text-slate-500">Lag (Local Processing)</div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-slate-800 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your productivity today.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Stop jumping between 10 different websites. Get all your SEO, writing, and coding tools in one dashboard.
              </p>
              <div className="mt-8 flex gap-x-4">
                <Link to="/tools" className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-100 transition-colors">
                  Start Using Tools
                </Link>
                <Link to="/contact" className="rounded-lg bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-colors">
                  Contact Support
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl bg-slate-900 p-8 shadow-2xl ring-1 ring-white/10 hover:ring-genie-500/50 transition-all">
               <div className="space-y-4">
                  <div className="flex items-center gap-4 border-b border-white/5 pb-4 group">
                     <div className="h-10 w-10 rounded-full bg-genie-600 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">1</div>
                     <div>
                        <h4 className="font-semibold text-white">Select a Tool</h4>
                        <p className="text-sm text-slate-400">Browse categories or search instantly.</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 border-b border-white/5 pb-4 group">
                     <div className="h-10 w-10 rounded-full bg-genie-600 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">2</div>
                     <div>
                        <h4 className="font-semibold text-white">Input Data</h4>
                        <p className="text-sm text-slate-400">Paste text, code, or enter a prompt.</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                     <div className="h-10 w-10 rounded-full bg-genie-600 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">3</div>
                     <div>
                        <h4 className="font-semibold text-white">Get Results</h4>
                        <p className="text-sm text-slate-400">Copy output instantly. No captcha, no waiting.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;