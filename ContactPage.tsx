import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SEO 
        title="Contact Us"
        description="Get in touch with ToolsGenieAI support. Report bugs, suggest features, or inquire about advertising opportunities."
        keywords="contact toolsgenieai, support, feedback, advertising, contact form"
      />
      <div className="relative bg-slate-800 shadow-2xl rounded-2xl overflow-hidden border border-slate-700">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-slate-900 p-10 relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-genie-600 blur-3xl opacity-20"></div>
             
             <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
             <p className="text-slate-400 mb-8">
               Have a question about our tools? Want to report a bug or suggest a feature? 
               Fill out the form and we'll get back to you within 24 hours.
             </p>
             
             <div className="space-y-4">
               <div className="flex items-center text-slate-300">
                 <Mail className="mr-4 text-genie-400" />
                 <span>sivasatyap9@gmail.com</span>
               </div>
               <div className="flex items-center text-slate-300">
                 <MapPin className="mr-4 text-genie-400" />
                 <span>Digital HQ, Internet</span>
               </div>
             </div>
          </div>
          
          <div className="p-10 bg-slate-800">
            <form action="https://formspree.io/f/xjkqzzed" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="mt-1 block w-full rounded-md border-slate-600 bg-slate-900 text-white shadow-sm focus:border-genie-500 focus:ring-genie-500 sm:text-sm p-3"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  required 
                  className="mt-1 block w-full rounded-md border-slate-600 bg-slate-900 text-white shadow-sm focus:border-genie-500 focus:ring-genie-500 sm:text-sm p-3"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-genie-600 hover:bg-genie-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-genie-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
