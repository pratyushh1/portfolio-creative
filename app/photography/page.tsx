"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { useState, useRef } from "react";
import Image from "next/image";

const categories = [
  { id: "all", name: "All Photos" },
  { id: "portrait", name: "Portraits" },
  { id: "landscape", name: "Landscapes" },
  { id: "product", name: "Products" },
  { id: "event", name: "Events" },
];

interface Photo {
  id: number;
  image: string;
}

// Static photo list - no API call needed
const photos: Photo[] = [
  { id: 1, image: "/photos/1.jpg" },
  { id: 2, image: "/photos/1_1.jpg" },
  { id: 3, image: "/photos/2.jpg" },
  { id: 4, image: "/photos/3.jpg" },
  { id: 5, image: "/photos/4.jpg" },
  { id: 6, image: "/photos/5.jpg" },
  { id: 7, image: "/photos/6.jpg" },
  { id: 8, image: "/photos/6_1.jpg" },
  { id: 9, image: "/photos/7.jpg" },
  { id: 10, image: "/photos/8.jpg" },
  { id: 11, image: "/photos/9.jpg" },
  { id: 12, image: "/photos/9_1.jpg" },
  { id: 13, image: "/photos/10.jpg" },
  { id: 14, image: "/photos/11.jpg" },
  { id: 15, image: "/photos/11_1.jpg" },
  { id: 16, image: "/photos/12.jpg" },
  { id: 17, image: "/photos/12_1.jpg" },
  { id: 18, image: "/photos/13.jpg" },
  { id: 19, image: "/photos/14.jpg" },
  { id: 20, image: "/photos/15.jpg" },
  { id: 21, image: "/photos/16.jpg" },
  { id: 22, image: "/photos/17.jpg" },
  { id: 23, image: "/photos/18.jpg" },
  { id: 24, image: "/photos/19.jpg" },
  { id: 25, image: "/photos/20.jpg" },
  { id: 26, image: "/photos/21.jpg" },
];

export default function PhotographyPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const filteredPhotos = photos;

  return (
    <PageTransition>
      <div ref={containerRef} className="min-h-screen bg-black text-white">
        {/* Hero Section with Parallax */}
        <motion.section
          style={{ y, opacity }}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Aperture Blades Animation */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: [0, 45, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  width: "400px",
                  height: "2px",
                  background: "white",
                  transform: `rotate(${i * 45}deg)`,
                }}
              />
            ))}
          </div>

          {/* Floating Camera Elements */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/20 rounded-full"
          />

          <motion.div
            animate={{
              y: [0, 40, 0],
              rotate: [0, -15, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-40 h-40 border border-white/20"
            style={{ borderRadius: "40% 60% 60% 40% / 60% 40% 60% 40%" }}
          />

          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 md:mb-6"
            >
              <span className="text-white/60 tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm uppercase">
                Photography
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-4 md:mb-6"
            >
              FROZEN
              <br />
              MOMENTS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/70 max-w-2xl mx-auto px-4"
            >
              Moments frozen better than your phone camera ever could.
              <br className="hidden sm:block" />
              Scroll through, connect with what moves you, and let's create magic together.
            </motion.p>
          </div>
        </motion.section>

        {/* Photo Grid */}
        <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {filteredPhotos.map((photo, index) => (
                <motion.button
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                  onClick={() => setSelectedPhoto(photo.id)}
                  className="group relative aspect-[4/5] bg-black border border-white/10 rounded-lg overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <Image
                    src={photo.image}
                    alt={`Photo ${photo.id}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 12}
                    unoptimized
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <p className="text-white text-sm uppercase tracking-wider">
                      Click to View
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Photography Approach Section */}
        <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Photography Approach</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Every shot is crafted with intention, light, and storytelling
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Vision",
                  description: "Understanding the story, mood, and desired emotion",
                  icon: "👁️",
                },
                {
                  number: "02",
                  title: "Composition",
                  description: "Framing, perspective, and visual balance",
                  icon: "📐",
                },
                {
                  number: "03",
                  title: "Light",
                  description: "Natural or artificial lighting to set the mood",
                  icon: "💡",
                },
                {
                  number: "04",
                  title: "Post-Process",
                  description: "Color grading and retouching for final perfection",
                  icon: "🎨",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-6xl font-bold text-white/10 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6">What I Shoot</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Portraits",
                  description:
                    "Personal, corporate, and editorial portrait sessions that capture personality and character",
                  icon: "👤",
                },
                {
                  title: "Products",
                  description:
                    "Commercial product photography for e-commerce, catalogs, and marketing materials",
                  icon: "📦",
                },
                {
                  title: "Events",
                  description:
                    "Corporate events, conferences, weddings, and special occasions documented beautifully",
                  icon: "🎉",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-white/5 border border-white/10 rounded-lg"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Let's Create Stunning Visuals
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Book a photography session or discuss your project
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 bg-white text-black text-lg font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </section>

        {/* Lightbox Modal */}
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 cursor-pointer"
          >
            {/* Navigation Arrows */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto);
                if (currentIndex > 0) {
                  setSelectedPhoto(filteredPhotos[currentIndex - 1].id);
                }
              }}
              disabled={filteredPhotos.findIndex(p => p.id === selectedPhoto) === 0}
              className="absolute left-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto);
                if (currentIndex < filteredPhotos.length - 1) {
                  setSelectedPhoto(filteredPhotos[currentIndex + 1].id);
                }
              }}
              disabled={filteredPhotos.findIndex(p => p.id === selectedPhoto) === filteredPhotos.length - 1}
              className="absolute right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Full Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl max-h-[90vh] w-full h-full cursor-default"
            >
              <Image
                src={photos.find(p => p.id === selectedPhoto)?.image || ""}
                alt="Full size photo"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Photo Counter & Go Back Button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                {filteredPhotos.findIndex(p => p.id === selectedPhoto) + 1} / {filteredPhotos.length}
              </div>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setSelectedPhoto(null)}
                className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all shadow-2xl"
              >
                Go Back
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}
