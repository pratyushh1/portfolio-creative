'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { name: 'Video Editing', path: '/video-editing' },
  { name: 'Photography', path: '/photography' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 py-4 md:py-6 px-4 md:px-6 bg-black/80 backdrop-blur-sm border-b border-white/5"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold tracking-tight"
          >
            PRATYUSH
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 lg:gap-12">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <motion.div
                whileHover={{ y: -2 }}
                className={`relative text-xs lg:text-sm font-medium tracking-wider uppercase transition-colors ${
                  pathname === item.path
                    ? 'text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white transition-all"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white transition-all"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white transition-all"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-6 pb-4">
              {navItems.map((item, index) => (
                <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-sm font-medium tracking-wider uppercase transition-colors py-2 ${
                      pathname === item.path
                        ? 'text-white border-l-2 border-white pl-4'
                        : 'text-white/50 hover:text-white pl-4'
                    }`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
