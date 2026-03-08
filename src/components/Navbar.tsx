import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Home, HomeIcon } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'The Tiny House', path: '/tiny-house' },
  { name: 'Experience', path: '/experience' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3 shadow-sm">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-barn-olive rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-12">
            <HomeIcon size={20} />
          </div>
          <span className="text-2xl font-serif font-semibold tracking-tight">Barnhaus</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-barn-olive",
                location.pathname === link.path ? "text-barn-olive" : "text-barn-ink/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-barn-olive text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-barn-olive/90 transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-barn-ink"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-6 right-6 glass rounded-3xl p-6 shadow-xl flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium py-2 border-b border-barn-ink/5",
                location.pathname === link.path ? "text-barn-olive" : "text-barn-ink/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-barn-olive text-white px-6 py-3 rounded-full text-center font-medium mt-2"
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
