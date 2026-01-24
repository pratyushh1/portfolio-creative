'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Video Editing', path: '/video-editing' },
  { name: 'Photography', path: '/photography' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 py-6 px-6 bg-black/80 backdrop-blur-sm border-b border-white/5"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-tight"
          >
            PRATYUSH
          </motion.div>
        </Link>

        <div className="flex gap-12">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <motion.div
                whileHover={{ y: -2 }}
                className={`relative text-sm font-medium tracking-wider uppercase transition-colors ${
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
      </div>
    </motion.nav>
  );
}
