'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import { projects } from '@/lib/projects';

export default function WorkPage() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20">
        {/* Page Header */}
        <div className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-8">WORK</h1>
            <div className="h-px w-20 bg-white mb-8"></div>
            <p className="text-xl text-white/60 max-w-2xl">
              A selection of projects for leading creators and brands
            </p>
          </motion.div>
        </div>

        {/* Horizontal Scroll Section */}
        <div ref={scrollRef} className="h-[200vh] relative">
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex gap-8 px-6"
            >
              {projects.slice(0, 10).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[400px] md:w-[500px]"
                >
                  <a
                    href={project.videoUrl || project.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative aspect-[9/16] bg-zinc-900 mb-4 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <div className="text-6xl">
                          {project.client === 'Tech Burner' ? '📱' : '✉️'}
                        </div>
                      </motion.div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-2">{project.client}</p>
                    <p className="text-white/40 text-sm">{project.category}</p>
                    {project.metrics && (
                      <div className="flex gap-4 mt-3 text-xs text-white/50">
                        {project.metrics.views && <span>{project.metrics.views} views</span>}
                        {project.metrics.retention && <span>{project.metrics.retention} retention</span>}
                      </div>
                    )}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Client Sections */}
        <div className="container mx-auto px-6 py-32">
          <div className="space-y-32">
            {/* Tech Burner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-t border-white/10 pt-16"
            >
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">Tech Burner</h2>
                  <p className="text-white/60 text-lg mb-8 leading-relaxed">
                    Crafting high-energy, viral tech content for one of India's leading tech channels. 
                    Specializing in product reviews, unboxings, and tech comparisons with dynamic editing 
                    that maximizes viewer retention and engagement.
                  </p>
                  <a
                    href="https://drive.google.com/drive/u/1/folders/1HEmZ1FrxnDuIuOOYP0z5YrcMYa-tboyc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white hover:text-white/80 transition-colors group"
                  >
                    <span className="font-semibold tracking-wide uppercase text-sm">View Full Portfolio</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-white/60 text-sm uppercase tracking-wide">Videos Edited</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">10M+</div>
                    <div className="text-white/60 text-sm uppercase tracking-wide">Total Views</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">90%</div>
                    <div className="text-white/60 text-sm uppercase tracking-wide">Avg Retention</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Open Letter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-t border-white/10 pt-16"
            >
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">Open Letter</h2>
                  <p className="text-white/60 text-lg mb-8 leading-relaxed">
                    Creating premium, story-driven content with cinematic quality and emotional depth. 
                    Focused on authentic storytelling, compelling narratives, and brand stories that 
                    resonate deeply with audiences.
                  </p>
                  <a
                    href="https://drive.google.com/drive/u/1/folders/1xy8Z05nJ0rXmHoBb6y_pnpY4yE_ZW2VE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white hover:text-white/80 transition-colors group"
                  >
                    <span className="font-semibold tracking-wide uppercase text-sm">View Full Portfolio</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <div className="text-white/60 text-sm uppercase tracking-wide">Premium Videos</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">5M+</div>
                    <div className="text-white/60 text-sm uppercase tracking-wide">Total Reach</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">95%</div>
                    <div className="text-white/60 text-sm uppercase tracking-wide">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
