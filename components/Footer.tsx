'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com/pratyyush__', icon: 'IG' },
  { name: 'YouTube', url: 'https://www.youtube.com/@lenskhopdi', icon: 'YT' },
  { name: 'Email', url: 'mailto:pratyushkv3@gmail.com', icon: 'EM' },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Pratyush</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Professional video editing for brands and creators. 6+ years of experience 
              delivering exceptional results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80">Navigation</h4>
            <div className="flex flex-col gap-2">
              {['Work', 'About', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-xs font-bold hover:shadow-glow transition-shadow"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex justify-between items-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Pratyush. All rights reserved.</p>
          <p>Built with Next.js & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
