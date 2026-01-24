'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com/pratyyush__' },
  { name: 'YouTube', url: 'https://www.youtube.com/@lenskhopdi' },
  { name: 'Email', url: 'mailto:pratyushkv3@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 md:mt-32 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Let's Create Something</h3>
            <p className="text-white/60 text-sm md:text-base lg:text-lg mb-6 md:mb-8">
              Available for video editing, photography & collaborations
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 md:px-8 py-2.5 md:py-3 bg-white text-black font-semibold tracking-wide uppercase text-sm md:text-base"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>

          {/* Links & Social */}
          <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-4">
            <div>
              <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-white/40">Navigation</h4>
              <div className="flex flex-col gap-3">
                {['Video Editing', 'Photography', 'About', 'Contact'].map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-white/40">Connect</h4>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Pratyush. All rights reserved.</p>
          <p className="uppercase tracking-wide text-xs">Video Editor × Photographer</p>
        </div>
      </div>
    </footer>
  );
}
