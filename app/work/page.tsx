'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import SectionHeader from '@/components/SectionHeader';

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader
            title="Work"
            subtitle="Professional video editing for leading brands and creators"
            align="center"
          />

          {/* Featured Clients Section */}
          <div className="grid md:grid-cols-1 gap-10 mb-20">
            {/* Tech Burner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-12 rounded-2xl group hover:shadow-glow transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Image
                    src="/clients/tech-burner.jpg"
                    alt="Tech Burner"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold mb-4 text-gradient">Tech Burner</h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-4">
                    Crafting high-energy, viral tech content for one of India's leading tech channels. 
                    Specializing in product reviews, unboxings, and tech comparisons with dynamic editing 
                    that maximizes viewer retention and engagement.
                  </p>
                  <p className="text-white/60 text-base leading-relaxed">
                    Delivered consistent results with fast-paced cuts, engaging visual effects, and 
                    hook-driven storytelling that captures attention in the first frame and maintains 
                    it throughout.
                  </p>
                </div>
              </div>
              <motion.a
                href="https://drive.google.com/drive/u/1/folders/1HEmZ1FrxnDuIuOOYP0z5YrcMYa-tboyc"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 5 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full text-white font-semibold text-lg hover:shadow-glow-lg transition-all duration-300 group"
              >
                View Portfolio on Google Drive
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Open Letter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-12 rounded-2xl group hover:shadow-glow transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Image
                    src="/clients/open-letter.jpg"
                    alt="Open Letter"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold mb-4 text-gradient">Open Letter</h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-4">
                    Creating premium, story-driven content with cinematic quality and emotional depth. 
                    Focused on authentic storytelling, compelling narratives, and brand stories that 
                    resonate deeply with audiences.
                  </p>
                  <p className="text-white/60 text-base leading-relaxed">
                    Delivering polished, professional edits with strategic pacing, thoughtful color grading, 
                    and attention to detail that elevates every frame into a memorable viewing experience.
                  </p>
                </div>
              </div>
              <motion.a
                href="https://drive.google.com/drive/u/1/folders/1xy8Z05nJ0rXmHoBb6y_pnpY4yE_ZW2VE"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 5 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full text-white font-semibold text-lg hover:shadow-glow-lg transition-all duration-300 group"
              >
                View Portfolio on Google Drive
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* And many more */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <p className="text-white/40 text-lg tracking-wide">
              ...and many more
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
