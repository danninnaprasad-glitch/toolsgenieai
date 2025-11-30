import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '../components/Button';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xjkqzzed");

  if (state.succeeded) {
      return (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
                  <Mail size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-2">Message Sent!</h2>
              <p className="text-slate-400">Thank you for contacting Tools Genie AI. We will get back to you shortly.</p>
          </div>
      )
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Have a suggestion for a new tool? Found a bug? Or just want to say hello? 
            We'd love to hear from you. Fill out the form or reach us via email.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-surface rounded-lg text-indigo-400">
                    <Mail />
                </div>
                <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-slate-400 text-sm">sivasatyap9@gmail.com</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="p-3 bg-surface rounded-lg text-fuchsia-400">
                    <MapPin />
                </div>
                <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-slate-400 text-sm">Digital World, Cloud Server</p>
                </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface p-8 rounded-2xl border border-white/5 shadow-xl">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input
                id="email"
                type="email" 
                name="email"
                className="w-full bg-darker border border-slate-700 rounded-lg p-3 text-white focus:border-indigo-500 outline-none"
                placeholder="you@example.com"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
              <input
                id="subject"
                type="text" 
                name="subject"
                className="w-full bg-darker border border-slate-700 rounded-lg p-3 text-white focus:border-indigo-500 outline-none"
                placeholder="Feature Request / Support"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full h-32 bg-darker border border-slate-700 rounded-lg p-3 text-white focus:border-indigo-500 outline-none resize-none"
                placeholder="How can we help you?"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <Button type="submit" disabled={state.submitting} className="w-full">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
