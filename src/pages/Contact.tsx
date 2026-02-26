import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <div className="mb-12">
        <div className="inline-flex p-4 bg-brand-primary/10 rounded-full mb-6">
          <Mail className="w-8 h-8 text-brand-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-white/50">Have questions or feedback about our eDPI calculator? We'd love to hear from you.</p>
      </div>

      {submitted ? (
        <div className="glass p-12 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-brand-primary">Message Sent!</h2>
          <p className="text-white/70">Thank you for reaching out. We'll get back to you as soon as possible.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-8 text-sm font-bold uppercase tracking-widest hover:text-brand-primary transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl text-left space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Name</label>
            <input 
              required
              type="text" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Email</label>
            <input 
              required
              type="email" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Message</label>
            <textarea 
              required
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors resize-none"
              placeholder="How can we help?"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-brand-primary text-black font-bold py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-brand-primary/90 transition-all active:scale-[0.98]"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
