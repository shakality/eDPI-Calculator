import React from 'react';
import { Link } from 'react-router-dom';
import { MousePointer2, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
              <MousePointer2 className="w-6 h-6 text-brand-primary" />
            </div>
            <span className="font-bold text-xl tracking-tight">eDPI <span className="text-brand-primary">Calculator</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-brand-primary transition-colors">Calculator</Link>
            <Link to="/about" className="text-sm font-medium hover:text-brand-primary transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-brand-primary transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white/70 hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium hover:bg-white/5 rounded-lg">Calculator</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium hover:bg-white/5 rounded-lg">About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium hover:bg-white/5 rounded-lg">Contact</Link>
              <Link to="/privacy-policy" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-sm text-white/50 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-sm text-white/50 hover:text-white">Terms of Service</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
