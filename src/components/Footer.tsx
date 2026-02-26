import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="font-bold text-2xl tracking-tight">eDPI <span className="text-brand-primary">Calculator</span></span>
            </Link>
            <p className="text-white/50 max-w-sm leading-relaxed">
              The ultimate tool for FPS gamers to calculate and optimize their sensitivity. 
              Built for Valorant, CS2, and competitive excellence.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/" className="hover:text-brand-primary transition-colors">eDPI Calculator</Link></li>
              <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/privacy-policy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} eDPI Calculator. All rights reserved.
          </p>
          <p className="text-xs text-white/30 italic">
            Not affiliated with Riot Games or Valve Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
