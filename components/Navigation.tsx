'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Video Editing', path: '/video-editing' },
  { name: 'Photography', path: '/photography' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1 }}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled ? 'py-4 bg-black/50 backdrop-blur-md' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Home Link */}
          <Link href="/" onClick={() => setIsOpen(false)} className="z-50 relative group">
            <motion.div
              className="flex flex-col"
            >
              <span className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-white group-hover:text-white/70 transition-colors">Pratyush</span>
              <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase hidden md:block group-hover:text-white/60 transition-colors">Portfolio</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12 items-center">
            {navItems.map((item, i) => (
              <Link key={item.path} href={item.path} className="group relative overflow-hidden">
                <span className={`block text-xs font-medium tracking-[0.2em] uppercase transition-all duration-500 ${
                    pathname === item.path ? 'text-white' : 'text-white/60 group-hover:text-white'
                }`}>
                  {item.name}
                </span>
                <span className={`absolute bottom-0 left-0 w-full h-px bg-white transform origin-left transition-transform duration-500 ${
                  pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-end gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span className={`h-px w-8 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-px w-6 bg-white/70 group-hover:w-8 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-px w-8 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-2xl font-light tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
