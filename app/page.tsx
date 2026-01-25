'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]); // Gentle parallax for hero text
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <PageTransition>
      {/* 🎬 Hero Section - Film Title Style */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="container mx-auto text-center max-w-7xl z-10"
        >
          {/* Subtle intro text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base tracking-[0.4em] uppercase text-white/40 mb-8 md:mb-12 font-light"
          >
            Creative Portfolio
          </motion.p>

          {/* Massive Typography Name */}
          <div className="mask-text overflow-hidden mb-6 md:mb-10">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.4 }}
              className="text-[12vw] md:text-[min(10vw,180px)] font-bold leading-[0.85] tracking-tight font-display text-white mix-blend-difference"
            >
              PRATYUSH
            </motion.h1>
          </div>

          {/* Role Splitter */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.8 }}
            className="h-px w-32 md:w-48 bg-white/20 mx-auto mb-8 md:mb-12"
          />

          {/* Roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-sm md:text-lg tracking-[0.2em] font-light text-white/80"
          >
            <span className="uppercase hover:text-white transition-colors duration-500">Video Editor</span>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="uppercase hover:text-white transition-colors duration-500">Photographer</span>
          </motion.div>

          {/* Cinematic Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
            className="mt-16 md:mt-24 flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center"
          >
            <Link href="/video-editing" className="group relative overflow-hidden">
               <span className="relative z-10 px-8 py-4 inline-block text-sm tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-black">
                 View Film Work
               </span>
               <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-cinematic" />
               <div className="absolute inset-0 border border-white/20 group-hover:border-transparent transition-colors duration-500" />
            </Link>
            
             <Link href="/photography" className="group relative overflow-hidden">
               <span className="relative z-10 px-8 py-4 inline-block text-sm tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-black">
                 View Photography
               </span>
               <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-cinematic" />
               <div className="absolute inset-0 border border-white/20 group-hover:border-transparent transition-colors duration-500" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
            <motion.div 
              animate={{ height: [0, 40, 0], y: [0, 0, 20], opacity: [0, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px bg-white/50" 
            />
          </div>
        </motion.div>
      </section>

      {/* 🎞️ Showcase Section - High End Gallery Feel */}
      <section className="py-24 md:py-40 px-4 md:px-6 relative z-10">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Video Editing Card */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/video-editing" className="group block">
                <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden mb-8 bg-zinc-900">
                  <div className="absolute inset-0 z-20 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                  <Image
                    src="/showcase/video-editing.jpg"
                    alt="Video Editing"
                    fill
                    className="object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-cinematic grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Hover Overlay Text */}
                 <div className="absolute inset-x-0 bottom-0 p-8 z-30 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-cinematic">
                    <span className="block text-6xl md:text-8xl font-black text-transparent stroke-text opacity-20">01</span>
                 </div>
                </div>
                <div className="flex flex-col gap-2 relative">
                  <h3 className="text-3xl md:text-5xl font-light font-display uppercase tracking-tight group-hover:tracking-wide transition-all duration-700">Video Editing</h3>
                  <p className="text-white/40 text-sm tracking-widest uppercase">Motion / Narrative / Pacing</p>
                  <div className="h-px bg-white/10 w-full mt-4 group-hover:w-full group-hover:bg-white/40 transition-all duration-700 origin-left scale-x-0 group-hover:scale-x-100" />
                </div>
              </Link>
            </motion.div>

            {/* Photography Card - Offset */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:mt-32" 
            >
              <Link href="/photography" className="group block">
                 <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden mb-8 bg-zinc-900">
                  <div className="absolute inset-0 z-20 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                  <Image
                    src="/showcase/photography.jpg"
                    alt="Photography"
                    fill
                    className="object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-cinematic grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                   <div className="absolute inset-x-0 bottom-0 p-8 z-30 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-cinematic">
                    <span className="block text-6xl md:text-8xl font-black text-transparent stroke-text opacity-20">02</span>
                 </div>
                </div>
                <div className="flex flex-col gap-2 relative">
                  <h3 className="text-3xl md:text-5xl font-light font-display uppercase tracking-tight group-hover:tracking-wide transition-all duration-700">Photography</h3>
                  <p className="text-white/40 text-sm tracking-widest uppercase">Selects / Portraits / Products</p>
                   <div className="h-px bg-white/10 w-full mt-4 group-hover:w-full group-hover:bg-white/40 transition-all duration-700 origin-left scale-x-0 group-hover:scale-x-100" />
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* Footer spacer */}
      <div className="h-32" />
    </PageTransition>
  );
}
