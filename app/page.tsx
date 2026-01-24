'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <motion.section 
        style={{ opacity }}
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="container mx-auto text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl md:text-[10rem] font-bold leading-none mb-8 tracking-tight">
              PRATYUSH
            </h1>
            <div className="h-px w-32 bg-white mx-auto mb-8"></div>
            <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
              <p className="text-xl md:text-2xl tracking-[0.3em] uppercase">
                Video Editor
              </p>
              <span className="text-white/30">×</span>
              <p className="text-xl md:text-2xl tracking-[0.3em] uppercase">
                Photographer
              </p>
            </div>
            <p className="text-white/60 text-lg md:text-xl tracking-wide mb-16 max-w-3xl mx-auto">
              Crafting compelling visual stories through motion & stillness
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <Link href="/video-editing">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-black font-semibold text-lg tracking-wide uppercase w-full md:w-auto hover:bg-white/90 transition-colors"
              >
                Video Editing
              </motion.button>
            </Link>
            <Link href="/photography">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-white text-white font-semibold text-lg tracking-wide uppercase w-full md:w-auto hover:bg-white hover:text-black transition-all"
              >
                Photography
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-white/40 text-white/80 font-semibold text-lg tracking-wide uppercase w-full md:w-auto hover:border-white hover:text-white transition-all"
              >
                Contact
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/40 text-sm tracking-widest uppercase"
          >
            Scroll
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Dual Showcase Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">What I Create</h2>
            <div className="h-px w-20 bg-white"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/video-editing">
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/5] bg-zinc-900 mb-6 overflow-hidden border border-white/10">
                    <Image
                      src="/showcase/video-editing.jpg"
                      alt="Video Editing Showcase"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <motion.div
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500"
                    >
                      <div className="text-white/90 text-6xl font-bold tracking-wider">EDIT</div>
                    </motion.div>
                  </div>
                  <h3 className="text-4xl font-bold mb-3 group-hover:text-white/80 transition-colors">
                    Video Editing
                  </h3>
                  <p className="text-white/60 mb-6 text-lg">
                    High-energy content for Tech Burner, Open Letter & more. Millions of views, maximum retention.
                  </p>
                  <div className="text-white/40 uppercase tracking-wide text-sm flex items-center gap-2">
                    View Work 
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link href="/photography">
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/5] bg-zinc-900 mb-6 overflow-hidden border border-white/10">
                    <Image
                      src="/showcase/photography.jpg"
                      alt="Photography Showcase"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <motion.div
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500"
                    >
                      <div className="text-white/90 text-6xl font-bold tracking-wider">CAPTURE</div>
                    </motion.div>
                  </div>
                  <h3 className="text-4xl font-bold mb-3 group-hover:text-white/80 transition-colors">
                    Photography
                  </h3>
                  <p className="text-white/60 mb-6 text-lg">
                    Capturing moments that tell stories. From portraits to products, every frame matters.
                  </p>
                  <div className="text-white/40 uppercase tracking-wide text-sm flex items-center gap-2">
                    View Gallery
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-3 gap-16">
            {[
              { number: '6+', label: 'Years Experience' },
              { number: '500+', label: 'Videos Edited' },
              { number: '10M+', label: 'Total Views' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl md:text-8xl font-bold mb-4">{stat.number}</div>
                <div className="text-white/60 tracking-wide uppercase text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
