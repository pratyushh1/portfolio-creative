"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { useState, useRef } from "react";

const categories = [
  { id: "all", name: "All Work" },
  { id: "branding", name: "Branding" },
  { id: "posters", name: "Posters" },
  { id: "social", name: "Social Media" },
  { id: "packaging", name: "Packaging" },
  { id: "ui", name: "UI/UX" },
];

// Sample design projects - replace with your actual work
const designs = [
  {
    id: 1,
    title: "Brand Identity - Tech Startup",
    category: "branding",
    image: "/designs/branding/brand-1.jpg",
    description: "Complete brand identity system",
    year: "2024",
  },
  {
    id: 2,
    title: "Event Poster Series",
    category: "posters",
    image: "/designs/posters/poster-1.jpg",
    description: "Music festival promotional posters",
    year: "2024",
  },
  {
    id: 3,
    title: "Instagram Campaign",
    category: "social",
    image: "/designs/social-media/social-1.jpg",
    description: "Social media content for fashion brand",
    year: "2023",
  },
  {
    id: 4,
    title: "Product Packaging",
    category: "packaging",
    image: "/designs/packaging/package-1.jpg",
    description: "Premium coffee packaging design",
    year: "2024",
  },
  {
    id: 5,
    title: "Mobile App Interface",
    category: "ui",
    image: "/designs/ui-ux/ui-1.jpg",
    description: "Fitness tracking app redesign",
    year: "2023",
  },
  {
    id: 6,
    title: "Logo Collection",
    category: "branding",
    image: "/designs/branding/logos.jpg",
    description: "Various client logo designs",
    year: "2023-2024",
  },
];

export default function GraphicDesignPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const filteredDesigns =
    activeCategory === "all"
      ? designs
      : designs.filter((d) => d.category === activeCategory);

  return (
    <PageTransition>
      <div ref={containerRef} className="min-h-screen bg-black text-white">
        {/* Hero Section with Parallax */}
        <motion.section 
          style={{ y, opacity }}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }} />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-lg"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-40 h-40 border border-white/20"
          />

          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-white/60 tracking-[0.3em] text-sm uppercase">
                Visual Design
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-9xl font-bold tracking-tight mb-6"
            >
              GRAPHIC
              <br />
              DESIGN
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto"
            >
              Creating compelling visual identities and designs that communicate,
              inspire, and leave lasting impressions
            </motion.p>
          </div>
        </motion.section>

        {/* Category Filter */}
        <section className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300
                    ${
                      activeCategory === category.id
                        ? "bg-white text-black"
                        : "bg-white/5 text-white hover:bg-white/10"
                    }
                  `}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Design Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredDesigns.map((design, index) => (
                <motion.div
                  key={design.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-[4/5] bg-white/5 border border-white/10 rounded-lg overflow-hidden"
                >
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                    <span className="text-6xl opacity-20">🎨</span>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold mb-3"
                    >
                      {design.title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-white/70 mb-2"
                    >
                      {design.description}
                    </motion.p>
                    <motion.span
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-white/50 text-sm"
                    >
                      {design.year}
                    </motion.span>
                  </motion.div>

                  {/* Bottom Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-lg font-semibold">{design.title}</h3>
                    <p className="text-sm text-white/60">{design.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="py-32 px-6 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6">Design Approach</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Every project follows a strategic process to ensure exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Research",
                  description: "Understanding the brand, audience, and goals",
                },
                {
                  number: "02",
                  title: "Concept",
                  description: "Developing creative ideas and visual direction",
                },
                {
                  number: "03",
                  title: "Design",
                  description: "Crafting the visual elements and refining details",
                },
                {
                  number: "04",
                  title: "Deliver",
                  description: "Final files ready for print and digital use",
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

        {/* CTA Section */}
        <section className="py-32 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Looking for impactful design solutions for your brand?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 bg-white text-black text-lg font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Start a Project
            </motion.a>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
