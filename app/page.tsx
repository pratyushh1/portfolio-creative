'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  const clients = ['Tech Burner', 'Open Letter'];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 scan-lines">
        <div className="container mx-auto text-center">
          {/* Cinematic opening line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="mb-6"
          >
            <p className="text-white/30 text-sm md:text-base tracking-[0.3em] uppercase font-display">
              Every Frame. Every Cut. Every Story.
            </p>
          </motion.div>

          {/* Main headline with stagger animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-7xl md:text-9xl font-display font-bold leading-tight mb-8 tracking-wider uppercase">
              I Edit for{' '}
              <span className="text-gradient">Impact</span>
            </h1>
          </motion.div>

          {/* Cinematic subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <p className="text-2xl md:text-4xl text-white/80 font-display tracking-wide uppercase mb-4">
              Pratyush
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30"></div>
              <p className="text-white/50 text-sm tracking-[0.2em] uppercase">
                Video Editor
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30"></div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-white/60 text-lg md:text-xl mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            6+ Years. Millions of Views. Stories That Resonate.
            <br />
            <span className="text-white/40 text-base">From Tech Burner to Open Letter — Crafting Visual Narratives That Move Audiences</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex gap-6 justify-center mb-24"
          >
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-button text-lg px-10 py-4"
              >
                View Work
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 text-lg rounded-full border-2 border-white/20 text-white font-semibold
                         hover:border-white/40 transition-all duration-500 backdrop-blur-sm"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Floating elements with parallax */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-700/15 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-600/15 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-cyan/15 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </section>

      {/* Expertise Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="text-gradient">Short-Form</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Specializing in attention-grabbing content that stops the scroll
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Hook-Driven Edits',
              description: 'Every frame designed to capture attention in the first second',
              icon: '⚡',
            },
            {
              title: 'Fast-Paced Flow',
              description: 'High-retention storytelling that keeps viewers engaged',
              icon: '🎬',
            },
            {
              title: 'Platform-Optimized',
              description: 'Tailored for Reels, Shorts, and social media formats',
              icon: '📱',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 hover:shadow-glow transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 md:p-16 text-center rounded-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Content?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Let's create something exceptional together
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glow-button"
              >
                Let's Talk
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
