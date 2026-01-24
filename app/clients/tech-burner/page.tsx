'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionHeader from '@/components/SectionHeader';
import VideoCard from '@/components/VideoCard';
import { projects } from '@/lib/projects';
import Link from 'next/link';

export default function TechBurnerPage() {
  const techBurnerProjects = projects.filter((p) => p.client === 'Tech Burner');

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
                <span className="text-gradient">Tech Burner</span>
              </h1>
              <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">
                Creating high-energy, attention-grabbing tech content that stops the scroll.
                Specializing in fast-paced product reviews, unboxings, and tech comparisons.
              </p>
            </div>
          </motion.div>

          {/* Project focus */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            {[
              {
                label: 'Content Type',
                value: 'Tech Reviews & Unboxings',
              },
              {
                label: 'Focus',
                value: 'Hook-Driven Edits',
              },
              {
                label: 'Avg. Retention',
                value: '90%+',
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <p className="text-white/50 text-sm mb-2">{item.label}</p>
                <p className="text-xl font-bold">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Projects grid */}
          <SectionHeader title="Projects" subtitle="Latest work for Tech Burner" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {techBurnerProjects.map((project, index) => (
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

          {/* Project details section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 glass-card p-12 rounded-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">Editing Approach</h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                <strong className="text-white">Hook Strategy:</strong> Every video starts with
                an attention-grabbing hook within the first 2 seconds, utilizing quick cuts,
                visual effects, and compelling audio to stop the scroll.
              </p>
              <p>
                <strong className="text-white">Pacing:</strong> Fast-paced editing with strategic
                cuts every 2-3 seconds to maintain viewer attention and maximize retention rates.
              </p>
              <p>
                <strong className="text-white">Visual Style:</strong> Dynamic text animations,
                smooth transitions, and trendy sound effects optimized for platform algorithms.
              </p>
              <p>
                <strong className="text-white">Tools Used:</strong> Premiere Pro, After Effects,
                DaVinci Resolve for color grading
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
