'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionHeader from '@/components/SectionHeader';
import VideoCard from '@/components/VideoCard';
import { projects } from '@/lib/projects';
import Link from 'next/link';

export default function OverlaysClothingPage() {
  const overlayProjects = projects.filter((p) => p.client === 'Overlays Clothing');

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto">
          {/* Client header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6 md:p-10 lg:p-12 rounded-xl md:rounded-2xl mb-12 md:mb-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10" />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/work"
                  className="text-white/60 hover:text-white transition-colors text-sm mb-4 inline-block"
                >
                  ← Back to Work
                </Link>
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
                <span className="text-gradient">Overlays Clothing</span>
              </h1>
              <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mb-4">
                Managed their entire YouTube and Instagram presence because apparently, clothing doesn't market itself.
                From showcasing new drops to building their brand story, I turned fabric into content worth watching.
                Long-form YouTube videos, Instagram reels, stories, posts—basically ran their social media so they could focus on making clothes people actually want to wear.
              </p>
              <a
                href="https://www.youtube.com/@OverlaysNow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:text-accent-purple transition-colors text-sm inline-flex items-center gap-2"
              >
                View YouTube Channel
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Project focus */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            {[
              {
                title: 'YouTube Management',
                description: 'Complete channel strategy and content creation',
                icon: '📺',
              },
              {
                title: 'Instagram Presence',
                description: 'Feed, reels, stories—the whole package',
                icon: '📱',
              },
              {
                title: 'Brand Showcase',
                description: 'Making clothing look good on camera',
                icon: '👕',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-card p-4 md:p-6 rounded-lg md:rounded-xl"
              >
                <div className="text-3xl md:text-4xl mb-3">{item.icon}</div>
                <h3 className="text-base md:text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/60 text-xs md:text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Projects grid */}
          <div className="mb-12 md:mb-16">
            <SectionHeader
              title="Content Portfolio"
              subtitle={`${overlayProjects.length} projects`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {overlayProjects.map((project, index) => (
              <VideoCard
                key={project.id}
                title={project.title}
                client={project.client}
                thumbnail={project.thumbnail}
                videoUrl={project.videoUrl}
                category={project.category}
                index={index}
              />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-xl md:rounded-2xl mt-16 md:mt-20 text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Want Similar Results?
            </h2>
            <p className="text-white/70 text-sm md:text-base lg:text-lg mb-8 max-w-2xl mx-auto">
              Let's build your brand's social media presence from the ground up
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full font-semibold hover:scale-105 transition-transform text-sm md:text-base"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
