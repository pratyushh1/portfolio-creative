'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-8">CONTACT</h1>
            <div className="h-px w-20 bg-white mb-12"></div>
            <p className="text-2xl text-white/60 max-w-2xl">
              Available for freelance projects and collaborations
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-20">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <a
                    href="mailto:pratyushkv3@gmail.com"
                    className="block group"
                  >
                    <div className="text-white/40 text-sm uppercase tracking-wider mb-2">Email</div>
                    <div className="text-2xl hover:text-white/80 transition-colors">
                      pratyushkv3@gmail.com
                    </div>
                  </a>

                  <div className="block group">
                    <div className="text-white/40 text-sm uppercase tracking-wider mb-2">Instagram</div>
                    <div className="text-2xl hover:text-white/80 transition-colors">
                      <a href="https://instagram.com/lenskhopdi" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        @lenskhopdi
                      </a>
                      <span> </span>
                      <a href="https://instagram.com/pratyyush__" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        @pratyyush__
                      </a>
                    </div>
                  </div>

                  <a
                    href="https://www.youtube.com/@lenskhopdi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="text-white/40 text-sm uppercase tracking-wider mb-2">YouTube</div>
                    <div className="text-2xl hover:text-white/80 transition-colors">
                      Lens Khopdi
                    </div>
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <p className="text-white/60 text-sm">
                  Response time: 24 hours<br />
                  For urgent projects, mention it in your message
                </p>
              </div>
            </motion.div>

            {/* Right - Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold mb-8">What I Do</h2>
              <div className="space-y-6">
                {[
                  'Video Editing (Reels, Shorts, Long-Form)',
                  'Photography (Portrait, Product, Event)',
                  'Graphic Design (Branding, Posters, UI/UX)',
                  'Brand Content & Storytelling',
                  'Social Media Content Creation',
                  'Color Grading & Post-Production',
                  'Photo Retouching & Enhancement',
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="text-xl text-white/80 border-l-2 border-white/20 pl-6 hover:border-white hover:text-white transition-all"
                  >
                    {service}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
