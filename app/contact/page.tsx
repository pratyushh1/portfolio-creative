'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionHeader from '@/components/SectionHeader';

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            title="Let's Create Something"
            subtitle="Ready to bring your vision to life?"
            align="center"
          />

          <div className="grid md:grid-cols-1 gap-12 max-w-2xl mx-auto">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-white/50 text-sm mb-1">Email</div>
                    <a
                      href="mailto:pratyushkv3@gmail.com"
                      className="text-white hover:text-accent-purple transition-colors"
                    >
                      pratyushkv3@gmail.com
                    </a>
                  </div>
                  <div>
                    <div className="text-white/50 text-sm mb-1">Instagram</div>
                    <a
                      href="https://instagram.com/pratyyush__"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent-purple transition-colors"
                    >
                      @pratyyush__
                    </a>
                  </div>
                  <div>
                    <div className="text-white/50 text-sm mb-1">YouTube</div>
                    <a
                      href="https://www.youtube.com/@lenskhopdi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent-purple transition-colors"
                    >
                      Lens Khopdi
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Project Types</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-purple">•</span>
                    <span>Social content (Reels, Shorts, TikTok)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-purple">•</span>
                    <span>YouTube videos & series</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-purple">•</span>
                    <span>Brand stories & commercials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-purple">•</span>
                    <span>Product reviews & unboxings</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-accent-purple/10 to-accent-blue/10">
                <p className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-white">Response time:</strong> I typically respond
                  within 24 hours. For urgent projects, mention it in your message.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
